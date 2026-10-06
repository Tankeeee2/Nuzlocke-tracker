/**
 * Nuzlocke Tracker - Generador de Imagen para el Salón de la Fama (Exporter)
 * Dibuja una tarjeta HD de campeón en HTML5 Canvas con los 6 Pokémon,
 * estadísticas de la run y la descarga en formato PNG.
 */
(function() {
  function loadImage(url) {
    return new Promise((resolve) => {
      if (!url || typeof Image === 'undefined') {
        resolve(null);
        return;
      }
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = url;
    });
  }

  function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  window.HallOfFameExporter = {
    /**
     * Genera la imagen PNG del Hall of Fame y la descarga
     * @param {Object} run Datos de la partida
     * @param {Object} game Datos del juego
     * @param {Object} hofData Datos del salón de la fama (team, victoryDate, playTime, deaths, wipes)
     */
    async exportToPNG(run, game, hofData) {
      const width = 1280;
      const height = 720;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      // 1. Fondo épico con degradado radial y viñeta
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#0d1117");
      bgGrad.addColorStop(0.5, "#161b22");
      bgGrad.addColorStop(1, "#090d13");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Marco decorativo con brillo dorado sutil
      ctx.strokeStyle = "rgba(234, 179, 8, 0.4)";
      ctx.lineWidth = 4;
      ctx.strokeRect(16, 16, width - 32, height - 32);

      // 2. Encabezado
      ctx.fillStyle = "#EAB308"; // Dorado
      ctx.font = "900 24px 'Segoe UI', system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("★ SALÓN DE LA FAMA - NUZLOCKE CHAMPION ★", width / 2, 54);

      // Subtítulo: Nombre de la Run y Juego
      ctx.fillStyle = "#F3F4F6";
      ctx.font = "bold 20px 'Segoe UI', system-ui, sans-serif";
      const runTitle = `${run.name} • ${game ? game.name : run.gameId}`;
      ctx.fillText(runTitle, width / 2, 84);

      // Barra de estadísticas
      const deaths = hofData.totalDeaths !== undefined ? hofData.totalDeaths : 0;
      const wipes = hofData.wipeAttempts !== undefined ? hofData.wipeAttempts : 0;
      const playTime = hofData.playTime || "--:--";
      const dateStr = hofData.victoryDate || new Date().toISOString().split("T")[0];

      const statsText = `Fecha de Victoria: ${dateStr}  |  Tiempo: ${playTime}  |  Bajas Totales: 💀 ${deaths}  |  Intentos: ${wipes}`;
      ctx.fillStyle = "#9CA3AF";
      ctx.font = "14px 'Segoe UI', system-ui, sans-serif";
      ctx.fillText(statsText, width / 2, 110);

      // 3. Cargar sprites de los 6 Pokémon concurrentemente
      const team = hofData.team || [];
      const spritePromises = team.map(member => {
        if (!member || !member.pokemonName) return Promise.resolve(null);
        const url = window.PokedexDB.getSpriteUrl(member.pokemonName, member.isShiny, false);
        return loadImage(url);
      });
      const sprites = await Promise.all(spritePromises);

      // 4. Renderizar la cuadrícula de los 6 campeones (2 filas de 3 columnas)
      const cols = 3;
      const rows = 2;
      const cardW = 380;
      const cardH = 250;
      const startX = 55;
      const startY = 135;
      const gapX = 35;
      const gapY = 25;

      for (let i = 0; i < 6; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = startX + col * (cardW + gapX);
        const y = startY + row * (cardH + gapY);

        const member = team[i];
        const sprite = sprites[i];

        // Tarjeta individual
        ctx.fillStyle = "rgba(30, 41, 59, 0.75)";
        ctx.strokeStyle = member ? "rgba(234, 179, 8, 0.3)" : "rgba(75, 85, 99, 0.3)";
        ctx.lineWidth = 2;
        roundRect(ctx, x, y, cardW, cardH, 12, true, true);

        if (!member || !member.pokemonName) {
          // Slot vacío
          ctx.fillStyle = "#4B5563";
          ctx.font = "italic 16px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(`Hueco ${i + 1} Vacío`, x + cardW / 2, y + cardH / 2);
          continue;
        }

        const dexEntry = window.PokedexDB.getByName(member.pokemonName);
        const types = dexEntry ? dexEntry.types : [];

        // Dibujar Sprite
        if (sprite) {
          ctx.drawImage(sprite, x + 8, y + 25, 120, 120);
        } else {
          // Placeholder circular
          ctx.fillStyle = "#374151";
          ctx.beginPath();
          ctx.arc(x + 68, y + 85, 45, 0, Math.PI * 2);
          ctx.fill();
        }

        // Datos del Pokémon (Lado derecho del sprite)
        const infoX = x + 135;
        let curY = y + 36;

        // Mote
        ctx.textAlign = "left";
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 18px 'Segoe UI', sans-serif";
        const nick = member.nickname ? `"${member.nickname}"` : member.pokemonName;
        ctx.fillText(nick, infoX, curY);

        // Shiny star
        if (member.isShiny) {
          ctx.fillStyle = "#F59E0B";
          ctx.font = "bold 16px sans-serif";
          ctx.fillText(" ✨", infoX + ctx.measureText(nick).width, curY);
        }

        // Especie y Nivel
        curY += 24;
        ctx.fillStyle = "#9CA3AF";
        ctx.font = "14px 'Segoe UI', sans-serif";
        ctx.fillText(`${member.pokemonName}  •  Nv. ${member.level || "?"}`, infoX, curY);

        // Tipos elementales badges
        curY += 24;
        let badgeX = infoX;
        types.forEach(t => {
          const color = window.PokedexDB.getTypeColor(t);
          ctx.fillStyle = color.bg;
          roundRect(ctx, badgeX, curY - 14, 60, 20, 4, true, false);
          ctx.fillStyle = color.text;
          ctx.font = "bold 11px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(t, badgeX + 30, curY);
          badgeX += 68;
        });

        // Habilidad y Objeto
        curY += 24;
        ctx.textAlign = "left";
        ctx.fillStyle = "#D1D5DB";
        ctx.font = "12px 'Segoe UI', sans-serif";
        if (member.ability) {
          ctx.fillText(`Hab: ${member.ability}`, infoX, curY);
          curY += 18;
        }
        if (member.item) {
          ctx.fillText(`Obj: ${member.item}`, infoX, curY);
        }

        // Cuadrícula de 4 Movimientos (Parte inferior de la tarjeta)
        const moves = member.moves || ["-", "-", "-", "-"];
        const moveBoxY = y + 155;
        const moveW = 175;
        const moveH = 34;

        for (let m = 0; m < 4; m++) {
          const mx = x + 10 + (m % 2) * (moveW + 10);
          const my = moveBoxY + Math.floor(m / 2) * (moveH + 8);

          ctx.fillStyle = "rgba(15, 23, 42, 0.7)";
          ctx.strokeStyle = "rgba(100, 116, 139, 0.4)";
          roundRect(ctx, mx, my, moveW, moveH, 6, true, true);

          ctx.fillStyle = "#E2E8F0";
          ctx.font = "12px 'Segoe UI', sans-serif";
          ctx.textAlign = "center";
          const moveName = moves[m] && moves[m].trim() ? moves[m] : "-";
          ctx.fillText(moveName, mx + moveW / 2, my + 21);
        }
      }

      // 5. Pie de página
      ctx.fillStyle = "#6B7280";
      ctx.font = "italic 12px 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Generado con Nuzlocke Tracker Multijuego • ¡Enhorabuena, Campeón!", width / 2, height - 20);

      // 6. Descarga directa en archivo PNG
      const link = document.createElement("a");
      const safeRun = (run.name || "nuzlocke").replace(/[^a-z0-9_-]/gi, "_").toLowerCase();
      link.download = `hall_of_fame_${safeRun}_${run.gameId}.png`;
      link.href = canvas.toDataURL("image/png");
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };
})();
