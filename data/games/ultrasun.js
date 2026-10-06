/**
 * Datos de Pokémon Ultrasol (Gen 7)
 * Alola completa, sistema de Pruebas de las Islas, Totem Pokémon, Kahunas y Ultraentes.
 */
(function() {
  const ULTRASUN_DATA = {
    id: "ultrasun",
    name: "Pokémon Ultrasol",
    generation: 7,
    region: "Alola",
    badgeType: "trials", // Sistema de Pruebas e Hitos en vez de medallas tradicionales
    encounters: [
      // Melemele
      {
        id: "route-1-outskirts",
        name: "Ruta 1 (Afueras del Laboratorio)",
        pokemon: [
          { name: "Pikipek", method: "Hierba", minLevel: 2, maxLevel: 4, chance: 30 },
          { name: "Yungoos", method: "Hierba (Día)", minLevel: 2, maxLevel: 4, chance: 30 },
          { name: "Rattata-Alola", method: "Hierba (Noche)", minLevel: 2, maxLevel: 4, chance: 30 },
          { name: "Ledyba", method: "Hierba (Día)", minLevel: 2, maxLevel: 4, chance: 20 },
          { name: "Spinarak", method: "Hierba (Noche)", minLevel: 2, maxLevel: 4, chance: 20 },
          { name: "Grubbin", method: "Hierba", minLevel: 3, maxLevel: 5, chance: 10 }
        ]
      },
      {
        id: "route-1-trainers-school",
        name: "Escuela de Entrenadores (Ruta 1)",
        pokemon: [
          { name: "Magnemite", method: "Hierba", minLevel: 5, maxLevel: 8, chance: 30 },
          { name: "Meowth-Alola", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 30 },
          { name: "Grimer-Alola", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 20 },
          { name: "Zorua", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 20 }
        ]
      },
      {
        id: "hauoli-city",
        name: "Ciudad Haoli (Distrito Comercial/Playa)",
        pokemon: [
          { name: "Wingull", method: "Hierba/Playa", minLevel: 6, maxLevel: 8, chance: 40 },
          { name: "Meowth-Alola", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 25 },
          { name: "Abra", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 15 },
          { name: "Magnemite", method: "Hierba", minLevel: 6, maxLevel: 8, chance: 20 }
        ]
      },
      {
        id: "route-2-alola",
        name: "Ruta 2",
        pokemon: [
          { name: "Makuhita", method: "Hierba", minLevel: 7, maxLevel: 10, chance: 30 },
          { name: "Smeargle", method: "Hierba", minLevel: 7, maxLevel: 10, chance: 20 },
          { name: "Furfrou", method: "Hierba", minLevel: 7, maxLevel: 10, chance: 20 },
          { name: "Abra", method: "Hierba", minLevel: 7, maxLevel: 9, chance: 10 },
          { name: "Dunsparce", method: "Hierba", minLevel: 8, maxLevel: 10, chance: 10 },
          { name: "Cutiefly", method: "Hierba", minLevel: 7, maxLevel: 10, chance: 10 }
        ]
      },
      {
        id: "verdant-cavern",
        name: "Cueva Sotobosque (Guarida Prueba)",
        pokemon: [
          { name: "Yungoos", method: "Cueva (Día)", minLevel: 9, maxLevel: 11, chance: 50 },
          { name: "Rattata-Alola", method: "Cueva (Noche)", minLevel: 9, maxLevel: 11, chance: 50 },
          { name: "Zubat", method: "Cueva", minLevel: 9, maxLevel: 12, chance: 30 },
          { name: "Diglett-Alola", method: "Cueva", minLevel: 9, maxLevel: 12, chance: 20 },
          { name: "Noibat", method: "Cámara interior", minLevel: 9, maxLevel: 12, chance: 30 }
        ]
      },
      {
        id: "hauoli-cemetery",
        name: "Cementerio de Haoli",
        pokemon: [
          { name: "Gastly", method: "Hierba", minLevel: 7, maxLevel: 10, chance: 40 },
          { name: "Drifloon", method: "Hierba (Día)", minLevel: 7, maxLevel: 10, chance: 30 },
          { name: "Misdreavus", method: "Hierba (Noche)", minLevel: 7, maxLevel: 10, chance: 30 },
          { name: "Zubat", method: "Hierba", minLevel: 7, maxLevel: 9, chance: 20 },
          { name: "Litwick", method: "Hierba", minLevel: 8, maxLevel: 10, chance: 10 }
        ]
      },
      {
        id: "route-3-alola",
        name: "Ruta 3",
        pokemon: [
          { name: "Mankey", method: "Hierba", minLevel: 9, maxLevel: 12, chance: 30 },
          { name: "Spearow", method: "Hierba", minLevel: 9, maxLevel: 12, chance: 25 },
          { name: "Hawlucha", method: "Hierba", minLevel: 9, maxLevel: 12, chance: 20 },
          { name: "Cutiefly", method: "Hierba", minLevel: 10, maxLevel: 12, chance: 15 },
          { name: "Bagon", method: "Hierba (Llamada SOS)", minLevel: 9, maxLevel: 12, chance: 1 }
        ]
      },
      {
        id: "melemele-meadow",
        name: "Jardines de Melemele",
        pokemon: [
          { name: "Oricorio-Pom-Pom", method: "Flores amarillas", minLevel: 9, maxLevel: 12, chance: 40 },
          { name: "Cottonee", method: "Flores", minLevel: 9, maxLevel: 12, chance: 30 },
          { name: "Butterfree", method: "Flores", minLevel: 10, maxLevel: 12, chance: 15 },
          { name: "Cutiefly", method: "Flores", minLevel: 9, maxLevel: 12, chance: 15 }
        ]
      },
      {
        id: "seaward-cave",
        name: "Gruta Unemar",
        pokemon: [
          { name: "Zubat", method: "Cueva", minLevel: 10, maxLevel: 13, chance: 40 },
          { name: "Diglett-Alola", method: "Cueva", minLevel: 10, maxLevel: 13, chance: 30 },
          { name: "Psyduck", method: "Cueva", minLevel: 10, maxLevel: 13, chance: 20 },
          { name: "Smoochum", method: "Cueva", minLevel: 11, maxLevel: 13, chance: 10 }
        ]
      },
      {
        id: "ten-carat-hill",
        name: "Colina Dequilate",
        pokemon: [
          { name: "Machop", method: "Cueva", minLevel: 11, maxLevel: 14, chance: 30 },
          { name: "Roggenrola", method: "Cueva", minLevel: 11, maxLevel: 14, chance: 30 },
          { name: "Carbink", method: "Caldera interior", minLevel: 11, maxLevel: 14, chance: 30 },
          { name: "Rockruff", method: "Caldera interior", minLevel: 11, maxLevel: 14, chance: 20 }
        ]
      },
      // Akala
      {
        id: "route-4-akala",
        name: "Ruta 4 (Akala)",
        pokemon: [
          { name: "Mudbray", method: "Hierba", minLevel: 11, maxLevel: 14, chance: 30 },
          { name: "Lillipup", method: "Hierba", minLevel: 11, maxLevel: 14, chance: 25 },
          { name: "Pikipek", method: "Hierba", minLevel: 11, maxLevel: 14, chance: 20 },
          { name: "Grubbin", method: "Hierba", minLevel: 12, maxLevel: 14, chance: 15 },
          { name: "Eevee", method: "Hierba", minLevel: 11, maxLevel: 13, chance: 5 }
        ]
      },
      {
        id: "paniola-ranch",
        name: "Rancho Ohana",
        pokemon: [
          { name: "Mudbray", method: "Hierba", minLevel: 12, maxLevel: 15, chance: 30 },
          { name: "Mareep", method: "Hierba", minLevel: 12, maxLevel: 15, chance: 25 },
          { name: "Lillipup", method: "Hierba", minLevel: 12, maxLevel: 15, chance: 20 },
          { name: "Tauros", method: "Hierba", minLevel: 12, maxLevel: 15, chance: 10 },
          { name: "Miltank", method: "Hierba", minLevel: 12, maxLevel: 15, chance: 10 }
        ]
      },
      {
        id: "route-5-akala",
        name: "Ruta 5",
        pokemon: [
          { name: "Fomantis", method: "Hierba", minLevel: 13, maxLevel: 16, chance: 30 },
          { name: "Lillipup", method: "Hierba", minLevel: 13, maxLevel: 16, chance: 25 },
          { name: "Grubbin", method: "Hierba", minLevel: 13, maxLevel: 15, chance: 20 },
          { name: "Trumbeak", method: "Hierba", minLevel: 14, maxLevel: 16, chance: 15 },
          { name: "Ditto", method: "Hierba", minLevel: 13, maxLevel: 15, chance: 10 }
        ]
      },
      {
        id: "brooklet-hill",
        name: "Colina Saltagua (Guarida Prueba)",
        pokemon: [
          { name: "Wishiwashi", method: "Agua/Caña", minLevel: 14, maxLevel: 17, chance: 40 },
          { name: "Dewpider", method: "Día (Hierba)", minLevel: 14, maxLevel: 17, chance: 30 },
          { name: "Surskit", method: "Noche (Hierba)", minLevel: 14, maxLevel: 17, chance: 30 },
          { name: "Poliwag", method: "Hierba/Surf", minLevel: 14, maxLevel: 17, chance: 20 },
          { name: "Morelull", method: "Noche (Hierba)", minLevel: 14, maxLevel: 17, chance: 20 }
        ]
      },
      {
        id: "wela-volcano-park",
        name: "Área Volcánica Wela (Guarida Prueba)",
        pokemon: [
          { name: "Salandit", method: "Hierba", minLevel: 16, maxLevel: 19, chance: 40 },
          { name: "Cubone", method: "Hierba", minLevel: 16, maxLevel: 19, chance: 30 },
          { name: "Magby", method: "Hierba", minLevel: 16, maxLevel: 19, chance: 20 },
          { name: "Fletchling", method: "Hierba", minLevel: 16, maxLevel: 18, chance: 10 }
        ]
      },
      {
        id: "lush-jungle",
        name: "Jungla Umbría (Guarida Prueba)",
        pokemon: [
          { name: "Fomantis", method: "Hierba", minLevel: 18, maxLevel: 21, chance: 30 },
          { name: "Morelull", method: "Hierba (Noche)", minLevel: 18, maxLevel: 21, chance: 30 },
          { name: "Paras", method: "Hierba (Día)", minLevel: 18, maxLevel: 21, chance: 30 },
          { name: "Bounsweet", method: "Hierba", minLevel: 18, maxLevel: 21, chance: 20 },
          { name: "Comfey", method: "Hierba profunda", minLevel: 19, maxLevel: 22, chance: 10 },
          { name: "Passimian", method: "Hierba (Ultrasol)", minLevel: 19, maxLevel: 22, chance: 10 }
        ]
      },
      // Ula-Ula
      {
        id: "malie-garden",
        name: "Parque de Malíe",
        pokemon: [
          { name: "Psyduck", method: "Hierba", minLevel: 24, maxLevel: 27, chance: 30 },
          { name: "Poliwhirl", method: "Hierba", minLevel: 25, maxLevel: 28, chance: 25 },
          { name: "Ledian", method: "Hierba (Día)", minLevel: 24, maxLevel: 27, chance: 20 },
          { name: "Ariados", method: "Hierba (Noche)", minLevel: 24, maxLevel: 27, chance: 20 },
          { name: "Cottonee", method: "Hierba", minLevel: 24, maxLevel: 27, chance: 15 }
        ]
      },
      {
        id: "mount-hokulani",
        name: "Monte Hokulani (Observatorio)",
        pokemon: [
          { name: "Minior", method: "Hierba", minLevel: 26, maxLevel: 29, chance: 30 },
          { name: "Skarmory", method: "Hierba", minLevel: 26, maxLevel: 29, chance: 20 },
          { name: "Ditto", method: "Hierba", minLevel: 26, maxLevel: 29, chance: 20 },
          { name: "Fearow", method: "Hierba", minLevel: 26, maxLevel: 29, chance: 15 },
          { name: "Beldum", method: "Hierba", minLevel: 26, maxLevel: 29, chance: 10 }
        ]
      },
      {
        id: "route-13-alola",
        name: "Ruta 13 / Desierto de Haina",
        pokemon: [
          { name: "Dugtrio-Alola", method: "Arena", minLevel: 28, maxLevel: 31, chance: 40 },
          { name: "Trapinch", method: "Arena", minLevel: 28, maxLevel: 31, chance: 30 },
          { name: "Krokorok", method: "Arena", minLevel: 29, maxLevel: 32, chance: 20 },
          { name: "Sandile", method: "Arena", minLevel: 28, maxLevel: 30, chance: 10 }
        ]
      },
      {
        id: "abandoned-thrifty-megamart",
        name: "Supermercado Abandonado (Guarida Prueba)",
        pokemon: [
          { name: "Golbat", method: "Interior", minLevel: 30, maxLevel: 33, chance: 35 },
          { name: "Haunter", method: "Interior", minLevel: 30, maxLevel: 33, chance: 30 },
          { name: "Gengar", method: "Interior (Llamada SOS)", minLevel: 30, maxLevel: 33, chance: 5 },
          { name: "Mimikyu", method: "Interior", minLevel: 30, maxLevel: 33, chance: 5 },
          { name: "Klefki", method: "Interior", minLevel: 30, maxLevel: 33, chance: 20 }
        ]
      },
      // Poni
      {
        id: "vast-poni-canyon",
        name: "Gran Cañón de Poni (Guarida Prueba)",
        pokemon: [
          { name: "Boldore", method: "Cueva", minLevel: 41, maxLevel: 44, chance: 25 },
          { name: "Golbat", method: "Cueva", minLevel: 41, maxLevel: 44, chance: 25 },
          { name: "Lycanroc-Midday", method: "Exterior (Día)", minLevel: 41, maxLevel: 44, chance: 20 },
          { name: "Jangmo-o", method: "Hierba", minLevel: 41, maxLevel: 44, chance: 10 },
          { name: "Dugtrio-Alola", method: "Cueva", minLevel: 41, maxLevel: 44, chance: 20 }
        ]
      },
      {
        id: "mount-lanakila",
        name: "Monte Lanakila (Liga Alola)",
        pokemon: [
          { name: "Sneasel", method: "Nieve", minLevel: 45, maxLevel: 48, chance: 30 },
          { name: "Snorunt", method: "Nieve", minLevel: 45, maxLevel: 48, chance: 25 },
          { name: "Vulpix-Alola", method: "Nieve (Ultrasol)", minLevel: 45, maxLevel: 48, chance: 20 },
          { name: "Vanillish", method: "Nieve", minLevel: 45, maxLevel: 48, chance: 15 },
          { name: "Absol", method: "Nieve", minLevel: 45, maxLevel: 48, chance: 10 }
        ]
      }
    ],

    events: [
      {
        id: "us-starter",
        pokemon: "Rowlet / Litten / Popplio",
        method: "Inicial",
        location: "Pueblo Lilii (Senda Mahalo)",
        condition: "Elegir compañero tras el ataque de los Spearow a Cosmog",
        level: 5,
        verified: true,
        source: "Profesor Kukui y Kahuna Kaudan"
      },
      {
        id: "us-eevee-egg",
        pokemon: "Eevee",
        method: "Huevo",
        location: "Rancho Ohana (Cuidados Pokémon)",
        condition: "Hablar con la encargada de la guardería",
        level: 1,
        verified: true,
        source: "Cuidadora Pokémon"
      },
      {
        id: "us-surfing-pikachu",
        pokemon: "Pikachu (con Surf)",
        method: "Regalo Especial",
        location: "Playa de Kantai (Club de Surfeo)",
        condition: "Conseguir el récord número 1 en todas las playas",
        level: 40,
        verified: true,
        source: "Maestro del Surfeo Mantine"
      },
      {
        id: "us-fossil-aerodactyl",
        pokemon: "Aerodactyl",
        method: "Regalo",
        location: "Aldea Marina (Casa con forma de Huntail)",
        condition: "Hablar con la chica en la habitación",
        level: 40,
        verified: true,
        source: "Entrenadora en Aldea Marina"
      },
      {
        id: "us-type-null",
        pokemon: "Código Cero (Type: Null)",
        method: "Regalo",
        location: "Bosque de Poni (Camino a Monte Lanakila)",
        condition: "Gladio te lo entrega tras vencer la Liga",
        level: 60,
        verified: true,
        source: "Gladio"
      },
      {
        id: "us-poipole",
        pokemon: "Poipole",
        method: "Regalo Ultraente",
        location: "Megápolis Ultra (Torre Megápolis)",
        condition: "Derrotar a Ultra Necrozma",
        level: 40,
        verified: true,
        source: "Unidad Ultra (Dulse y Soliera)"
      },
      {
        id: "us-ub-blacephalon",
        pokemon: "Blacephalon",
        method: "Ultraente Estático",
        location: "Bosque de Poni",
        condition: "Postgame (misión de la Unidad Ultra)",
        level: 60,
        verified: true,
        source: "UE Explosivo"
      },
      {
        id: "us-solgaleo",
        pokemon: "Solgaleo",
        method: "Estático Legendario",
        location: "Senda Mahalo (Puente colgante)",
        condition: "Postgame tras la misión del Team Rainbow Rocket",
        level: 60,
        verified: true,
        source: "Nebulilla (Cosmog evolucionado)"
      }
    ],

    milestones: [
      {
        id: "us-trial-illima",
        name: "Prueba de Liam (Ilima)",
        leader: "Totem Gumshoos / Raticate Alola",
        city: "Cueva Sotobosque (Melemele)",
        type: "Normal / Siniestro",
        levelCap: 12,
        icon: "🐀"
      },
      {
        id: "us-grand-trial-melemele",
        name: "Gran Prueba de Melemele: Kahuna Kaudan",
        leader: "Kaudan (Hala)",
        city: "Pueblo Lilii",
        type: "Lucha",
        levelCap: 16,
        icon: "🥋"
      },
      {
        id: "us-trial-lana",
        name: "Prueba de Nereida (Lana)",
        leader: "Totem Araquanid",
        city: "Colina Saltagua (Akala)",
        type: "Agua / Bicho",
        levelCap: 20,
        icon: "🕷️"
      },
      {
        id: "us-trial-kiawe",
        name: "Prueba de Kiawe",
        leader: "Totem Marowak Alola",
        city: "Área Volcánica Wela (Akala)",
        type: "Fuego / Fantasma",
        levelCap: 22,
        icon: "🦴"
      },
      {
        id: "us-trial-mallow",
        name: "Prueba de Lulú (Mallow)",
        leader: "Totem Lurantis",
        city: "Jungla Umbría (Akala)",
        type: "Planta",
        levelCap: 24,
        icon: "🌸"
      },
      {
        id: "us-grand-trial-akala",
        name: "Gran Prueba de Akala: Kahuna Mayla",
        leader: "Mayla (Olivia)",
        city: "Ruinas de la Vida",
        type: "Roca",
        levelCap: 28,
        icon: "💎"
      },
      {
        id: "us-trial-sophocles",
        name: "Prueba de Chris (Sophocles)",
        leader: "Totem Togedemaru",
        city: "Observatorio Hokulani (Ula-Ula)",
        type: "Eléctrico / Acero",
        levelCap: 33,
        icon: "⚡"
      },
      {
        id: "us-trial-acerola",
        name: "Prueba de Zarala (Acerola)",
        leader: "Totem Mimikyu",
        city: "Supermercado Abandonado (Ula-Ula)",
        type: "Fantasma / Hada",
        levelCap: 35,
        icon: "👻"
      },
      {
        id: "us-boss-guzma",
        name: "Jefe Guzmán (Team Skull)",
        leader: "Guzmán",
        city: "Mansión Po",
        type: "Bicho",
        levelCap: 37,
        icon: "☠️"
      },
      {
        id: "us-grand-trial-ulaula",
        name: "Gran Prueba de Ula-Ula: Kahuna Denio",
        leader: "Denio (Nanu)",
        city: "Puerto de Malíe",
        type: "Siniestro",
        levelCap: 44,
        icon: "🌙"
      },
      {
        id: "us-trial-mina",
        name: "Prueba de Rika (Mina)",
        leader: "Totem Ribombee",
        city: "Pueblo Marino (Poni)",
        type: "Bicho / Hada",
        levelCap: 55,
        icon: "🧚"
      },
      {
        id: "us-grand-trial-poni",
        name: "Gran Prueba de Poni: Kahuna Hela",
        leader: "Hela (Hapu)",
        city: "Isla Exeggutor",
        type: "Tierra",
        levelCap: 48,
        icon: "🏜️"
      },
      {
        id: "us-trial-kommo-o",
        name: "Prueba del Gran Cañón",
        leader: "Totem Kommo-o",
        city: "Gran Cañón de Poni",
        type: "Dragón / Lucha",
        levelCap: 49,
        icon: "🐉"
      },
      {
        id: "us-ultra-necrozma",
        name: "Duelo Legendario: Ultra Necrozma",
        leader: "Ultra Necrozma (Aura Luminosa)",
        city: "Megápolis Ultra",
        type: "Psíquico / Dragón",
        levelCap: 60,
        icon: "🌟"
      },
      {
        id: "us-league-e4",
        name: "Alto Mando de Alola (Kaudan, Mayla, Zarala, Kahili)",
        leader: "Alto Mando de Alola",
        city: "Monte Lanakila",
        type: "Variado",
        levelCap: 57,
        icon: "🛡️"
      },
      {
        id: "us-champion-hau",
        name: "Primer Campeón de Alola (vs Tilo)",
        leader: "Tilo (Hau)",
        city: "Monte Lanakila",
        type: "Variado",
        levelCap: 60,
        icon: "👑"
      }
    ]
  };

  if (window.NuzlockeRegistry) {
    window.NuzlockeRegistry.register(ULTRASUN_DATA);
  }
})();
