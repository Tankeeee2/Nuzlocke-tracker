/**
 * Datos de Pokémon Verde Hoja (LeafGreen) - Gen 3
 * Kanto + Islas Sevii completas con rutas, encuentros salvajes, eventos y medallas/hitos.
 */
(function() {
  const LEAFGREEN_DATA = {
    id: "leafgreen",
    name: "Pokémon Verde Hoja",
    generation: 3,
    region: "Kanto + Islas Sevii",
    badgeType: "badges", // "badges" | "trials"
    encounters: [
      {
        id: "pallet-town",
        name: "Pueblo Paleta",
        pokemon: [
          { name: "Magikarp", method: "Caña Vieja", minLevel: 5, maxLevel: 5, chance: 100 },
          { name: "Poliwag", method: "Caña Buena", minLevel: 5, maxLevel: 15, chance: 60 },
          { name: "Goldeen", method: "Caña Buena", minLevel: 5, maxLevel: 15, chance: 20 },
          { name: "Tentacool", method: "Surf", minLevel: 5, maxLevel: 40, chance: 100 }
        ]
      },
      {
        id: "route-1",
        name: "Ruta 1",
        pokemon: [
          { name: "Pidgey", method: "Hierba", minLevel: 2, maxLevel: 5, chance: 50 },
          { name: "Rattata", method: "Hierba", minLevel: 2, maxLevel: 4, chance: 50 }
        ]
      },
      {
        id: "route-22",
        name: "Ruta 22",
        pokemon: [
          { name: "Rattata", method: "Hierba", minLevel: 2, maxLevel: 5, chance: 45 },
          { name: "Mankey", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 45 },
          { name: "Spearow", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 10 },
          { name: "Magikarp", method: "Caña Vieja", minLevel: 5, maxLevel: 5, chance: 100 },
          { name: "Poliwag", method: "Caña Buena", minLevel: 5, maxLevel: 15, chance: 60 }
        ]
      },
      {
        id: "route-2",
        name: "Ruta 2",
        pokemon: [
          { name: "Pidgey", method: "Hierba", minLevel: 2, maxLevel: 5, chance: 45 },
          { name: "Rattata", method: "Hierba", minLevel: 2, maxLevel: 5, chance: 45 },
          { name: "Caterpie", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 5 },
          { name: "Weedle", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 5 }
        ]
      },
      {
        id: "viridian-forest",
        name: "Bosque Verde",
        pokemon: [
          { name: "Caterpie", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 40 },
          { name: "Metapod", method: "Hierba", minLevel: 4, maxLevel: 6, chance: 20 },
          { name: "Weedle", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 20 },
          { name: "Kakuna", method: "Hierba", minLevel: 4, maxLevel: 6, chance: 10 },
          { name: "Pikachu", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 5 }
        ]
      },
      {
        id: "route-3",
        name: "Ruta 3",
        pokemon: [
          { name: "Spearow", method: "Hierba", minLevel: 5, maxLevel: 8, chance: 35 },
          { name: "Pidgey", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 30 },
          { name: "Nidoran-F", method: "Hierba", minLevel: 6, maxLevel: 7, chance: 14 },
          { name: "Nidoran-M", method: "Hierba", minLevel: 6, maxLevel: 7, chance: 14 },
          { name: "Jigglypuff", method: "Hierba", minLevel: 3, maxLevel: 7, chance: 7 }
        ]
      },
      {
        id: "mt-moon",
        name: "Monte Moon",
        pokemon: [
          { name: "Zubat", method: "Cueva", minLevel: 7, maxLevel: 10, chance: 69 },
          { name: "Geodude", method: "Cueva", minLevel: 7, maxLevel: 10, chance: 25 },
          { name: "Paras", method: "Cueva", minLevel: 8, maxLevel: 10, chance: 5 },
          { name: "Clefairy", method: "Cueva", minLevel: 8, maxLevel: 12, chance: 1 }
        ]
      },
      {
        id: "route-4",
        name: "Ruta 4",
        pokemon: [
          { name: "Rattata", method: "Hierba", minLevel: 8, maxLevel: 12, chance: 35 },
          { name: "Spearow", method: "Hierba", minLevel: 8, maxLevel: 12, chance: 35 },
          { name: "Ekans", method: "Hierba", minLevel: 6, maxLevel: 12, chance: 25 },
          { name: "Mankey", method: "Hierba", minLevel: 10, maxLevel: 12, chance: 5 }
        ]
      },
      {
        id: "route-24",
        name: "Ruta 24 (Puente Pepita)",
        pokemon: [
          { name: "Bellsprout", method: "Hierba", minLevel: 12, maxLevel: 14, chance: 25 },
          { name: "Oddish", method: "Hierba", minLevel: 12, maxLevel: 14, chance: 25 },
          { name: "Pidgey", method: "Hierba", minLevel: 11, maxLevel: 13, chance: 20 },
          { name: "Abra", method: "Hierba", minLevel: 8, maxLevel: 12, chance: 15 },
          { name: "Caterpie", method: "Hierba", minLevel: 7, maxLevel: 11, chance: 10 },
          { name: "Metapod", method: "Hierba", minLevel: 8, maxLevel: 10, chance: 5 }
        ]
      },
      {
        id: "route-25",
        name: "Ruta 25",
        pokemon: [
          { name: "Bellsprout", method: "Hierba", minLevel: 12, maxLevel: 14, chance: 25 },
          { name: "Oddish", method: "Hierba", minLevel: 12, maxLevel: 14, chance: 25 },
          { name: "Pidgey", method: "Hierba", minLevel: 11, maxLevel: 13, chance: 20 },
          { name: "Abra", method: "Hierba", minLevel: 9, maxLevel: 12, chance: 15 },
          { name: "Caterpie", method: "Hierba", minLevel: 8, maxLevel: 11, chance: 10 }
        ]
      },
      {
        id: "route-5",
        name: "Ruta 5",
        pokemon: [
          { name: "Pidgey", method: "Hierba", minLevel: 13, maxLevel: 16, chance: 40 },
          { name: "Bellsprout", method: "Hierba", minLevel: 13, maxLevel: 16, chance: 35 },
          { name: "Meowth", method: "Hierba", minLevel: 10, maxLevel: 16, chance: 25 }
        ]
      },
      {
        id: "route-6",
        name: "Ruta 6",
        pokemon: [
          { name: "Pidgey", method: "Hierba", minLevel: 13, maxLevel: 16, chance: 40 },
          { name: "Bellsprout", method: "Hierba", minLevel: 13, maxLevel: 16, chance: 35 },
          { name: "Meowth", method: "Hierba", minLevel: 10, maxLevel: 16, chance: 25 },
          { name: "Psyduck", method: "Surf", minLevel: 20, maxLevel: 40, chance: 100 }
        ]
      },
      {
        id: "vermilion-city",
        name: "Ciudad Carmín",
        pokemon: [
          { name: "Magikarp", method: "Caña Vieja", minLevel: 5, maxLevel: 5, chance: 100 },
          { name: "Krabby", method: "Caña Buena", minLevel: 5, maxLevel: 15, chance: 60 },
          { name: "Shellder", method: "Supercaña", minLevel: 15, maxLevel: 25, chance: 40 }
        ]
      },
      {
        id: "route-11",
        name: "Ruta 11",
        pokemon: [
          { name: "Drowzee", method: "Hierba", minLevel: 11, maxLevel: 15, chance: 34 },
          { name: "Sandshrew", method: "Hierba", minLevel: 12, maxLevel: 15, chance: 25 },
          { name: "Spearow", method: "Hierba", minLevel: 13, maxLevel: 17, chance: 25 },
          { name: "Rattata", method: "Hierba", minLevel: 11, maxLevel: 15, chance: 16 }
        ]
      },
      {
        id: "digletts-cave",
        name: "Cueva Diglett",
        pokemon: [
          { name: "Diglett", method: "Cueva", minLevel: 15, maxLevel: 22, chance: 95 },
          { name: "Dugtrio", method: "Cueva", minLevel: 29, maxLevel: 31, chance: 5 }
        ]
      },
      {
        id: "route-9",
        name: "Ruta 9",
        pokemon: [
          { name: "Rattata", method: "Hierba", minLevel: 14, maxLevel: 17, chance: 35 },
          { name: "Spearow", method: "Hierba", minLevel: 13, maxLevel: 17, chance: 35 },
          { name: "Sandshrew", method: "Hierba", minLevel: 11, maxLevel: 17, chance: 30 }
        ]
      },
      {
        id: "route-10",
        name: "Ruta 10",
        pokemon: [
          { name: "Voltorb", method: "Hierba", minLevel: 14, maxLevel: 17, chance: 40 },
          { name: "Spearow", method: "Hierba", minLevel: 13, maxLevel: 17, chance: 35 },
          { name: "Magnemite", method: "Hierba", minLevel: 14, maxLevel: 17, chance: 25 }
        ]
      },
      {
        id: "rock-tunnel",
        name: "Túnel Roca",
        pokemon: [
          { name: "Zubat", method: "Cueva", minLevel: 15, maxLevel: 18, chance: 54 },
          { name: "Geodude", method: "Cueva", minLevel: 15, maxLevel: 17, chance: 30 },
          { name: "Machop", method: "Cueva", minLevel: 16, maxLevel: 18, chance: 15 },
          { name: "Onix", method: "Cueva", minLevel: 13, maxLevel: 17, chance: 1 }
        ]
      },
      {
        id: "pokemon-tower",
        name: "Torre Pokémon (Pueblo Lavanda)",
        pokemon: [
          { name: "Gastly", method: "Pisos 3-7", minLevel: 13, maxLevel: 24, chance: 85 },
          { name: "Haunter", method: "Pisos 4-7", minLevel: 20, maxLevel: 25, chance: 10 },
          { name: "Cubone", method: "Pisos 3-7", minLevel: 15, maxLevel: 19, chance: 5 }
        ]
      },
      {
        id: "route-8",
        name: "Ruta 8",
        pokemon: [
          { name: "Pidgey", method: "Hierba", minLevel: 18, maxLevel: 20, chance: 30 },
          { name: "Meowth", method: "Hierba", minLevel: 18, maxLevel: 20, chance: 29 },
          { name: "Bellsprout", method: "Hierba", minLevel: 18, maxLevel: 20, chance: 24 },
          { name: "Growlithe", method: "Hierba", minLevel: 15, maxLevel: 18, chance: 10 },
          { name: "Vulpix", method: "Hierba", minLevel: 15, maxLevel: 18, chance: 7 }
        ]
      },
      {
        id: "route-7",
        name: "Ruta 7",
        pokemon: [
          { name: "Meowth", method: "Hierba", minLevel: 19, maxLevel: 22, chance: 30 },
          { name: "Pidgey", method: "Hierba", minLevel: 19, maxLevel: 22, chance: 30 },
          { name: "Bellsprout", method: "Hierba", minLevel: 19, maxLevel: 22, chance: 20 },
          { name: "Vulpix", method: "Hierba", minLevel: 17, maxLevel: 20, chance: 20 }
        ]
      },
      {
        id: "route-16",
        name: "Ruta 16",
        pokemon: [
          { name: "Rattata", method: "Hierba", minLevel: 18, maxLevel: 22, chance: 30 },
          { name: "Raticate", method: "Hierba", minLevel: 23, maxLevel: 25, chance: 25 },
          { name: "Spearow", method: "Hierba", minLevel: 20, maxLevel: 22, chance: 25 },
          { name: "Doduo", method: "Hierba", minLevel: 18, maxLevel: 22, chance: 20 }
        ]
      },
      {
        id: "route-17",
        name: "Ruta 17 (Camino de Bicis)",
        pokemon: [
          { name: "Raticate", method: "Hierba", minLevel: 25, maxLevel: 29, chance: 30 },
          { name: "Fearow", method: "Hierba", minLevel: 25, maxLevel: 29, chance: 30 },
          { name: "Doduo", method: "Hierba", minLevel: 24, maxLevel: 28, chance: 25 },
          { name: "Ponyta", method: "Hierba", minLevel: 26, maxLevel: 28, chance: 15 }
        ]
      },
      {
        id: "route-18",
        name: "Ruta 18",
        pokemon: [
          { name: "Rattata", method: "Hierba", minLevel: 20, maxLevel: 24, chance: 30 },
          { name: "Raticate", method: "Hierba", minLevel: 25, maxLevel: 29, chance: 25 },
          { name: "Fearow", method: "Hierba", minLevel: 25, maxLevel: 29, chance: 25 },
          { name: "Doduo", method: "Hierba", minLevel: 24, maxLevel: 26, chance: 20 }
        ]
      },
      {
        id: "safari-zone",
        name: "Zona Safari",
        pokemon: [
          { name: "Nidoran-F", method: "Hierba", minLevel: 22, maxLevel: 24, chance: 20 },
          { name: "Nidorina", method: "Hierba", minLevel: 30, maxLevel: 32, chance: 15 },
          { name: "Rhyhorn", method: "Hierba", minLevel: 25, maxLevel: 28, chance: 20 },
          { name: "Venonat", method: "Hierba", minLevel: 22, maxLevel: 25, chance: 15 },
          { name: "Exeggcute", method: "Hierba", minLevel: 23, maxLevel: 25, chance: 15 },
          { name: "Scyther", method: "Hierba", minLevel: 23, maxLevel: 28, chance: 4 },
          { name: "Pinsir", method: "Hierba", minLevel: 23, maxLevel: 28, chance: 4 },
          { name: "Chansey", method: "Hierba", minLevel: 26, maxLevel: 28, chance: 4 },
          { name: "Tauros", method: "Hierba", minLevel: 25, maxLevel: 28, chance: 4 },
          { name: "Kangaskhan", method: "Hierba", minLevel: 25, maxLevel: 28, chance: 4 },
          { name: "Dratini", method: "Supercaña", minLevel: 15, maxLevel: 25, chance: 15 },
          { name: "Dragonair", method: "Supercaña", minLevel: 25, maxLevel: 35, chance: 1 }
        ]
      },
      {
        id: "route-12",
        name: "Ruta 12",
        pokemon: [
          { name: "Oddish", method: "Hierba", minLevel: 22, maxLevel: 26, chance: 35 },
          { name: "Bellsprout", method: "Hierba", minLevel: 22, maxLevel: 26, chance: 35 },
          { name: "Pidgey", method: "Hierba", minLevel: 23, maxLevel: 27, chance: 20 },
          { name: "Venonat", method: "Hierba", minLevel: 24, maxLevel: 26, chance: 10 }
        ]
      },
      {
        id: "route-13",
        name: "Ruta 13",
        pokemon: [
          { name: "Oddish", method: "Hierba", minLevel: 23, maxLevel: 27, chance: 30 },
          { name: "Bellsprout", method: "Hierba", minLevel: 23, maxLevel: 27, chance: 30 },
          { name: "Pidgey", method: "Hierba", minLevel: 25, maxLevel: 29, chance: 20 },
          { name: "Ditto", method: "Hierba", minLevel: 23, maxLevel: 25, chance: 10 }
        ]
      },
      {
        id: "route-14",
        name: "Ruta 14",
        pokemon: [
          { name: "Oddish", method: "Hierba", minLevel: 24, maxLevel: 26, chance: 30 },
          { name: "Gloom", method: "Hierba", minLevel: 30, maxLevel: 30, chance: 5 },
          { name: "Pidgey", method: "Hierba", minLevel: 26, maxLevel: 26, chance: 20 },
          { name: "Pidgeotto", method: "Hierba", minLevel: 28, maxLevel: 30, chance: 15 },
          { name: "Venonat", method: "Hierba", minLevel: 24, maxLevel: 26, chance: 15 }
        ]
      },
      {
        id: "route-15",
        name: "Ruta 15",
        pokemon: [
          { name: "Oddish", method: "Hierba", minLevel: 24, maxLevel: 26, chance: 30 },
          { name: "Bellsprout", method: "Hierba", minLevel: 24, maxLevel: 26, chance: 30 },
          { name: "Pidgeotto", method: "Hierba", minLevel: 28, maxLevel: 30, chance: 20 },
          { name: "Venonat", method: "Hierba", minLevel: 26, maxLevel: 28, chance: 15 }
        ]
      },
      {
        id: "power-plant",
        name: "Central de Energía",
        pokemon: [
          { name: "Magnemite", method: "Interior", minLevel: 22, maxLevel: 25, chance: 35 },
          { name: "Voltorb", method: "Interior", minLevel: 22, maxLevel: 25, chance: 30 },
          { name: "Pikachu", method: "Interior", minLevel: 22, maxLevel: 26, chance: 20 },
          { name: "Magneton", method: "Interior", minLevel: 31, maxLevel: 34, chance: 10 },
          { name: "Electabuzz", method: "Interior", minLevel: 32, maxLevel: 35, chance: 5 }
        ]
      },
      {
        id: "seafoam-islands",
        name: "Islas Espuma",
        pokemon: [
          { name: "Seel", method: "Cueva", minLevel: 28, maxLevel: 32, chance: 40 },
          { name: "Zubat", method: "Cueva", minLevel: 26, maxLevel: 30, chance: 25 },
          { name: "Golbat", method: "Cueva", minLevel: 30, maxLevel: 34, chance: 15 },
          { name: "Psyduck", method: "Cueva", minLevel: 29, maxLevel: 31, chance: 10 },
          { name: "Slowpoke", method: "Cueva", minLevel: 29, maxLevel: 31, chance: 10 }
        ]
      },
      {
        id: "pokemon-mansion",
        name: "Mansión Pokémon (Isla Canela)",
        pokemon: [
          { name: "Koffing", method: "Interior", minLevel: 28, maxLevel: 32, chance: 40 },
          { name: "Vulpix", method: "Interior", minLevel: 28, maxLevel: 30, chance: 30 },
          { name: "Ponyta", method: "Interior", minLevel: 28, maxLevel: 32, chance: 20 },
          { name: "Weezing", method: "Interior", minLevel: 34, maxLevel: 38, chance: 5 },
          { name: "Muk", method: "Interior", minLevel: 32, maxLevel: 34, chance: 5 }
        ]
      },
      {
        id: "victory-road-kanto",
        name: "Calle Victoria (Kanto)",
        pokemon: [
          { name: "Machop", method: "Cueva", minLevel: 36, maxLevel: 40, chance: 30 },
          { name: "Geodude", method: "Cueva", minLevel: 36, maxLevel: 41, chance: 25 },
          { name: "Golbat", method: "Cueva", minLevel: 38, maxLevel: 44, chance: 20 },
          { name: "Graveler", method: "Cueva", minLevel: 40, maxLevel: 45, chance: 15 },
          { name: "Machoke", method: "Cueva", minLevel: 41, maxLevel: 47, chance: 5 },
          { name: "Onix", method: "Cueva", minLevel: 41, maxLevel: 46, chance: 5 }
        ]
      },
      // Sevii Islands
      {
        id: "one-island-kindle-road",
        name: "Isla Prima - Camino Candente",
        pokemon: [
          { name: "Ponyta", method: "Hierba", minLevel: 31, maxLevel: 35, chance: 35 },
          { name: "Rapidash", method: "Hierba", minLevel: 37, maxLevel: 40, chance: 15 },
          { name: "Geodude", method: "Hierba", minLevel: 31, maxLevel: 34, chance: 25 },
          { name: "Fearow", method: "Hierba", minLevel: 35, maxLevel: 38, chance: 25 }
        ]
      },
      {
        id: "mt-ember",
        name: "Isla Prima - Monte Ascua",
        pokemon: [
          { name: "Machop", method: "Cueva", minLevel: 33, maxLevel: 37, chance: 35 },
          { name: "Geodude", method: "Cueva", minLevel: 33, maxLevel: 36, chance: 30 },
          { name: "Magmar", method: "Cueva", minLevel: 38, maxLevel: 40, chance: 10 },
          { name: "Graveler", method: "Cueva", minLevel: 38, maxLevel: 40, chance: 15 },
          { name: "Machoke", method: "Cueva", minLevel: 38, maxLevel: 41, chance: 10 }
        ]
      },
      {
        id: "three-island-berry-forest",
        name: "Isla Tera - Bosque Baya",
        pokemon: [
          { name: "Pidgey", method: "Hierba", minLevel: 30, maxLevel: 34, chance: 25 },
          { name: "Pidgeotto", method: "Hierba", minLevel: 34, maxLevel: 38, chance: 20 },
          { name: "Venonat", method: "Hierba", minLevel: 30, maxLevel: 33, chance: 25 },
          { name: "Drowzee", method: "Hierba", minLevel: 30, maxLevel: 34, chance: 20 },
          { name: "Hypno", method: "Hierba", minLevel: 36, maxLevel: 40, chance: 10 }
        ]
      },
      {
        id: "four-island-icefall-cave",
        name: "Isla Cuarta - Cueva Glaciada",
        pokemon: [
          { name: "Swinub", method: "Cueva", minLevel: 28, maxLevel: 34, chance: 40 },
          { name: "Delibird", method: "Cueva", minLevel: 30, maxLevel: 35, chance: 20 },
          { name: "Golbat", method: "Cueva", minLevel: 35, maxLevel: 40, chance: 20 },
          { name: "Seel", method: "Surf", minLevel: 25, maxLevel: 35, chance: 70 },
          { name: "Lapras", method: "Surf", minLevel: 25, maxLevel: 35, chance: 5 }
        ]
      },
      {
        id: "five-island-memorial-pillar",
        name: "Isla Quinta - Pilar Recuerdo",
        pokemon: [
          { name: "Hoppip", method: "Hierba", minLevel: 39, maxLevel: 42, chance: 45 },
          { name: "Bellsprout", method: "Hierba", minLevel: 38, maxLevel: 40, chance: 35 },
          { name: "Weepinbell", method: "Hierba", minLevel: 42, maxLevel: 44, chance: 20 }
        ]
      },
      {
        id: "cerulean-cave",
        name: "Cueva Celeste (Postgame)",
        pokemon: [
          { name: "Golbat", method: "Cueva", minLevel: 52, maxLevel: 60, chance: 25 },
          { name: "Magneton", method: "Cueva", minLevel: 55, maxLevel: 62, chance: 20 },
          { name: "Machoke", method: "Cueva", minLevel: 55, maxLevel: 62, chance: 20 },
          { name: "Parasect", method: "Cueva", minLevel: 52, maxLevel: 58, chance: 15 },
          { name: "Ditto", method: "Cueva", minLevel: 58, maxLevel: 67, chance: 10 },
          { name: "Wobbuffet", method: "Cueva", minLevel: 55, maxLevel: 65, chance: 10 }
        ]
      }
    ],

    events: [
      {
        id: "lg-starter",
        pokemon: "Bulbasaur / Charmander / Squirtle",
        method: "Inicial",
        location: "Pueblo Paleta (Laboratorio de Oak)",
        condition: "Elección al comenzar la partida (excluyentes)",
        level: 5,
        verified: true,
        source: "Profesor Oak"
      },
      {
        id: "lg-magikarp-r4",
        pokemon: "Magikarp",
        method: "Regalo",
        location: "Centro Pokémon de Ruta 4",
        condition: "Comprar por 500 Pokedólares al vendedor",
        level: 5,
        verified: true,
        source: "Vendedor ambulante"
      },
      {
        id: "lg-fossil-mtmoon",
        pokemon: "Omanyte (Fósil Hélix) / Kabuto (Fósil Domo)",
        method: "Fósil",
        location: "Monte Moon -> Revivir en Laboratorio Isla Canela",
        condition: "Elegir uno de los dos tras derrotar al Supernecio",
        level: 5,
        verified: true,
        source: "Científico Isla Canela"
      },
      {
        id: "lg-fossil-amber",
        pokemon: "Aerodactyl (Ámbar Viejo)",
        method: "Fósil",
        location: "Museo de Ciudad Plateada -> Isla Canela",
        condition: "Entrar por puerta trasera con Corte",
        level: 5,
        verified: true,
        source: "Científico Isla Canela"
      },
      {
        id: "lg-eevee",
        pokemon: "Eevee",
        method: "Regalo",
        location: "Mansión Azulona (Azotea)",
        condition: "Entrar por la parte trasera del edificio",
        level: 25,
        verified: true,
        source: "Poké Ball solitaria en la mesa"
      },
      {
        id: "lg-lapras",
        pokemon: "Lapras",
        method: "Regalo",
        location: "Silph S.A. (Piso 7)",
        condition: "Hablar con el empleado asustado tras derrotar al Rival",
        level: 25,
        verified: true,
        source: "Empleado de Silph S.A."
      },
      {
        id: "lg-hitmon",
        pokemon: "Hitmonlee / Hitmonchan",
        method: "Regalo",
        location: "Dojo Kárate (Ciudad Azafrán)",
        condition: "Derrotar al Maestro Kárate Kiyo (elegir 1 de los 2)",
        level: 25,
        verified: true,
        source: "Maestro Kárate"
      },
      {
        id: "lg-snorlax-r12",
        pokemon: "Snorlax",
        method: "Estático",
        location: "Ruta 12",
        condition: "Despertar con Poké Flauta",
        level: 30,
        verified: true,
        source: "Encuentro fijo bloqueando la ruta"
      },
      {
        id: "lg-snorlax-r16",
        pokemon: "Snorlax",
        method: "Estático",
        location: "Ruta 16",
        condition: "Despertar con Poké Flauta",
        level: 30,
        verified: true,
        source: "Encuentro fijo bloqueando la ruta"
      },
      {
        id: "lg-togepi-egg",
        pokemon: "Togepi",
        method: "Huevo",
        location: "Isla Prima (Camino Candente)",
        condition: "Tener espacio en el equipo",
        level: 1,
        verified: true,
        source: "Hombre amable en el laberinto"
      },
      {
        id: "lg-trade-mr-mime",
        pokemon: "Mr. Mime",
        method: "Intercambio",
        location: "Ruta 2 (Casa del ayudante de Oak)",
        condition: "Entregar un Abra",
        level: 11,
        verified: true,
        source: "NPC Marcelo"
      },
      {
        id: "lg-trade-jynx",
        pokemon: "Jynx",
        method: "Intercambio",
        location: "Ciudad Celeste (Casa junto al Centro Pokémon)",
        condition: "Entregar un Poliwhirl",
        level: 20,
        verified: true,
        source: "NPC Donatella"
      },
      {
        id: "lg-articuno",
        pokemon: "Articuno",
        method: "Estático Legendario",
        location: "Islas Espuma (Sótano 4)",
        condition: "Resolver puzzle de rocas con Fuerza",
        level: 50,
        verified: true,
        source: "Legendario salvaje"
      },
      {
        id: "lg-zapdos",
        pokemon: "Zapdos",
        method: "Estático Legendario",
        location: "Central de Energía",
        condition: "Llegar al final de la planta",
        level: 50,
        verified: true,
        source: "Legendario salvaje"
      },
      {
        id: "lg-moltres",
        pokemon: "Moltres",
        method: "Estático Legendario",
        location: "Isla Prima (Cima del Monte Ascua)",
        condition: "Requiere Fuerza",
        level: 50,
        verified: true,
        source: "Legendario salvaje"
      },
      {
        id: "lg-mewtwo",
        pokemon: "Mewtwo",
        method: "Estático Legendario",
        location: "Cueva Celeste",
        condition: "Postgame (tras reparar la máquina de redes con Rubí y Zafiro)",
        level: 70,
        verified: true,
        source: "Legendario supremo"
      }
    ],

    milestones: [
      {
        id: "badge-boulder",
        name: "Medalla Roca",
        leader: "Brock",
        city: "Ciudad Plateada",
        type: "Roca",
        levelCap: 14,
        icon: "🪨"
      },
      {
        id: "badge-cascade",
        name: "Medalla Cascada",
        leader: "Misty",
        city: "Ciudad Celeste",
        type: "Agua",
        levelCap: 21,
        icon: "💧"
      },
      {
        id: "badge-thunder",
        name: "Medalla Trueno",
        leader: "Lt. Surge",
        city: "Ciudad Carmín",
        type: "Eléctrico",
        levelCap: 24,
        icon: "⚡"
      },
      {
        id: "badge-rainbow",
        name: "Medalla Arcoíris",
        leader: "Erika",
        city: "Ciudad Azulona",
        type: "Planta",
        levelCap: 29,
        icon: "🌸"
      },
      {
        id: "badge-soul",
        name: "Medalla Alma",
        leader: "Koga",
        city: "Ciudad Fucsia",
        type: "Veneno",
        levelCap: 43,
        icon: "☠️"
      },
      {
        id: "badge-marsh",
        name: "Medalla Pantano",
        leader: "Sabrina",
        city: "Ciudad Azafrán",
        type: "Psíquico",
        levelCap: 43,
        icon: "🔮"
      },
      {
        id: "badge-volcano",
        name: "Medalla Volcán",
        leader: "Blaine",
        city: "Isla Canela",
        type: "Fuego",
        levelCap: 47,
        icon: "🔥"
      },
      {
        id: "badge-earth",
        name: "Medalla Tierra",
        leader: "Giovanni",
        city: "Ciudad Verde",
        type: "Tierra",
        levelCap: 50,
        icon: "🌍"
      },
      {
        id: "e4-lorelei",
        name: "Alto Mando: Lorelei",
        leader: "Lorelei",
        city: "Meseta Añil",
        type: "Hielo",
        levelCap: 54,
        icon: "❄️"
      },
      {
        id: "e4-bruno",
        name: "Alto Mando: Bruno",
        leader: "Bruno",
        city: "Meseta Añil",
        type: "Lucha",
        levelCap: 56,
        icon: "🥋"
      },
      {
        id: "e4-agatha",
        name: "Alto Mando: Agatha",
        leader: "Agatha",
        city: "Meseta Añil",
        type: "Fantasma",
        levelCap: 58,
        icon: "👻"
      },
      {
        id: "e4-lance",
        name: "Alto Mando: Lance",
        leader: "Lance",
        city: "Meseta Añil",
        type: "Dragón",
        levelCap: 60,
        icon: "🐉"
      },
      {
        id: "champion-blue",
        name: "Campeón de Kanto",
        leader: "Rival Azul",
        city: "Meseta Añil",
        type: "Variado",
        levelCap: 63,
        icon: "👑"
      },
      {
        id: "postgame-sevii",
        name: "Misión Islas Sevii (Rubí y Zafiro)",
        leader: "Team Rocket / Celio",
        city: "Islas Sevii",
        type: "Variado",
        levelCap: 66,
        icon: "🏝️"
      }
    ]
  };

  if (window.NuzlockeRegistry) {
    window.NuzlockeRegistry.register(LEAFGREEN_DATA);
  }
})();
