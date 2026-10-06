/**
 * Datos de Pokémon Platino (Gen 4)
 * Sinnoh completo expandido, 8 medallas, Liga Sinnoh y Mundo Distorsión.
 */
(function() {
  const PLATINUM_DATA = {
    id: "platinum",
    name: "Pokémon Platino",
    generation: 4,
    region: "Sinnoh",
    badgeType: "badges",
    encounters: [
      {
        id: "lake-verity",
        name: "Lago Veraz",
        pokemon: [
          { name: "Bidoof", method: "Hierba", minLevel: 2, maxLevel: 4, chance: 50 },
          { name: "Starly", method: "Hierba", minLevel: 2, maxLevel: 4, chance: 50 },
          { name: "Magikarp", method: "Caña Vieja", minLevel: 3, maxLevel: 10, chance: 100 }
        ]
      },
      {
        id: "route-201",
        name: "Ruta 201",
        pokemon: [
          { name: "Bidoof", method: "Hierba", minLevel: 2, maxLevel: 3, chance: 50 },
          { name: "Starly", method: "Hierba", minLevel: 2, maxLevel: 3, chance: 40 },
          { name: "Kricketot", method: "Mañana/Noche", minLevel: 3, maxLevel: 3, chance: 10 }
        ]
      },
      {
        id: "route-202",
        name: "Ruta 202",
        pokemon: [
          { name: "Bidoof", method: "Hierba", minLevel: 3, maxLevel: 4, chance: 30 },
          { name: "Starly", method: "Hierba", minLevel: 3, maxLevel: 4, chance: 30 },
          { name: "Shinx", method: "Hierba", minLevel: 3, maxLevel: 4, chance: 30 },
          { name: "Kricketot", method: "Mañana/Noche", minLevel: 3, maxLevel: 4, chance: 10 }
        ]
      },
      {
        id: "route-204-south",
        name: "Ruta 204 (Sur)",
        pokemon: [
          { name: "Bidoof", method: "Hierba", minLevel: 4, maxLevel: 6, chance: 25 },
          { name: "Starly", method: "Hierba", minLevel: 4, maxLevel: 5, chance: 25 },
          { name: "Shinx", method: "Hierba", minLevel: 4, maxLevel: 5, chance: 25 },
          { name: "Budew", method: "Hierba (Día)", minLevel: 4, maxLevel: 5, chance: 25 }
        ]
      },
      {
        id: "ravaged-path",
        name: "Senda Desolada",
        pokemon: [
          { name: "Zubat", method: "Cueva", minLevel: 4, maxLevel: 6, chance: 60 },
          { name: "Geodude", method: "Cueva", minLevel: 5, maxLevel: 7, chance: 35 },
          { name: "Psyduck", method: "Cueva/Surf", minLevel: 5, maxLevel: 6, chance: 5 }
        ]
      },
      {
        id: "route-203",
        name: "Ruta 203",
        pokemon: [
          { name: "Starly", method: "Hierba", minLevel: 4, maxLevel: 6, chance: 35 },
          { name: "Bidoof", method: "Hierba", minLevel: 4, maxLevel: 6, chance: 25 },
          { name: "Shinx", method: "Hierba", minLevel: 4, maxLevel: 5, chance: 25 },
          { name: "Abra", method: "Hierba", minLevel: 4, maxLevel: 5, chance: 15 }
        ]
      },
      {
        id: "oreburgh-gate",
        name: "Puerta Pirita",
        pokemon: [
          { name: "Geodude", method: "Cueva", minLevel: 5, maxLevel: 8, chance: 50 },
          { name: "Zubat", method: "Cueva", minLevel: 5, maxLevel: 8, chance: 40 },
          { name: "Psyduck", method: "Cueva", minLevel: 6, maxLevel: 8, chance: 10 }
        ]
      },
      {
        id: "oreburgh-mine",
        name: "Mina Pirita",
        pokemon: [
          { name: "Geodude", method: "Cueva", minLevel: 6, maxLevel: 9, chance: 70 },
          { name: "Zubat", method: "Cueva", minLevel: 6, maxLevel: 9, chance: 20 },
          { name: "Onix", method: "Sótano B1", minLevel: 7, maxLevel: 9, chance: 10 }
        ]
      },
      {
        id: "route-207",
        name: "Ruta 207",
        pokemon: [
          { name: "Machop", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 35 },
          { name: "Geodude", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 25 },
          { name: "Ponyta", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 25 },
          { name: "Kricketot", method: "Mañana/Noche", minLevel: 6, maxLevel: 8, chance: 15 }
        ]
      },
      {
        id: "valley-windworks",
        name: "Valle Eólico",
        pokemon: [
          { name: "Buizel", method: "Hierba", minLevel: 7, maxLevel: 9, chance: 35 },
          { name: "Shinx", method: "Hierba", minLevel: 7, maxLevel: 9, chance: 25 },
          { name: "Bidoof", method: "Hierba", minLevel: 7, maxLevel: 8, chance: 20 },
          { name: "Pachirisu", method: "Hierba", minLevel: 7, maxLevel: 8, chance: 20 }
        ]
      },
      {
        id: "route-205-south",
        name: "Ruta 205 (Sur)",
        pokemon: [
          { name: "Bidoof", method: "Hierba", minLevel: 8, maxLevel: 10, chance: 30 },
          { name: "Shellos", method: "Hierba", minLevel: 9, maxLevel: 11, chance: 25 },
          { name: "Buizel", method: "Hierba", minLevel: 9, maxLevel: 11, chance: 25 },
          { name: "Pachirisu", method: "Hierba", minLevel: 8, maxLevel: 10, chance: 20 }
        ]
      },
      {
        id: "eterna-forest",
        name: "Bosque Vetusto",
        pokemon: [
          { name: "Buneary", method: "Hierba", minLevel: 10, maxLevel: 12, chance: 20 },
          { name: "Budew", method: "Hierba (Día)", minLevel: 10, maxLevel: 12, chance: 20 },
          { name: "Wurmple", method: "Hierba", minLevel: 10, maxLevel: 11, chance: 15 },
          { name: "Silcoon", method: "Hierba", minLevel: 11, maxLevel: 12, chance: 10 },
          { name: "Cascoon", method: "Hierba", minLevel: 11, maxLevel: 12, chance: 10 },
          { name: "Misdreavus", method: "Hierba (Noche)", minLevel: 11, maxLevel: 13, chance: 20 },
          { name: "Murkrow", method: "Hierba (Noche)", minLevel: 11, maxLevel: 13, chance: 20 },
          { name: "Gastly", method: "Hierba (Noche)", minLevel: 11, maxLevel: 13, chance: 10 }
        ]
      },
      {
        id: "old-chateau",
        name: "Vieja Mansión",
        pokemon: [
          { name: "Gastly", method: "Habitaciones", minLevel: 14, maxLevel: 17, chance: 100 }
        ]
      },
      {
        id: "wayward-cave",
        name: "Cueva Extravío",
        pokemon: [
          { name: "Zubat", method: "Cueva", minLevel: 14, maxLevel: 16, chance: 40 },
          { name: "Geodude", method: "Cueva", minLevel: 14, maxLevel: 16, chance: 30 },
          { name: "Bronzor", method: "Cueva", minLevel: 14, maxLevel: 16, chance: 20 },
          { name: "Gible", method: "Entrada oculta secreta", minLevel: 15, maxLevel: 17, chance: 15 }
        ]
      },
      {
        id: "mt-coronet",
        name: "Monte Corona",
        pokemon: [
          { name: "Machop", method: "Cueva", minLevel: 13, maxLevel: 15, chance: 25 },
          { name: "Geodude", method: "Cueva", minLevel: 13, maxLevel: 15, chance: 25 },
          { name: "Zubat", method: "Cueva", minLevel: 13, maxLevel: 15, chance: 25 },
          { name: "Meditite", method: "Cueva", minLevel: 13, maxLevel: 15, chance: 15 },
          { name: "Chingling", method: "Cueva", minLevel: 13, maxLevel: 14, chance: 10 },
          { name: "Clefairy", method: "Pisos altos", minLevel: 36, maxLevel: 39, chance: 25 }
        ]
      },
      {
        id: "route-209",
        name: "Ruta 209",
        pokemon: [
          { name: "Bibarel", method: "Hierba", minLevel: 16, maxLevel: 18, chance: 25 },
          { name: "Staravia", method: "Hierba", minLevel: 16, maxLevel: 18, chance: 20 },
          { name: "Ralts", method: "Hierba", minLevel: 16, maxLevel: 17, chance: 15 },
          { name: "Duskull", method: "Noche", minLevel: 16, maxLevel: 18, chance: 20 },
          { name: "Chansey", method: "Hierba", minLevel: 16, maxLevel: 18, chance: 5 }
        ]
      },
      {
        id: "lost-tower",
        name: "Torre Perdida",
        pokemon: [
          { name: "Gastly", method: "Pisos 1-5", minLevel: 17, maxLevel: 21, chance: 50 },
          { name: "Zubat", method: "Pisos 1-5", minLevel: 16, maxLevel: 19, chance: 30 },
          { name: "Duskull", method: "Pisos 3-5", minLevel: 18, maxLevel: 21, chance: 20 }
        ]
      },
      {
        id: "solaceon-ruins",
        name: "Ruinas Sosiego",
        pokemon: [
          { name: "Unown", method: "Salas interiores", minLevel: 14, maxLevel: 30, chance: 100 }
        ]
      },
      {
        id: "route-210-south",
        name: "Ruta 210 (Sur)",
        pokemon: [
          { name: "Geodude", method: "Hierba", minLevel: 18, maxLevel: 20, chance: 25 },
          { name: "Ponyta", method: "Hierba", minLevel: 19, maxLevel: 21, chance: 25 },
          { name: "Scyther", method: "Hierba", minLevel: 19, maxLevel: 21, chance: 15 },
          { name: "Roselia", method: "Hierba", minLevel: 19, maxLevel: 21, chance: 20 }
        ]
      },
      {
        id: "route-214",
        name: "Ruta 214",
        pokemon: [
          { name: "Geodude", method: "Hierba", minLevel: 21, maxLevel: 23, chance: 25 },
          { name: "Ponyta", method: "Hierba", minLevel: 21, maxLevel: 23, chance: 25 },
          { name: "Houndour", method: "Hierba", minLevel: 21, maxLevel: 23, chance: 20 },
          { name: "Rhyhorn", method: "Hierba", minLevel: 22, maxLevel: 24, chance: 15 }
        ]
      },
      {
        id: "pastoria-great-marsh",
        name: "Gran Pantano (Ciudad Pradera)",
        pokemon: [
          { name: "Croagunk", method: "Hierba fangosa", minLevel: 20, maxLevel: 26, chance: 20 },
          { name: "Skorupi", method: "Hierba fangosa", minLevel: 20, maxLevel: 26, chance: 15 },
          { name: "Carnivine", method: "Hierba fangosa", minLevel: 20, maxLevel: 26, chance: 15 },
          { name: "Yanma", method: "Hierba fangosa", minLevel: 20, maxLevel: 26, chance: 10 },
          { name: "Tangela", method: "Hierba fangosa", minLevel: 22, maxLevel: 26, chance: 10 }
        ]
      },
      {
        id: "iron-island",
        name: "Isla Hierro",
        pokemon: [
          { name: "Graveler", method: "Cueva", minLevel: 30, maxLevel: 34, chance: 35 },
          { name: "Golbat", method: "Cueva", minLevel: 31, maxLevel: 35, chance: 35 },
          { name: "Onix", method: "Cueva", minLevel: 31, maxLevel: 34, chance: 20 },
          { name: "Steelix", method: "Sótano B2", minLevel: 33, maxLevel: 35, chance: 10 }
        ]
      },
      {
        id: "route-216",
        name: "Ruta 216 (Nieve)",
        pokemon: [
          { name: "Snover", method: "Nieve", minLevel: 32, maxLevel: 35, chance: 35 },
          { name: "Sneasel", method: "Nieve", minLevel: 32, maxLevel: 35, chance: 25 },
          { name: "Swinub", method: "Nieve", minLevel: 32, maxLevel: 34, chance: 25 },
          { name: "Meditite", method: "Nieve", minLevel: 32, maxLevel: 34, chance: 15 }
        ]
      },
      {
        id: "distortion-world",
        name: "Mundo Distorsión",
        pokemon: [
          { name: "Giratina", method: "Plataforma final", minLevel: 47, maxLevel: 47, chance: 100 }
        ]
      },
      {
        id: "victory-road-sinnoh",
        name: "Calle Victoria (Sinnoh)",
        pokemon: [
          { name: "Golbat", method: "Cueva", minLevel: 40, maxLevel: 46, chance: 25 },
          { name: "Graveler", method: "Cueva", minLevel: 42, maxLevel: 45, chance: 20 },
          { name: "Steelix", method: "Cueva", minLevel: 43, maxLevel: 46, chance: 15 },
          { name: "Rhydon", method: "Cueva", minLevel: 44, maxLevel: 47, chance: 15 },
          { name: "Gabite", method: "Cueva", minLevel: 41, maxLevel: 44, chance: 10 },
          { name: "Medicham", method: "Cueva", minLevel: 42, maxLevel: 46, chance: 15 }
        ]
      }
    ],

    events: [
      {
        id: "plat-starter",
        pokemon: "Turtwig / Chimchar / Piplup",
        method: "Inicial",
        location: "Lago Veraz (Maletín de Serbal)",
        condition: "Elección al comenzar",
        level: 5,
        verified: true,
        source: "Profesor Serbal"
      },
      {
        id: "plat-togepi-egg",
        pokemon: "Togepi",
        method: "Huevo",
        location: "Ciudad Vetusta (Plaza central)",
        condition: "Derrotar a Ceres en el Edificio Galaxia",
        level: 1,
        verified: true,
        source: "Campeona Cintia"
      },
      {
        id: "plat-eevee-bebe",
        pokemon: "Eevee",
        method: "Regalo",
        location: "Ciudad Corazón (Casa de Tecla/Bebe)",
        condition: "Hablar con ella tras llegar a la ciudad",
        level: 20,
        verified: true,
        source: "Tecla (Bebe)"
      },
      {
        id: "plat-porygon",
        pokemon: "Porygon",
        method: "Regalo",
        location: "Ciudad Rocavelo (Casa tras el Centro Pokémon)",
        condition: "Hablar con el hombre solitario",
        level: 25,
        verified: true,
        source: "Hombre de Rocavelo"
      },
      {
        id: "plat-riolu-egg",
        pokemon: "Riolu",
        method: "Huevo",
        location: "Isla Hierro (Salida de la cueva)",
        condition: "Acompañar a Quinoa (Riley) y derrotar a los soldados Galaxia",
        level: 1,
        verified: true,
        source: "Quinoa (Riley)"
      },
      {
        id: "plat-rotom",
        pokemon: "Rotom",
        method: "Estático",
        location: "Vieja Mansión (Televisor parpadeante)",
        condition: "Interactuar de noche (20:00 - 04:00) tras obtener Corte",
        level: 20,
        verified: true,
        source: "Televisor poseído"
      },
      {
        id: "plat-giratina",
        pokemon: "Giratina (Forma Origen)",
        method: "Estático Legendario",
        location: "Mundo Distorsión",
        condition: "Encuentro culminante contra Helio",
        level: 47,
        verified: true,
        source: "Rey de la Distorsión"
      }
    ],

    milestones: [
      {
        id: "plat-badge-coal",
        name: "Medalla Lenteja",
        leader: "Roco (Roark)",
        city: "Ciudad Pirita",
        type: "Roca",
        levelCap: 14,
        icon: "🪨"
      },
      {
        id: "plat-badge-forest",
        name: "Medalla Bosque",
        leader: "Gardenia",
        city: "Ciudad Vetusta",
        type: "Planta",
        levelCap: 22,
        icon: "🌿"
      },
      {
        id: "plat-badge-relic",
        name: "Medalla Reliquia",
        leader: "Fantina",
        city: "Ciudad Corazón",
        type: "Fantasma",
        levelCap: 26,
        icon: "👻"
      },
      {
        id: "plat-badge-cobble",
        name: "Medalla Adoquín",
        leader: "Brega (Maylene)",
        city: "Ciudad Rocavelo",
        type: "Lucha",
        levelCap: 32,
        icon: "🥋"
      },
      {
        id: "plat-badge-fen",
        name: "Medalla Ciénaga",
        leader: "Mananti (Crasher Wake)",
        city: "Ciudad Pradera",
        type: "Agua",
        levelCap: 37,
        icon: "💧"
      },
      {
        id: "plat-badge-mine",
        name: "Medalla Mina",
        leader: "Acerón (Byron)",
        city: "Ciudad Canal",
        type: "Acero",
        levelCap: 41,
        icon: "⛏️"
      },
      {
        id: "plat-badge-icicle",
        name: "Medalla Carámbano",
        leader: "Inverna (Candice)",
        city: "Ciudad Puntaneva",
        type: "Hielo",
        levelCap: 44,
        icon: "❄️"
      },
      {
        id: "plat-badge-beacon",
        name: "Medalla Faro",
        leader: "Lectro (Volkner)",
        city: "Ciudad Marina",
        type: "Eléctrico",
        levelCap: 50,
        icon: "⚡"
      },
      {
        id: "plat-e4-aaron",
        name: "Alto Mando: Alecrán",
        leader: "Alecrán",
        city: "Liga Sinnoh",
        type: "Bicho",
        levelCap: 53,
        icon: "🦗"
      },
      {
        id: "plat-e4-bertha",
        name: "Alto Mando: Gaia",
        leader: "Gaia",
        city: "Liga Sinnoh",
        type: "Tierra",
        levelCap: 55,
        icon: "🏜️"
      },
      {
        id: "plat-e4-flint",
        name: "Alto Mando: Fausto",
        leader: "Fausto",
        city: "Liga Sinnoh",
        type: "Fuego",
        levelCap: 57,
        icon: "🔥"
      },
      {
        id: "plat-e4-lucian",
        name: "Alto Mando: Delber",
        leader: "Delber",
        city: "Liga Sinnoh",
        type: "Psíquico",
        levelCap: 59,
        icon: "🔮"
      },
      {
        id: "plat-champion-cynthia",
        name: "Campeona de Sinnoh: Cintia",
        leader: "Cintia (Cynthia)",
        city: "Liga Sinnoh",
        type: "Variado",
        levelCap: 62,
        icon: "👑"
      }
    ]
  };

  if (window.NuzlockeRegistry) {
    window.NuzlockeRegistry.register(PLATINUM_DATA);
  }
})();
