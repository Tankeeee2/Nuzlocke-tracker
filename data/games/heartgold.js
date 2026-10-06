/**
 * Datos de Pokémon Oro HeartGold (Gen 4)
 * Johto + Kanto completos, 16 medallas, eventos y combate cumbre en Monte Plateado.
 */
(function() {
  const HEATGOLD_DATA = {
    id: "heartgold",
    name: "Pokémon Oro HeartGold",
    generation: 4,
    region: "Johto + Kanto",
    badgeType: "badges",
    encounters: [
      {
        id: "new-bark-town",
        name: "Pueblo Primavera",
        pokemon: [
          { name: "Magikarp", method: "Caña Vieja", minLevel: 10, maxLevel: 10, chance: 95 },
          { name: "Tentacool", method: "Surf", minLevel: 15, maxLevel: 24, chance: 90 },
          { name: "Tentacruel", method: "Surf", minLevel: 20, maxLevel: 24, chance: 10 }
        ]
      },
      {
        id: "route-29",
        name: "Ruta 29",
        pokemon: [
          { name: "Pidgey", method: "Día", minLevel: 2, maxLevel: 4, chance: 55 },
          { name: "Sentret", method: "Día", minLevel: 2, maxLevel: 3, chance: 40 },
          { name: "Rattata", method: "Día/Noche", minLevel: 2, maxLevel: 4, chance: 20 },
          { name: "Hoothoot", method: "Noche", minLevel: 2, maxLevel: 4, chance: 85 }
        ]
      },
      {
        id: "route-30",
        name: "Ruta 30",
        pokemon: [
          { name: "Pidgey", method: "Día", minLevel: 3, maxLevel: 4, chance: 40 },
          { name: "Caterpie", method: "Día", minLevel: 3, maxLevel: 4, chance: 50 },
          { name: "Metapod", method: "Día", minLevel: 4, maxLevel: 4, chance: 10 },
          { name: "Spinarak", method: "Noche", minLevel: 3, maxLevel: 4, chance: 35 },
          { name: "Poliwag", method: "Surf", minLevel: 10, maxLevel: 20, chance: 90 }
        ]
      },
      {
        id: "route-31",
        name: "Ruta 31",
        pokemon: [
          { name: "Bellsprout", method: "Hierba", minLevel: 4, maxLevel: 5, chance: 35 },
          { name: "Pidgey", method: "Día", minLevel: 4, maxLevel: 5, chance: 30 },
          { name: "Caterpie", method: "Día", minLevel: 4, maxLevel: 5, chance: 35 },
          { name: "Gastly", method: "Noche", minLevel: 4, maxLevel: 5, chance: 30 }
        ]
      },
      {
        id: "dark-cave",
        name: "Cueva Oscura (Entrada Sur)",
        pokemon: [
          { name: "Zubat", method: "Cueva", minLevel: 2, maxLevel: 4, chance: 60 },
          { name: "Geodude", method: "Cueva", minLevel: 2, maxLevel: 4, chance: 35 },
          { name: "Dunsparce", method: "Cueva", minLevel: 3, maxLevel: 4, chance: 5 }
        ]
      },
      {
        id: "sprout-tower",
        name: "Torre Bellsprout (Ciudad Malva)",
        pokemon: [
          { name: "Rattata", method: "Pisos 1-3", minLevel: 3, maxLevel: 6, chance: 85 },
          { name: "Gastly", method: "Noche", minLevel: 3, maxLevel: 6, chance: 85 }
        ]
      },
      {
        id: "ruins-of-alph",
        name: "Ruinas Alfa",
        pokemon: [
          { name: "Unown", method: "Cámaras interiores", minLevel: 5, maxLevel: 5, chance: 100 },
          { name: "Wooper", method: "Surf", minLevel: 10, maxLevel: 25, chance: 90 },
          { name: "Quagsire", method: "Surf", minLevel: 15, maxLevel: 25, chance: 10 }
        ]
      },
      {
        id: "route-32",
        name: "Ruta 32",
        pokemon: [
          { name: "Mareep", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 20 },
          { name: "Bellsprout", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 20 },
          { name: "Ekans", method: "Hierba", minLevel: 4, maxLevel: 6, chance: 20 },
          { name: "Hoppip", method: "Hierba", minLevel: 6, maxLevel: 7, chance: 20 },
          { name: "Wooper", method: "Noche", minLevel: 6, maxLevel: 8, chance: 35 }
        ]
      },
      {
        id: "union-cave",
        name: "Cueva Unión",
        pokemon: [
          { name: "Geodude", method: "Cueva", minLevel: 4, maxLevel: 6, chance: 30 },
          { name: "Zubat", method: "Cueva", minLevel: 4, maxLevel: 6, chance: 25 },
          { name: "Sandshrew", method: "Cueva", minLevel: 4, maxLevel: 6, chance: 20 },
          { name: "Onix", method: "Cueva", minLevel: 5, maxLevel: 7, chance: 15 },
          { name: "Wooper", method: "Cueva", minLevel: 4, maxLevel: 6, chance: 10 }
        ]
      },
      {
        id: "slowpoke-well",
        name: "Pozo Slowpoke",
        pokemon: [
          { name: "Zubat", method: "Cueva", minLevel: 5, maxLevel: 7, chance: 85 },
          { name: "Slowpoke", method: "Cueva", minLevel: 6, maxLevel: 8, chance: 15 }
        ]
      },
      {
        id: "ilex-forest",
        name: "Encinar",
        pokemon: [
          { name: "Caterpie", method: "Día", minLevel: 5, maxLevel: 6, chance: 40 },
          { name: "Metapod", method: "Día", minLevel: 6, maxLevel: 6, chance: 20 },
          { name: "Oddish", method: "Noche", minLevel: 5, maxLevel: 6, chance: 45 },
          { name: "Paras", method: "Hierba", minLevel: 6, maxLevel: 6, chance: 15 },
          { name: "Psyduck", method: "Surf", minLevel: 10, maxLevel: 20, chance: 90 }
        ]
      },
      {
        id: "route-34",
        name: "Ruta 34",
        pokemon: [
          { name: "Drowzee", method: "Hierba", minLevel: 10, maxLevel: 12, chance: 50 },
          { name: "Rattata", method: "Hierba", minLevel: 10, maxLevel: 12, chance: 20 },
          { name: "Abra", method: "Hierba", minLevel: 10, maxLevel: 12, chance: 10 },
          { name: "Ditto", method: "Hierba", minLevel: 10, maxLevel: 10, chance: 5 }
        ]
      },
      {
        id: "route-35",
        name: "Ruta 35",
        pokemon: [
          { name: "Pidgey", method: "Hierba", minLevel: 12, maxLevel: 14, chance: 30 },
          { name: "Nidoran-F", method: "Hierba", minLevel: 12, maxLevel: 12, chance: 30 },
          { name: "Nidoran-M", method: "Hierba", minLevel: 12, maxLevel: 12, chance: 30 },
          { name: "Yanma", method: "Hierba", minLevel: 12, maxLevel: 12, chance: 1 }
        ]
      },
      {
        id: "national-park",
        name: "Parque Nacional",
        pokemon: [
          { name: "Pidgey", method: "Hierba", minLevel: 10, maxLevel: 14, chance: 30 },
          { name: "Nidoran-F", method: "Hierba", minLevel: 12, maxLevel: 12, chance: 20 },
          { name: "Nidoran-M", method: "Hierba", minLevel: 12, maxLevel: 12, chance: 20 },
          { name: "Sunkern", method: "Día", minLevel: 10, maxLevel: 14, chance: 25 },
          { name: "Scyther", method: "Concurso Caza Bichos", minLevel: 13, maxLevel: 14, chance: 5 },
          { name: "Pinsir", method: "Concurso Caza Bichos", minLevel: 13, maxLevel: 14, chance: 5 }
        ]
      },
      {
        id: "route-36",
        name: "Ruta 36",
        pokemon: [
          { name: "Nidoran-F", method: "Hierba", minLevel: 13, maxLevel: 13, chance: 30 },
          { name: "Nidoran-M", method: "Hierba", minLevel: 13, maxLevel: 13, chance: 30 },
          { name: "Pidgey", method: "Hierba", minLevel: 13, maxLevel: 15, chance: 25 },
          { name: "Growlithe", method: "Hierba", minLevel: 13, maxLevel: 15, chance: 10 },
          { name: "Stantler", method: "Hierba", minLevel: 13, maxLevel: 15, chance: 5 }
        ]
      },
      {
        id: "route-37",
        name: "Ruta 37",
        pokemon: [
          { name: "Pidgey", method: "Día", minLevel: 15, maxLevel: 15, chance: 30 },
          { name: "Pidgeotto", method: "Día", minLevel: 17, maxLevel: 17, chance: 10 },
          { name: "Growlithe", method: "Hierba", minLevel: 13, maxLevel: 16, chance: 30 },
          { name: "Stantler", method: "Hierba", minLevel: 15, maxLevel: 16, chance: 30 }
        ]
      },
      {
        id: "burned-tower",
        name: "Torre Quemada (Ciudad Iris)",
        pokemon: [
          { name: "Rattata", method: "Planta Baja", minLevel: 13, maxLevel: 15, chance: 50 },
          { name: "Zubat", method: "Planta Baja", minLevel: 14, maxLevel: 16, chance: 35 },
          { name: "Koffing", method: "Sótano", minLevel: 14, maxLevel: 16, chance: 50 },
          { name: "Magmar", method: "Sótano", minLevel: 16, maxLevel: 16, chance: 10 }
        ]
      },
      {
        id: "route-38",
        name: "Ruta 38",
        pokemon: [
          { name: "Raticate", method: "Hierba", minLevel: 16, maxLevel: 17, chance: 30 },
          { name: "Magnemite", method: "Hierba", minLevel: 16, maxLevel: 16, chance: 20 },
          { name: "Pidgeotto", method: "Hierba", minLevel: 16, maxLevel: 17, chance: 20 },
          { name: "Miltank", method: "Hierba", minLevel: 13, maxLevel: 13, chance: 5 },
          { name: "Tauros", method: "Hierba", minLevel: 13, maxLevel: 13, chance: 4 }
        ]
      },
      {
        id: "route-39",
        name: "Ruta 39",
        pokemon: [
          { name: "Raticate", method: "Hierba", minLevel: 16, maxLevel: 18, chance: 30 },
          { name: "Magnemite", method: "Hierba", minLevel: 16, maxLevel: 16, chance: 20 },
          { name: "Pidgeotto", method: "Hierba", minLevel: 16, maxLevel: 18, chance: 20 },
          { name: "Miltank", method: "Hierba", minLevel: 15, maxLevel: 15, chance: 5 },
          { name: "Tauros", method: "Hierba", minLevel: 15, maxLevel: 15, chance: 4 }
        ]
      },
      {
        id: "route-40",
        name: "Ruta 40",
        pokemon: [
          { name: "Tentacool", method: "Surf", minLevel: 15, maxLevel: 24, chance: 90 },
          { name: "Tentacruel", method: "Surf", minLevel: 20, maxLevel: 24, chance: 10 },
          { name: "Magikarp", method: "Caña", minLevel: 10, maxLevel: 10, chance: 95 }
        ]
      },
      {
        id: "route-41",
        name: "Ruta 41 / Islas Remolino",
        pokemon: [
          { name: "Tentacool", method: "Surf", minLevel: 15, maxLevel: 24, chance: 60 },
          { name: "Mantine", method: "Surf (HG exclusivo)", minLevel: 20, maxLevel: 24, chance: 10 },
          { name: "Tentacruel", method: "Surf", minLevel: 20, maxLevel: 24, chance: 10 }
        ]
      },
      {
        id: "route-42",
        name: "Ruta 42",
        pokemon: [
          { name: "Mareep", method: "Hierba", minLevel: 14, maxLevel: 16, chance: 30 },
          { name: "Flaaffy", method: "Hierba", minLevel: 15, maxLevel: 17, chance: 10 },
          { name: "Mankey", method: "Hierba", minLevel: 13, maxLevel: 17, chance: 30 },
          { name: "Golbat", method: "Noche", minLevel: 15, maxLevel: 17, chance: 30 }
        ]
      },
      {
        id: "lake-of-rage",
        name: "Lago de la Furia",
        pokemon: [
          { name: "Magikarp", method: "Surf/Caña", minLevel: 10, maxLevel: 25, chance: 90 },
          { name: "Gyarados", method: "Surf", minLevel: 15, maxLevel: 25, chance: 10 }
        ]
      },
      {
        id: "route-43",
        name: "Ruta 43",
        pokemon: [
          { name: "Pidgeotto", method: "Hierba", minLevel: 15, maxLevel: 17, chance: 35 },
          { name: "Girafarig", method: "Hierba", minLevel: 15, maxLevel: 17, chance: 30 },
          { name: "Venonat", method: "Hierba", minLevel: 15, maxLevel: 17, chance: 25 }
        ]
      },
      {
        id: "ice-path",
        name: "Ruta Helada",
        pokemon: [
          { name: "Swinub", method: "Cueva", minLevel: 21, maxLevel: 24, chance: 40 },
          { name: "Golbat", method: "Cueva", minLevel: 22, maxLevel: 24, chance: 30 },
          { name: "Delibird", method: "Cueva (HG exclusivo)", minLevel: 22, maxLevel: 22, chance: 20 },
          { name: "Jynx", method: "Cueva", minLevel: 22, maxLevel: 22, chance: 10 }
        ]
      },
      {
        id: "dragons-den",
        name: "Guarida Dragón (Ciudad Endrino)",
        pokemon: [
          { name: "Magikarp", method: "Surf/Caña", minLevel: 10, maxLevel: 20, chance: 80 },
          { name: "Dratini", method: "Surf/Supercaña", minLevel: 10, maxLevel: 20, chance: 10 },
          { name: "Dragonair", method: "Supercaña", minLevel: 20, maxLevel: 30, chance: 10 }
        ]
      },
      {
        id: "route-45",
        name: "Ruta 45",
        pokemon: [
          { name: "Geodude", method: "Hierba", minLevel: 23, maxLevel: 27, chance: 30 },
          { name: "Graveler", method: "Hierba", minLevel: 25, maxLevel: 27, chance: 15 },
          { name: "Phanpy", method: "Hierba (Mañana HG)", minLevel: 20, maxLevel: 20, chance: 20 },
          { name: "Gligar", method: "Hierba (HG exclusivo)", minLevel: 24, maxLevel: 24, chance: 20 },
          { name: "Skarmory", method: "Hierba", minLevel: 27, maxLevel: 27, chance: 5 }
        ]
      },
      {
        id: "victory-road-johto",
        name: "Calle Victoria (Johto)",
        pokemon: [
          { name: "Golbat", method: "Cueva", minLevel: 32, maxLevel: 36, chance: 30 },
          { name: "Graveler", method: "Cueva", minLevel: 32, maxLevel: 35, chance: 30 },
          { name: "Onix", method: "Cueva", minLevel: 34, maxLevel: 36, chance: 20 },
          { name: "Rhyhorn", method: "Cueva", minLevel: 33, maxLevel: 35, chance: 10 },
          { name: "Donphan", method: "Cueva", minLevel: 34, maxLevel: 34, chance: 10 }
        ]
      },
      {
        id: "mt-silver",
        name: "Monte Plateado (Postgame)",
        pokemon: [
          { name: "Golbat", method: "Cueva", minLevel: 44, maxLevel: 48, chance: 25 },
          { name: "Graveler", method: "Cueva", minLevel: 44, maxLevel: 48, chance: 20 },
          { name: "Ursaring", method: "Cueva", minLevel: 46, maxLevel: 51, chance: 15 },
          { name: "Donphan", method: "Cueva", minLevel: 46, maxLevel: 51, chance: 15 },
          { name: "Steelix", method: "Cueva", minLevel: 48, maxLevel: 50, chance: 10 },
          { name: "Larvitar", method: "Cueva", minLevel: 15, maxLevel: 20, chance: 10 },
          { name: "Pupitar", method: "Cueva", minLevel: 40, maxLevel: 45, chance: 5 }
        ]
      }
    ],

    events: [
      {
        id: "hg-starter",
        pokemon: "Chikorita / Cyndaquil / Totodile",
        method: "Inicial",
        location: "Pueblo Primavera (Laboratorio Elm)",
        condition: "Elección al comenzar",
        level: 5,
        verified: true,
        source: "Profesor Elm"
      },
      {
        id: "hg-togepi-egg",
        pokemon: "Togepi",
        method: "Huevo",
        location: "Ciudad Malva (Tienda Pokémon)",
        condition: "Derrotar a Pegaso y hablar con el ayudante",
        level: 1,
        verified: true,
        source: "Ayudante del Prof. Elm"
      },
      {
        id: "hg-spearow-kenya",
        pokemon: "Spearow (Kenya con Carta)",
        method: "Regalo",
        location: "Ruta 35 (Caseta del guardia norte)",
        condition: "Aceptar llevar la carta a la Ruta 31",
        level: 20,
        verified: true,
        source: "Guardia Randy"
      },
      {
        id: "hg-eevee-bill",
        pokemon: "Eevee",
        method: "Regalo",
        location: "Ciudad Trigal (Casa de Bill)",
        condition: "Visitar a Bill tras encontrarlo en el Centro Pokémon de Iris",
        level: 5,
        verified: true,
        source: "Bill"
      },
      {
        id: "hg-shuckle",
        pokemon: "Shuckle (Shuckie)",
        method: "Regalo",
        location: "Ciudad Orquídea (Casa de Kirk)",
        condition: "Aceptar cuidárselo para que el Rival no se lo robe",
        level: 20,
        verified: true,
        source: "Entrenador Kirk"
      },
      {
        id: "hg-tyrogue",
        pokemon: "Tyrogue",
        method: "Regalo",
        location: "Monte Mortero (Sótano)",
        condition: "Derrotar al Maestro Kiyo en combate y llevar 1 hueco libre",
        level: 10,
        verified: true,
        source: "Maestro Kárate Kiyo"
      },
      {
        id: "hg-dratini-extremespeed",
        pokemon: "Dratini (con Velocidad Extrema)",
        method: "Regalo",
        location: "Guarida Dragón (Santuario del Anciano)",
        condition: "Responder correctamente las preguntas de honor",
        level: 15,
        verified: true,
        source: "Anciano del Clan Dragón"
      },
      {
        id: "hg-sudowoodo",
        pokemon: "Sudowoodo",
        method: "Estático",
        location: "Ruta 36",
        condition: "Usar Regadera tras vencer en Gimnasio Trigal",
        level: 20,
        verified: true,
        source: "Árbol parlante bloqueando la intersección"
      },
      {
        id: "hg-red-gyarados",
        pokemon: "Gyarados (Shiny Rojo)",
        method: "Estático",
        location: "Lago de la Furia",
        condition: "Interactuar en el centro del lago",
        level: 30,
        verified: true,
        source: "Encuentro fijo de historia"
      },
      {
        id: "hg-lapras-friday",
        pokemon: "Lapras",
        method: "Estático",
        location: "Cueva Unión (Sótano B2F)",
        condition: "Solo aparece los viernes con Surf",
        level: 20,
        verified: true,
        source: "Lago subterráneo"
      },
      {
        id: "hg-ho-oh",
        pokemon: "Ho-Oh",
        method: "Estático Legendario",
        location: "Torre Campana / Hojalata",
        condition: "Tener Campana Clara y Ala Arcoíris, vencer a las Chicas Kimono",
        level: 45,
        verified: true,
        source: "Legendario de portada HG"
      },
      {
        id: "hg-lugia",
        pokemon: "Lugia",
        method: "Estático Legendario",
        location: "Islas Remolino (Cascada profunda)",
        condition: "Tener Ala Plateada y Campana Oleaje (Postgame)",
        level: 70,
        verified: true,
        source: "Legendario guardián"
      },
      {
        id: "hg-snorlax",
        pokemon: "Snorlax",
        method: "Estático",
        location: "Boca de Cueva Diglett (Kanto)",
        condition: "Sintonizar la Poké Flauta en el PokéGear",
        level: 50,
        verified: true,
        source: "Encuentro fijo bloqueando Kanto"
      }
    ],

    milestones: [
      {
        id: "hg-badge-zephyr",
        name: "Medalla Céfiro",
        leader: "Pegaso",
        city: "Ciudad Malva",
        type: "Volador",
        levelCap: 13,
        icon: "🪶"
      },
      {
        id: "hg-badge-hive",
        name: "Medalla Colmena",
        leader: "Antón",
        city: "Pueblo Azalea",
        type: "Bicho",
        levelCap: 17,
        icon: "🐝"
      },
      {
        id: "hg-badge-plain",
        name: "Medalla Planicie",
        leader: "Blanca",
        city: "Ciudad Trigal",
        type: "Normal",
        levelCap: 19,
        icon: "🐮"
      },
      {
        id: "hg-badge-fog",
        name: "Medalla Niebla",
        leader: "Morti",
        city: "Ciudad Iris",
        type: "Fantasma",
        levelCap: 25,
        icon: "👻"
      },
      {
        id: "hg-badge-storm",
        name: "Medalla Tormenta",
        leader: "Aníbal",
        city: "Ciudad Orquídea",
        type: "Lucha",
        levelCap: 31,
        icon: "🥊"
      },
      {
        id: "hg-badge-mineral",
        name: "Medalla Mineral",
        leader: "Yasmina",
        city: "Ciudad Olivo",
        type: "Acero",
        levelCap: 35,
        icon: "⚙️"
      },
      {
        id: "hg-badge-glacier",
        name: "Medalla Glaciar",
        leader: "Fredo",
        city: "Pueblo Caoba",
        type: "Hielo",
        levelCap: 34,
        icon: "🧊"
      },
      {
        id: "hg-badge-rising",
        name: "Medalla Dragón",
        leader: "Débora",
        city: "Ciudad Endrino",
        type: "Dragón",
        levelCap: 41,
        icon: "🐉"
      },
      {
        id: "hg-e4-lance",
        name: "Campeón de la Liga Johto",
        leader: "Lance",
        city: "Meseta Añil",
        type: "Dragón",
        levelCap: 50,
        icon: "👑"
      },
      // Kanto Medallas
      {
        id: "hg-badge-lt-surge",
        name: "Medalla Trueno (Kanto)",
        leader: "Lt. Surge",
        city: "Ciudad Carmín",
        type: "Eléctrico",
        levelCap: 53,
        icon: "⚡"
      },
      {
        id: "hg-badge-sabrina",
        name: "Medalla Pantano (Kanto)",
        leader: "Sabrina",
        city: "Ciudad Azafrán",
        type: "Psíquico",
        levelCap: 55,
        icon: "🔮"
      },
      {
        id: "hg-badge-misty",
        name: "Medalla Cascada (Kanto)",
        leader: "Misty",
        city: "Ciudad Celeste",
        type: "Agua",
        levelCap: 54,
        icon: "💧"
      },
      {
        id: "hg-badge-erika",
        name: "Medalla Arcoíris (Kanto)",
        leader: "Erika",
        city: "Ciudad Azulona",
        type: "Planta",
        levelCap: 56,
        icon: "🌸"
      },
      {
        id: "hg-badge-janine",
        name: "Medalla Alma (Kanto)",
        leader: "Sachiko (Janine)",
        city: "Ciudad Fucsia",
        type: "Veneno",
        levelCap: 50,
        icon: "☠️"
      },
      {
        id: "hg-badge-brock",
        name: "Medalla Roca (Kanto)",
        leader: "Brock",
        city: "Ciudad Plateada",
        type: "Roca",
        levelCap: 54,
        icon: "🪨"
      },
      {
        id: "hg-badge-blaine",
        name: "Medalla Volcán (Kanto)",
        leader: "Blaine",
        city: "Islas Espuma",
        type: "Fuego",
        levelCap: 59,
        icon: "🔥"
      },
      {
        id: "hg-badge-blue",
        name: "Medalla Tierra (Kanto)",
        leader: "Azul (Blue)",
        city: "Ciudad Verde",
        type: "Variado",
        levelCap: 60,
        icon: "🌍"
      },
      {
        id: "hg-final-red",
        name: "Duelo Legendario en la Cima",
        leader: "Rojo (Red)",
        city: "Monte Plateado",
        type: "Supremo",
        levelCap: 88,
        icon: "⚡"
      }
    ]
  };

  if (window.NuzlockeRegistry) {
    window.NuzlockeRegistry.register(HEATGOLD_DATA);
  }
})();
