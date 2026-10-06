/**
 * Datos de Pokémon Esmeralda (Gen 3)
 * Hoenn completo, 8 medallas, Liga Hoenn, eventos y Frente de Batalla.
 */
(function() {
  const EMERALD_DATA = {
    id: "emerald",
    name: "Pokémon Esmeralda",
    generation: 3,
    region: "Hoenn",
    badgeType: "badges",
    encounters: [
      {
        id: "littleroot-town",
        name: "Villa Raíz",
        pokemon: [
          { name: "Magikarp", method: "Caña Vieja", minLevel: 5, maxLevel: 10, chance: 70 },
          { name: "Tentacool", method: "Surf", minLevel: 20, maxLevel: 30, chance: 100 }
        ]
      },
      {
        id: "route-101",
        name: "Ruta 101",
        pokemon: [
          { name: "Zigzagoon", method: "Hierba", minLevel: 2, maxLevel: 3, chance: 45 },
          { name: "Wurmple", method: "Hierba", minLevel: 2, maxLevel: 3, chance: 45 },
          { name: "Poochyena", method: "Hierba", minLevel: 2, maxLevel: 3, chance: 10 }
        ]
      },
      {
        id: "route-103",
        name: "Ruta 103",
        pokemon: [
          { name: "Zigzagoon", method: "Hierba", minLevel: 2, maxLevel: 4, chance: 60 },
          { name: "Poochyena", method: "Hierba", minLevel: 2, maxLevel: 4, chance: 30 },
          { name: "Wingull", method: "Hierba", minLevel: 2, maxLevel: 4, chance: 10 }
        ]
      },
      {
        id: "route-102",
        name: "Ruta 102",
        pokemon: [
          { name: "Zigzagoon", method: "Hierba", minLevel: 3, maxLevel: 4, chance: 30 },
          { name: "Wurmple", method: "Hierba", minLevel: 3, maxLevel: 4, chance: 30 },
          { name: "Poochyena", method: "Hierba", minLevel: 3, maxLevel: 4, chance: 20 },
          { name: "Lotad", method: "Hierba", minLevel: 3, maxLevel: 4, chance: 15 },
          { name: "Ralts", method: "Hierba", minLevel: 4, maxLevel: 4, chance: 4 },
          { name: "Seedot", method: "Hierba", minLevel: 3, maxLevel: 3, chance: 1 }
        ]
      },
      {
        id: "route-104",
        name: "Ruta 104",
        pokemon: [
          { name: "Marill", method: "Hierba", minLevel: 4, maxLevel: 5, chance: 30 },
          { name: "Poochyena", method: "Hierba", minLevel: 4, maxLevel: 5, chance: 20 },
          { name: "Wingull", method: "Hierba", minLevel: 4, maxLevel: 5, chance: 20 },
          { name: "Taillow", method: "Hierba", minLevel: 4, maxLevel: 5, chance: 10 },
          { name: "Wurmple", method: "Hierba", minLevel: 4, maxLevel: 5, chance: 20 }
        ]
      },
      {
        id: "petalburg-woods",
        name: "Bosque Petalia",
        pokemon: [
          { name: "Poochyena", method: "Hierba", minLevel: 5, maxLevel: 6, chance: 30 },
          { name: "Wurmple", method: "Hierba", minLevel: 5, maxLevel: 6, chance: 20 },
          { name: "Silcoon", method: "Hierba", minLevel: 5, maxLevel: 6, chance: 10 },
          { name: "Cascoon", method: "Hierba", minLevel: 5, maxLevel: 6, chance: 10 },
          { name: "Taillow", method: "Hierba", minLevel: 5, maxLevel: 5, chance: 10 },
          { name: "Shroomish", method: "Hierba", minLevel: 5, maxLevel: 6, chance: 15 },
          { name: "Slakoth", method: "Hierba", minLevel: 5, maxLevel: 5, chance: 5 }
        ]
      },
      {
        id: "route-116",
        name: "Ruta 116",
        pokemon: [
          { name: "Poochyena", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 28 },
          { name: "Whismur", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 20 },
          { name: "Nincada", method: "Hierba", minLevel: 6, maxLevel: 7, chance: 20 },
          { name: "Taillow", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 20 },
          { name: "Abra", method: "Hierba", minLevel: 7, maxLevel: 8, chance: 10 },
          { name: "Skitty", method: "Hierba", minLevel: 7, maxLevel: 8, chance: 2 }
        ]
      },
      {
        id: "rusturf-tunnel",
        name: "Túnel Férreo",
        pokemon: [
          { name: "Whismur", method: "Cueva", minLevel: 7, maxLevel: 8, chance: 100 }
        ]
      },
      {
        id: "dewford-town",
        name: "Pueblo Azuliza",
        pokemon: [
          { name: "Magikarp", method: "Caña Vieja", minLevel: 5, maxLevel: 10, chance: 70 },
          { name: "Tentacool", method: "Caña Vieja/Surf", minLevel: 5, maxLevel: 30, chance: 30 }
        ]
      },
      {
        id: "granite-cave",
        name: "Cueva Granito",
        pokemon: [
          { name: "Zubat", method: "Cueva", minLevel: 7, maxLevel: 10, chance: 30 },
          { name: "Makuhita", method: "Cueva", minLevel: 7, maxLevel: 10, chance: 30 },
          { name: "Geodude", method: "Cueva", minLevel: 7, maxLevel: 10, chance: 30 },
          { name: "Abra", method: "Cueva", minLevel: 7, maxLevel: 8, chance: 10 },
          { name: "Aron", method: "Sótano B1/B2", minLevel: 10, maxLevel: 12, chance: 40 },
          { name: "Sableye", method: "Sótano B1/B2", minLevel: 10, maxLevel: 12, chance: 35 }
        ]
      },
      {
        id: "route-110",
        name: "Ruta 110",
        pokemon: [
          { name: "Electrike", method: "Hierba", minLevel: 12, maxLevel: 13, chance: 30 },
          { name: "Gulpin", method: "Hierba", minLevel: 12, maxLevel: 13, chance: 25 },
          { name: "Poochyena", method: "Hierba", minLevel: 12, maxLevel: 13, chance: 20 },
          { name: "Oddish", method: "Hierba", minLevel: 12, maxLevel: 13, chance: 15 },
          { name: "Wingull", method: "Hierba", minLevel: 12, maxLevel: 13, chance: 8 },
          { name: "Plusle", method: "Hierba", minLevel: 12, maxLevel: 12, chance: 1 },
          { name: "Minun", method: "Hierba", minLevel: 12, maxLevel: 12, chance: 1 }
        ]
      },
      {
        id: "route-117",
        name: "Ruta 117",
        pokemon: [
          { name: "Marill", method: "Hierba", minLevel: 13, maxLevel: 14, chance: 30 },
          { name: "Poochyena", method: "Hierba", minLevel: 13, maxLevel: 14, chance: 20 },
          { name: "Oddish", method: "Hierba", minLevel: 13, maxLevel: 14, chance: 20 },
          { name: "Roselia", method: "Hierba", minLevel: 13, maxLevel: 14, chance: 20 },
          { name: "Illumise", method: "Hierba", minLevel: 13, maxLevel: 14, chance: 5 },
          { name: "Volbeat", method: "Hierba", minLevel: 13, maxLevel: 14, chance: 5 }
        ]
      },
      {
        id: "route-111-desert",
        name: "Ruta 111 (Desierto)",
        pokemon: [
          { name: "Trapinch", method: "Arena", minLevel: 19, maxLevel: 22, chance: 35 },
          { name: "Sandshrew", method: "Arena", minLevel: 19, maxLevel: 22, chance: 35 },
          { name: "Baltoy", method: "Arena", minLevel: 19, maxLevel: 22, chance: 25 },
          { name: "Cacnea", method: "Arena", minLevel: 20, maxLevel: 22, chance: 5 }
        ]
      },
      {
        id: "route-112",
        name: "Ruta 112",
        pokemon: [
          { name: "Numel", method: "Hierba", minLevel: 15, maxLevel: 16, chance: 75 },
          { name: "Marill", method: "Hierba", minLevel: 15, maxLevel: 16, chance: 25 }
        ]
      },
      {
        id: "fiery-path",
        name: "Senda Ígnea",
        pokemon: [
          { name: "Numel", method: "Cueva", minLevel: 15, maxLevel: 16, chance: 30 },
          { name: "Machop", method: "Cueva", minLevel: 15, maxLevel: 16, chance: 25 },
          { name: "Grimer", method: "Cueva", minLevel: 15, maxLevel: 16, chance: 20 },
          { name: "Koffing", method: "Cueva", minLevel: 15, maxLevel: 16, chance: 15 },
          { name: "Torkoal", method: "Cueva", minLevel: 15, maxLevel: 16, chance: 8 },
          { name: "Slugma", method: "Cueva", minLevel: 15, maxLevel: 15, chance: 2 }
        ]
      },
      {
        id: "route-113",
        name: "Ruta 113 (Ceniza)",
        pokemon: [
          { name: "Spinda", method: "Hierba con Ceniza", minLevel: 14, maxLevel: 16, chance: 70 },
          { name: "Skarmory", method: "Hierba con Ceniza", minLevel: 16, maxLevel: 16, chance: 5 },
          { name: "Sandshrew", method: "Hierba con Ceniza", minLevel: 15, maxLevel: 16, chance: 25 }
        ]
      },
      {
        id: "route-114",
        name: "Ruta 114",
        pokemon: [
          { name: "Swablu", method: "Hierba", minLevel: 15, maxLevel: 17, chance: 40 },
          { name: "Lotad", method: "Hierba", minLevel: 15, maxLevel: 17, chance: 30 },
          { name: "Lombre", method: "Hierba", minLevel: 18, maxLevel: 19, chance: 10 },
          { name: "Seviper", method: "Hierba", minLevel: 16, maxLevel: 18, chance: 10 },
          { name: "Zangoose", method: "Hierba", minLevel: 16, maxLevel: 18, chance: 10 }
        ]
      },
      {
        id: "meteor-falls",
        name: "Cascada Meteoro",
        pokemon: [
          { name: "Zubat", method: "Cueva", minLevel: 16, maxLevel: 19, chance: 50 },
          { name: "Solrock", method: "Cueva", minLevel: 16, maxLevel: 19, chance: 25 },
          { name: "Lunatone", method: "Cueva", minLevel: 16, maxLevel: 19, chance: 25 },
          { name: "Bagon", method: "Sala más profunda", minLevel: 25, maxLevel: 35, chance: 25 }
        ]
      },
      {
        id: "jagged-pass",
        name: "Desfiladero",
        pokemon: [
          { name: "Numel", method: "Hierba", minLevel: 20, maxLevel: 22, chance: 55 },
          { name: "Machop", method: "Hierba", minLevel: 20, maxLevel: 22, chance: 25 },
          { name: "Spoink", method: "Hierba", minLevel: 20, maxLevel: 22, chance: 20 }
        ]
      },
      {
        id: "route-119",
        name: "Ruta 119",
        pokemon: [
          { name: "Linoone", method: "Hierba alta", minLevel: 25, maxLevel: 27, chance: 30 },
          { name: "Oddish", method: "Hierba alta", minLevel: 25, maxLevel: 27, chance: 30 },
          { name: "Tropius", method: "Hierba alta", minLevel: 25, maxLevel: 27, chance: 9 },
          { name: "Feebas", method: "Caña (6 casillas)", minLevel: 20, maxLevel: 25, chance: 50 }
        ]
      },
      {
        id: "route-120",
        name: "Ruta 120",
        pokemon: [
          { name: "Linoone", method: "Hierba alta", minLevel: 25, maxLevel: 27, chance: 25 },
          { name: "Oddish", method: "Hierba alta", minLevel: 25, maxLevel: 27, chance: 25 },
          { name: "Marill", method: "Hierba alta", minLevel: 25, maxLevel: 27, chance: 20 },
          { name: "Absol", method: "Hierba alta", minLevel: 25, maxLevel: 27, chance: 8 }
        ]
      },
      {
        id: "safari-zone-hoenn",
        name: "Zona Safari (Hoenn)",
        pokemon: [
          { name: "Pikachu", method: "Hierba", minLevel: 27, maxLevel: 30, chance: 5 },
          { name: "Doduo", method: "Hierba", minLevel: 29, maxLevel: 31, chance: 15 },
          { name: "Girafarig", method: "Hierba", minLevel: 27, maxLevel: 30, chance: 20 },
          { name: "Natu", method: "Hierba", minLevel: 29, maxLevel: 31, chance: 15 },
          { name: "Phanpy", method: "Hierba", minLevel: 29, maxLevel: 31, chance: 10 },
          { name: "Heracross", method: "Hierba", minLevel: 27, maxLevel: 30, chance: 5 }
        ]
      },
      {
        id: "mt-pyre",
        name: "Monte Pírico",
        pokemon: [
          { name: "Duskull", method: "Interior pisos", minLevel: 26, maxLevel: 29, chance: 100 },
          { name: "Shuppet", method: "Exterior montaña", minLevel: 26, maxLevel: 28, chance: 100 },
          { name: "Vulpix", method: "Exterior hierba", minLevel: 26, maxLevel: 28, chance: 30 },
          { name: "Chimecho", method: "Cima", minLevel: 28, maxLevel: 28, chance: 2 }
        ]
      },
      {
        id: "shoal-cave",
        name: "Cueva Cardumen",
        pokemon: [
          { name: "Spheal", method: "Cueva", minLevel: 26, maxLevel: 32, chance: 50 },
          { name: "Zubat", method: "Cueva", minLevel: 26, maxLevel: 30, chance: 40 },
          { name: "Snorunt", method: "Sala helada baja marea", minLevel: 26, maxLevel: 32, chance: 10 }
        ]
      },
      {
        id: "sky-pillar",
        name: "Pilar Celeste",
        pokemon: [
          { name: "Golbat", method: "Pisos", minLevel: 34, maxLevel: 40, chance: 25 },
          { name: "Sableye", method: "Pisos", minLevel: 34, maxLevel: 38, chance: 20 },
          { name: "Claydol", method: "Pisos", minLevel: 36, maxLevel: 42, chance: 20 },
          { name: "Banette", method: "Pisos", minLevel: 36, maxLevel: 40, chance: 15 },
          { name: "Dusclops", method: "Pisos", minLevel: 36, maxLevel: 40, chance: 15 },
          { name: "Altaria", method: "Pisos superiores", minLevel: 38, maxLevel: 42, chance: 5 }
        ]
      },
      {
        id: "victory-road-hoenn",
        name: "Calle Victoria (Hoenn)",
        pokemon: [
          { name: "Golbat", method: "Cueva", minLevel: 36, maxLevel: 44, chance: 30 },
          { name: "Lairon", method: "Cueva", minLevel: 38, maxLevel: 42, chance: 25 },
          { name: "Hariyama", method: "Cueva", minLevel: 38, maxLevel: 42, chance: 20 },
          { name: "Loudred", method: "Cueva", minLevel: 38, maxLevel: 42, chance: 15 },
          { name: "Mawile", method: "Cueva", minLevel: 36, maxLevel: 40, chance: 5 },
          { name: "Sableye", method: "Cueva", minLevel: 36, maxLevel: 40, chance: 5 }
        ]
      }
    ],

    events: [
      {
        id: "em-starter",
        pokemon: "Treecko / Torchic / Mudkip",
        method: "Inicial",
        location: "Ruta 101 (Bolsa de Abedul)",
        condition: "Salvar al Profesor Abedul del Poochyena",
        level: 5,
        verified: true,
        source: "Profesor Abedul"
      },
      {
        id: "em-fossil",
        pokemon: "Lileep (Fósil Raíz) / Anorith (Fósil Garra)",
        method: "Fósil",
        location: "Torre Espejismo (Ruta 111) -> Revivir en Corp. Devon",
        condition: "Elegir uno antes de que la torre se hunda",
        level: 20,
        verified: true,
        source: "Científico de Devon"
      },
      {
        id: "em-wynaut-egg",
        pokemon: "Wynaut",
        method: "Huevo",
        location: "Pueblo Lavacalda (Termas)",
        condition: "Llevar hueco libre en el equipo",
        level: 1,
        verified: true,
        source: "Anciana junto a las aguas termales"
      },
      {
        id: "em-castform",
        pokemon: "Castform",
        method: "Regalo",
        location: "Instituto Meteorológico (Ruta 119)",
        condition: "Derrotar a los soldados del Equipo Aqua",
        level: 25,
        verified: true,
        source: "Científico jefe"
      },
      {
        id: "em-kecleon",
        pokemon: "Kecleon",
        method: "Estático",
        location: "Ruta 120 (Puente de acceso al gimnasio)",
        condition: "Usar Devonsilbato de Máximo",
        level: 30,
        verified: true,
        source: "Encuentro fijo invisible"
      },
      {
        id: "em-beldum",
        pokemon: "Beldum",
        method: "Regalo",
        location: "Ciudad Algaria (Casa de Máximo)",
        condition: "Postgame (tras vencer al Campeón)",
        level: 5,
        verified: true,
        source: "Poké Ball dejada por Máximo"
      },
      {
        id: "em-rayquaza",
        pokemon: "Rayquaza",
        method: "Estático Legendario",
        location: "Pilar Celeste (Cima)",
        condition: "Tras calmar la lucha entre Groudon y Kyogre",
        level: 70,
        verified: true,
        source: "Señor de los Cielos"
      },
      {
        id: "em-groudon",
        pokemon: "Groudon",
        method: "Estático Legendario",
        location: "Cueva Terrestre (Ruta cambiante)",
        condition: "Postgame tras aviso del Instituto Meteorológico",
        level: 70,
        verified: true,
        source: "Legendario de la Tierra"
      },
      {
        id: "em-kyogre",
        pokemon: "Kyogre",
        method: "Estático Legendario",
        location: "Cueva Marina (Ruta cambiante)",
        condition: "Postgame tras aviso del Instituto Meteorológico",
        level: 70,
        verified: true,
        source: "Legendario del Mar"
      }
    ],

    milestones: [
      {
        id: "em-badge-stone",
        name: "Medalla Piedra",
        leader: "Petra",
        city: "Ciudad Férrica",
        type: "Roca",
        levelCap: 15,
        icon: "🪨"
      },
      {
        id: "em-badge-knuckle",
        name: "Medalla Puño",
        leader: "Marcial",
        city: "Pueblo Azuliza",
        type: "Lucha",
        levelCap: 18,
        icon: "🥊"
      },
      {
        id: "em-badge-dynamo",
        name: "Medalla Dinamo",
        leader: "Erico",
        city: "Ciudad Malvalona",
        type: "Eléctrico",
        levelCap: 24,
        icon: "⚡"
      },
      {
        id: "em-badge-heat",
        name: "Medalla Calor",
        leader: "Candela",
        city: "Pueblo Lavacalda",
        type: "Fuego",
        levelCap: 29,
        icon: "🔥"
      },
      {
        id: "em-badge-balance",
        name: "Medalla Equilibrio",
        leader: "Norman",
        city: "Ciudad Petalia",
        type: "Normal",
        levelCap: 31,
        icon: "⚖️"
      },
      {
        id: "em-badge-feather",
        name: "Medalla Pluma",
        leader: "Alana",
        city: "Ciudad Arborada",
        type: "Volador",
        levelCap: 33,
        icon: "🪶"
      },
      {
        id: "em-badge-mind",
        name: "Medalla Mente",
        leader: "Vito y Leti",
        city: "Ciudad Algaria",
        type: "Psíquico",
        levelCap: 42,
        icon: "🔮"
      },
      {
        id: "em-badge-rain",
        name: "Medalla Lluvia",
        leader: "Galano (Juan)",
        city: "Arrecípolis",
        type: "Agua",
        levelCap: 43,
        icon: "💧"
      },
      {
        id: "em-e4-sidney",
        name: "Alto Mando: Sixto",
        leader: "Sixto",
        city: "Ciudad Colosalia",
        type: "Siniestro",
        levelCap: 49,
        icon: "🌙"
      },
      {
        id: "em-e4-phoebe",
        name: "Alto Mando: Fátima",
        leader: "Fátima",
        city: "Ciudad Colosalia",
        type: "Fantasma",
        levelCap: 51,
        icon: "👻"
      },
      {
        id: "em-e4-glacia",
        name: "Alto Mando: Nívea",
        leader: "Nívea",
        city: "Ciudad Colosalia",
        type: "Hielo",
        levelCap: 53,
        icon: "❄️"
      },
      {
        id: "em-e4-drake",
        name: "Alto Mando: Dracón",
        leader: "Dracón",
        city: "Ciudad Colosalia",
        type: "Dragón",
        levelCap: 55,
        icon: "🐉"
      },
      {
        id: "em-champion-wallace",
        name: "Campeón de Hoenn: Plubio",
        leader: "Plubio (Wallace)",
        city: "Ciudad Colosalia",
        type: "Agua",
        levelCap: 58,
        icon: "👑"
      },
      {
        id: "em-steven-meteor",
        name: "Duelo Secreto contra Máximo",
        leader: "Máximo Peñas (Steven)",
        city: "Cascada Meteoro",
        type: "Acero / Roca",
        levelCap: 78,
        icon: "⚔️"
      }
    ]
  };

  if (window.NuzlockeRegistry) {
    window.NuzlockeRegistry.register(EMERALD_DATA);
  }
})();
