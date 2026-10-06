/**
 * Nuzlocke Tracker Multijuego - Registro Central de Juegos
 * Permite que cualquier juego se auto-registre simplemente cargando su archivo.
 * Para añadir un nuevo juego en el futuro, basta con crear un archivo data/games/mi_juego.js
 * o importar un JSON en la app sin modificar el código del core.
 */

(function() {
  window.NuzlockeRegistry = {
    games: {},

    /**
     * Registra un juego en el sistema.
     * @param {Object} gameData Datos del juego (id, name, gen, encounters, events, badges, etc.)
     */
    register: function(gameData) {
      if (!gameData || !gameData.id) {
        console.error("Error al registrar juego: Datos inválidos", gameData);
        return;
      }
      this.games[gameData.id] = gameData;
      const genNum = gameData.generation || gameData.gen;
      console.log(`[NuzlockeRegistry] Registrado juego: "${gameData.name}" (ID: ${gameData.id}, Gen: ${genNum})`);
      
      // Emitir evento para componentes que escuchen en tiempo real
      if (typeof window !== 'undefined' && window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('nuzlocke:game-registered', { detail: gameData }));
      }
    },

    /**
     * Obtiene un juego por ID
     */
    get: function(gameId) {
      return this.games[gameId] || null;
    },

    /**
     * Obtiene la lista de todos los juegos registrados
     */
    getAll: function() {
      return Object.values(this.games);
    },

    /**
     * Carga un juego dinámicamente desde un objeto JSON o texto
     */
    loadFromJSON: function(jsonStringOrObj) {
      try {
        const obj = typeof jsonStringOrObj === 'string' ? JSON.parse(jsonStringOrObj) : jsonStringOrObj;
        if (!obj.id || !obj.name || !Array.isArray(obj.encounters)) {
          throw new Error("El archivo no tiene la estructura de juego requerida (debe contener id, name y encounters).");
        }
        this.register(obj);
        return { success: true, game: obj };
      } catch (err) {
        return { success: false, error: err.message };
      }
    }
  };
})();
