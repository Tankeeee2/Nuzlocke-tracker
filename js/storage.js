/**
 * Nuzlocke Tracker - Gestor de Almacenamiento y Persistencia (Storage)
 * Maneja múltiples runs, guardado automático en localStorage, duplicado,
 * archivado, eliminación e importación/exportación JSON.
 */
(function() {
  const STORAGE_KEY = "nuzlocke_tracker_data_v1";
  const ACTIVE_RUN_KEY = "nuzlocke_tracker_active_run_id";

  function generateId() {
    return "run_" + Date.now() + "_" + Math.random().toString(36).substring(2, 9);
  }

  function getRawData() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : { runs: {} };
    } catch (e) {
      console.error("[Storage] Error al leer datos locales:", e);
      return { runs: {} };
    }
  }

  function saveRawData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent("nuzlocke:storage-updated"));
      }
      return true;
    } catch (e) {
      console.error("[Storage] Error al guardar datos locales:", e);
      if (typeof alert === 'function') {
        alert("Error al guardar en el almacenamiento local. Comprueba el espacio de tu navegador.");
      }
      return false;
    }
  }

  window.NuzlockeStorage = {
    /**
     * Devuelve todas las runs guardadas (array ordenado por última modificación)
     */
    getAllRuns() {
      const data = getRawData();
      return Object.values(data.runs || {}).sort((a, b) => {
        return new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0);
      });
    },

    /**
     * Obtiene el ID de la run activa actual
     */
    getActiveRunId() {
      const activeId = localStorage.getItem(ACTIVE_RUN_KEY);
      const all = this.getAllRuns();
      if (activeId && this.getRunById(activeId)) {
        return activeId;
      }
      // Si no hay activa pero hay alguna existente, tomar la primera
      if (all.length > 0) {
        this.setActiveRunId(all[0].id);
        return all[0].id;
      }
      return null;
    },

    /**
     * Establece la run activa
     */
    setActiveRunId(runId) {
      localStorage.setItem(ACTIVE_RUN_KEY, runId);
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent("nuzlocke:active-run-changed", { detail: { runId } }));
      }
    },

    /**
     * Obtiene una run por su ID
     */
    getRunById(runId) {
      const data = getRawData();
      return data.runs ? data.runs[runId] : null;
    },

    /**
     * Obtiene la run activa actual completa
     */
    getActiveRun() {
      const activeId = this.getActiveRunId();
      return activeId ? this.getRunById(activeId) : null;
    },

    /**
     * Crea una nueva Run
     */
    createRun({ name, gameId, rulesPreset = "standard", customRules = {} }) {
      const data = getRawData();
      const id = generateId();

      const defaultRules = {
        dupesClause: true,
        onePerRoute: true,
        countEventsAsEncounters: "yes", // "yes" | "no" | "by_category"
        levelCap: true,
        shinyClause: true,
        faintIsDeath: true,
        nicknames: true,
        customRulesText: ""
      };

      if (rulesPreset === "hardcore") {
        defaultRules.levelCap = true;
        defaultRules.noItemsInBattle = true;
        defaultRules.setBattleStyle = true;
      }

      const newRun = {
        id: id,
        name: name || "Nueva Partida",
        gameId: gameId,
        startDate: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        archived: false,
        rules: Object.assign({}, defaultRules, customRules),
        encounters: {},
        eventsClaimed: {},
        milestonesCompleted: {},
        customMilestones: [],
        hallOfFame: null
      };

      data.runs[id] = newRun;
      saveRawData(data);
      this.setActiveRunId(id);
      return newRun;
    },

    /**
     * Actualiza y guarda una run
     */
    saveRun(run) {
      if (!run || !run.id) return false;
      const data = getRawData();
      run.updatedAt = new Date().toISOString();
      data.runs[run.id] = run;
      return saveRawData(data);
    },

    /**
     * Duplica una run existente
     */
    duplicateRun(runId) {
      const original = this.getRunById(runId);
      if (!original) return null;

      const copy = JSON.parse(JSON.stringify(original));
      copy.id = generateId();
      copy.name = original.name + " (Copia)";
      copy.startDate = new Date().toISOString();
      copy.updatedAt = new Date().toISOString();
      copy.archived = false;

      const data = getRawData();
      data.runs[copy.id] = copy;
      saveRawData(data);
      this.setActiveRunId(copy.id);
      return copy;
    },

    /**
     * Elimina una run
     */
    deleteRun(runId) {
      const data = getRawData();
      if (data.runs && data.runs[runId]) {
        delete data.runs[runId];
        saveRawData(data);

        // Si era la activa, cambiar a otra
        if (this.getActiveRunId() === runId) {
          const remaining = Object.keys(data.runs);
          if (remaining.length > 0) {
            this.setActiveRunId(remaining[0]);
          } else {
            localStorage.removeItem(ACTIVE_RUN_KEY);
            if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
              window.dispatchEvent(new CustomEvent("nuzlocke:active-run-changed", { detail: { runId: null } }));
            }
          }
        }
        return true;
      }
      return false;
    },

    /**
     * Archiva o desarchiva una run
     */
    archiveRun(runId, shouldArchive = true) {
      const run = this.getRunById(runId);
      if (!run) return false;
      run.archived = Boolean(shouldArchive);
      return this.saveRun(run);
    },

    /**
     * Descarga una run en formato JSON
     */
    exportRunJSON(runId) {
      const run = this.getRunById(runId);
      if (!run) return;

      const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(run, null, 2));
      const downloadAnchor = document.createElement("a");
      const safeName = (run.name || "nuzlocke").replace(/[^a-z0-9_-]/gi, "_").toLowerCase();
      downloadAnchor.setAttribute("href", jsonStr);
      downloadAnchor.setAttribute("download", `nuzlocke_${safeName}_${run.gameId}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    },

    /**
     * Descarga copia de seguridad completa de todas las runs
     */
    exportAllRunsBackup() {
      const data = getRawData();
      const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
      const downloadAnchor = document.createElement("a");
      const dateStr = new Date().toISOString().split("T")[0];
      downloadAnchor.setAttribute("href", jsonStr);
      downloadAnchor.setAttribute("download", `nuzlocke_backup_completo_${dateStr}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    },

    /**
     * Importa una run individual desde JSON
     */
    importRunJSON(jsonString) {
      try {
        const imported = typeof jsonString === "string" ? JSON.parse(jsonString) : jsonString;
        if (!imported.id || !imported.gameId) {
          throw new Error("El archivo JSON no tiene el formato válido de una Run de Nuzlocke Tracker.");
        }
        // Asignar ID nuevo para evitar colisiones
        imported.id = generateId();
        imported.name = (imported.name || "Partida Importada") + " (Importada)";
        imported.updatedAt = new Date().toISOString();

        const data = getRawData();
        data.runs[imported.id] = imported;
        saveRawData(data);
        this.setActiveRunId(imported.id);
        return { success: true, run: imported };
      } catch (e) {
        return { success: false, error: e.message };
      }
    },

    /**
     * Restaura una copia de seguridad completa
     */
    importAllRunsBackup(jsonString) {
      try {
        const backup = typeof jsonString === "string" ? JSON.parse(jsonString) : jsonString;
        if (!backup.runs || typeof backup.runs !== "object") {
          throw new Error("El archivo no contiene un backup válido con el objeto 'runs'.");
        }
        const currentData = getRawData();
        // Fusionar runs
        for (const [id, run] of Object.entries(backup.runs)) {
          currentData.runs[id] = run;
        }
        saveRawData(currentData);
        return { success: true, count: Object.keys(backup.runs).length };
      } catch (e) {
        return { success: false, error: e.message };
      }
    }
  };
})();
