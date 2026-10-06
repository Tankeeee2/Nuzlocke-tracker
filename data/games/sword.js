/**
 * Datos de Pokémon Espada (Gen 8)
 * Galar completo, rutas, subzonas del Área Salvaje, 8 gimnasios, Copa de Campeones y eventos.
 */
(function() {
  const SWORD_DATA = {
    id: "sword",
    name: "Pokémon Espada",
    generation: 8,
    region: "Galar + Área Salvaje",
    badgeType: "badges",
    encounters: [
      {
        id: "slumbering-weald",
        name: "Bosque Onírico",
        pokemon: [
          { name: "Skwovet", method: "Hierba", minLevel: 2, maxLevel: 3, chance: 40 },
          { name: "Rookidee", method: "Hierba", minLevel: 2, maxLevel: 3, chance: 35 },
          { name: "Grubbin", method: "Hierba", minLevel: 2, maxLevel: 3, chance: 15 },
          { name: "Blipbug", method: "Hierba", minLevel: 2, maxLevel: 3, chance: 10 }
        ]
      },
      {
        id: "route-1-galar",
        name: "Ruta 1 (Galar)",
        pokemon: [
          { name: "Skwovet", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 30 },
          { name: "Rookidee", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 30 },
          { name: "Wooloo", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 25 },
          { name: "Nickit", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 15 }
        ]
      },
      {
        id: "route-2-galar",
        name: "Ruta 2 (Galar)",
        pokemon: [
          { name: "Chewtle", method: "Hierba", minLevel: 5, maxLevel: 7, chance: 30 },
          { name: "Rookidee", method: "Hierba", minLevel: 5, maxLevel: 7, chance: 25 },
          { name: "Skwovet", method: "Hierba", minLevel: 5, maxLevel: 7, chance: 20 },
          { name: "Yamper", method: "Hierba", minLevel: 5, maxLevel: 7, chance: 15 },
          { name: "Galarian Zigzagoon", method: "Hierba", minLevel: 5, maxLevel: 7, chance: 10 },
          { name: "Magikarp", method: "Pesca", minLevel: 5, maxLevel: 7, chance: 80 },
          { name: "Arrokuda", method: "Pesca", minLevel: 5, maxLevel: 7, chance: 20 }
        ]
      },
      // Área Salvaje - Sur
      {
        id: "wild-rolling-fields",
        name: "Área Salvaje: Pradera Radiante",
        pokemon: [
          { name: "Bunnelby", method: "Hierba", minLevel: 7, maxLevel: 10, chance: 30 },
          { name: "Diglett", method: "Hierba", minLevel: 7, maxLevel: 10, chance: 25 },
          { name: "Minccino", method: "Hierba", minLevel: 7, maxLevel: 10, chance: 20 },
          { name: "Growlithe", method: "Hierba (Sol)", minLevel: 7, maxLevel: 10, chance: 25 },
          { name: "Pancham", method: "Hierba", minLevel: 8, maxLevel: 11, chance: 15 }
        ]
      },
      {
        id: "wild-dappled-grove",
        name: "Área Salvaje: Arboleda Claror",
        pokemon: [
          { name: "Lombre", method: "Hierba (Lluvia)", minLevel: 11, maxLevel: 13, chance: 30 },
          { name: "Oddish", method: "Hierba", minLevel: 11, maxLevel: 13, chance: 25 },
          { name: "Budew", method: "Hierba", minLevel: 11, maxLevel: 13, chance: 20 },
          { name: "Hoothoot", method: "Hierba", minLevel: 11, maxLevel: 13, chance: 15 },
          { name: "Stunky", method: "Hierba", minLevel: 11, maxLevel: 13, chance: 10 }
        ]
      },
      {
        id: "wild-west-lake-axewell",
        name: "Área Salvaje: Lago Axew (Oeste)",
        pokemon: [
          { name: "Krabby", method: "Hierba", minLevel: 8, maxLevel: 12, chance: 30 },
          { name: "Wooper", method: "Hierba", minLevel: 8, maxLevel: 12, chance: 25 },
          { name: "Tympole", method: "Hierba", minLevel: 8, maxLevel: 12, chance: 20 },
          { name: "Wingull", method: "Hierba", minLevel: 8, maxLevel: 12, chance: 15 },
          { name: "Baltoy", method: "Hierba (Sol)", minLevel: 8, maxLevel: 12, chance: 10 }
        ]
      },
      {
        id: "wild-east-lake-axewell",
        name: "Área Salvaje: Lago Axew (Este)",
        pokemon: [
          { name: "Pidove", method: "Hierba", minLevel: 9, maxLevel: 13, chance: 30 },
          { name: "Stufful", method: "Hierba", minLevel: 9, maxLevel: 13, chance: 25 },
          { name: "Pancham", method: "Hierba", minLevel: 9, maxLevel: 13, chance: 20 },
          { name: "Machop", method: "Hierba", minLevel: 10, maxLevel: 13, chance: 15 },
          { name: "Electrike", method: "Hierba (Tormenta)", minLevel: 10, maxLevel: 13, chance: 25 }
        ]
      },
      {
        id: "wild-giants-seat",
        name: "Área Salvaje: Silla del Gigante",
        pokemon: [
          { name: "Machop", method: "Hierba", minLevel: 13, maxLevel: 15, chance: 30 },
          { name: "Gastly", method: "Hierba (Noche)", minLevel: 13, maxLevel: 15, chance: 25 },
          { name: "Bronzor", method: "Hierba", minLevel: 13, maxLevel: 15, chance: 20 },
          { name: "Rookidee", method: "Hierba", minLevel: 13, maxLevel: 15, chance: 15 }
        ]
      },
      {
        id: "route-3-galar",
        name: "Ruta 3 (Galar)",
        pokemon: [
          { name: "Rolycoly", method: "Hierba", minLevel: 10, maxLevel: 14, chance: 35 },
          { name: "Gossifleur", method: "Hierba", minLevel: 10, maxLevel: 14, chance: 30 },
          { name: "Sizzlipede", method: "Hierba", minLevel: 11, maxLevel: 13, chance: 1 },
          { name: "Corphish", method: "Hierba", minLevel: 10, maxLevel: 14, chance: 15 },
          { name: "Klink", method: "Hierba", minLevel: 10, maxLevel: 14, chance: 10 }
        ]
      },
      {
        id: "galar-mine",
        name: "Mina de Galar",
        pokemon: [
          { name: "Rolycoly", method: "Interior", minLevel: 11, maxLevel: 15, chance: 35 },
          { name: "Timburr", method: "Interior", minLevel: 11, maxLevel: 15, chance: 25 },
          { name: "Roggenrola", method: "Interior", minLevel: 11, maxLevel: 15, chance: 20 },
          { name: "Woobat", method: "Interior", minLevel: 11, maxLevel: 15, chance: 15 },
          { name: "Carkol", method: "Interior", minLevel: 13, maxLevel: 15, chance: 5 }
        ]
      },
      {
        id: "route-4-galar",
        name: "Ruta 4 (Galar)",
        pokemon: [
          { name: "Yamper", method: "Campos amarillos", minLevel: 13, maxLevel: 16, chance: 30 },
          { name: "Electrike", method: "Campos amarillos", minLevel: 13, maxLevel: 16, chance: 25 },
          { name: "Meowth-Galar", method: "Campos", minLevel: 13, maxLevel: 16, chance: 20 },
          { name: "Milcery", method: "Campos", minLevel: 13, maxLevel: 16, chance: 15 },
          { name: "Pikachu", method: "Campos (Espada)", minLevel: 14, maxLevel: 16, chance: 5 },
          { name: "Eevee", method: "Campos", minLevel: 14, maxLevel: 16, chance: 5 }
        ]
      },
      {
        id: "route-5-galar",
        name: "Ruta 5 (Galar)",
        pokemon: [
          { name: "Applin", method: "Hierba", minLevel: 16, maxLevel: 19, chance: 10 },
          { name: "Dottler", method: "Hierba", minLevel: 16, maxLevel: 19, chance: 30 },
          { name: "Swirlix", method: "Hierba (Espada)", minLevel: 16, maxLevel: 19, chance: 25 },
          { name: "Eldegoss", method: "Hierba", minLevel: 17, maxLevel: 19, chance: 20 },
          { name: "Lombre", method: "Hierba", minLevel: 16, maxLevel: 19, chance: 15 }
        ]
      },
      {
        id: "galar-mine-no-2",
        name: "Mina de Galar n.º 2",
        pokemon: [
          { name: "Shellos", method: "Interior cueva", minLevel: 20, maxLevel: 24, chance: 30 },
          { name: "Binacle", method: "Interior cueva", minLevel: 20, maxLevel: 24, chance: 25 },
          { name: "Chewtle", method: "Interior cueva", minLevel: 20, maxLevel: 24, chance: 20 },
          { name: "Shuckle", method: "Interior cueva", minLevel: 21, maxLevel: 24, chance: 15 },
          { name: "Wimpod", method: "Suelo corriendo", minLevel: 21, maxLevel: 24, chance: 10 }
        ]
      },
      {
        id: "motostoke-outskirts",
        name: "Afueras de Ciudad Pistón",
        pokemon: [
          { name: "Salandit", method: "Hierba", minLevel: 21, maxLevel: 25, chance: 30 },
          { name: "Koffing", method: "Hierba", minLevel: 21, maxLevel: 25, chance: 25 },
          { name: "Rookidee", method: "Hierba", minLevel: 21, maxLevel: 24, chance: 20 },
          { name: "Corvisquire", method: "Hierba", minLevel: 23, maxLevel: 25, chance: 15 },
          { name: "Impidimp", method: "Hierba", minLevel: 22, maxLevel: 25, chance: 10 }
        ]
      },
      // Área Salvaje - Norte
      {
        id: "wild-bridge-field",
        name: "Área Salvaje: Valle Entrepuentes",
        pokemon: [
          { name: "Stufful", method: "Hierba", minLevel: 26, maxLevel: 29, chance: 30 },
          { name: "Liepard", method: "Hierba", minLevel: 26, maxLevel: 29, chance: 25 },
          { name: "Inkay", method: "Hierba", minLevel: 26, maxLevel: 28, chance: 20 },
          { name: "Minccino", method: "Hierba", minLevel: 26, maxLevel: 28, chance: 15 },
          { name: "Helioptile", method: "Hierba (Sol)", minLevel: 26, maxLevel: 29, chance: 20 }
        ]
      },
      {
        id: "wild-stony-wilderness",
        name: "Área Salvaje: Cuenca Polvorienta",
        pokemon: [
          { name: "Dugtrio", method: "Hierba", minLevel: 27, maxLevel: 30, chance: 30 },
          { name: "Baltoy", method: "Hierba", minLevel: 27, maxLevel: 30, chance: 25 },
          { name: "Crustle", method: "Hierba", minLevel: 28, maxLevel: 30, chance: 20 },
          { name: "Klink", method: "Hierba", minLevel: 27, maxLevel: 29, chance: 15 }
        ]
      },
      {
        id: "route-6-galar",
        name: "Ruta 6 (Galar)",
        pokemon: [
          { name: "Silicobra", method: "Hierba", minLevel: 28, maxLevel: 32, chance: 30 },
          { name: "Dugtrio", method: "Hierba", minLevel: 28, maxLevel: 32, chance: 25 },
          { name: "Maractus", method: "Hierba", minLevel: 28, maxLevel: 31, chance: 20 },
          { name: "Skorupi", method: "Hierba", minLevel: 28, maxLevel: 31, chance: 15 },
          { name: "Hawlucha", method: "Hierba", minLevel: 29, maxLevel: 33, chance: 10 }
        ]
      },
      {
        id: "glimwood-tangle",
        name: "Bosque Lumirinto",
        pokemon: [
          { name: "Morgrem", method: "Hongos brillantes", minLevel: 32, maxLevel: 36, chance: 30 },
          { name: "Hattrem", method: "Hongos brillantes", minLevel: 32, maxLevel: 36, chance: 25 },
          { name: "Ponyta-Galar", method: "Hierba", minLevel: 32, maxLevel: 35, chance: 15 },
          { name: "Sinistea", method: "Hierba", minLevel: 32, maxLevel: 35, chance: 10 },
          { name: "Shiinotic", method: "Hierba", minLevel: 33, maxLevel: 36, chance: 15 },
          { name: "Passimian", method: "Hierba (Espada)", minLevel: 33, maxLevel: 36, chance: 5 }
        ]
      },
      {
        id: "route-7-galar",
        name: "Ruta 7 (Galar)",
        pokemon: [
          { name: "Liepard", method: "Hierba", minLevel: 36, maxLevel: 40, chance: 30 },
          { name: "Thievul", method: "Hierba", minLevel: 36, maxLevel: 40, chance: 25 },
          { name: "Corvisquire", method: "Hierba", minLevel: 37, maxLevel: 40, chance: 20 },
          { name: "Karrablast", method: "Hierba", minLevel: 36, maxLevel: 39, chance: 15 },
          { name: "Shelmet", method: "Hierba", minLevel: 36, maxLevel: 39, chance: 10 },
          { name: "Morpeko", method: "Hierba", minLevel: 37, maxLevel: 41, chance: 5 }
        ]
      },
      {
        id: "route-8-galar",
        name: "Ruta 8 (Galar)",
        pokemon: [
          { name: "Sandaconda", method: "Hierba", minLevel: 38, maxLevel: 42, chance: 30 },
          { name: "Hippowdon", method: "Hierba", minLevel: 38, maxLevel: 42, chance: 25 },
          { name: "Crustle", method: "Hierba", minLevel: 38, maxLevel: 41, chance: 20 },
          { name: "Falinks", method: "Hierba", minLevel: 39, maxLevel: 43, chance: 15 },
          { name: "Snom", method: "Túnel de Vapor (Nieve)", minLevel: 38, maxLevel: 42, chance: 35 }
        ]
      },
      {
        id: "route-9-galar",
        name: "Ruta 9 / Bahía de Circhester",
        pokemon: [
          { name: "Gastrodon", method: "Agua/Playa", minLevel: 40, maxLevel: 44, chance: 30 },
          { name: "Mareanie", method: "Playa", minLevel: 40, maxLevel: 44, chance: 20 },
          { name: "Clobbopus", method: "Playa", minLevel: 40, maxLevel: 43, chance: 20 },
          { name: "Cramorant", method: "Agua/Surf", minLevel: 40, maxLevel: 45, chance: 20 },
          { name: "Mantyke", method: "Surf", minLevel: 40, maxLevel: 44, chance: 10 }
        ]
      },
      {
        id: "route-10-galar",
        name: "Ruta 10 (Galar - Ascenso Nieve)",
        pokemon: [
          { name: "Mr. Mime-Galar", method: "Nieve", minLevel: 44, maxLevel: 48, chance: 30 },
          { name: "Snom", method: "Nieve", minLevel: 44, maxLevel: 47, chance: 25 },
          { name: "Vanillish", method: "Nieve", minLevel: 45, maxLevel: 48, chance: 20 },
          { name: "Abomasnow", method: "Nieve", minLevel: 45, maxLevel: 48, chance: 15 },
          { name: "Duraludon", method: "Nieve", minLevel: 45, maxLevel: 48, chance: 5 }
        ]
      }
    ],

    events: [
      {
        id: "sw-starter",
        pokemon: "Grookey / Scorbunny / Sobble",
        method: "Inicial",
        location: "Pueblo Par (Jardín de la casa de Paul)",
        condition: "Elección al comenzar presentada por el Campeón Lionel",
        level: 5,
        verified: true,
        source: "Campeón Lionel"
      },
      {
        id: "sw-toxel-gift",
        pokemon: "Toxel",
        method: "Regalo",
        location: "Guardería Pokémon (Ruta 5)",
        condition: "Hablar con la cuidadora en el interior del edificio",
        level: 1,
        verified: true,
        source: "Cuidadora de la guardería"
      },
      {
        id: "sw-fossils",
        pokemon: "Dracozolt / Dracovish / Arctozolt / Arctovish",
        method: "Fósiles combinados",
        location: "Ruta 6 (Tienda de campaña de la Dra. Cara Liss)",
        condition: "Combinar 2 fósiles (Ornitofósil, Ictiofósil, Dracofósil, Pterofósil)",
        level: 10,
        verified: true,
        source: "Dra. Cara Liss"
      },
      {
        id: "sw-charmander-leon",
        pokemon: "Charmander (capaz de Gigamax)",
        method: "Regalo",
        location: "Pueblo Yarda (Habitación de Lionel)",
        condition: "Postgame (tras vencer a Lionel en la Copa)",
        level: 5,
        verified: true,
        source: "Poké Ball dejada por Lionel"
      },
      {
        id: "sw-type-null",
        pokemon: "Código Cero (Type: Null)",
        method: "Regalo",
        location: "Torre Batalla (Ciudad Puntera)",
        condition: "Hablar con la empleada en el vestíbulo izquierdo",
        level: 50,
        verified: true,
        source: "Investigadora de la Torre Batalla"
      },
      {
        id: "sw-eternatus",
        pokemon: "Eternatus",
        method: "Estático de Historia",
        location: "Torre de Artejo (Cúspide de la Planta de Energía)",
        condition: "Derrotar en combate Dinamax junto a Zacian y Zamazenta (100% ratio)",
        level: 60,
        verified: true,
        source: "Encuentro culminante del Fin de los Tiempos"
      },
      {
        id: "sw-zacian",
        pokemon: "Zacian",
        method: "Estático Legendario",
        location: "Santuario del Bosque Onírico",
        condition: "Postgame (tras derrotar a Nerio y Tizonio)",
        level: 70,
        verified: true,
        source: "Héroe de la Espada"
      }
    ],

    milestones: [
      {
        id: "sw-badge-grass",
        name: "Medalla Planta",
        leader: "Percy (Milo)",
        city: "Pueblo Hoyuelo",
        type: "Planta",
        levelCap: 20,
        icon: "🌱"
      },
      {
        id: "sw-badge-water",
        name: "Medalla Agua",
        leader: "Cathy (Nessa)",
        city: "Pueblo Amura",
        type: "Agua",
        levelCap: 24,
        icon: "🌊"
      },
      {
        id: "sw-badge-fire",
        name: "Medalla Fuego",
        leader: "Naboru (Kabu)",
        city: "Ciudad Pistón",
        type: "Fuego",
        levelCap: 27,
        icon: "🔥"
      },
      {
        id: "sw-badge-fighting",
        name: "Medalla Lucha",
        leader: "Judith (Bea)",
        city: "Pueblo Ladera",
        type: "Lucha",
        levelCap: 36,
        icon: "🥋"
      },
      {
        id: "sw-badge-fairy",
        name: "Medalla Hada",
        leader: "Sally (Opal)",
        city: "Pueblo Plié",
        type: "Hada",
        levelCap: 38,
        icon: "🧚"
      },
      {
        id: "sw-badge-rock",
        name: "Medalla Roca",
        leader: "Morris (Gordie)",
        city: "Pueblo Auriga",
        type: "Roca",
        levelCap: 42,
        icon: "🪨"
      },
      {
        id: "sw-badge-dark",
        name: "Medalla Siniestro",
        leader: "Nerio (Piers)",
        city: "Pueblo Crampón",
        type: "Siniestro",
        levelCap: 46,
        icon: "🎤"
      },
      {
        id: "sw-badge-dragon",
        name: "Medalla Dragón",
        leader: "Roy (Raihan)",
        city: "Ciudad Artejo",
        type: "Dragón",
        levelCap: 48,
        icon: "🐉"
      },
      {
        id: "sw-cup-semifinals",
        name: "Semifinales de la Copa (Marnie y Paul)",
        leader: "Paul (Hop)",
        city: "Estadio de Puntera",
        type: "Variado",
        levelCap: 50,
        icon: "⚽"
      },
      {
        id: "sw-cup-finals",
        name: "Finales del Torneo de Campeones",
        leader: "Roy (Raihan revancha)",
        city: "Estadio de Puntera",
        type: "Dragón / Clima",
        levelCap: 55,
        icon: "🏆"
      },
      {
        id: "sw-boss-eternatus",
        name: "Crisis del Fin de los Tiempos: Eternatus",
        leader: "Eternatus Dinamax Infinito",
        city: "Torre de Artejo",
        type: "Veneno / Dragón",
        levelCap: 60,
        icon: "🌌"
      },
      {
        id: "sw-champion-leon",
        name: "Campeón Invicto de Galar: Lionel",
        leader: "Lionel (Leon)",
        city: "Estadio de Puntera",
        type: "Variado / Charizard Gigamax",
        levelCap: 65,
        icon: "👑"
      }
    ]
  };

  if (window.NuzlockeRegistry) {
    window.NuzlockeRegistry.register(SWORD_DATA);
  }
})();
