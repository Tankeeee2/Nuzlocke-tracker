/**
 * Nuzlocke Tracker Multijuego - Aplicación Principal (app.js)
 * Orquestador de la UI, gestión de vistas/pestañas, modales de registro de encuentros,
 * validación de Dupes Clause, cálculo de progreso, gestión de equipo y Salón de la Fama.
 */

(function() {
  // Estado local de la UI
  const AppState = {
    currentTab: "encounters", // encounters | events | milestones | team | hof | runs | rules
    activeRun: null,
    activeGame: null,
    searchFilter: "",
    statusFilter: "ALL", // ALL | PENDING | CAPTURED | TEAM | BOX | DEAD | OTHER
    dupesWarning: null
  };

  // Inicialización de la aplicación
  document.addEventListener("DOMContentLoaded", () => {
    initApp();
  });

  function initApp() {
    loadActiveRun();
    setupNavigation();
    setupEventListeners();
    renderApp();
  }

  function loadActiveRun() {
    let run = window.NuzlockeStorage.getActiveRun();
    if (!run) {
      const allRuns = window.NuzlockeStorage.getAllRuns();
      if (allRuns.length > 0) {
        run = allRuns[0];
        window.NuzlockeStorage.setActiveRunId(run.id);
      } else {
        // Crear una partida por defecto si no existe ninguna
        run = window.NuzlockeStorage.createRun({
          name: "Mi Primer Nuzlocke",
          gameId: "emerald",
          rulesPreset: "standard"
        });
      }
    }
    AppState.activeRun = run;
    AppState.activeGame = window.NuzlockeRegistry.get(run ? run.gameId : "emerald");
  }

  function setupNavigation() {
    const navButtons = document.querySelectorAll("[data-nav-tab]");
    navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-nav-tab");
        switchTab(tab);
      });
    });
  }

  function switchTab(tabName) {
    AppState.currentTab = tabName;
    document.querySelectorAll("[data-nav-tab]").forEach(btn => {
      const active = btn.getAttribute("data-nav-tab") === tabName;
      btn.classList.toggle("bg-indigo-600", active);
      btn.classList.toggle("text-white", active);
      btn.classList.toggle("text-slate-400", !active);
      btn.classList.toggle("hover:text-slate-200", !active);
    });

    document.querySelectorAll(".tab-pane").forEach(pane => {
      pane.classList.add("hidden");
    });

    const activePane = document.getElementById(`pane-${tabName}`);
    if (activePane) {
      activePane.classList.remove("hidden");
      activePane.classList.add("animate-fade-in");
    }

    renderCurrentTab();
  }

  function setupEventListeners() {
    // Cambio de partida activa desde evento storage
    window.addEventListener("nuzlocke:active-run-changed", () => {
      loadActiveRun();
      renderApp();
    });

    // Buscador en pestaña encuentros
    const searchInput = document.getElementById("encounter-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        AppState.searchFilter = e.target.value.toLowerCase().trim();
        renderEncounters();
      });
    }

    // Filtro por estado
    const statusSelect = document.getElementById("encounter-status-filter");
    if (statusSelect) {
      statusSelect.addEventListener("change", (e) => {
        AppState.statusFilter = e.target.value;
        renderEncounters();
      });
    }

    // Modal de Nuevo Encuentro
    setupEncounterModal();
    // Modal de Nueva Run
    setupNewRunModal();
    // Modal de Salón de la Fama
    setupHofModal();
    // Importación de archivos
    setupImportExportHandlers();
  }

  function renderApp() {
    updateHeader();
    renderCurrentTab();
  }

  function updateHeader() {
    const run = AppState.activeRun;
    const game = AppState.activeGame;

    const runNameEl = document.getElementById("header-run-name");
    const gameNameEl = document.getElementById("header-game-name");
    const statsEl = document.getElementById("header-stats");

    if (runNameEl) runNameEl.textContent = run ? run.name : "Sin Partida";
    if (gameNameEl) gameNameEl.textContent = game ? `${game.name} (${game.region})` : "Juego no encontrado";

    if (statsEl && run && game) {
      const totalEncounters = game.encounters.length;
      const loggedCount = Object.keys(run.encounters || {}).length;
      const deaths = getDeathCount(run);
      const teamCount = getTeamMembers(run).length;

      statsEl.innerHTML = `
        <span class="inline-flex items-center gap-1 text-emerald-400"><i class="fas fa-paw"></i> Equipo: ${teamCount}/6</span>
        <span class="inline-flex items-center gap-1 text-indigo-400"><i class="fas fa-map-marker-alt"></i> Zonas: ${loggedCount}/${totalEncounters}</span>
        <span class="inline-flex items-center gap-1 text-red-400"><i class="fas fa-skull"></i> Bajas: ${deaths}</span>
      `;
    }
  }

  function getDeathCount(run) {
    if (!run || !run.encounters) return 0;
    return Object.values(run.encounters).filter(e => e.status === "DEAD").length;
  }

  function getTeamMembers(run) {
    if (!run || !run.encounters) return [];
    return Object.entries(run.encounters)
      .filter(([_, e]) => e.status === "TEAM")
      .map(([zoneId, e]) => ({ zoneId, ...e }));
  }

  function renderCurrentTab() {
    switch (AppState.currentTab) {
      case "encounters":
        renderEncounters();
        break;
      case "events":
        renderEvents();
        break;
      case "milestones":
        renderMilestones();
        break;
      case "team":
        renderTeamAndBox();
        break;
      case "hof":
        renderHallOfFame();
        break;
      case "runs":
        renderRunsManagement();
        break;
      case "rules":
        renderRulesTab();
        break;
    }
  }

  // ==========================================
  // 1. PESTAÑA: TRACKER DE ENCUENTROS POR ZONA
  // ==========================================
  function renderEncounters() {
    const container = document.getElementById("encounters-list");
    if (!container) return;

    const game = AppState.activeGame;
    const run = AppState.activeRun;

    if (!game || !run) {
      container.innerHTML = `<div class="p-8 text-center text-slate-400">Selecciona o crea una run para ver las zonas.</div>`;
      return;
    }

    const zones = game.encounters || [];
    const filterQuery = AppState.searchFilter;
    const filterStatus = AppState.statusFilter;

    const filteredZones = zones.filter(zone => {
      const record = run.encounters[zone.id];
      // Filtro de texto por zona o pokemon
      if (filterQuery) {
        const matchZone = zone.name.toLowerCase().includes(filterQuery);
        const matchPkmn = record && record.pokemonName && record.pokemonName.toLowerCase().includes(filterQuery);
        const matchNick = record && record.nickname && record.nickname.toLowerCase().includes(filterQuery);
        if (!matchZone && !matchPkmn && !matchNick) return false;
      }
      // Filtro de estado
      if (filterStatus !== "ALL") {
        if (filterStatus === "PENDING") {
          return !record || record.status === "NONE";
        }
        return record && record.status === filterStatus;
      }
      return true;
    });

    if (filteredZones.length === 0) {
      container.innerHTML = `<div class="p-8 text-center text-slate-500 bg-slate-800/40 rounded-xl">No hay zonas que coincidan con los filtros aplicados.</div>`;
      return;
    }

    let html = "";
    filteredZones.forEach(zone => {
      const record = run.encounters[zone.id];
      const hasRecord = record && record.pokemonName && record.status !== "NONE";
      const statusClass = record ? `status-${record.status}` : "status-NONE";
      const statusLabel = record ? getStatusLabel(record.status) : "PENDIENTE";
      const borderClass = hasRecord ? (record.status === "DEAD" ? "zone-dead" : "zone-completed") : "zone-empty";

      let spriteHtml = "";
      if (hasRecord) {
        const spriteUrl = window.PokedexDB.getSpriteUrl(record.pokemonName, record.isShiny, false);
        const shinyClass = record.isShiny ? "shiny-glow" : "";
        spriteHtml = `<img src="${spriteUrl}" alt="${record.pokemonName}" class="w-14 h-14 object-contain ${shinyClass}" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">`;
      } else {
        spriteHtml = `<div class="w-12 h-12 rounded-full bg-slate-800 border border-dashed border-slate-600 flex items-center justify-center text-slate-500 text-lg"><i class="fas fa-question"></i></div>`;
      }

      // Sugerencias de salvajes en la zona
      let wildSuggestionsHtml = "";
      if (zone.pokemon && zone.pokemon.length > 0) {
        const topWild = zone.pokemon.slice(0, 6);
        wildSuggestionsHtml = `
          <div class="mt-3 pt-3 border-t border-slate-700/60 flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
            <span class="text-slate-500 font-semibold mr-1"><i class="fas fa-leaf mr-1"></i>Posibles:</span>
            ${topWild.map(p => `
              <button type="button" class="quick-pick-btn px-2 py-0.5 bg-slate-800 hover:bg-indigo-900/60 hover:text-indigo-200 border border-slate-700 rounded text-slate-300 transition text-[11px]"
                data-zone-id="${zone.id}" data-pokemon="${p.name}">
                ${p.name} <span class="text-slate-500">(${p.method}${p.chance ? ` ${p.chance}%` : ""})</span>
              </button>
            `).join("")}
            ${zone.pokemon.length > 6 ? `<span class="text-slate-500 text-[10px]">+${zone.pokemon.length - 6} más</span>` : ""}
          </div>
        `;
      }

      html += `
        <div class="zone-card ${borderClass} p-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3.5">
              ${spriteHtml}
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base text-slate-100">${zone.name}</h3>
                  <span class="status-badge ${statusClass}">${statusLabel}</span>
                  ${record && record.isShiny ? '<span class="text-amber-400 text-xs font-bold">✨ Shiny</span>' : ""}
                </div>
                ${hasRecord ? `
                  <div class="text-sm text-slate-300 font-medium mt-0.5">
                    ${record.nickname ? `<span class="text-indigo-300 font-bold">"${record.nickname}"</span> (${record.pokemonName})` : record.pokemonName}
                    ${record.level ? `<span class="text-slate-400 ml-1.5 text-xs">Nv. ${record.level}</span>` : ""}
                    ${record.nature ? `<span class="text-slate-400 ml-1.5 text-xs">Nat: ${record.nature}</span>` : ""}
                  </div>
                  ${record.status === "DEAD" && record.deathCause ? `
                    <div class="text-xs text-red-400 mt-1 italic"><i class="fas fa-skull mr-1"></i>${record.deathCause}</div>
                  ` : ""}
                ` : `
                  <p class="text-xs text-slate-400 mt-0.5">Encuentro no registrado aún en esta ruta.</p>
                `}
              </div>
            </div>

            <div class="flex items-center gap-2 self-end sm:self-center">
              <button type="button" class="btn-edit-encounter px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
                data-zone-id="${zone.id}">
                <i class="fas ${hasRecord ? 'fa-edit text-indigo-400' : 'fa-plus text-emerald-400'}"></i>
                ${hasRecord ? "Editar" : "Registrar"}
              </button>
              ${hasRecord ? `
                <button type="button" class="btn-clear-encounter p-1.5 text-slate-500 hover:text-red-400 transition" title="Limpiar encuentro"
                  data-zone-id="${zone.id}">
                  <i class="fas fa-trash-alt text-xs"></i>
                </button>
              ` : ""}
            </div>
          </div>
          ${wildSuggestionsHtml}
        </div>
      `;
    });

    container.innerHTML = html;

    // Listeners de edición
    container.querySelectorAll(".btn-edit-encounter").forEach(btn => {
      btn.addEventListener("click", () => {
        const zoneId = btn.getAttribute("data-zone-id");
        openEncounterModal(zoneId);
      });
    });

    // Listeners de limpiar encuentro
    container.querySelectorAll(".btn-clear-encounter").forEach(btn => {
      btn.addEventListener("click", () => {
        const zoneId = btn.getAttribute("data-zone-id");
        if (confirm("¿Seguro que deseas eliminar el registro de esta zona?")) {
          delete run.encounters[zoneId];
          window.NuzlockeStorage.saveRun(run);
          renderApp();
        }
      });
    });

    // Listeners de Quick Pick de Pokémon de la zona
    container.querySelectorAll(".quick-pick-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const zoneId = btn.getAttribute("data-zone-id");
        const pokemon = btn.getAttribute("data-pokemon");
        openEncounterModal(zoneId, pokemon);
      });
    });
  }

  function getStatusLabel(status) {
    const map = {
      TEAM: "En Equipo",
      BOX: "En Caja",
      DEAD: "Muerto",
      LOST: "Perdido/Huyó",
      CAPTURED: "Capturado",
      FAILED: "Falló",
      NONE: "Sin Encuentro",
      DUPE_REROLL: "Dupe / Re-roll"
    };
    return map[status] || status;
  }

  // ==========================================
  // MODAL DE REGISTRO / EDICIÓN DE ENCUENTRO
  // ==========================================
  let currentModalZoneId = null;

  function setupEncounterModal() {
    const modal = document.getElementById("modal-encounter");
    const closeBtn = document.getElementById("modal-encounter-close");
    const form = document.getElementById("form-encounter");
    const speciesInput = document.getElementById("enc-pokemon-species");
    const statusSelect = document.getElementById("enc-status");

    if (closeBtn) closeBtn.addEventListener("click", closeEncounterModal);
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeEncounterModal();
      });
    }

    if (speciesInput) {
      speciesInput.addEventListener("input", (e) => {
        handleSpeciesAutocomplete(e.target.value);
        checkDupesClause(e.target.value);
      });
    }

    if (statusSelect) {
      statusSelect.addEventListener("change", (e) => {
        toggleStatusConditionalFields(e.target.value);
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        saveEncounterForm();
      });
    }
  }

  function openEncounterModal(zoneId, prefillPokemon = null) {
    const run = AppState.activeRun;
    const game = AppState.activeGame;
    if (!run || !game) return;

    currentModalZoneId = zoneId;
    const zone = game.encounters.find(z => z.id === zoneId);
    const existing = run.encounters[zoneId] || {};

    document.getElementById("modal-enc-zone-title").textContent = zone ? zone.name : "Zona";

    // Aviso de segunda captura si ya estaba registrada y la regla está activa
    const warningAlert = document.getElementById("enc-zone-warning");
    if (warningAlert) {
      if (existing.pokemonName && run.rules.onePerRoute) {
        warningAlert.textContent = "Aviso: Esta zona ya tiene una captura previa registrada según la regla 'una captura por ruta'.";
        warningAlert.classList.remove("hidden");
      } else {
        warningAlert.classList.add("hidden");
      }
    }

    // Rellenar campos
    const species = prefillPokemon || existing.pokemonName || "";
    document.getElementById("enc-pokemon-species").value = species;
    document.getElementById("enc-nickname").value = existing.nickname || "";
    document.getElementById("enc-level").value = existing.level || "";
    document.getElementById("enc-nature").value = existing.nature || "";
    document.getElementById("enc-ability").value = existing.ability || "";
    document.getElementById("enc-item").value = existing.item || "";
    document.getElementById("enc-shiny").checked = Boolean(existing.isShiny);
    document.getElementById("enc-status").value = existing.status || "CAPTURED";
    document.getElementById("enc-death-cause").value = existing.deathCause || "";
    document.getElementById("enc-lost-reason").value = existing.lostReason || "";

    toggleStatusConditionalFields(existing.status || "CAPTURED");
    updateModalSpritePreview(species, existing.isShiny);
    checkDupesClause(species);

    document.getElementById("modal-encounter").classList.remove("hidden");
  }

  function closeEncounterModal() {
    document.getElementById("modal-encounter").classList.add("hidden");
    const dropdown = document.getElementById("species-autocomplete-dropdown");
    if (dropdown) dropdown.classList.add("hidden");
  }

  function toggleStatusConditionalFields(status) {
    const deathField = document.getElementById("field-death-details");
    const lostField = document.getElementById("field-lost-details");
    if (deathField) deathField.classList.toggle("hidden", status !== "DEAD");
    if (lostField) lostField.classList.toggle("hidden", status !== "LOST");
  }

  function handleSpeciesAutocomplete(query) {
    const dropdown = document.getElementById("species-autocomplete-dropdown");
    if (!dropdown) return;

    if (!query || query.trim().length === 0) {
      dropdown.classList.add("hidden");
      return;
    }

    const matches = window.PokedexDB.search(query, 6);
    if (matches.length === 0) {
      dropdown.classList.add("hidden");
      return;
    }

    dropdown.innerHTML = matches.map(p => `
      <div class="autocomplete-item" data-species="${p.name}">
        <img src="${window.PokedexDB.getSpriteUrl(p, false, false)}" class="w-8 h-8 object-contain">
        <div>
          <span class="text-sm font-semibold text-slate-100">${p.name}</span>
          <div class="flex gap-1 mt-0.5">
            ${p.types.map(t => `<span class="text-[10px] px-1.5 py-0.2 rounded" style="background:${window.PokedexDB.getTypeColor(t).bg};color:${window.PokedexDB.getTypeColor(t).text}">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("");

    dropdown.classList.remove("hidden");

    dropdown.querySelectorAll(".autocomplete-item").forEach(item => {
      item.addEventListener("click", () => {
        const spec = item.getAttribute("data-species");
        document.getElementById("enc-pokemon-species").value = spec;
        dropdown.classList.add("hidden");
        updateModalSpritePreview(spec, document.getElementById("enc-shiny").checked);
        checkDupesClause(spec);
      });
    });
  }

  function updateModalSpritePreview(species, isShiny) {
    const previewImg = document.getElementById("modal-sprite-preview");
    if (!previewImg) return;
    if (!species) {
      previewImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
      return;
    }
    previewImg.src = window.PokedexDB.getSpriteUrl(species, isShiny, false);
  }

  function checkDupesClause(species) {
    const alertBox = document.getElementById("enc-dupes-alert");
    if (!alertBox) return;

    const run = AppState.activeRun;
    if (!run || !run.rules || !run.rules.dupesClause || !species || species.trim() === "") {
      alertBox.classList.add("hidden");
      return;
    }

    // Buscar si ya tenemos un Pokémon de la misma especie o de la misma línea evolutiva
    const existingCaught = Object.entries(run.encounters).filter(([zId, e]) => {
      if (zId === currentModalZoneId) return false; // Ignorar el registro actual
      return e.pokemonName && ["TEAM", "BOX", "CAPTURED", "DEAD"].includes(e.status);
    });

    let duplicateFound = null;
    for (const [_, enc] of existingCaught) {
      if (window.PokedexDB.isSameFamily(enc.pokemonName, species)) {
        duplicateFound = enc;
        break;
      }
    }

    if (duplicateFound) {
      alertBox.innerHTML = `
        <i class="fas fa-exclamation-triangle mr-1"></i>
        <strong>Dupes Clause:</strong> Ya tienes a <strong>${duplicateFound.pokemonName}</strong> (${duplicateFound.nickname || "sin mote"}) en tu partida o en su línea evolutiva. Puedes volver a intentar este encuentro (Re-roll).
      `;
      alertBox.classList.remove("hidden");
    } else {
      alertBox.classList.add("hidden");
    }
  }

  function saveEncounterForm() {
    const run = AppState.activeRun;
    if (!run || !currentModalZoneId) return;

    const species = document.getElementById("enc-pokemon-species").value.trim();
    const nickname = document.getElementById("enc-nickname").value.trim();
    const level = parseInt(document.getElementById("enc-level").value, 10) || null;
    const nature = document.getElementById("enc-nature").value;
    const ability = document.getElementById("enc-ability").value.trim();
    const item = document.getElementById("enc-item").value.trim();
    const isShiny = document.getElementById("enc-shiny").checked;
    const status = document.getElementById("enc-status").value;
    const deathCause = document.getElementById("enc-death-cause").value.trim();
    const lostReason = document.getElementById("enc-lost-reason").value.trim();

    // Validar límite de equipo (máximo 6 Pokémon con estado TEAM)
    if (status === "TEAM") {
      const currentTeam = getTeamMembers(run).filter(m => m.zoneId !== currentModalZoneId);
      if (currentTeam.length >= 6) {
        alert("Tu equipo ya tiene 6 Pokémon activos. Debes enviar este Pokémon a la CAJA o mover a otro integrante primero.");
        return;
      }
    }

    run.encounters[currentModalZoneId] = {
      pokemonName: species,
      nickname: nickname,
      level: level,
      nature: nature,
      ability: ability,
      item: item,
      isShiny: isShiny,
      status: status,
      deathCause: status === "DEAD" ? deathCause : "",
      lostReason: status === "LOST" ? lostReason : "",
      dateCaptured: new Date().toISOString()
    };

    window.NuzlockeStorage.saveRun(run);
    closeEncounterModal();
    renderApp();
  }

  // ==========================================
  // 2. PESTAÑA: POKÉMON DE EVENTO Y REGALOS
  // ==========================================
  function renderEvents() {
    const container = document.getElementById("events-list");
    if (!container) return;

    const game = AppState.activeGame;
    const run = AppState.activeRun;

    if (!game || !run) {
      container.innerHTML = `<div class="p-8 text-center text-slate-400">Selecciona o crea una run para ver eventos.</div>`;
      return;
    }

    const events = game.events || [];
    if (events.length === 0) {
      container.innerHTML = `<div class="p-8 text-center text-slate-400">No hay eventos configurados para este juego.</div>`;
      return;
    }

    let html = `
      <div class="mb-4 p-4 bg-slate-800/60 border border-slate-700 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
        <div>
          <span class="font-bold text-slate-200">Regla de Eventos:</span>
          <span class="text-slate-400 ml-2">¿Contar Pokémon de evento/regalo como el encuentro de la zona?</span>
        </div>
        <select id="event-rule-toggle" class="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-3 py-1.5 text-xs font-semibold">
          <option value="yes" ${run.rules.countEventsAsEncounters === "yes" ? "selected" : ""}>Sí, cuenta como encuentro</option>
          <option value="no" ${run.rules.countEventsAsEncounters === "no" ? "selected" : ""}>No, son encuentros libres</option>
          <option value="by_category" ${run.rules.countEventsAsEncounters === "by_category" ? "selected" : ""}>Decidir por categoría</option>
        </select>
      </div>
    `;

    events.forEach(ev => {
      const claimedData = run.eventsClaimed[ev.id];
      const isClaimed = Boolean(claimedData && claimedData.claimed);

      const spriteUrl = window.PokedexDB.getSpriteUrl(ev.pokemon.split("/")[0].trim(), false, false);

      html += `
        <div class="zone-card p-4 mb-3 ${isClaimed ? 'border-emerald-600/60 bg-emerald-950/10' : ''}">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start sm:items-center gap-3">
              <img src="${spriteUrl}" alt="${ev.pokemon}" class="w-12 h-12 object-contain bg-slate-800/80 rounded-lg p-1 border border-slate-700"
                onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <h4 class="font-bold text-slate-100 text-base">${ev.pokemon}</h4>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700/60 font-semibold">${ev.method}</span>
                  <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">Nv. ${ev.level || "?"}</span>
                  ${ev.verified ? '<span class="text-xs text-emerald-400" title="Verificado en el juego original"><i class="fas fa-check-circle"></i> Verificado</span>' : ''}
                </div>
                <div class="text-xs text-slate-400 mt-1 flex flex-col gap-0.5">
                  <span><strong>Lugar:</strong> ${ev.location}</span>
                  <span><strong>Requisito:</strong> ${ev.condition}</span>
                  <span><strong>Fuente:</strong> ${ev.source}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2 self-end sm:self-center">
              <button type="button" class="btn-toggle-event px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 ${isClaimed ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600'}"
                data-event-id="${ev.id}">
                <i class="fas ${isClaimed ? 'fa-check' : 'fa-plus'}"></i>
                ${isClaimed ? 'Obtenido' : 'Marcar como Obtenido'}
              </button>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    const toggleRuleSelect = document.getElementById("event-rule-toggle");
    if (toggleRuleSelect) {
      toggleRuleSelect.addEventListener("change", (e) => {
        run.rules.countEventsAsEncounters = e.target.value;
        window.NuzlockeStorage.saveRun(run);
      });
    }

    container.querySelectorAll(".btn-toggle-event").forEach(btn => {
      btn.addEventListener("click", () => {
        const evId = btn.getAttribute("data-event-id");
        const curr = run.eventsClaimed[evId] || {};
        run.eventsClaimed[evId] = {
          claimed: !curr.claimed,
          date: new Date().toISOString()
        };
        window.NuzlockeStorage.saveRun(run);
        renderEvents();
      });
    });
  }

  // ==========================================
  // 3. PESTAÑA: MEDALLAS E HITOS DE PROGRESO
  // ==========================================
  function renderMilestones() {
    const container = document.getElementById("milestones-container");
    if (!container) return;

    const game = AppState.activeGame;
    const run = AppState.activeRun;

    if (!game || !run) {
      container.innerHTML = `<div class="p-8 text-center text-slate-400">Selecciona o crea una run.</div>`;
      return;
    }

    const defaultMilestones = game.milestones || [];
    const customMilestones = run.customMilestones || [];
    const allMilestones = [...defaultMilestones, ...customMilestones];

    const completedCount = allMilestones.filter(m => {
      return run.milestonesCompleted && run.milestonesCompleted[m.id] && run.milestonesCompleted[m.id].completed;
    }).length;

    const progressPct = allMilestones.length > 0 ? Math.round((completedCount / allMilestones.length) * 100) : 0;

    let html = `
      <div class="mb-6 p-4 bg-slate-800/60 border border-slate-700 rounded-xl">
        <div class="flex items-center justify-between mb-2">
          <span class="font-bold text-slate-200 text-sm">Progreso del Desafío (${game.badgeType === "trials" ? "Pruebas Insulares" : "Gimnasios y Liga"})</span>
          <span class="text-xs font-bold text-indigo-400">${completedCount} de ${allMilestones.length} (${progressPct}%)</span>
        </div>
        <div class="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-700">
          <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 h-3 rounded-full transition-all duration-300" style="width: ${progressPct}%"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
    `;

    allMilestones.forEach(m => {
      const isCompleted = run.milestonesCompleted && run.milestonesCompleted[m.id] && run.milestonesCompleted[m.id].completed;
      const typeColor = window.PokedexDB.getTypeColor(m.type.split("/")[0].trim());

      html += `
        <div class="p-3.5 rounded-xl border transition-all ${isCompleted ? 'bg-indigo-950/20 border-indigo-500/60' : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'} flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl ${isCompleted ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40' : 'bg-slate-800 text-slate-500 border border-slate-700'}">
              ${m.icon || "🏅"}
            </div>
            <div>
              <div class="font-bold text-sm text-slate-100 flex items-center gap-1.5">
                ${m.name}
              </div>
              <div class="text-xs text-slate-400 mt-0.5">
                <span class="text-slate-300 font-semibold">${m.leader}</span> • ${m.city}
              </div>
              <div class="flex items-center gap-2 mt-1">
                <span class="type-badge text-[10px]" style="background:${typeColor.bg};color:${typeColor.text}">${m.type}</span>
                ${m.levelCap ? `<span class="text-[11px] text-amber-400 font-semibold bg-amber-950/40 px-2 py-0.2 rounded border border-amber-800/40">Cap: Nv. ${m.levelCap}</span>` : ""}
              </div>
            </div>
          </div>

          <button type="button" class="btn-toggle-milestone p-2.5 rounded-lg border transition ${isCompleted ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'}"
            data-milestone-id="${m.id}" title="${isCompleted ? 'Marcar como pendiente' : 'Marcar como superado'}">
            <i class="fas ${isCompleted ? 'fa-check-circle text-lg' : 'fa-circle text-lg'}"></i>
          </button>
        </div>
      `;
    });

    html += `
      </div>
      <div class="p-4 bg-slate-800/40 border border-slate-700/80 rounded-xl">
        <h4 class="font-bold text-slate-200 text-sm mb-2"><i class="fas fa-plus-circle text-indigo-400 mr-1.5"></i>Añadir Hito Personalizado</h4>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <input type="text" id="new-milestone-name" placeholder="Nombre (ej: Combate Rival Silph)" class="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200">
          <input type="text" id="new-milestone-leader" placeholder="Líder / Rival" class="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200">
          <input type="number" id="new-milestone-cap" placeholder="Level Cap (ej: 40)" class="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200">
          <button type="button" id="btn-add-custom-milestone" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1.5 px-4 rounded-lg text-xs transition">Añadir Hito</button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Toggle de hito completado
    container.querySelectorAll(".btn-toggle-milestone").forEach(btn => {
      btn.addEventListener("click", () => {
        const mId = btn.getAttribute("data-milestone-id");
        if (!run.milestonesCompleted) run.milestonesCompleted = {};
        const curr = run.milestonesCompleted[mId] || {};
        run.milestonesCompleted[mId] = {
          completed: !curr.completed,
          completedDate: new Date().toISOString()
        };
        window.NuzlockeStorage.saveRun(run);
        renderMilestones();
        updateHeader();
      });
    });

    // Añadir hito personalizado
    const addBtn = document.getElementById("btn-add-custom-milestone");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        const name = document.getElementById("new-milestone-name").value.trim();
        const leader = document.getElementById("new-milestone-leader").value.trim() || "Rival/Jefe";
        const cap = parseInt(document.getElementById("new-milestone-cap").value, 10) || null;
        if (!name) {
          alert("Introduce un nombre para el hito personalizado.");
          return;
        }
        if (!run.customMilestones) run.customMilestones = [];
        run.customMilestones.push({
          id: "custom_" + Date.now(),
          name: name,
          leader: leader,
          city: "Personalizado",
          type: "Variado",
          levelCap: cap,
          icon: "⚔️"
        });
        window.NuzlockeStorage.saveRun(run);
        renderMilestones();
      });
    }
  }

  // ==========================================
  // 4. PESTAÑA: EQUIPO Y CAJA
  // ==========================================
  function renderTeamAndBox() {
    const teamContainer = document.getElementById("team-grid");
    const boxContainer = document.getElementById("box-list");
    const graveContainer = document.getElementById("graveyard-list");
    if (!teamContainer) return;

    const run = AppState.activeRun;
    if (!run) return;

    const teamMembers = getTeamMembers(run);
    const boxMembers = Object.entries(run.encounters || {})
      .filter(([_, e]) => e.status === "BOX" || e.status === "CAPTURED")
      .map(([zoneId, e]) => ({ zoneId, ...e }));
    const deadMembers = Object.entries(run.encounters || {})
      .filter(([_, e]) => e.status === "DEAD")
      .map(([zoneId, e]) => ({ zoneId, ...e }));

    // Renderizar Equipo (6 slots)
    let teamHtml = "";
    for (let i = 0; i < 6; i++) {
      const member = teamMembers[i];
      if (member) {
        const dex = window.PokedexDB.getByName(member.pokemonName);
        const types = dex ? dex.types : [];
        const spriteUrl = window.PokedexDB.getSpriteUrl(member.pokemonName, member.isShiny, true); // Animado en equipo

        teamHtml += `
          <div class="bg-slate-800/70 border border-slate-700 hover:border-emerald-500/60 rounded-xl p-4 flex flex-col justify-between transition">
            <div class="flex items-start justify-between">
              <div>
                <h4 class="font-bold text-slate-100 text-base flex items-center gap-1.5">
                  ${member.nickname ? `"${member.nickname}"` : member.pokemonName}
                  ${member.isShiny ? '<span class="text-amber-400 text-xs">✨</span>' : ""}
                </h4>
                <div class="text-xs text-slate-400">${member.pokemonName} • Nv. ${member.level || "?"}</div>
              </div>
              <span class="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">Slot ${i + 1}</span>
            </div>

            <div class="my-3 flex items-center justify-center">
              <img src="${spriteUrl}" alt="${member.pokemonName}" class="w-20 h-20 object-contain drop-shadow"
                onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
            </div>

            <div>
              <div class="flex gap-1 mb-2">
                ${types.map(t => `<span class="type-badge text-[10px]" style="background:${window.PokedexDB.getTypeColor(t).bg};color:${window.PokedexDB.getTypeColor(t).text}">${t}</span>`).join("")}
              </div>
              <div class="text-[11px] text-slate-400 flex flex-col gap-0.5 border-t border-slate-700/60 pt-2 mb-3">
                ${member.nature ? `<span>Nat: <strong class="text-slate-300">${member.nature}</strong></span>` : ""}
                ${member.ability ? `<span>Hab: <strong class="text-slate-300">${member.ability}</strong></span>` : ""}
                ${member.item ? `<span>Obj: <strong class="text-slate-300">${member.item}</strong></span>` : ""}
              </div>
              <div class="flex gap-1.5">
                <button type="button" class="btn-move-to-box flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold py-1.5 rounded transition"
                  data-zone-id="${member.zoneId}">
                  A Caja
                </button>
                <button type="button" class="btn-mark-dead px-2.5 bg-red-950/60 hover:bg-red-900 border border-red-800/60 text-red-300 text-xs py-1.5 rounded transition" title="Marcar como muerto"
                  data-zone-id="${member.zoneId}">
                  💀
                </button>
              </div>
            </div>
          </div>
        `;
      } else {
        teamHtml += `
          <div class="bg-slate-800/30 border border-dashed border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[220px]">
            <i class="fas fa-plus-circle text-slate-600 text-3xl mb-2"></i>
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hueco ${i + 1} Libre</span>
            <span class="text-[11px] text-slate-600 mt-1">Mueve un Pokémon desde la Caja</span>
          </div>
        `;
      }
    }
    teamContainer.innerHTML = teamHtml;

    // Renderizar Caja
    if (boxContainer) {
      if (boxMembers.length === 0) {
        boxContainer.innerHTML = `<div class="p-6 text-center text-slate-500 text-xs">No hay Pokémon en la caja.</div>`;
      } else {
        boxContainer.innerHTML = boxMembers.map(m => `
          <div class="flex items-center justify-between p-2.5 bg-slate-800/60 border border-slate-700/60 rounded-lg hover:border-slate-600 transition">
            <div class="flex items-center gap-2.5">
              <img src="${window.PokedexDB.getSpriteUrl(m.pokemonName, m.isShiny, false)}" class="w-10 h-10 object-contain"
                onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
              <div>
                <span class="font-bold text-xs text-slate-200">${m.nickname ? `"${m.nickname}" (${m.pokemonName})` : m.pokemonName}</span>
                <div class="text-[11px] text-slate-400">Nv. ${m.level || "?"} ${m.nature ? `• ${m.nature}` : ""}</div>
              </div>
            </div>
            <button type="button" class="btn-move-to-team px-3 py-1 bg-emerald-600/80 hover:bg-emerald-600 text-white rounded text-xs font-semibold transition"
              data-zone-id="${m.zoneId}">
              Al Equipo
            </button>
          </div>
        `).join("");
      }
    }

    // Renderizar Cementerio
    if (graveContainer) {
      if (deadMembers.length === 0) {
        graveContainer.innerHTML = `<div class="p-6 text-center text-slate-500 text-xs">¡No tienes ninguna baja aún! Mantén el invicto.</div>`;
      } else {
        graveContainer.innerHTML = deadMembers.map(m => `
          <div class="flex items-center justify-between p-2.5 bg-red-950/20 border border-red-900/40 rounded-lg">
            <div class="flex items-center gap-2.5">
              <img src="${window.PokedexDB.getSpriteUrl(m.pokemonName, m.isShiny, false)}" class="w-10 h-10 object-contain grayscale opacity-80"
                onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
              <div>
                <span class="font-bold text-xs text-red-200">💀 ${m.nickname ? `"${m.nickname}"` : m.pokemonName}</span>
                <div class="text-[11px] text-red-400 italic">${m.deathCause || "Causa no especificada"}</div>
              </div>
            </div>
            <span class="text-xs text-slate-500">Nv. ${m.level || "?"}</span>
          </div>
        `).join("");
      }
    }

    // Handlers de botones de movimiento
    document.querySelectorAll(".btn-move-to-box").forEach(btn => {
      btn.addEventListener("click", () => {
        const zId = btn.getAttribute("data-zone-id");
        if (run.encounters[zId]) {
          run.encounters[zId].status = "BOX";
          window.NuzlockeStorage.saveRun(run);
          renderApp();
        }
      });
    });

    document.querySelectorAll(".btn-move-to-team").forEach(btn => {
      btn.addEventListener("click", () => {
        const zId = btn.getAttribute("data-zone-id");
        const team = getTeamMembers(run);
        if (team.length >= 6) {
          alert("Tu equipo ya está lleno (máximo 6 Pokémon). Guarda uno en la caja antes de añadir otro.");
          return;
        }
        if (run.encounters[zId]) {
          run.encounters[zId].status = "TEAM";
          window.NuzlockeStorage.saveRun(run);
          renderApp();
        }
      });
    });

    document.querySelectorAll(".btn-mark-dead").forEach(btn => {
      btn.addEventListener("click", () => {
        const zId = btn.getAttribute("data-zone-id");
        const cause = prompt("¿Cuál fue la causa de la muerte / qué rival lo mató?");
        if (run.encounters[zId]) {
          run.encounters[zId].status = "DEAD";
          if (cause) run.encounters[zId].deathCause = cause;
          window.NuzlockeStorage.saveRun(run);
          renderApp();
        }
      });
    });
  }

  // ==========================================
  // 5. PESTAÑA: SALÓN DE LA FAMA (HALL OF FAME)
  // ==========================================
  function renderHallOfFame() {
    const container = document.getElementById("hof-container");
    if (!container) return;

    const run = AppState.activeRun;
    const game = AppState.activeGame;
    if (!run || !game) return;

    const hof = run.hallOfFame;

    let html = `
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 class="text-xl font-extrabold text-slate-100 flex items-center gap-2">
            <span class="text-amber-400">★</span> Salón de la Fama de ${run.name}
          </h3>
          <p class="text-xs text-slate-400 mt-1">Guarda el equipo ganador de la Liga Pokémon y expórtalo como imagen PNG para compartir.</p>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="btn-edit-hof" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5">
            <i class="fas fa-trophy text-amber-300"></i> ${hof ? "Editar Campeones" : "Registrar Victoria"}
          </button>
          ${hof ? `
            <button type="button" id="btn-export-hof-png" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-lg text-xs transition flex items-center gap-1.5">
              <i class="fas fa-file-image"></i> Exportar PNG (Imagen)
            </button>
          ` : ""}
        </div>
      </div>
    `;

    if (!hof || !hof.team || hof.team.length === 0) {
      html += `
        <div class="p-12 text-center bg-slate-800/40 border border-slate-700 rounded-2xl">
          <i class="fas fa-award text-amber-400 text-5xl mb-3"></i>
          <h4 class="text-base font-bold text-slate-200">Aún no has registrado una victoria en esta partida</h4>
          <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto">Cuando derrotes al Campeón de la Liga Pokémon, pulsa en "Registrar Victoria" para inmortalizar a tus 6 héroes.</p>
        </div>
      `;
    } else {
      html += `
        <div class="p-4 bg-slate-800/60 border border-amber-500/30 rounded-xl mb-6 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div class="flex items-center gap-4">
            <span>📅 <strong>Fecha:</strong> ${hof.victoryDate || "Reciente"}</span>
            <span>⏱️ <strong>Tiempo:</strong> ${hof.playTime || "--:--"}</span>
            <span>💀 <strong>Bajas Totales:</strong> ${getDeathCount(run)}</span>
            <span>🔄 <strong>Intentos:</strong> ${hof.wipeAttempts || 0}</span>
          </div>
          <span class="text-amber-400 font-bold uppercase tracking-wider">¡Campeón Inmortalizado!</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      `;

      hof.team.forEach((m, idx) => {
        const types = window.PokedexDB.getByName(m.pokemonName)?.types || [];
        const spriteUrl = window.PokedexDB.getSpriteUrl(m.pokemonName, m.isShiny, false);
        const moves = m.moves || ["-", "-", "-", "-"];

        html += `
          <div class="bg-slate-800/80 border border-amber-500/20 rounded-xl p-4 flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div>
                <h4 class="font-bold text-slate-100 text-base">
                  ${m.nickname ? `"${m.nickname}"` : m.pokemonName}
                  ${m.isShiny ? '<span class="text-amber-400 text-xs">✨</span>' : ""}
                </h4>
                <div class="text-xs text-slate-400">${m.pokemonName} • Nv. ${m.level || "?"}</div>
              </div>
              <span class="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">#${idx + 1}</span>
            </div>

            <div class="my-2 flex items-center justify-center">
              <img src="${spriteUrl}" alt="${m.pokemonName}" class="w-20 h-20 object-contain drop-shadow"
                onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
            </div>

            <div class="flex gap-1 mb-2">
              ${types.map(t => `<span class="type-badge text-[10px]" style="background:${window.PokedexDB.getTypeColor(t).bg};color:${window.PokedexDB.getTypeColor(t).text}">${t}</span>`).join("")}
            </div>

            <div class="text-[11px] text-slate-400 flex flex-col gap-0.5 border-t border-slate-700/60 pt-2 mb-2">
              ${m.ability ? `<span>Hab: <strong class="text-slate-300">${m.ability}</strong></span>` : ""}
              ${m.item ? `<span>Obj: <strong class="text-slate-300">${m.item}</strong></span>` : ""}
            </div>

            <div class="grid grid-cols-2 gap-1 text-[11px] text-center pt-2 border-t border-slate-700/60">
              ${moves.map(mv => `<span class="bg-slate-900/80 px-1.5 py-1 rounded text-slate-300 border border-slate-700/40 truncate">${mv || "-"}</span>`).join("")}
            </div>
          </div>
        `;
      });

      html += `</div>`;
    }

    // Galería global con todas las runs completadas
    const allRuns = window.NuzlockeStorage.getAllRuns();
    const completedRuns = allRuns.filter(r => r.hallOfFame && r.hallOfFame.team && r.hallOfFame.team.length > 0);

    html += `
      <div class="mt-8 pt-8 border-t border-slate-700/80">
        <h4 class="text-base font-bold text-slate-200 mb-4 flex items-center gap-2">
          <i class="fas fa-crown text-amber-400"></i> Galería de Campeones de Todas tus Runs
        </h4>
    `;

    if (completedRuns.length === 0) {
      html += `<div class="p-6 text-center text-slate-500 text-xs">No hay otras partidas completadas registradas aún.</div>`;
    } else {
      html += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">`;
      completedRuns.forEach(r => {
        const g = window.NuzlockeRegistry.get(r.gameId);
        html += `
          <div class="p-4 bg-slate-800/40 border border-slate-700 rounded-xl flex items-center justify-between">
            <div>
              <h5 class="font-bold text-slate-100 text-sm">${r.name}</h5>
              <div class="text-xs text-slate-400">${g ? g.name : r.gameId} • Victoria: ${r.hallOfFame.victoryDate || "N/A"}</div>
              <div class="flex items-center gap-1 mt-2">
                ${(r.hallOfFame.team || []).map(tm => `
                  <img src="${window.PokedexDB.getSpriteUrl(tm.pokemonName, tm.isShiny, false)}" class="w-8 h-8 object-contain" title="${tm.pokemonName}"
                    onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
                `).join("")}
              </div>
            </div>
            <button type="button" class="btn-export-other-hof px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs rounded font-semibold transition"
              data-run-id="${r.id}">
              Exportar PNG
            </button>
          </div>
        `;
      });
      html += `</div>`;
    }

    html += `</div>`;

    container.innerHTML = html;

    const editHofBtn = document.getElementById("btn-edit-hof");
    if (editHofBtn) editHofBtn.addEventListener("click", openHofModal);

    const exportBtn = document.getElementById("btn-export-hof-png");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        window.HallOfFameExporter.exportToPNG(run, game, {
          ...run.hallOfFame,
          totalDeaths: getDeathCount(run)
        });
      });
    }

    container.querySelectorAll(".btn-export-other-hof").forEach(btn => {
      btn.addEventListener("click", () => {
        const rId = btn.getAttribute("data-run-id");
        const r = window.NuzlockeStorage.getRunById(rId);
        if (r && r.hallOfFame) {
          const g = window.NuzlockeRegistry.get(r.gameId);
          window.HallOfFameExporter.exportToPNG(r, g, {
            ...r.hallOfFame,
            totalDeaths: getDeathCount(r)
          });
        }
      });
    });
  }

  // MODAL DE EDICIÓN DEL SALÓN DE LA FAMA
  function setupHofModal() {
    const modal = document.getElementById("modal-hof");
    const closeBtn = document.getElementById("modal-hof-close");
    const form = document.getElementById("form-hof");
    const autoFillBtn = document.getElementById("btn-autofill-hof-team");

    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
      });
    }

    if (autoFillBtn) {
      autoFillBtn.addEventListener("click", () => {
        const run = AppState.activeRun;
        if (!run) return;
        const currentTeam = getTeamMembers(run);
        for (let i = 0; i < 6; i++) {
          const m = currentTeam[i];
          document.getElementById(`hof-pkmn-${i}`).value = m ? m.pokemonName : "";
          document.getElementById(`hof-nick-${i}`).value = m ? m.nickname : "";
          document.getElementById(`hof-lvl-${i}`).value = m ? m.level || "" : "";
          document.getElementById(`hof-item-${i}`).value = m ? m.item || "" : "";
          document.getElementById(`hof-ability-${i}`).value = m ? m.ability || "" : "";
          document.getElementById(`hof-shiny-${i}`).checked = m ? Boolean(m.isShiny) : false;
        }
      });
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        saveHofForm();
      });
    }
  }

  function openHofModal() {
    const run = AppState.activeRun;
    if (!run) return;

    const hof = run.hallOfFame || {};
    document.getElementById("hof-date").value = hof.victoryDate || new Date().toISOString().split("T")[0];
    document.getElementById("hof-playtime").value = hof.playTime || "";
    document.getElementById("hof-wipes").value = hof.wipeAttempts || 0;

    const team = hof.team || [];
    for (let i = 0; i < 6; i++) {
      const m = team[i] || {};
      document.getElementById(`hof-pkmn-${i}`).value = m.pokemonName || "";
      document.getElementById(`hof-nick-${i}`).value = m.nickname || "";
      document.getElementById(`hof-lvl-${i}`).value = m.level || "";
      document.getElementById(`hof-item-${i}`).value = m.item || "";
      document.getElementById(`hof-ability-${i}`).value = m.ability || "";
      document.getElementById(`hof-shiny-${i}`).checked = Boolean(m.isShiny);

      const moves = m.moves || ["", "", "", ""];
      for (let j = 0; j < 4; j++) {
        const input = document.getElementById(`hof-m-${i}-${j}`);
        if (input) input.value = moves[j] || "";
      }
    }

    document.getElementById("modal-hof").classList.remove("hidden");
  }

  function saveHofForm() {
    const run = AppState.activeRun;
    if (!run) return;

    const team = [];
    for (let i = 0; i < 6; i++) {
      const pkmn = document.getElementById(`hof-pkmn-${i}`).value.trim();
      if (!pkmn) continue;
      const nick = document.getElementById(`hof-nick-${i}`).value.trim();
      const lvl = parseInt(document.getElementById(`hof-lvl-${i}`).value, 10) || null;
      const item = document.getElementById(`hof-item-${i}`).value.trim();
      const ability = document.getElementById(`hof-ability-${i}`).value.trim();
      const shiny = document.getElementById(`hof-shiny-${i}`).checked;

      const moves = [];
      for (let j = 0; j < 4; j++) {
        const mv = document.getElementById(`hof-m-${i}-${j}`)?.value.trim() || "";
        moves.push(mv);
      }

      team.push({
        pokemonName: pkmn,
        nickname: nick,
        level: lvl,
        item: item,
        ability: ability,
        isShiny: shiny,
        moves: moves
      });
    }

    run.hallOfFame = {
      victoryDate: document.getElementById("hof-date").value,
      playTime: document.getElementById("hof-playtime").value.trim(),
      wipeAttempts: parseInt(document.getElementById("hof-wipes").value, 10) || 0,
      team: team
    };

    window.NuzlockeStorage.saveRun(run);
    document.getElementById("modal-hof").classList.add("hidden");
    renderHallOfFame();
  }

  // ==========================================
  // 6. PESTAÑA: GESTIÓN DE MÚLTIPLES RUNS
  // ==========================================
  function renderRunsManagement() {
    const container = document.getElementById("runs-list");
    if (!container) return;

    const allRuns = window.NuzlockeStorage.getAllRuns();
    const activeRunId = window.NuzlockeStorage.getActiveRunId();

    let html = `
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-slate-100 text-base">Tus Partidas Guardadas</h3>
        <button type="button" id="btn-create-run-open" class="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5">
          <i class="fas fa-plus"></i> Nueva Partida
        </button>
      </div>
    `;

    if (allRuns.length === 0) {
      html += `<div class="p-8 text-center text-slate-400">No hay partidas registradas. Crea una para comenzar.</div>`;
    } else {
      allRuns.forEach(r => {
        const isActive = r.id === activeRunId;
        const g = window.NuzlockeRegistry.get(r.gameId);
        const deaths = getDeathCount(r);
        const encountersLogged = Object.keys(r.encounters || {}).length;

        html += `
          <div class="zone-card p-4 mb-3 ${isActive ? 'border-indigo-500 bg-indigo-950/20' : ''}">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="font-bold text-slate-100 text-base">${r.name}</h4>
                  ${isActive ? '<span class="text-[10px] font-bold uppercase bg-indigo-600 text-white px-2 py-0.5 rounded">Activa</span>' : ''}
                  ${r.archived ? '<span class="text-[10px] font-bold uppercase bg-slate-700 text-slate-300 px-2 py-0.5 rounded">Archivada</span>' : ''}
                </div>
                <div class="text-xs text-slate-400 mt-1 flex flex-wrap gap-3">
                  <span>Juego: <strong class="text-slate-300">${g ? g.name : r.gameId}</strong></span>
                  <span>Zonas: ${encountersLogged}</span>
                  <span>Bajas: 💀 ${deaths}</span>
                  <span>Inicio: ${r.startDate ? r.startDate.split("T")[0] : "N/A"}</span>
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-1.5 self-end sm:self-center">
                ${!isActive ? `
                  <button type="button" class="btn-activate-run px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-semibold transition"
                    data-run-id="${r.id}">
                    Seleccionar
                  </button>
                ` : ''}
                <button type="button" class="btn-dup-run p-2 text-slate-400 hover:text-slate-200 transition" title="Duplicar partida"
                  data-run-id="${r.id}">
                  <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn-archive-run p-2 text-slate-400 hover:text-amber-400 transition" title="${r.archived ? 'Desarchivar' : 'Archivar'}"
                  data-run-id="${r.id}">
                  <i class="fas ${r.archived ? 'fa-box-open' : 'fa-archive'}"></i>
                </button>
                <button type="button" class="btn-export-run p-2 text-slate-400 hover:text-indigo-400 transition" title="Exportar JSON"
                  data-run-id="${r.id}">
                  <i class="fas fa-file-export"></i>
                </button>
                <button type="button" class="btn-delete-run p-2 text-slate-400 hover:text-red-400 transition" title="Eliminar partida"
                  data-run-id="${r.id}">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      });
    }

    container.innerHTML = html;

    const createBtn = document.getElementById("btn-create-run-open");
    if (createBtn) createBtn.addEventListener("click", openNewRunModal);

    container.querySelectorAll(".btn-activate-run").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-run-id");
        window.NuzlockeStorage.setActiveRunId(id);
      });
    });

    container.querySelectorAll(".btn-dup-run").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-run-id");
        window.NuzlockeStorage.duplicateRun(id);
      });
    });

    container.querySelectorAll(".btn-archive-run").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-run-id");
        const r = window.NuzlockeStorage.getRunById(id);
        if (r) window.NuzlockeStorage.archiveRun(id, !r.archived);
      });
    });

    container.querySelectorAll(".btn-export-run").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-run-id");
        window.NuzlockeStorage.exportRunJSON(id);
      });
    });

    container.querySelectorAll(".btn-delete-run").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-run-id");
        if (confirm("¿Estás seguro de que deseas eliminar esta partida por completo? Esta acción no se puede deshacer.")) {
          window.NuzlockeStorage.deleteRun(id);
        }
      });
    });
  }

  // MODAL CREAR NUEVA RUN
  function setupNewRunModal() {
    const modal = document.getElementById("modal-new-run");
    const closeBtn = document.getElementById("modal-new-run-close");
    const form = document.getElementById("form-new-run");
    const gameSelect = document.getElementById("new-run-game");

    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
      });
    }

    // Rellenar select de juegos
    if (gameSelect) {
      const allGames = window.NuzlockeRegistry.getAll();
      gameSelect.innerHTML = allGames.map(g => `
        <option value="${g.id}">${g.name} (Gen ${g.generation} - ${g.region})</option>
      `).join("");
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("new-run-name").value.trim();
        const gameId = document.getElementById("new-run-game").value;
        const preset = document.getElementById("new-run-preset").value;

        window.NuzlockeStorage.createRun({
          name: name || "Nueva Partida",
          gameId: gameId,
          rulesPreset: preset
        });

        modal.classList.add("hidden");
        switchTab("encounters");
      });
    }
  }

  function openNewRunModal() {
    document.getElementById("new-run-name").value = "";
    document.getElementById("modal-new-run").classList.remove("hidden");
  }

  // ==========================================
  // 7. PESTAÑA: REGLAS Y AJUSTES
  // ==========================================
  function renderRulesTab() {
    const container = document.getElementById("rules-settings-container");
    if (!container) return;

    const run = AppState.activeRun;
    if (!run) return;

    const rules = run.rules || {};

    container.innerHTML = `
      <div class="max-w-2xl bg-slate-800/40 border border-slate-700 rounded-xl p-6">
        <h3 class="font-bold text-slate-100 text-lg mb-4 flex items-center gap-2">
          <i class="fas fa-sliders-h text-indigo-400"></i> Reglas Activas para: ${run.name}
        </h3>

        <div class="flex flex-col gap-4 text-sm">
          <label class="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" id="rule-dupes" class="mt-1 w-4 h-4 text-indigo-600 rounded bg-slate-900 border-slate-700" ${rules.dupesClause ? "checked" : ""}>
            <div>
              <strong class="text-slate-200">Dupes Clause (Cláusula de Duplicados)</strong>
              <p class="text-xs text-slate-400 mt-0.5">Si encuentras un Pokémon de una especie (o de su línea evolutiva) que ya capturaste, puedes repetir el encuentro.</p>
            </div>
          </label>

          <label class="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" id="rule-one-per-route" class="mt-1 w-4 h-4 text-indigo-600 rounded bg-slate-900 border-slate-700" ${rules.onePerRoute ? "checked" : ""}>
            <div>
              <strong class="text-slate-200">Límite de Una Captura por Zona</strong>
              <p class="text-xs text-slate-400 mt-0.5">Muestra un aviso preventivo si intentas registrar una segunda captura en una zona ya utilizada.</p>
            </div>
          </label>

          <label class="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" id="rule-shiny" class="mt-1 w-4 h-4 text-indigo-600 rounded bg-slate-900 border-slate-700" ${rules.shinyClause ? "checked" : ""}>
            <div>
              <strong class="text-slate-200">Shiny Clause</strong>
              <p class="text-xs text-slate-400 mt-0.5">Los Pokémon variocolor/shiny siempre se pueden capturar sin importar la ruta o regla de duplicados.</p>
            </div>
          </label>

          <label class="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" id="rule-level-cap" class="mt-1 w-4 h-4 text-indigo-600 rounded bg-slate-900 border-slate-700" ${rules.levelCap ? "checked" : ""}>
            <div>
              <strong class="text-slate-200">Level Cap Dinámico</strong>
              <p class="text-xs text-slate-400 mt-0.5">Muestra el límite de nivel máximo permitido según el siguiente Líder de Gimnasio o Hito.</p>
            </div>
          </label>

          <div class="pt-4 border-t border-slate-700/60">
            <label class="block font-bold text-slate-200 text-xs mb-1">Reglas Personalizadas / Notas adicionales de la Run:</label>
            <textarea id="rule-custom-text" rows="4" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200" placeholder="Ej: Sin objetos curativos en batalla, modo 'Set' obligatorio, etc.">${rules.customRulesText || ""}</textarea>
          </div>

          <button type="button" id="btn-save-rules" class="self-start px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs transition">
            Guardar Cambios de Reglas
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-save-rules").addEventListener("click", () => {
      run.rules.dupesClause = document.getElementById("rule-dupes").checked;
      run.rules.onePerRoute = document.getElementById("rule-one-per-route").checked;
      run.rules.shinyClause = document.getElementById("rule-shiny").checked;
      run.rules.levelCap = document.getElementById("rule-level-cap").checked;
      run.rules.customRulesText = document.getElementById("rule-custom-text").value;

      window.NuzlockeStorage.saveRun(run);
      alert("Reglas actualizadas correctamente.");
    });
  }

  // ==========================================
  // 8. HANDLERS DE IMPORTACIÓN / EXPORTACIÓN
  // ==========================================
  function setupImportExportHandlers() {
    // Exportar todo el backup
    const exportAllBtn = document.getElementById("btn-export-all-backup");
    if (exportAllBtn) {
      exportAllBtn.addEventListener("click", () => {
        window.NuzlockeStorage.exportAllRunsBackup();
      });
    }

    // Importar backup o run
    const importFileInput = document.getElementById("import-file-input");
    if (importFileInput) {
      importFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target.result;
          try {
            const parsed = JSON.parse(content);
            if (parsed.runs) {
              const res = window.NuzlockeStorage.importAllRunsBackup(parsed);
              if (res.success) {
                alert(`Copia de seguridad restaurada con éxito (${res.count} partidas sincronizadas).`);
                location.reload();
              }
            } else if (parsed.encounters && parsed.gameId && !parsed.generation) {
              const res = window.NuzlockeStorage.importRunJSON(parsed);
              if (res.success) {
                alert(`Partida "${res.run.name}" importada con éxito.`);
                loadActiveRun();
                renderApp();
              }
            } else if (parsed.id && parsed.encounters && parsed.generation) {
              // Es un archivo de juego personalizado
              const res = window.NuzlockeRegistry.loadFromJSON(parsed);
              if (res.success) {
                alert(`¡Nuevo juego "${res.game.name}" registrado con éxito! Ya puedes crear partidas en él.`);
                location.reload();
              }
            } else {
              alert("Formato de archivo no reconocido.");
            }
          } catch (err) {
            alert("Error al leer el archivo JSON: " + err.message);
          }
        };
        reader.readAsText(file);
      });
    }
  }

})();
