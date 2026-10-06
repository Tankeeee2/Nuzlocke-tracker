/**
 * Datos de Pokémon Blanco 2 (Gen 5)
 * Teselia completo con progresión B2W2, 8 medallas, Liga y eventos.
 */
(function() {
  const BLACK2_DATA = {
    id: "black2",
    name: "Pokémon Blanco 2",
    generation: 5,
    region: "Teselia (Unova)",
    badgeType: "badges",
    encounters: [
      {
        id: "aspertia-city",
        name: "Ciudad Engombe",
        pokemon: [
          { name: "Basculin", method: "Surf", minLevel: 10, maxLevel: 25, chance: 100 }
        ]
      },
      {
        id: "route-19",
        name: "Ruta 19",
        pokemon: [
          { name: "Patrat", method: "Hierba", minLevel: 2, maxLevel: 4, chance: 50 },
          { name: "Purrloin", method: "Hierba", minLevel: 2, maxLevel: 4, chance: 50 }
        ]
      },
      {
        id: "route-20",
        name: "Ruta 20",
        pokemon: [
          { name: "Sewaddle", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 30 },
          { name: "Patrat", method: "Hierba", minLevel: 3, maxLevel: 4, chance: 25 },
          { name: "Purrloin", method: "Hierba", minLevel: 3, maxLevel: 4, chance: 20 },
          { name: "Pidove", method: "Hierba", minLevel: 3, maxLevel: 4, chance: 20 },
          { name: "Sunkern", method: "Hierba (Día)", minLevel: 4, maxLevel: 5, chance: 5 }
        ]
      },
      {
        id: "floccesy-ranch",
        name: "Rancho Ocumbe",
        pokemon: [
          { name: "Mareep", method: "Hierba", minLevel: 5, maxLevel: 7, chance: 30 },
          { name: "Lillipup", method: "Hierba", minLevel: 5, maxLevel: 7, chance: 25 },
          { name: "Psyduck", method: "Hierba", minLevel: 5, maxLevel: 7, chance: 20 },
          { name: "Azurill", method: "Hierba", minLevel: 5, maxLevel: 6, chance: 15 },
          { name: "Riolu", method: "Hierba", minLevel: 5, maxLevel: 7, chance: 5 },
          { name: "Pidove", method: "Hierba", minLevel: 5, maxLevel: 6, chance: 5 }
        ]
      },
      {
        id: "virbank-complex",
        name: "Polígono Hormigón",
        pokemon: [
          { name: "Magnemite", method: "Hierba", minLevel: 10, maxLevel: 13, chance: 25 },
          { name: "Koffing", method: "Hierba", minLevel: 11, maxLevel: 13, chance: 25 },
          { name: "Growlithe", method: "Hierba", minLevel: 11, maxLevel: 13, chance: 20 },
          { name: "Patrat", method: "Hierba", minLevel: 10, maxLevel: 12, chance: 15 },
          { name: "Elekid", method: "Hierba (Blanco 2)", minLevel: 11, maxLevel: 13, chance: 15 }
        ]
      },
      {
        id: "castelia-sewers",
        name: "Cloacas Porcelana",
        pokemon: [
          { name: "Rattata", method: "Cueva/Suelo", minLevel: 14, maxLevel: 17, chance: 40 },
          { name: "Zubat", method: "Cueva/Suelo", minLevel: 14, maxLevel: 17, chance: 40 },
          { name: "Grimer", method: "Cueva/Suelo", minLevel: 15, maxLevel: 17, chance: 20 }
        ]
      },
      {
        id: "castelia-city-park",
        name: "Jardín Secreto de Porcelana",
        pokemon: [
          { name: "Eevee", method: "Hierba oculta", minLevel: 18, maxLevel: 19, chance: 5 },
          { name: "Buneary", method: "Hierba", minLevel: 15, maxLevel: 17, chance: 30 },
          { name: "Rattata", method: "Hierba", minLevel: 15, maxLevel: 17, chance: 30 },
          { name: "Pidove", method: "Hierba", minLevel: 15, maxLevel: 17, chance: 25 },
          { name: "Petilil", method: "Hierba (Blanco 2)", minLevel: 15, maxLevel: 17, chance: 10 }
        ]
      },
      {
        id: "route-4-unova",
        name: "Ruta 4 (Teselia)",
        pokemon: [
          { name: "Sandile", method: "Arena", minLevel: 14, maxLevel: 16, chance: 35 },
          { name: "Darumaka", method: "Arena", minLevel: 15, maxLevel: 17, chance: 35 },
          { name: "Scraggy", method: "Arena", minLevel: 15, maxLevel: 17, chance: 20 },
          { name: "Trubbish", method: "Arena", minLevel: 14, maxLevel: 16, chance: 10 }
        ]
      },
      {
        id: "desert-resort",
        name: "Zona Desierto",
        pokemon: [
          { name: "Sandile", method: "Arena profunda", minLevel: 19, maxLevel: 22, chance: 35 },
          { name: "Darumaka", method: "Arena profunda", minLevel: 19, maxLevel: 22, chance: 30 },
          { name: "Dwebble", method: "Arena profunda", minLevel: 20, maxLevel: 21, chance: 15 },
          { name: "Maractus", method: "Arena profunda", minLevel: 20, maxLevel: 21, chance: 10 },
          { name: "Sigilyph", method: "Arena profunda", minLevel: 20, maxLevel: 22, chance: 10 }
        ]
      },
      {
        id: "relic-castle",
        name: "Castillo Ancestral",
        pokemon: [
          { name: "Yamask", method: "Interior", minLevel: 19, maxLevel: 22, chance: 50 },
          { name: "Sandile", method: "Interior", minLevel: 19, maxLevel: 22, chance: 50 },
          { name: "Volcarona", method: "Cámara profunda", minLevel: 35, maxLevel: 35, chance: 100 }
        ]
      },
      {
        id: "route-16-unova",
        name: "Ruta 16 (Teselia)",
        pokemon: [
          { name: "Gothita", method: "Hierba (Blanco 2)", minLevel: 21, maxLevel: 24, chance: 30 },
          { name: "Trubbish", method: "Hierba", minLevel: 21, maxLevel: 23, chance: 30 },
          { name: "Minccino", method: "Hierba", minLevel: 22, maxLevel: 24, chance: 20 },
          { name: "Solosis", method: "Hierba", minLevel: 21, maxLevel: 24, chance: 20 }
        ]
      },
      {
        id: "lostlorn-forest",
        name: "Bosque de los Perdidos",
        pokemon: [
          { name: "Venipede", method: "Hierba", minLevel: 21, maxLevel: 24, chance: 25 },
          { name: "Swadloon", method: "Hierba", minLevel: 22, maxLevel: 25, chance: 25 },
          { name: "Cottonee", method: "Hierba", minLevel: 21, maxLevel: 24, chance: 20 },
          { name: "Roselia", method: "Hierba", minLevel: 22, maxLevel: 24, chance: 15 },
          { name: "Pinsir", method: "Hierba (Blanco 2)", minLevel: 23, maxLevel: 25, chance: 10 },
          { name: "Heracross", method: "Hierba", minLevel: 23, maxLevel: 25, chance: 5 }
        ]
      },
      {
        id: "route-5-unova",
        name: "Ruta 5",
        pokemon: [
          { name: "Trubbish", method: "Hierba", minLevel: 21, maxLevel: 24, chance: 30 },
          { name: "Minccino", method: "Hierba", minLevel: 22, maxLevel: 25, chance: 25 },
          { name: "Liepard", method: "Hierba", minLevel: 23, maxLevel: 25, chance: 20 },
          { name: "Gothita", method: "Hierba (Blanco 2)", minLevel: 22, maxLevel: 24, chance: 25 }
        ]
      },
      {
        id: "driftveil-drawbridge",
        name: "Puente Fayenza",
        pokemon: [
          { name: "Ducklett", method: "Sombras en el suelo", minLevel: 22, maxLevel: 25, chance: 100 }
        ]
      },
      {
        id: "relic-passage",
        name: "Paso Subterráneo",
        pokemon: [
          { name: "Roggenrola", method: "Cueva", minLevel: 26, maxLevel: 30, chance: 30 },
          { name: "Woobat", method: "Cueva", minLevel: 26, maxLevel: 29, chance: 30 },
          { name: "Timburr", method: "Cueva", minLevel: 27, maxLevel: 30, chance: 25 },
          { name: "Onix", method: "Cueva", minLevel: 28, maxLevel: 30, chance: 15 }
        ]
      },
      {
        id: "chargestone-cave",
        name: "Cueva Electrorroca",
        pokemon: [
          { name: "Joltik", method: "Cueva", minLevel: 27, maxLevel: 30, chance: 39 },
          { name: "Klink", method: "Cueva", minLevel: 27, maxLevel: 30, chance: 25 },
          { name: "Ferroseed", method: "Cueva", minLevel: 28, maxLevel: 31, chance: 20 },
          { name: "Nosepass", method: "Cueva", minLevel: 27, maxLevel: 29, chance: 10 },
          { name: "Tynamo", method: "Cueva", minLevel: 27, maxLevel: 29, chance: 2 },
          { name: "Drilbur", method: "Remolino polvo", minLevel: 27, maxLevel: 30, chance: 100 }
        ]
      },
      {
        id: "route-6-unova",
        name: "Ruta 6",
        pokemon: [
          { name: "Deerling", method: "Hierba", minLevel: 26, maxLevel: 29, chance: 30 },
          { name: "Karrablast", method: "Hierba", minLevel: 26, maxLevel: 28, chance: 25 },
          { name: "Foongus", method: "Hierba", minLevel: 26, maxLevel: 29, chance: 20 },
          { name: "Tranquill", method: "Hierba", minLevel: 27, maxLevel: 29, chance: 15 },
          { name: "Shelmet", method: "Hierba", minLevel: 26, maxLevel: 28, chance: 10 }
        ]
      },
      {
        id: "celestial-tower",
        name: "Torre de los Cielos",
        pokemon: [
          { name: "Litwick", method: "Pisos 2-5", minLevel: 30, maxLevel: 33, chance: 50 },
          { name: "Elgyem", method: "Pisos 2-5", minLevel: 30, maxLevel: 33, chance: 30 },
          { name: "Golbat", method: "Pisos 2-5", minLevel: 31, maxLevel: 34, chance: 20 }
        ]
      },
      {
        id: "reversal-mountain",
        name: "Montaña Renacer",
        pokemon: [
          { name: "Skorupi", method: "Cueva", minLevel: 35, maxLevel: 39, chance: 30 },
          { name: "Spoink", method: "Cueva (Blanco 2)", minLevel: 35, maxLevel: 38, chance: 25 },
          { name: "Boldore", method: "Cueva", minLevel: 36, maxLevel: 39, chance: 20 },
          { name: "Camerupt", method: "Cueva", minLevel: 37, maxLevel: 40, chance: 15 },
          { name: "Trapinch", method: "Cueva", minLevel: 36, maxLevel: 38, chance: 10 }
        ]
      },
      {
        id: "undella-bay",
        name: "Bahía Arenisca",
        pokemon: [
          { name: "Frillish", method: "Surf", minLevel: 32, maxLevel: 42, chance: 60 },
          { name: "Mantyke", method: "Surf", minLevel: 35, maxLevel: 42, chance: 30 },
          { name: "Wailmer", method: "Surf", minLevel: 35, maxLevel: 42, chance: 10 }
        ]
      },
      {
        id: "giant-chasm",
        name: "Boquete Gigante",
        pokemon: [
          { name: "Lunatone", method: "Cueva (Blanco 2)", minLevel: 45, maxLevel: 48, chance: 30 },
          { name: "Clefairy", method: "Cueva", minLevel: 46, maxLevel: 49, chance: 25 },
          { name: "Vanillish", method: "Cueva", minLevel: 46, maxLevel: 49, chance: 20 },
          { name: "Piloswine", method: "Cueva", minLevel: 47, maxLevel: 50, chance: 15 },
          { name: "Ditto", method: "Cueva", minLevel: 47, maxLevel: 50, chance: 10 }
        ]
      },
      {
        id: "route-23-unova",
        name: "Ruta 23",
        pokemon: [
          { name: "Bouffalant", method: "Hierba", minLevel: 47, maxLevel: 50, chance: 25 },
          { name: "Amoonguss", method: "Hierba", minLevel: 48, maxLevel: 51, chance: 20 },
          { name: "Sawk", method: "Hierba", minLevel: 48, maxLevel: 50, chance: 20 },
          { name: "Vullaby", method: "Hierba (Blanco 2)", minLevel: 47, maxLevel: 50, chance: 20 },
          { name: "Gligar", method: "Hierba", minLevel: 48, maxLevel: 51, chance: 15 }
        ]
      },
      {
        id: "victory-road-unova",
        name: "Calle Victoria (Teselia B2W2)",
        pokemon: [
          { name: "Boldore", method: "Cueva", minLevel: 47, maxLevel: 50, chance: 25 },
          { name: "Golbat", method: "Cueva", minLevel: 48, maxLevel: 51, chance: 20 },
          { name: "Mienfoo", method: "Cueva", minLevel: 48, maxLevel: 51, chance: 20 },
          { name: "Deino", method: "Cueva", minLevel: 48, maxLevel: 50, chance: 15 },
          { name: "Druddigon", method: "Cueva", minLevel: 48, maxLevel: 51, chance: 10 },
          { name: "Zweilous", method: "Cueva más profunda", minLevel: 50, maxLevel: 52, chance: 10 }
        ]
      }
    ],

    events: [
      {
        id: "b2-starter",
        pokemon: "Snivy / Tepig / Oshawott",
        method: "Inicial",
        location: "Mirador de Ciudad Engombe",
        condition: "Elección al comenzar",
        level: 5,
        verified: true,
        source: "Bel (Bianca)"
      },
      {
        id: "b2-zorua-n",
        pokemon: "Zorua (de N)",
        method: "Regalo",
        location: "Ciudad Fayenza (Casa del Ex-Equipo Plasma)",
        condition: "Vencer al soldado Plasma Rood",
        level: 25,
        verified: true,
        source: "Rood (Sabio Plasma)"
      },
      {
        id: "b2-eevee-amanita",
        pokemon: "Eevee (Habilidad Oculta)",
        method: "Regalo",
        location: "Ciudad Porcelana (Laboratorio de Amanita)",
        condition: "Hablar con Amanita tras la Liga Pokémon",
        level: 10,
        verified: true,
        source: "Amanita (Fennel)"
      },
      {
        id: "b2-fossil",
        pokemon: "Tirtouga (Fósil Tapa) / Archen (Fósil Pluma)",
        method: "Fósil",
        location: "Zona Desierto -> Museo Ciudad Esmalte",
        condition: "Mochilero en la entrada del Castillo Ancestral",
        level: 25,
        verified: true,
        source: "Investigador de Esmalte"
      },
      {
        id: "b2-deerling-gift",
        pokemon: "Deerling (Dicha)",
        method: "Regalo",
        location: "Instituto Estacional (Ruta 6)",
        condition: "Científico estudiando los cambios de clima",
        level: 30,
        verified: true,
        source: "Científico del clima"
      },
      {
        id: "b2-cobalion",
        pokemon: "Cobalion",
        method: "Estático Legendario",
        location: "Ruta 13",
        condition: "Encuentro al pasar por la colina",
        level: 45,
        verified: true,
        source: "Espadas de la Justicia"
      },
      {
        id: "b2-virizion",
        pokemon: "Virizion",
        method: "Estático Legendario",
        location: "Ruta 11",
        condition: "Encuentro al pasar por el puente",
        level: 45,
        verified: true,
        source: "Espadas de la Justicia"
      },
      {
        id: "b2-terrakion",
        pokemon: "Terrakion",
        method: "Estático Legendario",
        location: "Ruta 22",
        condition: "Encuentro en la cornisa tras recibir el Acromáquina",
        level: 45,
        verified: true,
        source: "Espadas de la Justicia"
      },
      {
        id: "b2-zekrom",
        pokemon: "Zekrom",
        method: "Estático Legendario",
        location: "Palacio de N",
        condition: "Postgame tras vencer a N",
        level: 70,
        verified: true,
        source: "Legendario de los Ideales (Blanco 2)"
      },
      {
        id: "b2-kyurem",
        pokemon: "Kyurem",
        method: "Estático Legendario",
        location: "Boquete Gigante",
        condition: "Postgame tras capturar a Zekrom/Reshiram",
        level: 70,
        verified: true,
        source: "Dragón Hueco"
      }
    ],

    milestones: [
      {
        id: "b2-badge-basic",
        name: "Medalla Base",
        leader: "Cheren",
        city: "Ciudad Engombe",
        type: "Normal",
        levelCap: 13,
        icon: "📕"
      },
      {
        id: "b2-badge-toxic",
        name: "Medalla Ponzoña",
        leader: "Hiedra (Roxie)",
        city: "Ciudad Hormigón",
        type: "Veneno",
        levelCap: 18,
        icon: "🎸"
      },
      {
        id: "b2-badge-insect",
        name: "Medalla Élitro",
        leader: "Camus (Burgh)",
        city: "Ciudad Porcelana",
        type: "Bicho",
        levelCap: 24,
        icon: "🎨"
      },
      {
        id: "b2-badge-bolt",
        name: "Medalla Voltio",
        leader: "Camila (Elesa)",
        city: "Ciudad Mayólica",
        type: "Eléctrico",
        levelCap: 30,
        icon: "⚡"
      },
      {
        id: "b2-badge-quake",
        name: "Medalla Temblor",
        leader: "Yakón (Clay)",
        city: "Ciudad Fayenza",
        type: "Tierra",
        levelCap: 33,
        icon: "⛏️"
      },
      {
        id: "b2-badge-jet",
        name: "Medalla Céfiro",
        leader: "Gerania (Skyla)",
        city: "Ciudad Loza",
        type: "Volador",
        levelCap: 39,
        icon: "✈️"
      },
      {
        id: "b2-badge-legend",
        name: "Medalla Leyenda",
        leader: "Lirio (Drayden)",
        city: "Ciudad Caolín",
        type: "Dragón",
        levelCap: 48,
        icon: "🐉"
      },
      {
        id: "b2-badge-wave",
        name: "Medalla Ola",
        leader: "Ciprés (Marlon)",
        city: "Ciudad Marga",
        type: "Agua",
        levelCap: 51,
        icon: "🌊"
      },
      {
        id: "b2-plasma-colress",
        name: "Comandante Acromo (Colress)",
        leader: "Acromo",
        city: "Fragata Plasma",
        type: "Acero",
        levelCap: 52,
        icon: "🛸"
      },
      {
        id: "b2-plasma-ghetsis",
        name: "Líder Ghechis y Kyurem Negro",
        leader: "Ghechis",
        city: "Boquete Gigante",
        type: "Siniestro / Hielo",
        levelCap: 52,
        icon: "❄️"
      },
      {
        id: "b2-e4-shauntal",
        name: "Alto Mando: Anís",
        leader: "Anís (Shauntal)",
        city: "Liga Teselia",
        type: "Fantasma",
        levelCap: 58,
        icon: "📖"
      },
      {
        id: "b2-e4-grimsley",
        name: "Alto Mando: Aza",
        leader: "Aza (Grimsley)",
        city: "Liga Teselia",
        type: "Siniestro",
        levelCap: 58,
        icon: "🃏"
      },
      {
        id: "b2-e4-caitlin",
        name: "Alto Mando: Catleya",
        leader: "Catleya (Caitlin)",
        city: "Liga Teselia",
        type: "Psíquico",
        levelCap: 58,
        icon: "🔮"
      },
      {
        id: "b2-e4-marshal",
        name: "Alto Mando: Lotto",
        leader: "Lotto (Marshal)",
        city: "Liga Teselia",
        type: "Lucha",
        levelCap: 58,
        icon: "🥋"
      },
      {
        id: "b2-champion-iris",
        name: "Campeona de Teselia: Iris",
        leader: "Iris",
        city: "Liga Teselia",
        type: "Dragón / Variado",
        levelCap: 63,
        icon: "👑"
      }
    ]
  };

  if (window.NuzlockeRegistry) {
    window.NuzlockeRegistry.register(BLACK2_DATA);
  }
})();
