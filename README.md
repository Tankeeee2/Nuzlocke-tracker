# 🏆 Nuzlocke Tracker Multijuego

Aplicación web profesional, ágil y autocontenida (Single Page Application) diseñada específicamente para llevar el control exhaustivo de tus partidas **Nuzlocke** en múltiples juegos de Pokémon.

Funciona al 100% en el navegador, **sin necesidad de servidores backend ni bases de datos complejas**. Es perfecta para ejecutar en local o alojar gratis en **GitHub Pages**.

---

## 🎮 1. Juegos Soportados de Forma Nativa

1. **Pokémon Verde Hoja (LeafGreen)** — *Gen 3, Kanto + Islas Sevii completas*
2. **Pokémon Oro HeartGold** — *Gen 4, Johto + Kanto + Combate en la cumbre contra Rojo*
3. **Pokémon Esmeralda (Emerald)** — *Gen 3, Hoenn + Frente de Batalla*
4. **Pokémon Platino (Platinum)** — *Gen 4, Sinnoh expandido + Mundo Distorsión*
5. **Pokémon Blanco 2 (Black 2)** — *Gen 5, Teselia B2W2*
6. **Pokémon Ultrasol (Ultra Sun)** — *Gen 7, Alola (Sistema fiel de Pruebas Insulares, Pokémon Dominantes/Totem, Kahunas y Gran Prueba)*
7. **Pokémon Espada (Sword)** — *Gen 8, Galar + Todas las subzonas del Área Salvaje + Copa de Campeones*

---

## 🚀 2. Características Principales

### 2.1 Gestión de Múltiples Runs
* Crea tantas partidas como desees (*ej: "Esmeralda Run 1", "Platino Hardcore"*).
* Cada run almacena su juego, fecha de inicio, notas y reglas independientes.
* Cambia entre partidas en un clic, duplícalas, archívalas o bórralas.
* **Copias de seguridad**: Exporta e importa tus partidas o el backup completo en archivos `.json`.

### 2.2 Tracker de Encuentros por Ruta/Zona
* Rutas y zonas ordenadas canónicamente según la progresión del juego.
* **Autocompletado de especies con sprites oficiales** en tiempo real.
* Panel desplegable con los Pokémon posibles de cada zona (método: *hierba, surf, caña, cueva...* y porcentaje de aparición) con botón de selección rápida.
* Registro de: *Mote, Nivel, Naturaleza (con buffs/debuffs), Habilidad, Objeto equipado y marca de Shiny ✨*.
* Estados soportados: `En Equipo`, `En Caja`, `Capturado`, `Muerto 💀`, `Perdido/Huyó`, `Falló la captura`, `Duplicado - re-roll`, `Sin encuentro`.
* Registro detallado para bajas (causa de la muerte y quién lo mató).
* **Dupes Clause configurable**: Si ya tienes esa especie o cualquiera de su línea evolutiva, la app te avisa al instante para que puedas hacer re-roll.
* **Aviso preventivo de 2ª captura**: Alerta si intentas registrar una captura en una ruta que ya tiene un Pokémon asignado.

### 2.3 Pokémon de Evento, Regalos y Especiales
* Sección específica para todo lo que no sea hierba salvaje:
  * Iniciales (*Starters*).
  * Regalos de NPC y postgame.
  * Huevos con su ubicación y NPC.
  * Legendarios y estáticos.
  * Intercambios in-game (con el Pokémon requerido).
  * Fósiles.
  * Ultraentes (Ultrasol) y encuentros especiales de Galar (Espada).
* Opción global en la run: *Contar Pokémon de evento como encuentro de ruta (Sí / No / Por categoría)*.

### 2.4 Medallas y Progreso Adaptado
* Panel visual con cada líder, ciudad, tipo elemental y nivel máximo de su equipo (**Level Cap** opcional para Hardcore Nuzlockes).
* **Adaptación específica por juego**:
  * *Ultrasol*: Modela las **Pruebas de las Islas, Pokémon Totem con aura y Grandes Pruebas de Kahunas** en lugar de medallas convencionales.
  * *HeartGold*: Incluye las 8 de Johto, las 8 de Kanto y a Red en Monte Plateado.
  * *Espada*: Desafío de Gimnasios y Copa de Campeones.
* Posibilidad de añadir **Hitos Personalizados** (combates con rivales, comandantes villanos, etc.).
* Barra de progreso general calculada automáticamente.

### 2.5 Salón de la Fama (Hall of Fame) con Exportación a PNG
* Al completar la run, inmortaliza a tus 6 campeones (sprites, mote, especie, nivel, objeto, habilidad y sus 4 movimientos).
* Guarda estadísticas: fecha de victoria, tiempo de juego, muertes totales y wipes/intentos.
* **Exportar como Imagen PNG**: Genera automáticamente una tarjeta HD (1280x720) dibujada con HTML5 Canvas para compartir directamente en Discord o Twitter.

---

## 🧩 3. Arquitectura Extensible: Cómo añadir más juegos

La app utiliza un registro central desacoplado (`NuzlockeRegistry`). **Para añadir un nuevo juego (o un hackrom como *Radical Red*), NO necesitas tocar ni una línea del código principal de la app**:

1. Crea un archivo `data/games/mi_juego.js` siguiendo la estructura:
```javascript
(function() {
  const MI_JUEGO = {
    id: "radical-red",
    name: "Pokémon Radical Red",
    generation: 3,
    region: "Kanto",
    badgeType: "badges",
    encounters: [
      { id: "route-1", name: "Ruta 1", pokemon: [{ name: "Pidgey", method: "Hierba", chance: 50 }] }
    ],
    events: [...],
    milestones: [...]
  };

  if (window.NuzlockeRegistry) {
    window.NuzlockeRegistry.register(MI_JUEGO);
  }
})();
```
2. Añade la etiqueta `<script src="data/games/mi_juego.js"></script>` en `index.html`, **o bien** usa el botón **"Importar Archivo"** de la interfaz para cargar un archivo `.json` con esa estructura directamente desde el navegador.

---

## 🌐 4. Cómo Desplegar en GitHub Pages

1. Inicializa el repositorio Git y sube los archivos a GitHub:
```bash
git init
git add .
git commit -m "feat: Nuzlocke Tracker Multijuego v1.0"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```
2. En tu repositorio en GitHub, entra a **Settings** -> **Pages**.
3. En **Build and deployment** -> **Branch**, selecciona `main` y `/ (root)`.
4. Pulsa en **Save**. En menos de 1 minuto tendrás tu tracker disponible en:
`https://TU_USUARIO.github.io/TU_REPOSITORIO/`

---

## 💻 5. Uso en Local

Basta con hacer doble clic en `index.html` o abrirlo con cualquier navegador web moderno (Chrome, Firefox, Brave, Edge). Todos los datos se guardan de forma instantánea y persistente en el `localStorage` de tu navegador.
