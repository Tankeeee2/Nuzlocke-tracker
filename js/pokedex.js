/**
 * Nuzlocke Tracker - Base de Datos de Especies Pokédex (Gen 1 - Gen 8)
 * Con mapeo de tipos, familias evolutivas para Dupes Clause y helpers de sprites.
 */
(function() {
  const POKEMON_DATA = [
  {
    "id": 1,
    "key": "bulbasaur",
    "name": "Bulbasaur",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 1
  },
  {
    "id": 2,
    "key": "ivysaur",
    "name": "Ivysaur",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 1
  },
  {
    "id": 3,
    "key": "venusaur",
    "name": "Venusaur",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 1
  },
  {
    "id": 4,
    "key": "charmander",
    "name": "Charmander",
    "types": [
      "Fuego"
    ],
    "familyId": 4
  },
  {
    "id": 5,
    "key": "charmeleon",
    "name": "Charmeleon",
    "types": [
      "Fuego"
    ],
    "familyId": 4
  },
  {
    "id": 6,
    "key": "charizard",
    "name": "Charizard",
    "types": [
      "Fuego",
      "Volador"
    ],
    "familyId": 4
  },
  {
    "id": 7,
    "key": "squirtle",
    "name": "Squirtle",
    "types": [
      "Agua"
    ],
    "familyId": 7
  },
  {
    "id": 8,
    "key": "wartortle",
    "name": "Wartortle",
    "types": [
      "Agua"
    ],
    "familyId": 7
  },
  {
    "id": 9,
    "key": "blastoise",
    "name": "Blastoise",
    "types": [
      "Agua"
    ],
    "familyId": 7
  },
  {
    "id": 10,
    "key": "caterpie",
    "name": "Caterpie",
    "types": [
      "Bicho"
    ],
    "familyId": 10
  },
  {
    "id": 11,
    "key": "metapod",
    "name": "Metapod",
    "types": [
      "Bicho"
    ],
    "familyId": 10
  },
  {
    "id": 12,
    "key": "butterfree",
    "name": "Butterfree",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 10
  },
  {
    "id": 13,
    "key": "weedle",
    "name": "Weedle",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 13
  },
  {
    "id": 14,
    "key": "kakuna",
    "name": "Kakuna",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 13
  },
  {
    "id": 15,
    "key": "beedrill",
    "name": "Beedrill",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 13
  },
  {
    "id": 16,
    "key": "pidgey",
    "name": "Pidgey",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 16
  },
  {
    "id": 17,
    "key": "pidgeotto",
    "name": "Pidgeotto",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 16
  },
  {
    "id": 18,
    "key": "pidgeot",
    "name": "Pidgeot",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 16
  },
  {
    "id": 19,
    "key": "rattata",
    "name": "Rattata",
    "types": [
      "Normal"
    ],
    "familyId": 19
  },
  {
    "id": 19,
    "key": "rattataalola",
    "name": "Rattata-Alola",
    "types": [
      "Siniestro",
      "Normal"
    ],
    "familyId": 19
  },
  {
    "id": 20,
    "key": "raticate",
    "name": "Raticate",
    "types": [
      "Normal"
    ],
    "familyId": 19
  },
  {
    "id": 20,
    "key": "raticatealola",
    "name": "Raticate-Alola",
    "types": [
      "Siniestro",
      "Normal"
    ],
    "familyId": 19
  },
  {
    "id": 21,
    "key": "spearow",
    "name": "Spearow",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 21
  },
  {
    "id": 22,
    "key": "fearow",
    "name": "Fearow",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 21
  },
  {
    "id": 23,
    "key": "ekans",
    "name": "Ekans",
    "types": [
      "Veneno"
    ],
    "familyId": 23
  },
  {
    "id": 24,
    "key": "arbok",
    "name": "Arbok",
    "types": [
      "Veneno"
    ],
    "familyId": 23
  },
  {
    "id": 25,
    "key": "pikachu",
    "name": "Pikachu",
    "types": [
      "Eléctrico"
    ],
    "familyId": 172
  },
  {
    "id": 25,
    "key": "pikachualola",
    "name": "Pikachu-Alola",
    "types": [
      "Eléctrico"
    ],
    "familyId": 25
  },
  {
    "id": 26,
    "key": "raichu",
    "name": "Raichu",
    "types": [
      "Eléctrico"
    ],
    "familyId": 172
  },
  {
    "id": 26,
    "key": "raichualola",
    "name": "Raichu-Alola",
    "types": [
      "Eléctrico",
      "Psíquico"
    ],
    "familyId": 172
  },
  {
    "id": 27,
    "key": "sandshrew",
    "name": "Sandshrew",
    "types": [
      "Tierra"
    ],
    "familyId": 27
  },
  {
    "id": 27,
    "key": "sandshrewalola",
    "name": "Sandshrew-Alola",
    "types": [
      "Hielo",
      "Acero"
    ],
    "familyId": 27
  },
  {
    "id": 28,
    "key": "sandslash",
    "name": "Sandslash",
    "types": [
      "Tierra"
    ],
    "familyId": 27
  },
  {
    "id": 28,
    "key": "sandslashalola",
    "name": "Sandslash-Alola",
    "types": [
      "Hielo",
      "Acero"
    ],
    "familyId": 27
  },
  {
    "id": 29,
    "key": "nidoranf",
    "name": "Nidoran-F",
    "types": [
      "Veneno"
    ],
    "familyId": 29
  },
  {
    "id": 30,
    "key": "nidorina",
    "name": "Nidorina",
    "types": [
      "Veneno"
    ],
    "familyId": 29
  },
  {
    "id": 31,
    "key": "nidoqueen",
    "name": "Nidoqueen",
    "types": [
      "Veneno",
      "Tierra"
    ],
    "familyId": 29
  },
  {
    "id": 32,
    "key": "nidoranm",
    "name": "Nidoran-M",
    "types": [
      "Veneno"
    ],
    "familyId": 32
  },
  {
    "id": 33,
    "key": "nidorino",
    "name": "Nidorino",
    "types": [
      "Veneno"
    ],
    "familyId": 32
  },
  {
    "id": 34,
    "key": "nidoking",
    "name": "Nidoking",
    "types": [
      "Veneno",
      "Tierra"
    ],
    "familyId": 32
  },
  {
    "id": 35,
    "key": "clefairy",
    "name": "Clefairy",
    "types": [
      "Hada"
    ],
    "familyId": 173
  },
  {
    "id": 36,
    "key": "clefable",
    "name": "Clefable",
    "types": [
      "Hada"
    ],
    "familyId": 173
  },
  {
    "id": 37,
    "key": "vulpix",
    "name": "Vulpix",
    "types": [
      "Fuego"
    ],
    "familyId": 37
  },
  {
    "id": 37,
    "key": "vulpixalola",
    "name": "Vulpix-Alola",
    "types": [
      "Hielo"
    ],
    "familyId": 37
  },
  {
    "id": 38,
    "key": "ninetales",
    "name": "Ninetales",
    "types": [
      "Fuego"
    ],
    "familyId": 37
  },
  {
    "id": 38,
    "key": "ninetalesalola",
    "name": "Ninetales-Alola",
    "types": [
      "Hielo",
      "Hada"
    ],
    "familyId": 37
  },
  {
    "id": 39,
    "key": "jigglypuff",
    "name": "Jigglypuff",
    "types": [
      "Normal",
      "Hada"
    ],
    "familyId": 174
  },
  {
    "id": 40,
    "key": "wigglytuff",
    "name": "Wigglytuff",
    "types": [
      "Normal",
      "Hada"
    ],
    "familyId": 174
  },
  {
    "id": 41,
    "key": "zubat",
    "name": "Zubat",
    "types": [
      "Veneno",
      "Volador"
    ],
    "familyId": 41
  },
  {
    "id": 42,
    "key": "golbat",
    "name": "Golbat",
    "types": [
      "Veneno",
      "Volador"
    ],
    "familyId": 41
  },
  {
    "id": 43,
    "key": "oddish",
    "name": "Oddish",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 43
  },
  {
    "id": 44,
    "key": "gloom",
    "name": "Gloom",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 43
  },
  {
    "id": 45,
    "key": "vileplume",
    "name": "Vileplume",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 43
  },
  {
    "id": 46,
    "key": "paras",
    "name": "Paras",
    "types": [
      "Bicho",
      "Planta"
    ],
    "familyId": 46
  },
  {
    "id": 47,
    "key": "parasect",
    "name": "Parasect",
    "types": [
      "Bicho",
      "Planta"
    ],
    "familyId": 46
  },
  {
    "id": 48,
    "key": "venonat",
    "name": "Venonat",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 48
  },
  {
    "id": 49,
    "key": "venomoth",
    "name": "Venomoth",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 48
  },
  {
    "id": 50,
    "key": "diglett",
    "name": "Diglett",
    "types": [
      "Tierra"
    ],
    "familyId": 50
  },
  {
    "id": 50,
    "key": "diglettalola",
    "name": "Diglett-Alola",
    "types": [
      "Tierra",
      "Acero"
    ],
    "familyId": 50
  },
  {
    "id": 51,
    "key": "dugtrio",
    "name": "Dugtrio",
    "types": [
      "Tierra"
    ],
    "familyId": 50
  },
  {
    "id": 51,
    "key": "dugtrioalola",
    "name": "Dugtrio-Alola",
    "types": [
      "Tierra",
      "Acero"
    ],
    "familyId": 50
  },
  {
    "id": 52,
    "key": "meowth",
    "name": "Meowth",
    "types": [
      "Normal"
    ],
    "familyId": 52
  },
  {
    "id": 52,
    "key": "meowthalola",
    "name": "Meowth-Alola",
    "types": [
      "Siniestro"
    ],
    "familyId": 52
  },
  {
    "id": 52,
    "key": "meowthgalar",
    "name": "Meowth-Galar",
    "types": [
      "Acero"
    ],
    "familyId": 52
  },
  {
    "id": 53,
    "key": "persian",
    "name": "Persian",
    "types": [
      "Normal"
    ],
    "familyId": 52
  },
  {
    "id": 53,
    "key": "persianalola",
    "name": "Persian-Alola",
    "types": [
      "Siniestro"
    ],
    "familyId": 52
  },
  {
    "id": 54,
    "key": "psyduck",
    "name": "Psyduck",
    "types": [
      "Agua"
    ],
    "familyId": 54
  },
  {
    "id": 55,
    "key": "golduck",
    "name": "Golduck",
    "types": [
      "Agua"
    ],
    "familyId": 54
  },
  {
    "id": 56,
    "key": "mankey",
    "name": "Mankey",
    "types": [
      "Lucha"
    ],
    "familyId": 56
  },
  {
    "id": 57,
    "key": "primeape",
    "name": "Primeape",
    "types": [
      "Lucha"
    ],
    "familyId": 56
  },
  {
    "id": 58,
    "key": "growlithe",
    "name": "Growlithe",
    "types": [
      "Fuego"
    ],
    "familyId": 58
  },
  {
    "id": 59,
    "key": "arcanine",
    "name": "Arcanine",
    "types": [
      "Fuego"
    ],
    "familyId": 58
  },
  {
    "id": 60,
    "key": "poliwag",
    "name": "Poliwag",
    "types": [
      "Agua"
    ],
    "familyId": 60
  },
  {
    "id": 61,
    "key": "poliwhirl",
    "name": "Poliwhirl",
    "types": [
      "Agua"
    ],
    "familyId": 60
  },
  {
    "id": 62,
    "key": "poliwrath",
    "name": "Poliwrath",
    "types": [
      "Agua",
      "Lucha"
    ],
    "familyId": 60
  },
  {
    "id": 63,
    "key": "abra",
    "name": "Abra",
    "types": [
      "Psíquico"
    ],
    "familyId": 63
  },
  {
    "id": 64,
    "key": "kadabra",
    "name": "Kadabra",
    "types": [
      "Psíquico"
    ],
    "familyId": 63
  },
  {
    "id": 65,
    "key": "alakazam",
    "name": "Alakazam",
    "types": [
      "Psíquico"
    ],
    "familyId": 63
  },
  {
    "id": 66,
    "key": "machop",
    "name": "Machop",
    "types": [
      "Lucha"
    ],
    "familyId": 66
  },
  {
    "id": 67,
    "key": "machoke",
    "name": "Machoke",
    "types": [
      "Lucha"
    ],
    "familyId": 66
  },
  {
    "id": 68,
    "key": "machamp",
    "name": "Machamp",
    "types": [
      "Lucha"
    ],
    "familyId": 66
  },
  {
    "id": 69,
    "key": "bellsprout",
    "name": "Bellsprout",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 69
  },
  {
    "id": 70,
    "key": "weepinbell",
    "name": "Weepinbell",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 69
  },
  {
    "id": 71,
    "key": "victreebel",
    "name": "Victreebel",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 69
  },
  {
    "id": 72,
    "key": "tentacool",
    "name": "Tentacool",
    "types": [
      "Agua",
      "Veneno"
    ],
    "familyId": 72
  },
  {
    "id": 73,
    "key": "tentacruel",
    "name": "Tentacruel",
    "types": [
      "Agua",
      "Veneno"
    ],
    "familyId": 72
  },
  {
    "id": 74,
    "key": "geodude",
    "name": "Geodude",
    "types": [
      "Roca",
      "Tierra"
    ],
    "familyId": 74
  },
  {
    "id": 74,
    "key": "geodudealola",
    "name": "Geodude-Alola",
    "types": [
      "Roca",
      "Eléctrico"
    ],
    "familyId": 74
  },
  {
    "id": 75,
    "key": "graveler",
    "name": "Graveler",
    "types": [
      "Roca",
      "Tierra"
    ],
    "familyId": 74
  },
  {
    "id": 75,
    "key": "graveleralola",
    "name": "Graveler-Alola",
    "types": [
      "Roca",
      "Eléctrico"
    ],
    "familyId": 74
  },
  {
    "id": 76,
    "key": "golem",
    "name": "Golem",
    "types": [
      "Roca",
      "Tierra"
    ],
    "familyId": 74
  },
  {
    "id": 76,
    "key": "golemalola",
    "name": "Golem-Alola",
    "types": [
      "Roca",
      "Eléctrico"
    ],
    "familyId": 74
  },
  {
    "id": 77,
    "key": "ponyta",
    "name": "Ponyta",
    "types": [
      "Fuego"
    ],
    "familyId": 77
  },
  {
    "id": 77,
    "key": "ponytagalar",
    "name": "Ponyta-Galar",
    "types": [
      "Psíquico"
    ],
    "familyId": 77
  },
  {
    "id": 78,
    "key": "rapidash",
    "name": "Rapidash",
    "types": [
      "Fuego"
    ],
    "familyId": 77
  },
  {
    "id": 78,
    "key": "rapidashgalar",
    "name": "Rapidash-Galar",
    "types": [
      "Psíquico",
      "Hada"
    ],
    "familyId": 77
  },
  {
    "id": 79,
    "key": "slowpoke",
    "name": "Slowpoke",
    "types": [
      "Agua",
      "Psíquico"
    ],
    "familyId": 79
  },
  {
    "id": 79,
    "key": "slowpokegalar",
    "name": "Slowpoke-Galar",
    "types": [
      "Psíquico"
    ],
    "familyId": 79
  },
  {
    "id": 80,
    "key": "slowbro",
    "name": "Slowbro",
    "types": [
      "Agua",
      "Psíquico"
    ],
    "familyId": 79
  },
  {
    "id": 80,
    "key": "slowbrogalar",
    "name": "Slowbro-Galar",
    "types": [
      "Veneno",
      "Psíquico"
    ],
    "familyId": 79
  },
  {
    "id": 81,
    "key": "magnemite",
    "name": "Magnemite",
    "types": [
      "Eléctrico",
      "Acero"
    ],
    "familyId": 81
  },
  {
    "id": 82,
    "key": "magneton",
    "name": "Magneton",
    "types": [
      "Eléctrico",
      "Acero"
    ],
    "familyId": 81
  },
  {
    "id": 83,
    "key": "farfetchd",
    "name": "Farfetch’d",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 83
  },
  {
    "id": 83,
    "key": "farfetchdgalar",
    "name": "Farfetch’d-Galar",
    "types": [
      "Lucha"
    ],
    "familyId": 83
  },
  {
    "id": 84,
    "key": "doduo",
    "name": "Doduo",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 84
  },
  {
    "id": 85,
    "key": "dodrio",
    "name": "Dodrio",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 84
  },
  {
    "id": 86,
    "key": "seel",
    "name": "Seel",
    "types": [
      "Agua"
    ],
    "familyId": 86
  },
  {
    "id": 87,
    "key": "dewgong",
    "name": "Dewgong",
    "types": [
      "Agua",
      "Hielo"
    ],
    "familyId": 86
  },
  {
    "id": 88,
    "key": "grimer",
    "name": "Grimer",
    "types": [
      "Veneno"
    ],
    "familyId": 88
  },
  {
    "id": 88,
    "key": "grimeralola",
    "name": "Grimer-Alola",
    "types": [
      "Veneno",
      "Siniestro"
    ],
    "familyId": 88
  },
  {
    "id": 89,
    "key": "muk",
    "name": "Muk",
    "types": [
      "Veneno"
    ],
    "familyId": 88
  },
  {
    "id": 89,
    "key": "mukalola",
    "name": "Muk-Alola",
    "types": [
      "Veneno",
      "Siniestro"
    ],
    "familyId": 88
  },
  {
    "id": 90,
    "key": "shellder",
    "name": "Shellder",
    "types": [
      "Agua"
    ],
    "familyId": 90
  },
  {
    "id": 91,
    "key": "cloyster",
    "name": "Cloyster",
    "types": [
      "Agua",
      "Hielo"
    ],
    "familyId": 90
  },
  {
    "id": 92,
    "key": "gastly",
    "name": "Gastly",
    "types": [
      "Fantasma",
      "Veneno"
    ],
    "familyId": 92
  },
  {
    "id": 93,
    "key": "haunter",
    "name": "Haunter",
    "types": [
      "Fantasma",
      "Veneno"
    ],
    "familyId": 92
  },
  {
    "id": 94,
    "key": "gengar",
    "name": "Gengar",
    "types": [
      "Fantasma",
      "Veneno"
    ],
    "familyId": 92
  },
  {
    "id": 95,
    "key": "onix",
    "name": "Onix",
    "types": [
      "Roca",
      "Tierra"
    ],
    "familyId": 95
  },
  {
    "id": 96,
    "key": "drowzee",
    "name": "Drowzee",
    "types": [
      "Psíquico"
    ],
    "familyId": 96
  },
  {
    "id": 97,
    "key": "hypno",
    "name": "Hypno",
    "types": [
      "Psíquico"
    ],
    "familyId": 96
  },
  {
    "id": 98,
    "key": "krabby",
    "name": "Krabby",
    "types": [
      "Agua"
    ],
    "familyId": 98
  },
  {
    "id": 99,
    "key": "kingler",
    "name": "Kingler",
    "types": [
      "Agua"
    ],
    "familyId": 98
  },
  {
    "id": 100,
    "key": "voltorb",
    "name": "Voltorb",
    "types": [
      "Eléctrico"
    ],
    "familyId": 100
  },
  {
    "id": 101,
    "key": "electrode",
    "name": "Electrode",
    "types": [
      "Eléctrico"
    ],
    "familyId": 100
  },
  {
    "id": 102,
    "key": "exeggcute",
    "name": "Exeggcute",
    "types": [
      "Planta",
      "Psíquico"
    ],
    "familyId": 102
  },
  {
    "id": 103,
    "key": "exeggutor",
    "name": "Exeggutor",
    "types": [
      "Planta",
      "Psíquico"
    ],
    "familyId": 102
  },
  {
    "id": 103,
    "key": "exeggutoralola",
    "name": "Exeggutor-Alola",
    "types": [
      "Planta",
      "Dragón"
    ],
    "familyId": 102
  },
  {
    "id": 104,
    "key": "cubone",
    "name": "Cubone",
    "types": [
      "Tierra"
    ],
    "familyId": 104
  },
  {
    "id": 105,
    "key": "marowak",
    "name": "Marowak",
    "types": [
      "Tierra"
    ],
    "familyId": 104
  },
  {
    "id": 105,
    "key": "marowakalola",
    "name": "Marowak-Alola",
    "types": [
      "Fuego",
      "Fantasma"
    ],
    "familyId": 104
  },
  {
    "id": 106,
    "key": "hitmonlee",
    "name": "Hitmonlee",
    "types": [
      "Lucha"
    ],
    "familyId": 236
  },
  {
    "id": 107,
    "key": "hitmonchan",
    "name": "Hitmonchan",
    "types": [
      "Lucha"
    ],
    "familyId": 236
  },
  {
    "id": 108,
    "key": "lickitung",
    "name": "Lickitung",
    "types": [
      "Normal"
    ],
    "familyId": 108
  },
  {
    "id": 109,
    "key": "koffing",
    "name": "Koffing",
    "types": [
      "Veneno"
    ],
    "familyId": 109
  },
  {
    "id": 110,
    "key": "weezing",
    "name": "Weezing",
    "types": [
      "Veneno"
    ],
    "familyId": 109
  },
  {
    "id": 110,
    "key": "weezinggalar",
    "name": "Weezing-Galar",
    "types": [
      "Veneno",
      "Hada"
    ],
    "familyId": 109
  },
  {
    "id": 111,
    "key": "rhyhorn",
    "name": "Rhyhorn",
    "types": [
      "Tierra",
      "Roca"
    ],
    "familyId": 111
  },
  {
    "id": 112,
    "key": "rhydon",
    "name": "Rhydon",
    "types": [
      "Tierra",
      "Roca"
    ],
    "familyId": 111
  },
  {
    "id": 113,
    "key": "chansey",
    "name": "Chansey",
    "types": [
      "Normal"
    ],
    "familyId": 440
  },
  {
    "id": 114,
    "key": "tangela",
    "name": "Tangela",
    "types": [
      "Planta"
    ],
    "familyId": 114
  },
  {
    "id": 115,
    "key": "kangaskhan",
    "name": "Kangaskhan",
    "types": [
      "Normal"
    ],
    "familyId": 115
  },
  {
    "id": 116,
    "key": "horsea",
    "name": "Horsea",
    "types": [
      "Agua"
    ],
    "familyId": 116
  },
  {
    "id": 117,
    "key": "seadra",
    "name": "Seadra",
    "types": [
      "Agua"
    ],
    "familyId": 116
  },
  {
    "id": 118,
    "key": "goldeen",
    "name": "Goldeen",
    "types": [
      "Agua"
    ],
    "familyId": 118
  },
  {
    "id": 119,
    "key": "seaking",
    "name": "Seaking",
    "types": [
      "Agua"
    ],
    "familyId": 118
  },
  {
    "id": 120,
    "key": "staryu",
    "name": "Staryu",
    "types": [
      "Agua"
    ],
    "familyId": 120
  },
  {
    "id": 121,
    "key": "starmie",
    "name": "Starmie",
    "types": [
      "Agua",
      "Psíquico"
    ],
    "familyId": 120
  },
  {
    "id": 122,
    "key": "mrmime",
    "name": "Mr. Mime",
    "types": [
      "Psíquico",
      "Hada"
    ],
    "familyId": 439
  },
  {
    "id": 122,
    "key": "mrmimegalar",
    "name": "Mr. Mime-Galar",
    "types": [
      "Hielo",
      "Psíquico"
    ],
    "familyId": 439
  },
  {
    "id": 123,
    "key": "scyther",
    "name": "Scyther",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 123
  },
  {
    "id": 124,
    "key": "jynx",
    "name": "Jynx",
    "types": [
      "Hielo",
      "Psíquico"
    ],
    "familyId": 238
  },
  {
    "id": 125,
    "key": "electabuzz",
    "name": "Electabuzz",
    "types": [
      "Eléctrico"
    ],
    "familyId": 239
  },
  {
    "id": 126,
    "key": "magmar",
    "name": "Magmar",
    "types": [
      "Fuego"
    ],
    "familyId": 240
  },
  {
    "id": 127,
    "key": "pinsir",
    "name": "Pinsir",
    "types": [
      "Bicho"
    ],
    "familyId": 127
  },
  {
    "id": 128,
    "key": "tauros",
    "name": "Tauros",
    "types": [
      "Normal"
    ],
    "familyId": 128
  },
  {
    "id": 129,
    "key": "magikarp",
    "name": "Magikarp",
    "types": [
      "Agua"
    ],
    "familyId": 129
  },
  {
    "id": 130,
    "key": "gyarados",
    "name": "Gyarados",
    "types": [
      "Agua",
      "Volador"
    ],
    "familyId": 129
  },
  {
    "id": 131,
    "key": "lapras",
    "name": "Lapras",
    "types": [
      "Agua",
      "Hielo"
    ],
    "familyId": 131
  },
  {
    "id": 132,
    "key": "ditto",
    "name": "Ditto",
    "types": [
      "Normal"
    ],
    "familyId": 132
  },
  {
    "id": 133,
    "key": "eevee",
    "name": "Eevee",
    "types": [
      "Normal"
    ],
    "familyId": 133
  },
  {
    "id": 134,
    "key": "vaporeon",
    "name": "Vaporeon",
    "types": [
      "Agua"
    ],
    "familyId": 133
  },
  {
    "id": 135,
    "key": "jolteon",
    "name": "Jolteon",
    "types": [
      "Eléctrico"
    ],
    "familyId": 133
  },
  {
    "id": 136,
    "key": "flareon",
    "name": "Flareon",
    "types": [
      "Fuego"
    ],
    "familyId": 133
  },
  {
    "id": 137,
    "key": "porygon",
    "name": "Porygon",
    "types": [
      "Normal"
    ],
    "familyId": 137
  },
  {
    "id": 138,
    "key": "omanyte",
    "name": "Omanyte",
    "types": [
      "Roca",
      "Agua"
    ],
    "familyId": 138
  },
  {
    "id": 139,
    "key": "omastar",
    "name": "Omastar",
    "types": [
      "Roca",
      "Agua"
    ],
    "familyId": 138
  },
  {
    "id": 140,
    "key": "kabuto",
    "name": "Kabuto",
    "types": [
      "Roca",
      "Agua"
    ],
    "familyId": 140
  },
  {
    "id": 141,
    "key": "kabutops",
    "name": "Kabutops",
    "types": [
      "Roca",
      "Agua"
    ],
    "familyId": 140
  },
  {
    "id": 142,
    "key": "aerodactyl",
    "name": "Aerodactyl",
    "types": [
      "Roca",
      "Volador"
    ],
    "familyId": 142
  },
  {
    "id": 143,
    "key": "snorlax",
    "name": "Snorlax",
    "types": [
      "Normal"
    ],
    "familyId": 446
  },
  {
    "id": 144,
    "key": "articuno",
    "name": "Articuno",
    "types": [
      "Hielo",
      "Volador"
    ],
    "familyId": 144
  },
  {
    "id": 144,
    "key": "articunogalar",
    "name": "Articuno-Galar",
    "types": [
      "Psíquico",
      "Volador"
    ],
    "familyId": 144
  },
  {
    "id": 145,
    "key": "zapdos",
    "name": "Zapdos",
    "types": [
      "Eléctrico",
      "Volador"
    ],
    "familyId": 145
  },
  {
    "id": 145,
    "key": "zapdosgalar",
    "name": "Zapdos-Galar",
    "types": [
      "Lucha",
      "Volador"
    ],
    "familyId": 145
  },
  {
    "id": 146,
    "key": "moltres",
    "name": "Moltres",
    "types": [
      "Fuego",
      "Volador"
    ],
    "familyId": 146
  },
  {
    "id": 146,
    "key": "moltresgalar",
    "name": "Moltres-Galar",
    "types": [
      "Siniestro",
      "Volador"
    ],
    "familyId": 146
  },
  {
    "id": 147,
    "key": "dratini",
    "name": "Dratini",
    "types": [
      "Dragón"
    ],
    "familyId": 147
  },
  {
    "id": 148,
    "key": "dragonair",
    "name": "Dragonair",
    "types": [
      "Dragón"
    ],
    "familyId": 147
  },
  {
    "id": 149,
    "key": "dragonite",
    "name": "Dragonite",
    "types": [
      "Dragón",
      "Volador"
    ],
    "familyId": 147
  },
  {
    "id": 150,
    "key": "mewtwo",
    "name": "Mewtwo",
    "types": [
      "Psíquico"
    ],
    "familyId": 150
  },
  {
    "id": 151,
    "key": "mew",
    "name": "Mew",
    "types": [
      "Psíquico"
    ],
    "familyId": 151
  },
  {
    "id": 152,
    "key": "chikorita",
    "name": "Chikorita",
    "types": [
      "Planta"
    ],
    "familyId": 152
  },
  {
    "id": 153,
    "key": "bayleef",
    "name": "Bayleef",
    "types": [
      "Planta"
    ],
    "familyId": 152
  },
  {
    "id": 154,
    "key": "meganium",
    "name": "Meganium",
    "types": [
      "Planta"
    ],
    "familyId": 152
  },
  {
    "id": 155,
    "key": "cyndaquil",
    "name": "Cyndaquil",
    "types": [
      "Fuego"
    ],
    "familyId": 155
  },
  {
    "id": 156,
    "key": "quilava",
    "name": "Quilava",
    "types": [
      "Fuego"
    ],
    "familyId": 155
  },
  {
    "id": 157,
    "key": "typhlosion",
    "name": "Typhlosion",
    "types": [
      "Fuego"
    ],
    "familyId": 155
  },
  {
    "id": 158,
    "key": "totodile",
    "name": "Totodile",
    "types": [
      "Agua"
    ],
    "familyId": 158
  },
  {
    "id": 159,
    "key": "croconaw",
    "name": "Croconaw",
    "types": [
      "Agua"
    ],
    "familyId": 158
  },
  {
    "id": 160,
    "key": "feraligatr",
    "name": "Feraligatr",
    "types": [
      "Agua"
    ],
    "familyId": 158
  },
  {
    "id": 161,
    "key": "sentret",
    "name": "Sentret",
    "types": [
      "Normal"
    ],
    "familyId": 161
  },
  {
    "id": 162,
    "key": "furret",
    "name": "Furret",
    "types": [
      "Normal"
    ],
    "familyId": 161
  },
  {
    "id": 163,
    "key": "hoothoot",
    "name": "Hoothoot",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 163
  },
  {
    "id": 164,
    "key": "noctowl",
    "name": "Noctowl",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 163
  },
  {
    "id": 165,
    "key": "ledyba",
    "name": "Ledyba",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 165
  },
  {
    "id": 166,
    "key": "ledian",
    "name": "Ledian",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 165
  },
  {
    "id": 167,
    "key": "spinarak",
    "name": "Spinarak",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 167
  },
  {
    "id": 168,
    "key": "ariados",
    "name": "Ariados",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 167
  },
  {
    "id": 169,
    "key": "crobat",
    "name": "Crobat",
    "types": [
      "Veneno",
      "Volador"
    ],
    "familyId": 41
  },
  {
    "id": 170,
    "key": "chinchou",
    "name": "Chinchou",
    "types": [
      "Agua",
      "Eléctrico"
    ],
    "familyId": 170
  },
  {
    "id": 171,
    "key": "lanturn",
    "name": "Lanturn",
    "types": [
      "Agua",
      "Eléctrico"
    ],
    "familyId": 170
  },
  {
    "id": 172,
    "key": "pichu",
    "name": "Pichu",
    "types": [
      "Eléctrico"
    ],
    "familyId": 172
  },
  {
    "id": 173,
    "key": "cleffa",
    "name": "Cleffa",
    "types": [
      "Hada"
    ],
    "familyId": 173
  },
  {
    "id": 174,
    "key": "igglybuff",
    "name": "Igglybuff",
    "types": [
      "Normal",
      "Hada"
    ],
    "familyId": 174
  },
  {
    "id": 175,
    "key": "togepi",
    "name": "Togepi",
    "types": [
      "Hada"
    ],
    "familyId": 175
  },
  {
    "id": 176,
    "key": "togetic",
    "name": "Togetic",
    "types": [
      "Hada",
      "Volador"
    ],
    "familyId": 175
  },
  {
    "id": 177,
    "key": "natu",
    "name": "Natu",
    "types": [
      "Psíquico",
      "Volador"
    ],
    "familyId": 177
  },
  {
    "id": 178,
    "key": "xatu",
    "name": "Xatu",
    "types": [
      "Psíquico",
      "Volador"
    ],
    "familyId": 177
  },
  {
    "id": 179,
    "key": "mareep",
    "name": "Mareep",
    "types": [
      "Eléctrico"
    ],
    "familyId": 179
  },
  {
    "id": 180,
    "key": "flaaffy",
    "name": "Flaaffy",
    "types": [
      "Eléctrico"
    ],
    "familyId": 179
  },
  {
    "id": 181,
    "key": "ampharos",
    "name": "Ampharos",
    "types": [
      "Eléctrico"
    ],
    "familyId": 179
  },
  {
    "id": 182,
    "key": "bellossom",
    "name": "Bellossom",
    "types": [
      "Planta"
    ],
    "familyId": 43
  },
  {
    "id": 183,
    "key": "marill",
    "name": "Marill",
    "types": [
      "Agua",
      "Hada"
    ],
    "familyId": 298
  },
  {
    "id": 184,
    "key": "azumarill",
    "name": "Azumarill",
    "types": [
      "Agua",
      "Hada"
    ],
    "familyId": 298
  },
  {
    "id": 185,
    "key": "sudowoodo",
    "name": "Sudowoodo",
    "types": [
      "Roca"
    ],
    "familyId": 438
  },
  {
    "id": 186,
    "key": "politoed",
    "name": "Politoed",
    "types": [
      "Agua"
    ],
    "familyId": 60
  },
  {
    "id": 187,
    "key": "hoppip",
    "name": "Hoppip",
    "types": [
      "Planta",
      "Volador"
    ],
    "familyId": 187
  },
  {
    "id": 188,
    "key": "skiploom",
    "name": "Skiploom",
    "types": [
      "Planta",
      "Volador"
    ],
    "familyId": 187
  },
  {
    "id": 189,
    "key": "jumpluff",
    "name": "Jumpluff",
    "types": [
      "Planta",
      "Volador"
    ],
    "familyId": 187
  },
  {
    "id": 190,
    "key": "aipom",
    "name": "Aipom",
    "types": [
      "Normal"
    ],
    "familyId": 190
  },
  {
    "id": 191,
    "key": "sunkern",
    "name": "Sunkern",
    "types": [
      "Planta"
    ],
    "familyId": 191
  },
  {
    "id": 192,
    "key": "sunflora",
    "name": "Sunflora",
    "types": [
      "Planta"
    ],
    "familyId": 191
  },
  {
    "id": 193,
    "key": "yanma",
    "name": "Yanma",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 193
  },
  {
    "id": 194,
    "key": "wooper",
    "name": "Wooper",
    "types": [
      "Agua",
      "Tierra"
    ],
    "familyId": 194
  },
  {
    "id": 195,
    "key": "quagsire",
    "name": "Quagsire",
    "types": [
      "Agua",
      "Tierra"
    ],
    "familyId": 194
  },
  {
    "id": 196,
    "key": "espeon",
    "name": "Espeon",
    "types": [
      "Psíquico"
    ],
    "familyId": 133
  },
  {
    "id": 197,
    "key": "umbreon",
    "name": "Umbreon",
    "types": [
      "Siniestro"
    ],
    "familyId": 133
  },
  {
    "id": 198,
    "key": "murkrow",
    "name": "Murkrow",
    "types": [
      "Siniestro",
      "Volador"
    ],
    "familyId": 198
  },
  {
    "id": 199,
    "key": "slowking",
    "name": "Slowking",
    "types": [
      "Agua",
      "Psíquico"
    ],
    "familyId": 79
  },
  {
    "id": 199,
    "key": "slowkinggalar",
    "name": "Slowking-Galar",
    "types": [
      "Veneno",
      "Psíquico"
    ],
    "familyId": 79
  },
  {
    "id": 200,
    "key": "misdreavus",
    "name": "Misdreavus",
    "types": [
      "Fantasma"
    ],
    "familyId": 200
  },
  {
    "id": 201,
    "key": "unown",
    "name": "Unown",
    "types": [
      "Psíquico"
    ],
    "familyId": 201
  },
  {
    "id": 202,
    "key": "wobbuffet",
    "name": "Wobbuffet",
    "types": [
      "Psíquico"
    ],
    "familyId": 360
  },
  {
    "id": 203,
    "key": "girafarig",
    "name": "Girafarig",
    "types": [
      "Normal",
      "Psíquico"
    ],
    "familyId": 203
  },
  {
    "id": 204,
    "key": "pineco",
    "name": "Pineco",
    "types": [
      "Bicho"
    ],
    "familyId": 204
  },
  {
    "id": 205,
    "key": "forretress",
    "name": "Forretress",
    "types": [
      "Bicho",
      "Acero"
    ],
    "familyId": 204
  },
  {
    "id": 206,
    "key": "dunsparce",
    "name": "Dunsparce",
    "types": [
      "Normal"
    ],
    "familyId": 206
  },
  {
    "id": 207,
    "key": "gligar",
    "name": "Gligar",
    "types": [
      "Tierra",
      "Volador"
    ],
    "familyId": 207
  },
  {
    "id": 208,
    "key": "steelix",
    "name": "Steelix",
    "types": [
      "Acero",
      "Tierra"
    ],
    "familyId": 95
  },
  {
    "id": 209,
    "key": "snubbull",
    "name": "Snubbull",
    "types": [
      "Hada"
    ],
    "familyId": 209
  },
  {
    "id": 210,
    "key": "granbull",
    "name": "Granbull",
    "types": [
      "Hada"
    ],
    "familyId": 209
  },
  {
    "id": 211,
    "key": "qwilfish",
    "name": "Qwilfish",
    "types": [
      "Agua",
      "Veneno"
    ],
    "familyId": 211
  },
  {
    "id": 212,
    "key": "scizor",
    "name": "Scizor",
    "types": [
      "Bicho",
      "Acero"
    ],
    "familyId": 123
  },
  {
    "id": 213,
    "key": "shuckle",
    "name": "Shuckle",
    "types": [
      "Bicho",
      "Roca"
    ],
    "familyId": 213
  },
  {
    "id": 214,
    "key": "heracross",
    "name": "Heracross",
    "types": [
      "Bicho",
      "Lucha"
    ],
    "familyId": 214
  },
  {
    "id": 215,
    "key": "sneasel",
    "name": "Sneasel",
    "types": [
      "Siniestro",
      "Hielo"
    ],
    "familyId": 215
  },
  {
    "id": 216,
    "key": "teddiursa",
    "name": "Teddiursa",
    "types": [
      "Normal"
    ],
    "familyId": 216
  },
  {
    "id": 217,
    "key": "ursaring",
    "name": "Ursaring",
    "types": [
      "Normal"
    ],
    "familyId": 216
  },
  {
    "id": 218,
    "key": "slugma",
    "name": "Slugma",
    "types": [
      "Fuego"
    ],
    "familyId": 218
  },
  {
    "id": 219,
    "key": "magcargo",
    "name": "Magcargo",
    "types": [
      "Fuego",
      "Roca"
    ],
    "familyId": 218
  },
  {
    "id": 220,
    "key": "swinub",
    "name": "Swinub",
    "types": [
      "Hielo",
      "Tierra"
    ],
    "familyId": 220
  },
  {
    "id": 221,
    "key": "piloswine",
    "name": "Piloswine",
    "types": [
      "Hielo",
      "Tierra"
    ],
    "familyId": 220
  },
  {
    "id": 222,
    "key": "corsola",
    "name": "Corsola",
    "types": [
      "Agua",
      "Roca"
    ],
    "familyId": 222
  },
  {
    "id": 222,
    "key": "corsolagalar",
    "name": "Corsola-Galar",
    "types": [
      "Fantasma"
    ],
    "familyId": 222
  },
  {
    "id": 223,
    "key": "remoraid",
    "name": "Remoraid",
    "types": [
      "Agua"
    ],
    "familyId": 223
  },
  {
    "id": 224,
    "key": "octillery",
    "name": "Octillery",
    "types": [
      "Agua"
    ],
    "familyId": 223
  },
  {
    "id": 225,
    "key": "delibird",
    "name": "Delibird",
    "types": [
      "Hielo",
      "Volador"
    ],
    "familyId": 225
  },
  {
    "id": 226,
    "key": "mantine",
    "name": "Mantine",
    "types": [
      "Agua",
      "Volador"
    ],
    "familyId": 458
  },
  {
    "id": 227,
    "key": "skarmory",
    "name": "Skarmory",
    "types": [
      "Acero",
      "Volador"
    ],
    "familyId": 227
  },
  {
    "id": 228,
    "key": "houndour",
    "name": "Houndour",
    "types": [
      "Siniestro",
      "Fuego"
    ],
    "familyId": 228
  },
  {
    "id": 229,
    "key": "houndoom",
    "name": "Houndoom",
    "types": [
      "Siniestro",
      "Fuego"
    ],
    "familyId": 228
  },
  {
    "id": 230,
    "key": "kingdra",
    "name": "Kingdra",
    "types": [
      "Agua",
      "Dragón"
    ],
    "familyId": 116
  },
  {
    "id": 231,
    "key": "phanpy",
    "name": "Phanpy",
    "types": [
      "Tierra"
    ],
    "familyId": 231
  },
  {
    "id": 232,
    "key": "donphan",
    "name": "Donphan",
    "types": [
      "Tierra"
    ],
    "familyId": 231
  },
  {
    "id": 233,
    "key": "porygon2",
    "name": "Porygon2",
    "types": [
      "Normal"
    ],
    "familyId": 137
  },
  {
    "id": 234,
    "key": "stantler",
    "name": "Stantler",
    "types": [
      "Normal"
    ],
    "familyId": 234
  },
  {
    "id": 235,
    "key": "smeargle",
    "name": "Smeargle",
    "types": [
      "Normal"
    ],
    "familyId": 235
  },
  {
    "id": 236,
    "key": "tyrogue",
    "name": "Tyrogue",
    "types": [
      "Lucha"
    ],
    "familyId": 236
  },
  {
    "id": 237,
    "key": "hitmontop",
    "name": "Hitmontop",
    "types": [
      "Lucha"
    ],
    "familyId": 236
  },
  {
    "id": 238,
    "key": "smoochum",
    "name": "Smoochum",
    "types": [
      "Hielo",
      "Psíquico"
    ],
    "familyId": 238
  },
  {
    "id": 239,
    "key": "elekid",
    "name": "Elekid",
    "types": [
      "Eléctrico"
    ],
    "familyId": 239
  },
  {
    "id": 240,
    "key": "magby",
    "name": "Magby",
    "types": [
      "Fuego"
    ],
    "familyId": 240
  },
  {
    "id": 241,
    "key": "miltank",
    "name": "Miltank",
    "types": [
      "Normal"
    ],
    "familyId": 241
  },
  {
    "id": 242,
    "key": "blissey",
    "name": "Blissey",
    "types": [
      "Normal"
    ],
    "familyId": 440
  },
  {
    "id": 243,
    "key": "raikou",
    "name": "Raikou",
    "types": [
      "Eléctrico"
    ],
    "familyId": 243
  },
  {
    "id": 244,
    "key": "entei",
    "name": "Entei",
    "types": [
      "Fuego"
    ],
    "familyId": 244
  },
  {
    "id": 245,
    "key": "suicune",
    "name": "Suicune",
    "types": [
      "Agua"
    ],
    "familyId": 245
  },
  {
    "id": 246,
    "key": "larvitar",
    "name": "Larvitar",
    "types": [
      "Roca",
      "Tierra"
    ],
    "familyId": 246
  },
  {
    "id": 247,
    "key": "pupitar",
    "name": "Pupitar",
    "types": [
      "Roca",
      "Tierra"
    ],
    "familyId": 246
  },
  {
    "id": 248,
    "key": "tyranitar",
    "name": "Tyranitar",
    "types": [
      "Roca",
      "Siniestro"
    ],
    "familyId": 246
  },
  {
    "id": 249,
    "key": "lugia",
    "name": "Lugia",
    "types": [
      "Psíquico",
      "Volador"
    ],
    "familyId": 249
  },
  {
    "id": 250,
    "key": "hooh",
    "name": "Ho-Oh",
    "types": [
      "Fuego",
      "Volador"
    ],
    "familyId": 250
  },
  {
    "id": 251,
    "key": "celebi",
    "name": "Celebi",
    "types": [
      "Psíquico",
      "Planta"
    ],
    "familyId": 251
  },
  {
    "id": 252,
    "key": "treecko",
    "name": "Treecko",
    "types": [
      "Planta"
    ],
    "familyId": 252
  },
  {
    "id": 253,
    "key": "grovyle",
    "name": "Grovyle",
    "types": [
      "Planta"
    ],
    "familyId": 252
  },
  {
    "id": 254,
    "key": "sceptile",
    "name": "Sceptile",
    "types": [
      "Planta"
    ],
    "familyId": 252
  },
  {
    "id": 255,
    "key": "torchic",
    "name": "Torchic",
    "types": [
      "Fuego"
    ],
    "familyId": 255
  },
  {
    "id": 256,
    "key": "combusken",
    "name": "Combusken",
    "types": [
      "Fuego",
      "Lucha"
    ],
    "familyId": 255
  },
  {
    "id": 257,
    "key": "blaziken",
    "name": "Blaziken",
    "types": [
      "Fuego",
      "Lucha"
    ],
    "familyId": 255
  },
  {
    "id": 258,
    "key": "mudkip",
    "name": "Mudkip",
    "types": [
      "Agua"
    ],
    "familyId": 258
  },
  {
    "id": 259,
    "key": "marshtomp",
    "name": "Marshtomp",
    "types": [
      "Agua",
      "Tierra"
    ],
    "familyId": 258
  },
  {
    "id": 260,
    "key": "swampert",
    "name": "Swampert",
    "types": [
      "Agua",
      "Tierra"
    ],
    "familyId": 258
  },
  {
    "id": 261,
    "key": "poochyena",
    "name": "Poochyena",
    "types": [
      "Siniestro"
    ],
    "familyId": 261
  },
  {
    "id": 262,
    "key": "mightyena",
    "name": "Mightyena",
    "types": [
      "Siniestro"
    ],
    "familyId": 261
  },
  {
    "id": 263,
    "key": "zigzagoon",
    "name": "Zigzagoon",
    "types": [
      "Normal"
    ],
    "familyId": 263
  },
  {
    "id": 263,
    "key": "zigzagoongalar",
    "name": "Zigzagoon-Galar",
    "types": [
      "Siniestro",
      "Normal"
    ],
    "familyId": 263
  },
  {
    "id": 264,
    "key": "linoone",
    "name": "Linoone",
    "types": [
      "Normal"
    ],
    "familyId": 263
  },
  {
    "id": 264,
    "key": "linoonegalar",
    "name": "Linoone-Galar",
    "types": [
      "Siniestro",
      "Normal"
    ],
    "familyId": 263
  },
  {
    "id": 265,
    "key": "wurmple",
    "name": "Wurmple",
    "types": [
      "Bicho"
    ],
    "familyId": 265
  },
  {
    "id": 266,
    "key": "silcoon",
    "name": "Silcoon",
    "types": [
      "Bicho"
    ],
    "familyId": 265
  },
  {
    "id": 267,
    "key": "beautifly",
    "name": "Beautifly",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 265
  },
  {
    "id": 268,
    "key": "cascoon",
    "name": "Cascoon",
    "types": [
      "Bicho"
    ],
    "familyId": 265
  },
  {
    "id": 269,
    "key": "dustox",
    "name": "Dustox",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 265
  },
  {
    "id": 270,
    "key": "lotad",
    "name": "Lotad",
    "types": [
      "Agua",
      "Planta"
    ],
    "familyId": 270
  },
  {
    "id": 271,
    "key": "lombre",
    "name": "Lombre",
    "types": [
      "Agua",
      "Planta"
    ],
    "familyId": 270
  },
  {
    "id": 272,
    "key": "ludicolo",
    "name": "Ludicolo",
    "types": [
      "Agua",
      "Planta"
    ],
    "familyId": 270
  },
  {
    "id": 273,
    "key": "seedot",
    "name": "Seedot",
    "types": [
      "Planta"
    ],
    "familyId": 273
  },
  {
    "id": 274,
    "key": "nuzleaf",
    "name": "Nuzleaf",
    "types": [
      "Planta",
      "Siniestro"
    ],
    "familyId": 273
  },
  {
    "id": 275,
    "key": "shiftry",
    "name": "Shiftry",
    "types": [
      "Planta",
      "Siniestro"
    ],
    "familyId": 273
  },
  {
    "id": 276,
    "key": "taillow",
    "name": "Taillow",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 276
  },
  {
    "id": 277,
    "key": "swellow",
    "name": "Swellow",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 276
  },
  {
    "id": 278,
    "key": "wingull",
    "name": "Wingull",
    "types": [
      "Agua",
      "Volador"
    ],
    "familyId": 278
  },
  {
    "id": 279,
    "key": "pelipper",
    "name": "Pelipper",
    "types": [
      "Agua",
      "Volador"
    ],
    "familyId": 278
  },
  {
    "id": 280,
    "key": "ralts",
    "name": "Ralts",
    "types": [
      "Psíquico",
      "Hada"
    ],
    "familyId": 280
  },
  {
    "id": 281,
    "key": "kirlia",
    "name": "Kirlia",
    "types": [
      "Psíquico",
      "Hada"
    ],
    "familyId": 280
  },
  {
    "id": 282,
    "key": "gardevoir",
    "name": "Gardevoir",
    "types": [
      "Psíquico",
      "Hada"
    ],
    "familyId": 280
  },
  {
    "id": 283,
    "key": "surskit",
    "name": "Surskit",
    "types": [
      "Bicho",
      "Agua"
    ],
    "familyId": 283
  },
  {
    "id": 284,
    "key": "masquerain",
    "name": "Masquerain",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 283
  },
  {
    "id": 285,
    "key": "shroomish",
    "name": "Shroomish",
    "types": [
      "Planta"
    ],
    "familyId": 285
  },
  {
    "id": 286,
    "key": "breloom",
    "name": "Breloom",
    "types": [
      "Planta",
      "Lucha"
    ],
    "familyId": 285
  },
  {
    "id": 287,
    "key": "slakoth",
    "name": "Slakoth",
    "types": [
      "Normal"
    ],
    "familyId": 287
  },
  {
    "id": 288,
    "key": "vigoroth",
    "name": "Vigoroth",
    "types": [
      "Normal"
    ],
    "familyId": 287
  },
  {
    "id": 289,
    "key": "slaking",
    "name": "Slaking",
    "types": [
      "Normal"
    ],
    "familyId": 287
  },
  {
    "id": 290,
    "key": "nincada",
    "name": "Nincada",
    "types": [
      "Bicho",
      "Tierra"
    ],
    "familyId": 290
  },
  {
    "id": 291,
    "key": "ninjask",
    "name": "Ninjask",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 290
  },
  {
    "id": 292,
    "key": "shedinja",
    "name": "Shedinja",
    "types": [
      "Bicho",
      "Fantasma"
    ],
    "familyId": 290
  },
  {
    "id": 293,
    "key": "whismur",
    "name": "Whismur",
    "types": [
      "Normal"
    ],
    "familyId": 293
  },
  {
    "id": 294,
    "key": "loudred",
    "name": "Loudred",
    "types": [
      "Normal"
    ],
    "familyId": 293
  },
  {
    "id": 295,
    "key": "exploud",
    "name": "Exploud",
    "types": [
      "Normal"
    ],
    "familyId": 293
  },
  {
    "id": 296,
    "key": "makuhita",
    "name": "Makuhita",
    "types": [
      "Lucha"
    ],
    "familyId": 296
  },
  {
    "id": 297,
    "key": "hariyama",
    "name": "Hariyama",
    "types": [
      "Lucha"
    ],
    "familyId": 296
  },
  {
    "id": 298,
    "key": "azurill",
    "name": "Azurill",
    "types": [
      "Normal",
      "Hada"
    ],
    "familyId": 298
  },
  {
    "id": 299,
    "key": "nosepass",
    "name": "Nosepass",
    "types": [
      "Roca"
    ],
    "familyId": 299
  },
  {
    "id": 300,
    "key": "skitty",
    "name": "Skitty",
    "types": [
      "Normal"
    ],
    "familyId": 300
  },
  {
    "id": 301,
    "key": "delcatty",
    "name": "Delcatty",
    "types": [
      "Normal"
    ],
    "familyId": 300
  },
  {
    "id": 302,
    "key": "sableye",
    "name": "Sableye",
    "types": [
      "Siniestro",
      "Fantasma"
    ],
    "familyId": 302
  },
  {
    "id": 303,
    "key": "mawile",
    "name": "Mawile",
    "types": [
      "Acero",
      "Hada"
    ],
    "familyId": 303
  },
  {
    "id": 304,
    "key": "aron",
    "name": "Aron",
    "types": [
      "Acero",
      "Roca"
    ],
    "familyId": 304
  },
  {
    "id": 305,
    "key": "lairon",
    "name": "Lairon",
    "types": [
      "Acero",
      "Roca"
    ],
    "familyId": 304
  },
  {
    "id": 306,
    "key": "aggron",
    "name": "Aggron",
    "types": [
      "Acero",
      "Roca"
    ],
    "familyId": 304
  },
  {
    "id": 307,
    "key": "meditite",
    "name": "Meditite",
    "types": [
      "Lucha",
      "Psíquico"
    ],
    "familyId": 307
  },
  {
    "id": 308,
    "key": "medicham",
    "name": "Medicham",
    "types": [
      "Lucha",
      "Psíquico"
    ],
    "familyId": 307
  },
  {
    "id": 309,
    "key": "electrike",
    "name": "Electrike",
    "types": [
      "Eléctrico"
    ],
    "familyId": 309
  },
  {
    "id": 310,
    "key": "manectric",
    "name": "Manectric",
    "types": [
      "Eléctrico"
    ],
    "familyId": 309
  },
  {
    "id": 311,
    "key": "plusle",
    "name": "Plusle",
    "types": [
      "Eléctrico"
    ],
    "familyId": 311
  },
  {
    "id": 312,
    "key": "minun",
    "name": "Minun",
    "types": [
      "Eléctrico"
    ],
    "familyId": 312
  },
  {
    "id": 313,
    "key": "volbeat",
    "name": "Volbeat",
    "types": [
      "Bicho"
    ],
    "familyId": 313
  },
  {
    "id": 314,
    "key": "illumise",
    "name": "Illumise",
    "types": [
      "Bicho"
    ],
    "familyId": 314
  },
  {
    "id": 315,
    "key": "roselia",
    "name": "Roselia",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 406
  },
  {
    "id": 316,
    "key": "gulpin",
    "name": "Gulpin",
    "types": [
      "Veneno"
    ],
    "familyId": 316
  },
  {
    "id": 317,
    "key": "swalot",
    "name": "Swalot",
    "types": [
      "Veneno"
    ],
    "familyId": 316
  },
  {
    "id": 318,
    "key": "carvanha",
    "name": "Carvanha",
    "types": [
      "Agua",
      "Siniestro"
    ],
    "familyId": 318
  },
  {
    "id": 319,
    "key": "sharpedo",
    "name": "Sharpedo",
    "types": [
      "Agua",
      "Siniestro"
    ],
    "familyId": 318
  },
  {
    "id": 320,
    "key": "wailmer",
    "name": "Wailmer",
    "types": [
      "Agua"
    ],
    "familyId": 320
  },
  {
    "id": 321,
    "key": "wailord",
    "name": "Wailord",
    "types": [
      "Agua"
    ],
    "familyId": 320
  },
  {
    "id": 322,
    "key": "numel",
    "name": "Numel",
    "types": [
      "Fuego",
      "Tierra"
    ],
    "familyId": 322
  },
  {
    "id": 323,
    "key": "camerupt",
    "name": "Camerupt",
    "types": [
      "Fuego",
      "Tierra"
    ],
    "familyId": 322
  },
  {
    "id": 324,
    "key": "torkoal",
    "name": "Torkoal",
    "types": [
      "Fuego"
    ],
    "familyId": 324
  },
  {
    "id": 325,
    "key": "spoink",
    "name": "Spoink",
    "types": [
      "Psíquico"
    ],
    "familyId": 325
  },
  {
    "id": 326,
    "key": "grumpig",
    "name": "Grumpig",
    "types": [
      "Psíquico"
    ],
    "familyId": 325
  },
  {
    "id": 327,
    "key": "spinda",
    "name": "Spinda",
    "types": [
      "Normal"
    ],
    "familyId": 327
  },
  {
    "id": 328,
    "key": "trapinch",
    "name": "Trapinch",
    "types": [
      "Tierra"
    ],
    "familyId": 328
  },
  {
    "id": 329,
    "key": "vibrava",
    "name": "Vibrava",
    "types": [
      "Tierra",
      "Dragón"
    ],
    "familyId": 328
  },
  {
    "id": 330,
    "key": "flygon",
    "name": "Flygon",
    "types": [
      "Tierra",
      "Dragón"
    ],
    "familyId": 328
  },
  {
    "id": 331,
    "key": "cacnea",
    "name": "Cacnea",
    "types": [
      "Planta"
    ],
    "familyId": 331
  },
  {
    "id": 332,
    "key": "cacturne",
    "name": "Cacturne",
    "types": [
      "Planta",
      "Siniestro"
    ],
    "familyId": 331
  },
  {
    "id": 333,
    "key": "swablu",
    "name": "Swablu",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 333
  },
  {
    "id": 334,
    "key": "altaria",
    "name": "Altaria",
    "types": [
      "Dragón",
      "Volador"
    ],
    "familyId": 333
  },
  {
    "id": 335,
    "key": "zangoose",
    "name": "Zangoose",
    "types": [
      "Normal"
    ],
    "familyId": 335
  },
  {
    "id": 336,
    "key": "seviper",
    "name": "Seviper",
    "types": [
      "Veneno"
    ],
    "familyId": 336
  },
  {
    "id": 337,
    "key": "lunatone",
    "name": "Lunatone",
    "types": [
      "Roca",
      "Psíquico"
    ],
    "familyId": 337
  },
  {
    "id": 338,
    "key": "solrock",
    "name": "Solrock",
    "types": [
      "Roca",
      "Psíquico"
    ],
    "familyId": 338
  },
  {
    "id": 339,
    "key": "barboach",
    "name": "Barboach",
    "types": [
      "Agua",
      "Tierra"
    ],
    "familyId": 339
  },
  {
    "id": 340,
    "key": "whiscash",
    "name": "Whiscash",
    "types": [
      "Agua",
      "Tierra"
    ],
    "familyId": 339
  },
  {
    "id": 341,
    "key": "corphish",
    "name": "Corphish",
    "types": [
      "Agua"
    ],
    "familyId": 341
  },
  {
    "id": 342,
    "key": "crawdaunt",
    "name": "Crawdaunt",
    "types": [
      "Agua",
      "Siniestro"
    ],
    "familyId": 341
  },
  {
    "id": 343,
    "key": "baltoy",
    "name": "Baltoy",
    "types": [
      "Tierra",
      "Psíquico"
    ],
    "familyId": 343
  },
  {
    "id": 344,
    "key": "claydol",
    "name": "Claydol",
    "types": [
      "Tierra",
      "Psíquico"
    ],
    "familyId": 343
  },
  {
    "id": 345,
    "key": "lileep",
    "name": "Lileep",
    "types": [
      "Roca",
      "Planta"
    ],
    "familyId": 345
  },
  {
    "id": 346,
    "key": "cradily",
    "name": "Cradily",
    "types": [
      "Roca",
      "Planta"
    ],
    "familyId": 345
  },
  {
    "id": 347,
    "key": "anorith",
    "name": "Anorith",
    "types": [
      "Roca",
      "Bicho"
    ],
    "familyId": 347
  },
  {
    "id": 348,
    "key": "armaldo",
    "name": "Armaldo",
    "types": [
      "Roca",
      "Bicho"
    ],
    "familyId": 347
  },
  {
    "id": 349,
    "key": "feebas",
    "name": "Feebas",
    "types": [
      "Agua"
    ],
    "familyId": 349
  },
  {
    "id": 350,
    "key": "milotic",
    "name": "Milotic",
    "types": [
      "Agua"
    ],
    "familyId": 349
  },
  {
    "id": 351,
    "key": "castform",
    "name": "Castform",
    "types": [
      "Normal"
    ],
    "familyId": 351
  },
  {
    "id": 352,
    "key": "kecleon",
    "name": "Kecleon",
    "types": [
      "Normal"
    ],
    "familyId": 352
  },
  {
    "id": 353,
    "key": "shuppet",
    "name": "Shuppet",
    "types": [
      "Fantasma"
    ],
    "familyId": 353
  },
  {
    "id": 354,
    "key": "banette",
    "name": "Banette",
    "types": [
      "Fantasma"
    ],
    "familyId": 353
  },
  {
    "id": 355,
    "key": "duskull",
    "name": "Duskull",
    "types": [
      "Fantasma"
    ],
    "familyId": 355
  },
  {
    "id": 356,
    "key": "dusclops",
    "name": "Dusclops",
    "types": [
      "Fantasma"
    ],
    "familyId": 355
  },
  {
    "id": 357,
    "key": "tropius",
    "name": "Tropius",
    "types": [
      "Planta",
      "Volador"
    ],
    "familyId": 357
  },
  {
    "id": 358,
    "key": "chimecho",
    "name": "Chimecho",
    "types": [
      "Psíquico"
    ],
    "familyId": 433
  },
  {
    "id": 359,
    "key": "absol",
    "name": "Absol",
    "types": [
      "Siniestro"
    ],
    "familyId": 359
  },
  {
    "id": 360,
    "key": "wynaut",
    "name": "Wynaut",
    "types": [
      "Psíquico"
    ],
    "familyId": 360
  },
  {
    "id": 361,
    "key": "snorunt",
    "name": "Snorunt",
    "types": [
      "Hielo"
    ],
    "familyId": 361
  },
  {
    "id": 362,
    "key": "glalie",
    "name": "Glalie",
    "types": [
      "Hielo"
    ],
    "familyId": 361
  },
  {
    "id": 363,
    "key": "spheal",
    "name": "Spheal",
    "types": [
      "Hielo",
      "Agua"
    ],
    "familyId": 363
  },
  {
    "id": 364,
    "key": "sealeo",
    "name": "Sealeo",
    "types": [
      "Hielo",
      "Agua"
    ],
    "familyId": 363
  },
  {
    "id": 365,
    "key": "walrein",
    "name": "Walrein",
    "types": [
      "Hielo",
      "Agua"
    ],
    "familyId": 363
  },
  {
    "id": 366,
    "key": "clamperl",
    "name": "Clamperl",
    "types": [
      "Agua"
    ],
    "familyId": 366
  },
  {
    "id": 367,
    "key": "huntail",
    "name": "Huntail",
    "types": [
      "Agua"
    ],
    "familyId": 366
  },
  {
    "id": 368,
    "key": "gorebyss",
    "name": "Gorebyss",
    "types": [
      "Agua"
    ],
    "familyId": 366
  },
  {
    "id": 369,
    "key": "relicanth",
    "name": "Relicanth",
    "types": [
      "Agua",
      "Roca"
    ],
    "familyId": 369
  },
  {
    "id": 370,
    "key": "luvdisc",
    "name": "Luvdisc",
    "types": [
      "Agua"
    ],
    "familyId": 370
  },
  {
    "id": 371,
    "key": "bagon",
    "name": "Bagon",
    "types": [
      "Dragón"
    ],
    "familyId": 371
  },
  {
    "id": 372,
    "key": "shelgon",
    "name": "Shelgon",
    "types": [
      "Dragón"
    ],
    "familyId": 371
  },
  {
    "id": 373,
    "key": "salamence",
    "name": "Salamence",
    "types": [
      "Dragón",
      "Volador"
    ],
    "familyId": 371
  },
  {
    "id": 374,
    "key": "beldum",
    "name": "Beldum",
    "types": [
      "Acero",
      "Psíquico"
    ],
    "familyId": 374
  },
  {
    "id": 375,
    "key": "metang",
    "name": "Metang",
    "types": [
      "Acero",
      "Psíquico"
    ],
    "familyId": 374
  },
  {
    "id": 376,
    "key": "metagross",
    "name": "Metagross",
    "types": [
      "Acero",
      "Psíquico"
    ],
    "familyId": 374
  },
  {
    "id": 377,
    "key": "regirock",
    "name": "Regirock",
    "types": [
      "Roca"
    ],
    "familyId": 377
  },
  {
    "id": 378,
    "key": "regice",
    "name": "Regice",
    "types": [
      "Hielo"
    ],
    "familyId": 378
  },
  {
    "id": 379,
    "key": "registeel",
    "name": "Registeel",
    "types": [
      "Acero"
    ],
    "familyId": 379
  },
  {
    "id": 380,
    "key": "latias",
    "name": "Latias",
    "types": [
      "Dragón",
      "Psíquico"
    ],
    "familyId": 380
  },
  {
    "id": 381,
    "key": "latios",
    "name": "Latios",
    "types": [
      "Dragón",
      "Psíquico"
    ],
    "familyId": 381
  },
  {
    "id": 382,
    "key": "kyogre",
    "name": "Kyogre",
    "types": [
      "Agua"
    ],
    "familyId": 382
  },
  {
    "id": 383,
    "key": "groudon",
    "name": "Groudon",
    "types": [
      "Tierra"
    ],
    "familyId": 383
  },
  {
    "id": 384,
    "key": "rayquaza",
    "name": "Rayquaza",
    "types": [
      "Dragón",
      "Volador"
    ],
    "familyId": 384
  },
  {
    "id": 385,
    "key": "jirachi",
    "name": "Jirachi",
    "types": [
      "Acero",
      "Psíquico"
    ],
    "familyId": 385
  },
  {
    "id": 386,
    "key": "deoxys",
    "name": "Deoxys",
    "types": [
      "Psíquico"
    ],
    "familyId": 386
  },
  {
    "id": 386,
    "key": "deoxysattack",
    "name": "Deoxys-Attack",
    "types": [
      "Psíquico"
    ],
    "familyId": 386
  },
  {
    "id": 386,
    "key": "deoxysdefense",
    "name": "Deoxys-Defense",
    "types": [
      "Psíquico"
    ],
    "familyId": 386
  },
  {
    "id": 386,
    "key": "deoxysspeed",
    "name": "Deoxys-Speed",
    "types": [
      "Psíquico"
    ],
    "familyId": 386
  },
  {
    "id": 387,
    "key": "turtwig",
    "name": "Turtwig",
    "types": [
      "Planta"
    ],
    "familyId": 387
  },
  {
    "id": 388,
    "key": "grotle",
    "name": "Grotle",
    "types": [
      "Planta"
    ],
    "familyId": 387
  },
  {
    "id": 389,
    "key": "torterra",
    "name": "Torterra",
    "types": [
      "Planta",
      "Tierra"
    ],
    "familyId": 387
  },
  {
    "id": 390,
    "key": "chimchar",
    "name": "Chimchar",
    "types": [
      "Fuego"
    ],
    "familyId": 390
  },
  {
    "id": 391,
    "key": "monferno",
    "name": "Monferno",
    "types": [
      "Fuego",
      "Lucha"
    ],
    "familyId": 390
  },
  {
    "id": 392,
    "key": "infernape",
    "name": "Infernape",
    "types": [
      "Fuego",
      "Lucha"
    ],
    "familyId": 390
  },
  {
    "id": 393,
    "key": "piplup",
    "name": "Piplup",
    "types": [
      "Agua"
    ],
    "familyId": 393
  },
  {
    "id": 394,
    "key": "prinplup",
    "name": "Prinplup",
    "types": [
      "Agua"
    ],
    "familyId": 393
  },
  {
    "id": 395,
    "key": "empoleon",
    "name": "Empoleon",
    "types": [
      "Agua",
      "Acero"
    ],
    "familyId": 393
  },
  {
    "id": 396,
    "key": "starly",
    "name": "Starly",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 396
  },
  {
    "id": 397,
    "key": "staravia",
    "name": "Staravia",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 396
  },
  {
    "id": 398,
    "key": "staraptor",
    "name": "Staraptor",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 396
  },
  {
    "id": 399,
    "key": "bidoof",
    "name": "Bidoof",
    "types": [
      "Normal"
    ],
    "familyId": 399
  },
  {
    "id": 400,
    "key": "bibarel",
    "name": "Bibarel",
    "types": [
      "Normal",
      "Agua"
    ],
    "familyId": 399
  },
  {
    "id": 401,
    "key": "kricketot",
    "name": "Kricketot",
    "types": [
      "Bicho"
    ],
    "familyId": 401
  },
  {
    "id": 402,
    "key": "kricketune",
    "name": "Kricketune",
    "types": [
      "Bicho"
    ],
    "familyId": 401
  },
  {
    "id": 403,
    "key": "shinx",
    "name": "Shinx",
    "types": [
      "Eléctrico"
    ],
    "familyId": 403
  },
  {
    "id": 404,
    "key": "luxio",
    "name": "Luxio",
    "types": [
      "Eléctrico"
    ],
    "familyId": 403
  },
  {
    "id": 405,
    "key": "luxray",
    "name": "Luxray",
    "types": [
      "Eléctrico"
    ],
    "familyId": 403
  },
  {
    "id": 406,
    "key": "budew",
    "name": "Budew",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 406
  },
  {
    "id": 407,
    "key": "roserade",
    "name": "Roserade",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 406
  },
  {
    "id": 408,
    "key": "cranidos",
    "name": "Cranidos",
    "types": [
      "Roca"
    ],
    "familyId": 408
  },
  {
    "id": 409,
    "key": "rampardos",
    "name": "Rampardos",
    "types": [
      "Roca"
    ],
    "familyId": 408
  },
  {
    "id": 410,
    "key": "shieldon",
    "name": "Shieldon",
    "types": [
      "Roca",
      "Acero"
    ],
    "familyId": 410
  },
  {
    "id": 411,
    "key": "bastiodon",
    "name": "Bastiodon",
    "types": [
      "Roca",
      "Acero"
    ],
    "familyId": 410
  },
  {
    "id": 412,
    "key": "burmy",
    "name": "Burmy",
    "types": [
      "Bicho"
    ],
    "familyId": 412
  },
  {
    "id": 413,
    "key": "wormadam",
    "name": "Wormadam",
    "types": [
      "Bicho",
      "Planta"
    ],
    "familyId": 412
  },
  {
    "id": 414,
    "key": "mothim",
    "name": "Mothim",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 412
  },
  {
    "id": 415,
    "key": "combee",
    "name": "Combee",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 415
  },
  {
    "id": 416,
    "key": "vespiquen",
    "name": "Vespiquen",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 415
  },
  {
    "id": 417,
    "key": "pachirisu",
    "name": "Pachirisu",
    "types": [
      "Eléctrico"
    ],
    "familyId": 417
  },
  {
    "id": 418,
    "key": "buizel",
    "name": "Buizel",
    "types": [
      "Agua"
    ],
    "familyId": 418
  },
  {
    "id": 419,
    "key": "floatzel",
    "name": "Floatzel",
    "types": [
      "Agua"
    ],
    "familyId": 418
  },
  {
    "id": 420,
    "key": "cherubi",
    "name": "Cherubi",
    "types": [
      "Planta"
    ],
    "familyId": 420
  },
  {
    "id": 421,
    "key": "cherrim",
    "name": "Cherrim",
    "types": [
      "Planta"
    ],
    "familyId": 420
  },
  {
    "id": 422,
    "key": "shellos",
    "name": "Shellos",
    "types": [
      "Agua"
    ],
    "familyId": 422
  },
  {
    "id": 423,
    "key": "gastrodon",
    "name": "Gastrodon",
    "types": [
      "Agua",
      "Tierra"
    ],
    "familyId": 422
  },
  {
    "id": 424,
    "key": "ambipom",
    "name": "Ambipom",
    "types": [
      "Normal"
    ],
    "familyId": 190
  },
  {
    "id": 425,
    "key": "drifloon",
    "name": "Drifloon",
    "types": [
      "Fantasma",
      "Volador"
    ],
    "familyId": 425
  },
  {
    "id": 426,
    "key": "drifblim",
    "name": "Drifblim",
    "types": [
      "Fantasma",
      "Volador"
    ],
    "familyId": 425
  },
  {
    "id": 427,
    "key": "buneary",
    "name": "Buneary",
    "types": [
      "Normal"
    ],
    "familyId": 427
  },
  {
    "id": 428,
    "key": "lopunny",
    "name": "Lopunny",
    "types": [
      "Normal"
    ],
    "familyId": 427
  },
  {
    "id": 429,
    "key": "mismagius",
    "name": "Mismagius",
    "types": [
      "Fantasma"
    ],
    "familyId": 200
  },
  {
    "id": 430,
    "key": "honchkrow",
    "name": "Honchkrow",
    "types": [
      "Siniestro",
      "Volador"
    ],
    "familyId": 198
  },
  {
    "id": 431,
    "key": "glameow",
    "name": "Glameow",
    "types": [
      "Normal"
    ],
    "familyId": 431
  },
  {
    "id": 432,
    "key": "purugly",
    "name": "Purugly",
    "types": [
      "Normal"
    ],
    "familyId": 431
  },
  {
    "id": 433,
    "key": "chingling",
    "name": "Chingling",
    "types": [
      "Psíquico"
    ],
    "familyId": 433
  },
  {
    "id": 434,
    "key": "stunky",
    "name": "Stunky",
    "types": [
      "Veneno",
      "Siniestro"
    ],
    "familyId": 434
  },
  {
    "id": 435,
    "key": "skuntank",
    "name": "Skuntank",
    "types": [
      "Veneno",
      "Siniestro"
    ],
    "familyId": 434
  },
  {
    "id": 436,
    "key": "bronzor",
    "name": "Bronzor",
    "types": [
      "Acero",
      "Psíquico"
    ],
    "familyId": 436
  },
  {
    "id": 437,
    "key": "bronzong",
    "name": "Bronzong",
    "types": [
      "Acero",
      "Psíquico"
    ],
    "familyId": 436
  },
  {
    "id": 438,
    "key": "bonsly",
    "name": "Bonsly",
    "types": [
      "Roca"
    ],
    "familyId": 438
  },
  {
    "id": 439,
    "key": "mimejr",
    "name": "Mime Jr.",
    "types": [
      "Psíquico",
      "Hada"
    ],
    "familyId": 439
  },
  {
    "id": 440,
    "key": "happiny",
    "name": "Happiny",
    "types": [
      "Normal"
    ],
    "familyId": 440
  },
  {
    "id": 441,
    "key": "chatot",
    "name": "Chatot",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 441
  },
  {
    "id": 442,
    "key": "spiritomb",
    "name": "Spiritomb",
    "types": [
      "Fantasma",
      "Siniestro"
    ],
    "familyId": 442
  },
  {
    "id": 443,
    "key": "gible",
    "name": "Gible",
    "types": [
      "Dragón",
      "Tierra"
    ],
    "familyId": 443
  },
  {
    "id": 444,
    "key": "gabite",
    "name": "Gabite",
    "types": [
      "Dragón",
      "Tierra"
    ],
    "familyId": 443
  },
  {
    "id": 445,
    "key": "garchomp",
    "name": "Garchomp",
    "types": [
      "Dragón",
      "Tierra"
    ],
    "familyId": 443
  },
  {
    "id": 446,
    "key": "munchlax",
    "name": "Munchlax",
    "types": [
      "Normal"
    ],
    "familyId": 446
  },
  {
    "id": 447,
    "key": "riolu",
    "name": "Riolu",
    "types": [
      "Lucha"
    ],
    "familyId": 447
  },
  {
    "id": 448,
    "key": "lucario",
    "name": "Lucario",
    "types": [
      "Lucha",
      "Acero"
    ],
    "familyId": 447
  },
  {
    "id": 449,
    "key": "hippopotas",
    "name": "Hippopotas",
    "types": [
      "Tierra"
    ],
    "familyId": 449
  },
  {
    "id": 450,
    "key": "hippowdon",
    "name": "Hippowdon",
    "types": [
      "Tierra"
    ],
    "familyId": 449
  },
  {
    "id": 451,
    "key": "skorupi",
    "name": "Skorupi",
    "types": [
      "Veneno",
      "Bicho"
    ],
    "familyId": 451
  },
  {
    "id": 452,
    "key": "drapion",
    "name": "Drapion",
    "types": [
      "Veneno",
      "Siniestro"
    ],
    "familyId": 451
  },
  {
    "id": 453,
    "key": "croagunk",
    "name": "Croagunk",
    "types": [
      "Veneno",
      "Lucha"
    ],
    "familyId": 453
  },
  {
    "id": 454,
    "key": "toxicroak",
    "name": "Toxicroak",
    "types": [
      "Veneno",
      "Lucha"
    ],
    "familyId": 453
  },
  {
    "id": 455,
    "key": "carnivine",
    "name": "Carnivine",
    "types": [
      "Planta"
    ],
    "familyId": 455
  },
  {
    "id": 456,
    "key": "finneon",
    "name": "Finneon",
    "types": [
      "Agua"
    ],
    "familyId": 456
  },
  {
    "id": 457,
    "key": "lumineon",
    "name": "Lumineon",
    "types": [
      "Agua"
    ],
    "familyId": 456
  },
  {
    "id": 458,
    "key": "mantyke",
    "name": "Mantyke",
    "types": [
      "Agua",
      "Volador"
    ],
    "familyId": 458
  },
  {
    "id": 459,
    "key": "snover",
    "name": "Snover",
    "types": [
      "Planta",
      "Hielo"
    ],
    "familyId": 459
  },
  {
    "id": 460,
    "key": "abomasnow",
    "name": "Abomasnow",
    "types": [
      "Planta",
      "Hielo"
    ],
    "familyId": 459
  },
  {
    "id": 461,
    "key": "weavile",
    "name": "Weavile",
    "types": [
      "Siniestro",
      "Hielo"
    ],
    "familyId": 215
  },
  {
    "id": 462,
    "key": "magnezone",
    "name": "Magnezone",
    "types": [
      "Eléctrico",
      "Acero"
    ],
    "familyId": 81
  },
  {
    "id": 463,
    "key": "lickilicky",
    "name": "Lickilicky",
    "types": [
      "Normal"
    ],
    "familyId": 108
  },
  {
    "id": 464,
    "key": "rhyperior",
    "name": "Rhyperior",
    "types": [
      "Tierra",
      "Roca"
    ],
    "familyId": 111
  },
  {
    "id": 465,
    "key": "tangrowth",
    "name": "Tangrowth",
    "types": [
      "Planta"
    ],
    "familyId": 114
  },
  {
    "id": 466,
    "key": "electivire",
    "name": "Electivire",
    "types": [
      "Eléctrico"
    ],
    "familyId": 239
  },
  {
    "id": 467,
    "key": "magmortar",
    "name": "Magmortar",
    "types": [
      "Fuego"
    ],
    "familyId": 240
  },
  {
    "id": 468,
    "key": "togekiss",
    "name": "Togekiss",
    "types": [
      "Hada",
      "Volador"
    ],
    "familyId": 175
  },
  {
    "id": 469,
    "key": "yanmega",
    "name": "Yanmega",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 193
  },
  {
    "id": 470,
    "key": "leafeon",
    "name": "Leafeon",
    "types": [
      "Planta"
    ],
    "familyId": 133
  },
  {
    "id": 471,
    "key": "glaceon",
    "name": "Glaceon",
    "types": [
      "Hielo"
    ],
    "familyId": 133
  },
  {
    "id": 472,
    "key": "gliscor",
    "name": "Gliscor",
    "types": [
      "Tierra",
      "Volador"
    ],
    "familyId": 207
  },
  {
    "id": 473,
    "key": "mamoswine",
    "name": "Mamoswine",
    "types": [
      "Hielo",
      "Tierra"
    ],
    "familyId": 220
  },
  {
    "id": 474,
    "key": "porygonz",
    "name": "Porygon-Z",
    "types": [
      "Normal"
    ],
    "familyId": 137
  },
  {
    "id": 475,
    "key": "gallade",
    "name": "Gallade",
    "types": [
      "Psíquico",
      "Lucha"
    ],
    "familyId": 280
  },
  {
    "id": 476,
    "key": "probopass",
    "name": "Probopass",
    "types": [
      "Roca",
      "Acero"
    ],
    "familyId": 299
  },
  {
    "id": 477,
    "key": "dusknoir",
    "name": "Dusknoir",
    "types": [
      "Fantasma"
    ],
    "familyId": 355
  },
  {
    "id": 478,
    "key": "froslass",
    "name": "Froslass",
    "types": [
      "Hielo",
      "Fantasma"
    ],
    "familyId": 361
  },
  {
    "id": 479,
    "key": "rotom",
    "name": "Rotom",
    "types": [
      "Eléctrico",
      "Fantasma"
    ],
    "familyId": 479
  },
  {
    "id": 479,
    "key": "rotomheat",
    "name": "Rotom-Heat",
    "types": [
      "Eléctrico",
      "Fuego"
    ],
    "familyId": 479
  },
  {
    "id": 479,
    "key": "rotomwash",
    "name": "Rotom-Wash",
    "types": [
      "Eléctrico",
      "Agua"
    ],
    "familyId": 479
  },
  {
    "id": 479,
    "key": "rotomfrost",
    "name": "Rotom-Frost",
    "types": [
      "Eléctrico",
      "Hielo"
    ],
    "familyId": 479
  },
  {
    "id": 479,
    "key": "rotomfan",
    "name": "Rotom-Fan",
    "types": [
      "Eléctrico",
      "Volador"
    ],
    "familyId": 479
  },
  {
    "id": 479,
    "key": "rotommow",
    "name": "Rotom-Mow",
    "types": [
      "Eléctrico",
      "Planta"
    ],
    "familyId": 479
  },
  {
    "id": 480,
    "key": "uxie",
    "name": "Uxie",
    "types": [
      "Psíquico"
    ],
    "familyId": 480
  },
  {
    "id": 481,
    "key": "mesprit",
    "name": "Mesprit",
    "types": [
      "Psíquico"
    ],
    "familyId": 481
  },
  {
    "id": 482,
    "key": "azelf",
    "name": "Azelf",
    "types": [
      "Psíquico"
    ],
    "familyId": 482
  },
  {
    "id": 483,
    "key": "dialga",
    "name": "Dialga",
    "types": [
      "Acero",
      "Dragón"
    ],
    "familyId": 483
  },
  {
    "id": 483,
    "key": "dialgaorigin",
    "name": "Dialga-Origin",
    "types": [
      "Acero",
      "Dragón"
    ],
    "familyId": 483
  },
  {
    "id": 484,
    "key": "palkia",
    "name": "Palkia",
    "types": [
      "Agua",
      "Dragón"
    ],
    "familyId": 484
  },
  {
    "id": 484,
    "key": "palkiaorigin",
    "name": "Palkia-Origin",
    "types": [
      "Agua",
      "Dragón"
    ],
    "familyId": 484
  },
  {
    "id": 485,
    "key": "heatran",
    "name": "Heatran",
    "types": [
      "Fuego",
      "Acero"
    ],
    "familyId": 485
  },
  {
    "id": 486,
    "key": "regigigas",
    "name": "Regigigas",
    "types": [
      "Normal"
    ],
    "familyId": 486
  },
  {
    "id": 487,
    "key": "giratina",
    "name": "Giratina",
    "types": [
      "Fantasma",
      "Dragón"
    ],
    "familyId": 487
  },
  {
    "id": 487,
    "key": "giratinaorigin",
    "name": "Giratina-Origin",
    "types": [
      "Fantasma",
      "Dragón"
    ],
    "familyId": 487
  },
  {
    "id": 488,
    "key": "cresselia",
    "name": "Cresselia",
    "types": [
      "Psíquico"
    ],
    "familyId": 488
  },
  {
    "id": 489,
    "key": "phione",
    "name": "Phione",
    "types": [
      "Agua"
    ],
    "familyId": 489
  },
  {
    "id": 490,
    "key": "manaphy",
    "name": "Manaphy",
    "types": [
      "Agua"
    ],
    "familyId": 490
  },
  {
    "id": 491,
    "key": "darkrai",
    "name": "Darkrai",
    "types": [
      "Siniestro"
    ],
    "familyId": 491
  },
  {
    "id": 492,
    "key": "shaymin",
    "name": "Shaymin",
    "types": [
      "Planta"
    ],
    "familyId": 492
  },
  {
    "id": 493,
    "key": "arceus",
    "name": "Arceus",
    "types": [
      "Normal"
    ],
    "familyId": 493
  },
  {
    "id": 494,
    "key": "victini",
    "name": "Victini",
    "types": [
      "Psíquico",
      "Fuego"
    ],
    "familyId": 494
  },
  {
    "id": 495,
    "key": "snivy",
    "name": "Snivy",
    "types": [
      "Planta"
    ],
    "familyId": 495
  },
  {
    "id": 496,
    "key": "servine",
    "name": "Servine",
    "types": [
      "Planta"
    ],
    "familyId": 495
  },
  {
    "id": 497,
    "key": "serperior",
    "name": "Serperior",
    "types": [
      "Planta"
    ],
    "familyId": 495
  },
  {
    "id": 498,
    "key": "tepig",
    "name": "Tepig",
    "types": [
      "Fuego"
    ],
    "familyId": 498
  },
  {
    "id": 499,
    "key": "pignite",
    "name": "Pignite",
    "types": [
      "Fuego",
      "Lucha"
    ],
    "familyId": 498
  },
  {
    "id": 500,
    "key": "emboar",
    "name": "Emboar",
    "types": [
      "Fuego",
      "Lucha"
    ],
    "familyId": 498
  },
  {
    "id": 501,
    "key": "oshawott",
    "name": "Oshawott",
    "types": [
      "Agua"
    ],
    "familyId": 501
  },
  {
    "id": 502,
    "key": "dewott",
    "name": "Dewott",
    "types": [
      "Agua"
    ],
    "familyId": 501
  },
  {
    "id": 503,
    "key": "samurott",
    "name": "Samurott",
    "types": [
      "Agua"
    ],
    "familyId": 501
  },
  {
    "id": 504,
    "key": "patrat",
    "name": "Patrat",
    "types": [
      "Normal"
    ],
    "familyId": 504
  },
  {
    "id": 505,
    "key": "watchog",
    "name": "Watchog",
    "types": [
      "Normal"
    ],
    "familyId": 504
  },
  {
    "id": 506,
    "key": "lillipup",
    "name": "Lillipup",
    "types": [
      "Normal"
    ],
    "familyId": 506
  },
  {
    "id": 507,
    "key": "herdier",
    "name": "Herdier",
    "types": [
      "Normal"
    ],
    "familyId": 506
  },
  {
    "id": 508,
    "key": "stoutland",
    "name": "Stoutland",
    "types": [
      "Normal"
    ],
    "familyId": 506
  },
  {
    "id": 509,
    "key": "purrloin",
    "name": "Purrloin",
    "types": [
      "Siniestro"
    ],
    "familyId": 509
  },
  {
    "id": 510,
    "key": "liepard",
    "name": "Liepard",
    "types": [
      "Siniestro"
    ],
    "familyId": 509
  },
  {
    "id": 511,
    "key": "pansage",
    "name": "Pansage",
    "types": [
      "Planta"
    ],
    "familyId": 511
  },
  {
    "id": 512,
    "key": "simisage",
    "name": "Simisage",
    "types": [
      "Planta"
    ],
    "familyId": 511
  },
  {
    "id": 513,
    "key": "pansear",
    "name": "Pansear",
    "types": [
      "Fuego"
    ],
    "familyId": 513
  },
  {
    "id": 514,
    "key": "simisear",
    "name": "Simisear",
    "types": [
      "Fuego"
    ],
    "familyId": 513
  },
  {
    "id": 515,
    "key": "panpour",
    "name": "Panpour",
    "types": [
      "Agua"
    ],
    "familyId": 515
  },
  {
    "id": 516,
    "key": "simipour",
    "name": "Simipour",
    "types": [
      "Agua"
    ],
    "familyId": 515
  },
  {
    "id": 517,
    "key": "munna",
    "name": "Munna",
    "types": [
      "Psíquico"
    ],
    "familyId": 517
  },
  {
    "id": 518,
    "key": "musharna",
    "name": "Musharna",
    "types": [
      "Psíquico"
    ],
    "familyId": 517
  },
  {
    "id": 519,
    "key": "pidove",
    "name": "Pidove",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 519
  },
  {
    "id": 520,
    "key": "tranquill",
    "name": "Tranquill",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 519
  },
  {
    "id": 521,
    "key": "unfezant",
    "name": "Unfezant",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 519
  },
  {
    "id": 522,
    "key": "blitzle",
    "name": "Blitzle",
    "types": [
      "Eléctrico"
    ],
    "familyId": 522
  },
  {
    "id": 523,
    "key": "zebstrika",
    "name": "Zebstrika",
    "types": [
      "Eléctrico"
    ],
    "familyId": 522
  },
  {
    "id": 524,
    "key": "roggenrola",
    "name": "Roggenrola",
    "types": [
      "Roca"
    ],
    "familyId": 524
  },
  {
    "id": 525,
    "key": "boldore",
    "name": "Boldore",
    "types": [
      "Roca"
    ],
    "familyId": 524
  },
  {
    "id": 526,
    "key": "gigalith",
    "name": "Gigalith",
    "types": [
      "Roca"
    ],
    "familyId": 524
  },
  {
    "id": 527,
    "key": "woobat",
    "name": "Woobat",
    "types": [
      "Psíquico",
      "Volador"
    ],
    "familyId": 527
  },
  {
    "id": 528,
    "key": "swoobat",
    "name": "Swoobat",
    "types": [
      "Psíquico",
      "Volador"
    ],
    "familyId": 527
  },
  {
    "id": 529,
    "key": "drilbur",
    "name": "Drilbur",
    "types": [
      "Tierra"
    ],
    "familyId": 529
  },
  {
    "id": 530,
    "key": "excadrill",
    "name": "Excadrill",
    "types": [
      "Tierra",
      "Acero"
    ],
    "familyId": 529
  },
  {
    "id": 531,
    "key": "audino",
    "name": "Audino",
    "types": [
      "Normal"
    ],
    "familyId": 531
  },
  {
    "id": 532,
    "key": "timburr",
    "name": "Timburr",
    "types": [
      "Lucha"
    ],
    "familyId": 532
  },
  {
    "id": 533,
    "key": "gurdurr",
    "name": "Gurdurr",
    "types": [
      "Lucha"
    ],
    "familyId": 532
  },
  {
    "id": 534,
    "key": "conkeldurr",
    "name": "Conkeldurr",
    "types": [
      "Lucha"
    ],
    "familyId": 532
  },
  {
    "id": 535,
    "key": "tympole",
    "name": "Tympole",
    "types": [
      "Agua"
    ],
    "familyId": 535
  },
  {
    "id": 536,
    "key": "palpitoad",
    "name": "Palpitoad",
    "types": [
      "Agua",
      "Tierra"
    ],
    "familyId": 535
  },
  {
    "id": 537,
    "key": "seismitoad",
    "name": "Seismitoad",
    "types": [
      "Agua",
      "Tierra"
    ],
    "familyId": 535
  },
  {
    "id": 538,
    "key": "throh",
    "name": "Throh",
    "types": [
      "Lucha"
    ],
    "familyId": 538
  },
  {
    "id": 539,
    "key": "sawk",
    "name": "Sawk",
    "types": [
      "Lucha"
    ],
    "familyId": 539
  },
  {
    "id": 540,
    "key": "sewaddle",
    "name": "Sewaddle",
    "types": [
      "Bicho",
      "Planta"
    ],
    "familyId": 540
  },
  {
    "id": 541,
    "key": "swadloon",
    "name": "Swadloon",
    "types": [
      "Bicho",
      "Planta"
    ],
    "familyId": 540
  },
  {
    "id": 542,
    "key": "leavanny",
    "name": "Leavanny",
    "types": [
      "Bicho",
      "Planta"
    ],
    "familyId": 540
  },
  {
    "id": 543,
    "key": "venipede",
    "name": "Venipede",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 543
  },
  {
    "id": 544,
    "key": "whirlipede",
    "name": "Whirlipede",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 543
  },
  {
    "id": 545,
    "key": "scolipede",
    "name": "Scolipede",
    "types": [
      "Bicho",
      "Veneno"
    ],
    "familyId": 543
  },
  {
    "id": 546,
    "key": "cottonee",
    "name": "Cottonee",
    "types": [
      "Planta",
      "Hada"
    ],
    "familyId": 546
  },
  {
    "id": 547,
    "key": "whimsicott",
    "name": "Whimsicott",
    "types": [
      "Planta",
      "Hada"
    ],
    "familyId": 546
  },
  {
    "id": 548,
    "key": "petilil",
    "name": "Petilil",
    "types": [
      "Planta"
    ],
    "familyId": 548
  },
  {
    "id": 549,
    "key": "lilligant",
    "name": "Lilligant",
    "types": [
      "Planta"
    ],
    "familyId": 548
  },
  {
    "id": 550,
    "key": "basculin",
    "name": "Basculin",
    "types": [
      "Agua"
    ],
    "familyId": 550
  },
  {
    "id": 551,
    "key": "sandile",
    "name": "Sandile",
    "types": [
      "Tierra",
      "Siniestro"
    ],
    "familyId": 551
  },
  {
    "id": 552,
    "key": "krokorok",
    "name": "Krokorok",
    "types": [
      "Tierra",
      "Siniestro"
    ],
    "familyId": 551
  },
  {
    "id": 553,
    "key": "krookodile",
    "name": "Krookodile",
    "types": [
      "Tierra",
      "Siniestro"
    ],
    "familyId": 551
  },
  {
    "id": 554,
    "key": "darumaka",
    "name": "Darumaka",
    "types": [
      "Fuego"
    ],
    "familyId": 554
  },
  {
    "id": 554,
    "key": "darumakagalar",
    "name": "Darumaka-Galar",
    "types": [
      "Hielo"
    ],
    "familyId": 554
  },
  {
    "id": 555,
    "key": "darmanitan",
    "name": "Darmanitan",
    "types": [
      "Fuego"
    ],
    "familyId": 554
  },
  {
    "id": 555,
    "key": "darmanitangalar",
    "name": "Darmanitan-Galar",
    "types": [
      "Hielo"
    ],
    "familyId": 554
  },
  {
    "id": 556,
    "key": "maractus",
    "name": "Maractus",
    "types": [
      "Planta"
    ],
    "familyId": 556
  },
  {
    "id": 557,
    "key": "dwebble",
    "name": "Dwebble",
    "types": [
      "Bicho",
      "Roca"
    ],
    "familyId": 557
  },
  {
    "id": 558,
    "key": "crustle",
    "name": "Crustle",
    "types": [
      "Bicho",
      "Roca"
    ],
    "familyId": 557
  },
  {
    "id": 559,
    "key": "scraggy",
    "name": "Scraggy",
    "types": [
      "Siniestro",
      "Lucha"
    ],
    "familyId": 559
  },
  {
    "id": 560,
    "key": "scrafty",
    "name": "Scrafty",
    "types": [
      "Siniestro",
      "Lucha"
    ],
    "familyId": 559
  },
  {
    "id": 561,
    "key": "sigilyph",
    "name": "Sigilyph",
    "types": [
      "Psíquico",
      "Volador"
    ],
    "familyId": 561
  },
  {
    "id": 562,
    "key": "yamask",
    "name": "Yamask",
    "types": [
      "Fantasma"
    ],
    "familyId": 562
  },
  {
    "id": 562,
    "key": "yamaskgalar",
    "name": "Yamask-Galar",
    "types": [
      "Tierra",
      "Fantasma"
    ],
    "familyId": 562
  },
  {
    "id": 563,
    "key": "cofagrigus",
    "name": "Cofagrigus",
    "types": [
      "Fantasma"
    ],
    "familyId": 562
  },
  {
    "id": 564,
    "key": "tirtouga",
    "name": "Tirtouga",
    "types": [
      "Agua",
      "Roca"
    ],
    "familyId": 564
  },
  {
    "id": 565,
    "key": "carracosta",
    "name": "Carracosta",
    "types": [
      "Agua",
      "Roca"
    ],
    "familyId": 564
  },
  {
    "id": 566,
    "key": "archen",
    "name": "Archen",
    "types": [
      "Roca",
      "Volador"
    ],
    "familyId": 566
  },
  {
    "id": 567,
    "key": "archeops",
    "name": "Archeops",
    "types": [
      "Roca",
      "Volador"
    ],
    "familyId": 566
  },
  {
    "id": 568,
    "key": "trubbish",
    "name": "Trubbish",
    "types": [
      "Veneno"
    ],
    "familyId": 568
  },
  {
    "id": 569,
    "key": "garbodor",
    "name": "Garbodor",
    "types": [
      "Veneno"
    ],
    "familyId": 568
  },
  {
    "id": 570,
    "key": "zorua",
    "name": "Zorua",
    "types": [
      "Siniestro"
    ],
    "familyId": 570
  },
  {
    "id": 571,
    "key": "zoroark",
    "name": "Zoroark",
    "types": [
      "Siniestro"
    ],
    "familyId": 570
  },
  {
    "id": 572,
    "key": "minccino",
    "name": "Minccino",
    "types": [
      "Normal"
    ],
    "familyId": 572
  },
  {
    "id": 573,
    "key": "cinccino",
    "name": "Cinccino",
    "types": [
      "Normal"
    ],
    "familyId": 572
  },
  {
    "id": 574,
    "key": "gothita",
    "name": "Gothita",
    "types": [
      "Psíquico"
    ],
    "familyId": 574
  },
  {
    "id": 575,
    "key": "gothorita",
    "name": "Gothorita",
    "types": [
      "Psíquico"
    ],
    "familyId": 574
  },
  {
    "id": 576,
    "key": "gothitelle",
    "name": "Gothitelle",
    "types": [
      "Psíquico"
    ],
    "familyId": 574
  },
  {
    "id": 577,
    "key": "solosis",
    "name": "Solosis",
    "types": [
      "Psíquico"
    ],
    "familyId": 577
  },
  {
    "id": 578,
    "key": "duosion",
    "name": "Duosion",
    "types": [
      "Psíquico"
    ],
    "familyId": 577
  },
  {
    "id": 579,
    "key": "reuniclus",
    "name": "Reuniclus",
    "types": [
      "Psíquico"
    ],
    "familyId": 577
  },
  {
    "id": 580,
    "key": "ducklett",
    "name": "Ducklett",
    "types": [
      "Agua",
      "Volador"
    ],
    "familyId": 580
  },
  {
    "id": 581,
    "key": "swanna",
    "name": "Swanna",
    "types": [
      "Agua",
      "Volador"
    ],
    "familyId": 580
  },
  {
    "id": 582,
    "key": "vanillite",
    "name": "Vanillite",
    "types": [
      "Hielo"
    ],
    "familyId": 582
  },
  {
    "id": 583,
    "key": "vanillish",
    "name": "Vanillish",
    "types": [
      "Hielo"
    ],
    "familyId": 582
  },
  {
    "id": 584,
    "key": "vanilluxe",
    "name": "Vanilluxe",
    "types": [
      "Hielo"
    ],
    "familyId": 582
  },
  {
    "id": 585,
    "key": "deerling",
    "name": "Deerling",
    "types": [
      "Normal",
      "Planta"
    ],
    "familyId": 585
  },
  {
    "id": 586,
    "key": "sawsbuck",
    "name": "Sawsbuck",
    "types": [
      "Normal",
      "Planta"
    ],
    "familyId": 585
  },
  {
    "id": 587,
    "key": "emolga",
    "name": "Emolga",
    "types": [
      "Eléctrico",
      "Volador"
    ],
    "familyId": 587
  },
  {
    "id": 588,
    "key": "karrablast",
    "name": "Karrablast",
    "types": [
      "Bicho"
    ],
    "familyId": 588
  },
  {
    "id": 589,
    "key": "escavalier",
    "name": "Escavalier",
    "types": [
      "Bicho",
      "Acero"
    ],
    "familyId": 588
  },
  {
    "id": 590,
    "key": "foongus",
    "name": "Foongus",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 590
  },
  {
    "id": 591,
    "key": "amoonguss",
    "name": "Amoonguss",
    "types": [
      "Planta",
      "Veneno"
    ],
    "familyId": 590
  },
  {
    "id": 592,
    "key": "frillish",
    "name": "Frillish",
    "types": [
      "Agua",
      "Fantasma"
    ],
    "familyId": 592
  },
  {
    "id": 593,
    "key": "jellicent",
    "name": "Jellicent",
    "types": [
      "Agua",
      "Fantasma"
    ],
    "familyId": 592
  },
  {
    "id": 594,
    "key": "alomomola",
    "name": "Alomomola",
    "types": [
      "Agua"
    ],
    "familyId": 594
  },
  {
    "id": 595,
    "key": "joltik",
    "name": "Joltik",
    "types": [
      "Bicho",
      "Eléctrico"
    ],
    "familyId": 595
  },
  {
    "id": 596,
    "key": "galvantula",
    "name": "Galvantula",
    "types": [
      "Bicho",
      "Eléctrico"
    ],
    "familyId": 595
  },
  {
    "id": 597,
    "key": "ferroseed",
    "name": "Ferroseed",
    "types": [
      "Planta",
      "Acero"
    ],
    "familyId": 597
  },
  {
    "id": 598,
    "key": "ferrothorn",
    "name": "Ferrothorn",
    "types": [
      "Planta",
      "Acero"
    ],
    "familyId": 597
  },
  {
    "id": 599,
    "key": "klink",
    "name": "Klink",
    "types": [
      "Acero"
    ],
    "familyId": 599
  },
  {
    "id": 600,
    "key": "klang",
    "name": "Klang",
    "types": [
      "Acero"
    ],
    "familyId": 599
  },
  {
    "id": 601,
    "key": "klinklang",
    "name": "Klinklang",
    "types": [
      "Acero"
    ],
    "familyId": 599
  },
  {
    "id": 602,
    "key": "tynamo",
    "name": "Tynamo",
    "types": [
      "Eléctrico"
    ],
    "familyId": 602
  },
  {
    "id": 603,
    "key": "eelektrik",
    "name": "Eelektrik",
    "types": [
      "Eléctrico"
    ],
    "familyId": 602
  },
  {
    "id": 604,
    "key": "eelektross",
    "name": "Eelektross",
    "types": [
      "Eléctrico"
    ],
    "familyId": 602
  },
  {
    "id": 605,
    "key": "elgyem",
    "name": "Elgyem",
    "types": [
      "Psíquico"
    ],
    "familyId": 605
  },
  {
    "id": 606,
    "key": "beheeyem",
    "name": "Beheeyem",
    "types": [
      "Psíquico"
    ],
    "familyId": 605
  },
  {
    "id": 607,
    "key": "litwick",
    "name": "Litwick",
    "types": [
      "Fantasma",
      "Fuego"
    ],
    "familyId": 607
  },
  {
    "id": 608,
    "key": "lampent",
    "name": "Lampent",
    "types": [
      "Fantasma",
      "Fuego"
    ],
    "familyId": 607
  },
  {
    "id": 609,
    "key": "chandelure",
    "name": "Chandelure",
    "types": [
      "Fantasma",
      "Fuego"
    ],
    "familyId": 607
  },
  {
    "id": 610,
    "key": "axew",
    "name": "Axew",
    "types": [
      "Dragón"
    ],
    "familyId": 610
  },
  {
    "id": 611,
    "key": "fraxure",
    "name": "Fraxure",
    "types": [
      "Dragón"
    ],
    "familyId": 610
  },
  {
    "id": 612,
    "key": "haxorus",
    "name": "Haxorus",
    "types": [
      "Dragón"
    ],
    "familyId": 610
  },
  {
    "id": 613,
    "key": "cubchoo",
    "name": "Cubchoo",
    "types": [
      "Hielo"
    ],
    "familyId": 613
  },
  {
    "id": 614,
    "key": "beartic",
    "name": "Beartic",
    "types": [
      "Hielo"
    ],
    "familyId": 613
  },
  {
    "id": 615,
    "key": "cryogonal",
    "name": "Cryogonal",
    "types": [
      "Hielo"
    ],
    "familyId": 615
  },
  {
    "id": 616,
    "key": "shelmet",
    "name": "Shelmet",
    "types": [
      "Bicho"
    ],
    "familyId": 616
  },
  {
    "id": 617,
    "key": "accelgor",
    "name": "Accelgor",
    "types": [
      "Bicho"
    ],
    "familyId": 616
  },
  {
    "id": 618,
    "key": "stunfisk",
    "name": "Stunfisk",
    "types": [
      "Tierra",
      "Eléctrico"
    ],
    "familyId": 618
  },
  {
    "id": 618,
    "key": "stunfiskgalar",
    "name": "Stunfisk-Galar",
    "types": [
      "Tierra",
      "Acero"
    ],
    "familyId": 618
  },
  {
    "id": 619,
    "key": "mienfoo",
    "name": "Mienfoo",
    "types": [
      "Lucha"
    ],
    "familyId": 619
  },
  {
    "id": 620,
    "key": "mienshao",
    "name": "Mienshao",
    "types": [
      "Lucha"
    ],
    "familyId": 619
  },
  {
    "id": 621,
    "key": "druddigon",
    "name": "Druddigon",
    "types": [
      "Dragón"
    ],
    "familyId": 621
  },
  {
    "id": 622,
    "key": "golett",
    "name": "Golett",
    "types": [
      "Tierra",
      "Fantasma"
    ],
    "familyId": 622
  },
  {
    "id": 623,
    "key": "golurk",
    "name": "Golurk",
    "types": [
      "Tierra",
      "Fantasma"
    ],
    "familyId": 622
  },
  {
    "id": 624,
    "key": "pawniard",
    "name": "Pawniard",
    "types": [
      "Siniestro",
      "Acero"
    ],
    "familyId": 624
  },
  {
    "id": 625,
    "key": "bisharp",
    "name": "Bisharp",
    "types": [
      "Siniestro",
      "Acero"
    ],
    "familyId": 624
  },
  {
    "id": 626,
    "key": "bouffalant",
    "name": "Bouffalant",
    "types": [
      "Normal"
    ],
    "familyId": 626
  },
  {
    "id": 627,
    "key": "rufflet",
    "name": "Rufflet",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 627
  },
  {
    "id": 628,
    "key": "braviary",
    "name": "Braviary",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 627
  },
  {
    "id": 629,
    "key": "vullaby",
    "name": "Vullaby",
    "types": [
      "Siniestro",
      "Volador"
    ],
    "familyId": 629
  },
  {
    "id": 630,
    "key": "mandibuzz",
    "name": "Mandibuzz",
    "types": [
      "Siniestro",
      "Volador"
    ],
    "familyId": 629
  },
  {
    "id": 631,
    "key": "heatmor",
    "name": "Heatmor",
    "types": [
      "Fuego"
    ],
    "familyId": 631
  },
  {
    "id": 632,
    "key": "durant",
    "name": "Durant",
    "types": [
      "Bicho",
      "Acero"
    ],
    "familyId": 632
  },
  {
    "id": 633,
    "key": "deino",
    "name": "Deino",
    "types": [
      "Siniestro",
      "Dragón"
    ],
    "familyId": 633
  },
  {
    "id": 634,
    "key": "zweilous",
    "name": "Zweilous",
    "types": [
      "Siniestro",
      "Dragón"
    ],
    "familyId": 633
  },
  {
    "id": 635,
    "key": "hydreigon",
    "name": "Hydreigon",
    "types": [
      "Siniestro",
      "Dragón"
    ],
    "familyId": 633
  },
  {
    "id": 636,
    "key": "larvesta",
    "name": "Larvesta",
    "types": [
      "Bicho",
      "Fuego"
    ],
    "familyId": 636
  },
  {
    "id": 637,
    "key": "volcarona",
    "name": "Volcarona",
    "types": [
      "Bicho",
      "Fuego"
    ],
    "familyId": 636
  },
  {
    "id": 638,
    "key": "cobalion",
    "name": "Cobalion",
    "types": [
      "Acero",
      "Lucha"
    ],
    "familyId": 638
  },
  {
    "id": 639,
    "key": "terrakion",
    "name": "Terrakion",
    "types": [
      "Roca",
      "Lucha"
    ],
    "familyId": 639
  },
  {
    "id": 640,
    "key": "virizion",
    "name": "Virizion",
    "types": [
      "Planta",
      "Lucha"
    ],
    "familyId": 640
  },
  {
    "id": 641,
    "key": "tornadus",
    "name": "Tornadus",
    "types": [
      "Volador"
    ],
    "familyId": 641
  },
  {
    "id": 641,
    "key": "tornadustherian",
    "name": "Tornadus-Therian",
    "types": [
      "Volador"
    ],
    "familyId": 641
  },
  {
    "id": 642,
    "key": "thundurus",
    "name": "Thundurus",
    "types": [
      "Eléctrico",
      "Volador"
    ],
    "familyId": 642
  },
  {
    "id": 642,
    "key": "thundurustherian",
    "name": "Thundurus-Therian",
    "types": [
      "Eléctrico",
      "Volador"
    ],
    "familyId": 642
  },
  {
    "id": 643,
    "key": "reshiram",
    "name": "Reshiram",
    "types": [
      "Dragón",
      "Fuego"
    ],
    "familyId": 643
  },
  {
    "id": 644,
    "key": "zekrom",
    "name": "Zekrom",
    "types": [
      "Dragón",
      "Eléctrico"
    ],
    "familyId": 644
  },
  {
    "id": 645,
    "key": "landorus",
    "name": "Landorus",
    "types": [
      "Tierra",
      "Volador"
    ],
    "familyId": 645
  },
  {
    "id": 645,
    "key": "landorustherian",
    "name": "Landorus-Therian",
    "types": [
      "Tierra",
      "Volador"
    ],
    "familyId": 645
  },
  {
    "id": 646,
    "key": "kyurem",
    "name": "Kyurem",
    "types": [
      "Dragón",
      "Hielo"
    ],
    "familyId": 646
  },
  {
    "id": 647,
    "key": "keldeo",
    "name": "Keldeo",
    "types": [
      "Agua",
      "Lucha"
    ],
    "familyId": 647
  },
  {
    "id": 648,
    "key": "meloetta",
    "name": "Meloetta",
    "types": [
      "Normal",
      "Psíquico"
    ],
    "familyId": 648
  },
  {
    "id": 649,
    "key": "genesect",
    "name": "Genesect",
    "types": [
      "Bicho",
      "Acero"
    ],
    "familyId": 649
  },
  {
    "id": 650,
    "key": "chespin",
    "name": "Chespin",
    "types": [
      "Planta"
    ],
    "familyId": 650
  },
  {
    "id": 651,
    "key": "quilladin",
    "name": "Quilladin",
    "types": [
      "Planta"
    ],
    "familyId": 650
  },
  {
    "id": 652,
    "key": "chesnaught",
    "name": "Chesnaught",
    "types": [
      "Planta",
      "Lucha"
    ],
    "familyId": 650
  },
  {
    "id": 653,
    "key": "fennekin",
    "name": "Fennekin",
    "types": [
      "Fuego"
    ],
    "familyId": 653
  },
  {
    "id": 654,
    "key": "braixen",
    "name": "Braixen",
    "types": [
      "Fuego"
    ],
    "familyId": 653
  },
  {
    "id": 655,
    "key": "delphox",
    "name": "Delphox",
    "types": [
      "Fuego",
      "Psíquico"
    ],
    "familyId": 653
  },
  {
    "id": 656,
    "key": "froakie",
    "name": "Froakie",
    "types": [
      "Agua"
    ],
    "familyId": 656
  },
  {
    "id": 657,
    "key": "frogadier",
    "name": "Frogadier",
    "types": [
      "Agua"
    ],
    "familyId": 656
  },
  {
    "id": 658,
    "key": "greninja",
    "name": "Greninja",
    "types": [
      "Agua",
      "Siniestro"
    ],
    "familyId": 656
  },
  {
    "id": 659,
    "key": "bunnelby",
    "name": "Bunnelby",
    "types": [
      "Normal"
    ],
    "familyId": 659
  },
  {
    "id": 660,
    "key": "diggersby",
    "name": "Diggersby",
    "types": [
      "Normal",
      "Tierra"
    ],
    "familyId": 659
  },
  {
    "id": 661,
    "key": "fletchling",
    "name": "Fletchling",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 661
  },
  {
    "id": 662,
    "key": "fletchinder",
    "name": "Fletchinder",
    "types": [
      "Fuego",
      "Volador"
    ],
    "familyId": 661
  },
  {
    "id": 663,
    "key": "talonflame",
    "name": "Talonflame",
    "types": [
      "Fuego",
      "Volador"
    ],
    "familyId": 661
  },
  {
    "id": 664,
    "key": "scatterbug",
    "name": "Scatterbug",
    "types": [
      "Bicho"
    ],
    "familyId": 664
  },
  {
    "id": 665,
    "key": "spewpa",
    "name": "Spewpa",
    "types": [
      "Bicho"
    ],
    "familyId": 664
  },
  {
    "id": 666,
    "key": "vivillon",
    "name": "Vivillon",
    "types": [
      "Bicho",
      "Volador"
    ],
    "familyId": 664
  },
  {
    "id": 667,
    "key": "litleo",
    "name": "Litleo",
    "types": [
      "Fuego",
      "Normal"
    ],
    "familyId": 667
  },
  {
    "id": 668,
    "key": "pyroar",
    "name": "Pyroar",
    "types": [
      "Fuego",
      "Normal"
    ],
    "familyId": 667
  },
  {
    "id": 669,
    "key": "flabebe",
    "name": "Flabébé",
    "types": [
      "Hada"
    ],
    "familyId": 669
  },
  {
    "id": 670,
    "key": "floette",
    "name": "Floette",
    "types": [
      "Hada"
    ],
    "familyId": 669
  },
  {
    "id": 671,
    "key": "florges",
    "name": "Florges",
    "types": [
      "Hada"
    ],
    "familyId": 669
  },
  {
    "id": 672,
    "key": "skiddo",
    "name": "Skiddo",
    "types": [
      "Planta"
    ],
    "familyId": 672
  },
  {
    "id": 673,
    "key": "gogoat",
    "name": "Gogoat",
    "types": [
      "Planta"
    ],
    "familyId": 672
  },
  {
    "id": 674,
    "key": "pancham",
    "name": "Pancham",
    "types": [
      "Lucha"
    ],
    "familyId": 674
  },
  {
    "id": 675,
    "key": "pangoro",
    "name": "Pangoro",
    "types": [
      "Lucha",
      "Siniestro"
    ],
    "familyId": 674
  },
  {
    "id": 676,
    "key": "furfrou",
    "name": "Furfrou",
    "types": [
      "Normal"
    ],
    "familyId": 676
  },
  {
    "id": 677,
    "key": "espurr",
    "name": "Espurr",
    "types": [
      "Psíquico"
    ],
    "familyId": 677
  },
  {
    "id": 678,
    "key": "meowstic",
    "name": "Meowstic",
    "types": [
      "Psíquico"
    ],
    "familyId": 677
  },
  {
    "id": 679,
    "key": "honedge",
    "name": "Honedge",
    "types": [
      "Acero",
      "Fantasma"
    ],
    "familyId": 679
  },
  {
    "id": 680,
    "key": "doublade",
    "name": "Doublade",
    "types": [
      "Acero",
      "Fantasma"
    ],
    "familyId": 679
  },
  {
    "id": 681,
    "key": "aegislash",
    "name": "Aegislash",
    "types": [
      "Acero",
      "Fantasma"
    ],
    "familyId": 679
  },
  {
    "id": 682,
    "key": "spritzee",
    "name": "Spritzee",
    "types": [
      "Hada"
    ],
    "familyId": 682
  },
  {
    "id": 683,
    "key": "aromatisse",
    "name": "Aromatisse",
    "types": [
      "Hada"
    ],
    "familyId": 682
  },
  {
    "id": 684,
    "key": "swirlix",
    "name": "Swirlix",
    "types": [
      "Hada"
    ],
    "familyId": 684
  },
  {
    "id": 685,
    "key": "slurpuff",
    "name": "Slurpuff",
    "types": [
      "Hada"
    ],
    "familyId": 684
  },
  {
    "id": 686,
    "key": "inkay",
    "name": "Inkay",
    "types": [
      "Siniestro",
      "Psíquico"
    ],
    "familyId": 686
  },
  {
    "id": 687,
    "key": "malamar",
    "name": "Malamar",
    "types": [
      "Siniestro",
      "Psíquico"
    ],
    "familyId": 686
  },
  {
    "id": 688,
    "key": "binacle",
    "name": "Binacle",
    "types": [
      "Roca",
      "Agua"
    ],
    "familyId": 688
  },
  {
    "id": 689,
    "key": "barbaracle",
    "name": "Barbaracle",
    "types": [
      "Roca",
      "Agua"
    ],
    "familyId": 688
  },
  {
    "id": 690,
    "key": "skrelp",
    "name": "Skrelp",
    "types": [
      "Veneno",
      "Agua"
    ],
    "familyId": 690
  },
  {
    "id": 691,
    "key": "dragalge",
    "name": "Dragalge",
    "types": [
      "Veneno",
      "Dragón"
    ],
    "familyId": 690
  },
  {
    "id": 692,
    "key": "clauncher",
    "name": "Clauncher",
    "types": [
      "Agua"
    ],
    "familyId": 692
  },
  {
    "id": 693,
    "key": "clawitzer",
    "name": "Clawitzer",
    "types": [
      "Agua"
    ],
    "familyId": 692
  },
  {
    "id": 694,
    "key": "helioptile",
    "name": "Helioptile",
    "types": [
      "Eléctrico",
      "Normal"
    ],
    "familyId": 694
  },
  {
    "id": 695,
    "key": "heliolisk",
    "name": "Heliolisk",
    "types": [
      "Eléctrico",
      "Normal"
    ],
    "familyId": 694
  },
  {
    "id": 696,
    "key": "tyrunt",
    "name": "Tyrunt",
    "types": [
      "Roca",
      "Dragón"
    ],
    "familyId": 696
  },
  {
    "id": 697,
    "key": "tyrantrum",
    "name": "Tyrantrum",
    "types": [
      "Roca",
      "Dragón"
    ],
    "familyId": 696
  },
  {
    "id": 698,
    "key": "amaura",
    "name": "Amaura",
    "types": [
      "Roca",
      "Hielo"
    ],
    "familyId": 698
  },
  {
    "id": 699,
    "key": "aurorus",
    "name": "Aurorus",
    "types": [
      "Roca",
      "Hielo"
    ],
    "familyId": 698
  },
  {
    "id": 700,
    "key": "sylveon",
    "name": "Sylveon",
    "types": [
      "Hada"
    ],
    "familyId": 133
  },
  {
    "id": 701,
    "key": "hawlucha",
    "name": "Hawlucha",
    "types": [
      "Lucha",
      "Volador"
    ],
    "familyId": 701
  },
  {
    "id": 702,
    "key": "dedenne",
    "name": "Dedenne",
    "types": [
      "Eléctrico",
      "Hada"
    ],
    "familyId": 702
  },
  {
    "id": 703,
    "key": "carbink",
    "name": "Carbink",
    "types": [
      "Roca",
      "Hada"
    ],
    "familyId": 703
  },
  {
    "id": 704,
    "key": "goomy",
    "name": "Goomy",
    "types": [
      "Dragón"
    ],
    "familyId": 704
  },
  {
    "id": 705,
    "key": "sliggoo",
    "name": "Sliggoo",
    "types": [
      "Dragón"
    ],
    "familyId": 704
  },
  {
    "id": 706,
    "key": "goodra",
    "name": "Goodra",
    "types": [
      "Dragón"
    ],
    "familyId": 704
  },
  {
    "id": 707,
    "key": "klefki",
    "name": "Klefki",
    "types": [
      "Acero",
      "Hada"
    ],
    "familyId": 707
  },
  {
    "id": 708,
    "key": "phantump",
    "name": "Phantump",
    "types": [
      "Fantasma",
      "Planta"
    ],
    "familyId": 708
  },
  {
    "id": 709,
    "key": "trevenant",
    "name": "Trevenant",
    "types": [
      "Fantasma",
      "Planta"
    ],
    "familyId": 708
  },
  {
    "id": 710,
    "key": "pumpkaboo",
    "name": "Pumpkaboo",
    "types": [
      "Fantasma",
      "Planta"
    ],
    "familyId": 710
  },
  {
    "id": 711,
    "key": "gourgeist",
    "name": "Gourgeist",
    "types": [
      "Fantasma",
      "Planta"
    ],
    "familyId": 710
  },
  {
    "id": 712,
    "key": "bergmite",
    "name": "Bergmite",
    "types": [
      "Hielo"
    ],
    "familyId": 712
  },
  {
    "id": 713,
    "key": "avalugg",
    "name": "Avalugg",
    "types": [
      "Hielo"
    ],
    "familyId": 712
  },
  {
    "id": 714,
    "key": "noibat",
    "name": "Noibat",
    "types": [
      "Volador",
      "Dragón"
    ],
    "familyId": 714
  },
  {
    "id": 715,
    "key": "noivern",
    "name": "Noivern",
    "types": [
      "Volador",
      "Dragón"
    ],
    "familyId": 714
  },
  {
    "id": 716,
    "key": "xerneas",
    "name": "Xerneas",
    "types": [
      "Hada"
    ],
    "familyId": 716
  },
  {
    "id": 717,
    "key": "yveltal",
    "name": "Yveltal",
    "types": [
      "Siniestro",
      "Volador"
    ],
    "familyId": 717
  },
  {
    "id": 718,
    "key": "zygarde",
    "name": "Zygarde",
    "types": [
      "Dragón",
      "Tierra"
    ],
    "familyId": 718
  },
  {
    "id": 719,
    "key": "diancie",
    "name": "Diancie",
    "types": [
      "Roca",
      "Hada"
    ],
    "familyId": 719
  },
  {
    "id": 720,
    "key": "hoopa",
    "name": "Hoopa",
    "types": [
      "Psíquico",
      "Fantasma"
    ],
    "familyId": 720
  },
  {
    "id": 721,
    "key": "volcanion",
    "name": "Volcanion",
    "types": [
      "Fuego",
      "Agua"
    ],
    "familyId": 721
  },
  {
    "id": 722,
    "key": "rowlet",
    "name": "Rowlet",
    "types": [
      "Planta",
      "Volador"
    ],
    "familyId": 722
  },
  {
    "id": 723,
    "key": "dartrix",
    "name": "Dartrix",
    "types": [
      "Planta",
      "Volador"
    ],
    "familyId": 722
  },
  {
    "id": 724,
    "key": "decidueye",
    "name": "Decidueye",
    "types": [
      "Planta",
      "Fantasma"
    ],
    "familyId": 722
  },
  {
    "id": 725,
    "key": "litten",
    "name": "Litten",
    "types": [
      "Fuego"
    ],
    "familyId": 725
  },
  {
    "id": 726,
    "key": "torracat",
    "name": "Torracat",
    "types": [
      "Fuego"
    ],
    "familyId": 725
  },
  {
    "id": 727,
    "key": "incineroar",
    "name": "Incineroar",
    "types": [
      "Fuego",
      "Siniestro"
    ],
    "familyId": 725
  },
  {
    "id": 728,
    "key": "popplio",
    "name": "Popplio",
    "types": [
      "Agua"
    ],
    "familyId": 728
  },
  {
    "id": 729,
    "key": "brionne",
    "name": "Brionne",
    "types": [
      "Agua"
    ],
    "familyId": 728
  },
  {
    "id": 730,
    "key": "primarina",
    "name": "Primarina",
    "types": [
      "Agua",
      "Hada"
    ],
    "familyId": 728
  },
  {
    "id": 731,
    "key": "pikipek",
    "name": "Pikipek",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 731
  },
  {
    "id": 732,
    "key": "trumbeak",
    "name": "Trumbeak",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 731
  },
  {
    "id": 733,
    "key": "toucannon",
    "name": "Toucannon",
    "types": [
      "Normal",
      "Volador"
    ],
    "familyId": 731
  },
  {
    "id": 734,
    "key": "yungoos",
    "name": "Yungoos",
    "types": [
      "Normal"
    ],
    "familyId": 734
  },
  {
    "id": 735,
    "key": "gumshoos",
    "name": "Gumshoos",
    "types": [
      "Normal"
    ],
    "familyId": 734
  },
  {
    "id": 736,
    "key": "grubbin",
    "name": "Grubbin",
    "types": [
      "Bicho"
    ],
    "familyId": 736
  },
  {
    "id": 737,
    "key": "charjabug",
    "name": "Charjabug",
    "types": [
      "Bicho",
      "Eléctrico"
    ],
    "familyId": 736
  },
  {
    "id": 738,
    "key": "vikavolt",
    "name": "Vikavolt",
    "types": [
      "Bicho",
      "Eléctrico"
    ],
    "familyId": 736
  },
  {
    "id": 739,
    "key": "crabrawler",
    "name": "Crabrawler",
    "types": [
      "Lucha"
    ],
    "familyId": 739
  },
  {
    "id": 740,
    "key": "crabominable",
    "name": "Crabominable",
    "types": [
      "Lucha",
      "Hielo"
    ],
    "familyId": 739
  },
  {
    "id": 741,
    "key": "oricorio",
    "name": "Oricorio",
    "types": [
      "Fuego",
      "Volador"
    ],
    "familyId": 741
  },
  {
    "id": 742,
    "key": "cutiefly",
    "name": "Cutiefly",
    "types": [
      "Bicho",
      "Hada"
    ],
    "familyId": 742
  },
  {
    "id": 743,
    "key": "ribombee",
    "name": "Ribombee",
    "types": [
      "Bicho",
      "Hada"
    ],
    "familyId": 742
  },
  {
    "id": 744,
    "key": "rockruff",
    "name": "Rockruff",
    "types": [
      "Roca"
    ],
    "familyId": 744
  },
  {
    "id": 745,
    "key": "lycanroc",
    "name": "Lycanroc",
    "types": [
      "Roca"
    ],
    "familyId": 744
  },
  {
    "id": 746,
    "key": "wishiwashi",
    "name": "Wishiwashi",
    "types": [
      "Agua"
    ],
    "familyId": 746
  },
  {
    "id": 747,
    "key": "mareanie",
    "name": "Mareanie",
    "types": [
      "Veneno",
      "Agua"
    ],
    "familyId": 747
  },
  {
    "id": 748,
    "key": "toxapex",
    "name": "Toxapex",
    "types": [
      "Veneno",
      "Agua"
    ],
    "familyId": 747
  },
  {
    "id": 749,
    "key": "mudbray",
    "name": "Mudbray",
    "types": [
      "Tierra"
    ],
    "familyId": 749
  },
  {
    "id": 750,
    "key": "mudsdale",
    "name": "Mudsdale",
    "types": [
      "Tierra"
    ],
    "familyId": 749
  },
  {
    "id": 751,
    "key": "dewpider",
    "name": "Dewpider",
    "types": [
      "Agua",
      "Bicho"
    ],
    "familyId": 751
  },
  {
    "id": 752,
    "key": "araquanid",
    "name": "Araquanid",
    "types": [
      "Agua",
      "Bicho"
    ],
    "familyId": 751
  },
  {
    "id": 753,
    "key": "fomantis",
    "name": "Fomantis",
    "types": [
      "Planta"
    ],
    "familyId": 753
  },
  {
    "id": 754,
    "key": "lurantis",
    "name": "Lurantis",
    "types": [
      "Planta"
    ],
    "familyId": 753
  },
  {
    "id": 755,
    "key": "morelull",
    "name": "Morelull",
    "types": [
      "Planta",
      "Hada"
    ],
    "familyId": 755
  },
  {
    "id": 756,
    "key": "shiinotic",
    "name": "Shiinotic",
    "types": [
      "Planta",
      "Hada"
    ],
    "familyId": 755
  },
  {
    "id": 757,
    "key": "salandit",
    "name": "Salandit",
    "types": [
      "Veneno",
      "Fuego"
    ],
    "familyId": 757
  },
  {
    "id": 758,
    "key": "salazzle",
    "name": "Salazzle",
    "types": [
      "Veneno",
      "Fuego"
    ],
    "familyId": 757
  },
  {
    "id": 759,
    "key": "stufful",
    "name": "Stufful",
    "types": [
      "Normal",
      "Lucha"
    ],
    "familyId": 759
  },
  {
    "id": 760,
    "key": "bewear",
    "name": "Bewear",
    "types": [
      "Normal",
      "Lucha"
    ],
    "familyId": 759
  },
  {
    "id": 761,
    "key": "bounsweet",
    "name": "Bounsweet",
    "types": [
      "Planta"
    ],
    "familyId": 761
  },
  {
    "id": 762,
    "key": "steenee",
    "name": "Steenee",
    "types": [
      "Planta"
    ],
    "familyId": 761
  },
  {
    "id": 763,
    "key": "tsareena",
    "name": "Tsareena",
    "types": [
      "Planta"
    ],
    "familyId": 761
  },
  {
    "id": 764,
    "key": "comfey",
    "name": "Comfey",
    "types": [
      "Hada"
    ],
    "familyId": 764
  },
  {
    "id": 765,
    "key": "oranguru",
    "name": "Oranguru",
    "types": [
      "Normal",
      "Psíquico"
    ],
    "familyId": 765
  },
  {
    "id": 766,
    "key": "passimian",
    "name": "Passimian",
    "types": [
      "Lucha"
    ],
    "familyId": 766
  },
  {
    "id": 767,
    "key": "wimpod",
    "name": "Wimpod",
    "types": [
      "Bicho",
      "Agua"
    ],
    "familyId": 767
  },
  {
    "id": 768,
    "key": "golisopod",
    "name": "Golisopod",
    "types": [
      "Bicho",
      "Agua"
    ],
    "familyId": 767
  },
  {
    "id": 769,
    "key": "sandygast",
    "name": "Sandygast",
    "types": [
      "Fantasma",
      "Tierra"
    ],
    "familyId": 769
  },
  {
    "id": 770,
    "key": "palossand",
    "name": "Palossand",
    "types": [
      "Fantasma",
      "Tierra"
    ],
    "familyId": 769
  },
  {
    "id": 771,
    "key": "pyukumuku",
    "name": "Pyukumuku",
    "types": [
      "Agua"
    ],
    "familyId": 771
  },
  {
    "id": 772,
    "key": "typenull",
    "name": "Type: Null",
    "types": [
      "Normal"
    ],
    "familyId": 772
  },
  {
    "id": 773,
    "key": "silvally",
    "name": "Silvally",
    "types": [
      "Normal"
    ],
    "familyId": 772
  },
  {
    "id": 774,
    "key": "minior",
    "name": "Minior",
    "types": [
      "Roca",
      "Volador"
    ],
    "familyId": 774
  },
  {
    "id": 775,
    "key": "komala",
    "name": "Komala",
    "types": [
      "Normal"
    ],
    "familyId": 775
  },
  {
    "id": 776,
    "key": "turtonator",
    "name": "Turtonator",
    "types": [
      "Fuego",
      "Dragón"
    ],
    "familyId": 776
  },
  {
    "id": 777,
    "key": "togedemaru",
    "name": "Togedemaru",
    "types": [
      "Eléctrico",
      "Acero"
    ],
    "familyId": 777
  },
  {
    "id": 778,
    "key": "mimikyu",
    "name": "Mimikyu",
    "types": [
      "Fantasma",
      "Hada"
    ],
    "familyId": 778
  },
  {
    "id": 779,
    "key": "bruxish",
    "name": "Bruxish",
    "types": [
      "Agua",
      "Psíquico"
    ],
    "familyId": 779
  },
  {
    "id": 780,
    "key": "drampa",
    "name": "Drampa",
    "types": [
      "Normal",
      "Dragón"
    ],
    "familyId": 780
  },
  {
    "id": 781,
    "key": "dhelmise",
    "name": "Dhelmise",
    "types": [
      "Fantasma",
      "Planta"
    ],
    "familyId": 781
  },
  {
    "id": 782,
    "key": "jangmoo",
    "name": "Jangmo-o",
    "types": [
      "Dragón"
    ],
    "familyId": 782
  },
  {
    "id": 783,
    "key": "hakamoo",
    "name": "Hakamo-o",
    "types": [
      "Dragón",
      "Lucha"
    ],
    "familyId": 782
  },
  {
    "id": 784,
    "key": "kommoo",
    "name": "Kommo-o",
    "types": [
      "Dragón",
      "Lucha"
    ],
    "familyId": 782
  },
  {
    "id": 785,
    "key": "tapukoko",
    "name": "Tapu Koko",
    "types": [
      "Eléctrico",
      "Hada"
    ],
    "familyId": 785
  },
  {
    "id": 786,
    "key": "tapulele",
    "name": "Tapu Lele",
    "types": [
      "Psíquico",
      "Hada"
    ],
    "familyId": 786
  },
  {
    "id": 787,
    "key": "tapubulu",
    "name": "Tapu Bulu",
    "types": [
      "Planta",
      "Hada"
    ],
    "familyId": 787
  },
  {
    "id": 788,
    "key": "tapufini",
    "name": "Tapu Fini",
    "types": [
      "Agua",
      "Hada"
    ],
    "familyId": 788
  },
  {
    "id": 789,
    "key": "cosmog",
    "name": "Cosmog",
    "types": [
      "Psíquico"
    ],
    "familyId": 789
  },
  {
    "id": 790,
    "key": "cosmoem",
    "name": "Cosmoem",
    "types": [
      "Psíquico"
    ],
    "familyId": 789
  },
  {
    "id": 791,
    "key": "solgaleo",
    "name": "Solgaleo",
    "types": [
      "Psíquico",
      "Acero"
    ],
    "familyId": 789
  },
  {
    "id": 792,
    "key": "lunala",
    "name": "Lunala",
    "types": [
      "Psíquico",
      "Fantasma"
    ],
    "familyId": 789
  },
  {
    "id": 793,
    "key": "nihilego",
    "name": "Nihilego",
    "types": [
      "Roca",
      "Veneno"
    ],
    "familyId": 793
  },
  {
    "id": 794,
    "key": "buzzwole",
    "name": "Buzzwole",
    "types": [
      "Bicho",
      "Lucha"
    ],
    "familyId": 794
  },
  {
    "id": 795,
    "key": "pheromosa",
    "name": "Pheromosa",
    "types": [
      "Bicho",
      "Lucha"
    ],
    "familyId": 795
  },
  {
    "id": 796,
    "key": "xurkitree",
    "name": "Xurkitree",
    "types": [
      "Eléctrico"
    ],
    "familyId": 796
  },
  {
    "id": 797,
    "key": "celesteela",
    "name": "Celesteela",
    "types": [
      "Acero",
      "Volador"
    ],
    "familyId": 797
  },
  {
    "id": 798,
    "key": "kartana",
    "name": "Kartana",
    "types": [
      "Planta",
      "Acero"
    ],
    "familyId": 798
  },
  {
    "id": 799,
    "key": "guzzlord",
    "name": "Guzzlord",
    "types": [
      "Siniestro",
      "Dragón"
    ],
    "familyId": 799
  },
  {
    "id": 800,
    "key": "necrozma",
    "name": "Necrozma",
    "types": [
      "Psíquico"
    ],
    "familyId": 800
  },
  {
    "id": 801,
    "key": "magearna",
    "name": "Magearna",
    "types": [
      "Acero",
      "Hada"
    ],
    "familyId": 801
  },
  {
    "id": 802,
    "key": "marshadow",
    "name": "Marshadow",
    "types": [
      "Lucha",
      "Fantasma"
    ],
    "familyId": 802
  },
  {
    "id": 803,
    "key": "poipole",
    "name": "Poipole",
    "types": [
      "Veneno"
    ],
    "familyId": 803
  },
  {
    "id": 804,
    "key": "naganadel",
    "name": "Naganadel",
    "types": [
      "Veneno",
      "Dragón"
    ],
    "familyId": 803
  },
  {
    "id": 805,
    "key": "stakataka",
    "name": "Stakataka",
    "types": [
      "Roca",
      "Acero"
    ],
    "familyId": 805
  },
  {
    "id": 806,
    "key": "blacephalon",
    "name": "Blacephalon",
    "types": [
      "Fuego",
      "Fantasma"
    ],
    "familyId": 806
  },
  {
    "id": 807,
    "key": "zeraora",
    "name": "Zeraora",
    "types": [
      "Eléctrico"
    ],
    "familyId": 807
  },
  {
    "id": 808,
    "key": "meltan",
    "name": "Meltan",
    "types": [
      "Acero"
    ],
    "familyId": 808
  },
  {
    "id": 809,
    "key": "melmetal",
    "name": "Melmetal",
    "types": [
      "Acero"
    ],
    "familyId": 809
  },
  {
    "id": 810,
    "key": "grookey",
    "name": "Grookey",
    "types": [
      "Planta"
    ],
    "familyId": 810
  },
  {
    "id": 811,
    "key": "thwackey",
    "name": "Thwackey",
    "types": [
      "Planta"
    ],
    "familyId": 810
  },
  {
    "id": 812,
    "key": "rillaboom",
    "name": "Rillaboom",
    "types": [
      "Planta"
    ],
    "familyId": 810
  },
  {
    "id": 813,
    "key": "scorbunny",
    "name": "Scorbunny",
    "types": [
      "Fuego"
    ],
    "familyId": 813
  },
  {
    "id": 814,
    "key": "raboot",
    "name": "Raboot",
    "types": [
      "Fuego"
    ],
    "familyId": 813
  },
  {
    "id": 815,
    "key": "cinderace",
    "name": "Cinderace",
    "types": [
      "Fuego"
    ],
    "familyId": 813
  },
  {
    "id": 816,
    "key": "sobble",
    "name": "Sobble",
    "types": [
      "Agua"
    ],
    "familyId": 816
  },
  {
    "id": 817,
    "key": "drizzile",
    "name": "Drizzile",
    "types": [
      "Agua"
    ],
    "familyId": 816
  },
  {
    "id": 818,
    "key": "inteleon",
    "name": "Inteleon",
    "types": [
      "Agua"
    ],
    "familyId": 816
  },
  {
    "id": 819,
    "key": "skwovet",
    "name": "Skwovet",
    "types": [
      "Normal"
    ],
    "familyId": 819
  },
  {
    "id": 820,
    "key": "greedent",
    "name": "Greedent",
    "types": [
      "Normal"
    ],
    "familyId": 819
  },
  {
    "id": 821,
    "key": "rookidee",
    "name": "Rookidee",
    "types": [
      "Volador"
    ],
    "familyId": 821
  },
  {
    "id": 822,
    "key": "corvisquire",
    "name": "Corvisquire",
    "types": [
      "Volador"
    ],
    "familyId": 821
  },
  {
    "id": 823,
    "key": "corviknight",
    "name": "Corviknight",
    "types": [
      "Volador",
      "Acero"
    ],
    "familyId": 821
  },
  {
    "id": 824,
    "key": "blipbug",
    "name": "Blipbug",
    "types": [
      "Bicho"
    ],
    "familyId": 824
  },
  {
    "id": 825,
    "key": "dottler",
    "name": "Dottler",
    "types": [
      "Bicho",
      "Psíquico"
    ],
    "familyId": 824
  },
  {
    "id": 826,
    "key": "orbeetle",
    "name": "Orbeetle",
    "types": [
      "Bicho",
      "Psíquico"
    ],
    "familyId": 824
  },
  {
    "id": 827,
    "key": "nickit",
    "name": "Nickit",
    "types": [
      "Siniestro"
    ],
    "familyId": 827
  },
  {
    "id": 828,
    "key": "thievul",
    "name": "Thievul",
    "types": [
      "Siniestro"
    ],
    "familyId": 827
  },
  {
    "id": 829,
    "key": "gossifleur",
    "name": "Gossifleur",
    "types": [
      "Planta"
    ],
    "familyId": 829
  },
  {
    "id": 830,
    "key": "eldegoss",
    "name": "Eldegoss",
    "types": [
      "Planta"
    ],
    "familyId": 829
  },
  {
    "id": 831,
    "key": "wooloo",
    "name": "Wooloo",
    "types": [
      "Normal"
    ],
    "familyId": 831
  },
  {
    "id": 832,
    "key": "dubwool",
    "name": "Dubwool",
    "types": [
      "Normal"
    ],
    "familyId": 831
  },
  {
    "id": 833,
    "key": "chewtle",
    "name": "Chewtle",
    "types": [
      "Agua"
    ],
    "familyId": 833
  },
  {
    "id": 834,
    "key": "drednaw",
    "name": "Drednaw",
    "types": [
      "Agua",
      "Roca"
    ],
    "familyId": 833
  },
  {
    "id": 835,
    "key": "yamper",
    "name": "Yamper",
    "types": [
      "Eléctrico"
    ],
    "familyId": 835
  },
  {
    "id": 836,
    "key": "boltund",
    "name": "Boltund",
    "types": [
      "Eléctrico"
    ],
    "familyId": 835
  },
  {
    "id": 837,
    "key": "rolycoly",
    "name": "Rolycoly",
    "types": [
      "Roca"
    ],
    "familyId": 837
  },
  {
    "id": 838,
    "key": "carkol",
    "name": "Carkol",
    "types": [
      "Roca",
      "Fuego"
    ],
    "familyId": 837
  },
  {
    "id": 839,
    "key": "coalossal",
    "name": "Coalossal",
    "types": [
      "Roca",
      "Fuego"
    ],
    "familyId": 837
  },
  {
    "id": 840,
    "key": "applin",
    "name": "Applin",
    "types": [
      "Planta",
      "Dragón"
    ],
    "familyId": 840
  },
  {
    "id": 841,
    "key": "flapple",
    "name": "Flapple",
    "types": [
      "Planta",
      "Dragón"
    ],
    "familyId": 840
  },
  {
    "id": 842,
    "key": "appletun",
    "name": "Appletun",
    "types": [
      "Planta",
      "Dragón"
    ],
    "familyId": 840
  },
  {
    "id": 843,
    "key": "silicobra",
    "name": "Silicobra",
    "types": [
      "Tierra"
    ],
    "familyId": 843
  },
  {
    "id": 844,
    "key": "sandaconda",
    "name": "Sandaconda",
    "types": [
      "Tierra"
    ],
    "familyId": 843
  },
  {
    "id": 845,
    "key": "cramorant",
    "name": "Cramorant",
    "types": [
      "Volador",
      "Agua"
    ],
    "familyId": 845
  },
  {
    "id": 846,
    "key": "arrokuda",
    "name": "Arrokuda",
    "types": [
      "Agua"
    ],
    "familyId": 846
  },
  {
    "id": 847,
    "key": "barraskewda",
    "name": "Barraskewda",
    "types": [
      "Agua"
    ],
    "familyId": 846
  },
  {
    "id": 848,
    "key": "toxel",
    "name": "Toxel",
    "types": [
      "Eléctrico",
      "Veneno"
    ],
    "familyId": 848
  },
  {
    "id": 849,
    "key": "toxtricity",
    "name": "Toxtricity",
    "types": [
      "Eléctrico",
      "Veneno"
    ],
    "familyId": 848
  },
  {
    "id": 850,
    "key": "sizzlipede",
    "name": "Sizzlipede",
    "types": [
      "Fuego",
      "Bicho"
    ],
    "familyId": 850
  },
  {
    "id": 851,
    "key": "centiskorch",
    "name": "Centiskorch",
    "types": [
      "Fuego",
      "Bicho"
    ],
    "familyId": 850
  },
  {
    "id": 852,
    "key": "clobbopus",
    "name": "Clobbopus",
    "types": [
      "Lucha"
    ],
    "familyId": 852
  },
  {
    "id": 853,
    "key": "grapploct",
    "name": "Grapploct",
    "types": [
      "Lucha"
    ],
    "familyId": 852
  },
  {
    "id": 854,
    "key": "sinistea",
    "name": "Sinistea",
    "types": [
      "Fantasma"
    ],
    "familyId": 854
  },
  {
    "id": 855,
    "key": "polteageist",
    "name": "Polteageist",
    "types": [
      "Fantasma"
    ],
    "familyId": 854
  },
  {
    "id": 856,
    "key": "hatenna",
    "name": "Hatenna",
    "types": [
      "Psíquico"
    ],
    "familyId": 856
  },
  {
    "id": 857,
    "key": "hattrem",
    "name": "Hattrem",
    "types": [
      "Psíquico"
    ],
    "familyId": 856
  },
  {
    "id": 858,
    "key": "hatterene",
    "name": "Hatterene",
    "types": [
      "Psíquico",
      "Hada"
    ],
    "familyId": 856
  },
  {
    "id": 859,
    "key": "impidimp",
    "name": "Impidimp",
    "types": [
      "Siniestro",
      "Hada"
    ],
    "familyId": 859
  },
  {
    "id": 860,
    "key": "morgrem",
    "name": "Morgrem",
    "types": [
      "Siniestro",
      "Hada"
    ],
    "familyId": 859
  },
  {
    "id": 861,
    "key": "grimmsnarl",
    "name": "Grimmsnarl",
    "types": [
      "Siniestro",
      "Hada"
    ],
    "familyId": 859
  },
  {
    "id": 862,
    "key": "obstagoon",
    "name": "Obstagoon",
    "types": [
      "Siniestro",
      "Normal"
    ],
    "familyId": 263
  },
  {
    "id": 863,
    "key": "perrserker",
    "name": "Perrserker",
    "types": [
      "Acero"
    ],
    "familyId": 52
  },
  {
    "id": 864,
    "key": "cursola",
    "name": "Cursola",
    "types": [
      "Fantasma"
    ],
    "familyId": 222
  },
  {
    "id": 865,
    "key": "sirfetchd",
    "name": "Sirfetch’d",
    "types": [
      "Lucha"
    ],
    "familyId": 83
  },
  {
    "id": 866,
    "key": "mrrime",
    "name": "Mr. Rime",
    "types": [
      "Hielo",
      "Psíquico"
    ],
    "familyId": 439
  },
  {
    "id": 867,
    "key": "runerigus",
    "name": "Runerigus",
    "types": [
      "Tierra",
      "Fantasma"
    ],
    "familyId": 562
  },
  {
    "id": 868,
    "key": "milcery",
    "name": "Milcery",
    "types": [
      "Hada"
    ],
    "familyId": 868
  },
  {
    "id": 869,
    "key": "alcremie",
    "name": "Alcremie",
    "types": [
      "Hada"
    ],
    "familyId": 868
  },
  {
    "id": 870,
    "key": "falinks",
    "name": "Falinks",
    "types": [
      "Lucha"
    ],
    "familyId": 870
  },
  {
    "id": 871,
    "key": "pincurchin",
    "name": "Pincurchin",
    "types": [
      "Eléctrico"
    ],
    "familyId": 871
  },
  {
    "id": 872,
    "key": "snom",
    "name": "Snom",
    "types": [
      "Hielo",
      "Bicho"
    ],
    "familyId": 872
  },
  {
    "id": 873,
    "key": "frosmoth",
    "name": "Frosmoth",
    "types": [
      "Hielo",
      "Bicho"
    ],
    "familyId": 872
  },
  {
    "id": 874,
    "key": "stonjourner",
    "name": "Stonjourner",
    "types": [
      "Roca"
    ],
    "familyId": 874
  },
  {
    "id": 875,
    "key": "eiscue",
    "name": "Eiscue",
    "types": [
      "Hielo"
    ],
    "familyId": 875
  },
  {
    "id": 876,
    "key": "indeedee",
    "name": "Indeedee",
    "types": [
      "Psíquico",
      "Normal"
    ],
    "familyId": 876
  },
  {
    "id": 877,
    "key": "morpeko",
    "name": "Morpeko",
    "types": [
      "Eléctrico",
      "Siniestro"
    ],
    "familyId": 877
  },
  {
    "id": 878,
    "key": "cufant",
    "name": "Cufant",
    "types": [
      "Acero"
    ],
    "familyId": 878
  },
  {
    "id": 879,
    "key": "copperajah",
    "name": "Copperajah",
    "types": [
      "Acero"
    ],
    "familyId": 878
  },
  {
    "id": 880,
    "key": "dracozolt",
    "name": "Dracozolt",
    "types": [
      "Eléctrico",
      "Dragón"
    ],
    "familyId": 880
  },
  {
    "id": 881,
    "key": "arctozolt",
    "name": "Arctozolt",
    "types": [
      "Eléctrico",
      "Hielo"
    ],
    "familyId": 881
  },
  {
    "id": 882,
    "key": "dracovish",
    "name": "Dracovish",
    "types": [
      "Agua",
      "Dragón"
    ],
    "familyId": 882
  },
  {
    "id": 883,
    "key": "arctovish",
    "name": "Arctovish",
    "types": [
      "Agua",
      "Hielo"
    ],
    "familyId": 883
  },
  {
    "id": 884,
    "key": "duraludon",
    "name": "Duraludon",
    "types": [
      "Acero",
      "Dragón"
    ],
    "familyId": 884
  },
  {
    "id": 885,
    "key": "dreepy",
    "name": "Dreepy",
    "types": [
      "Dragón",
      "Fantasma"
    ],
    "familyId": 885
  },
  {
    "id": 886,
    "key": "drakloak",
    "name": "Drakloak",
    "types": [
      "Dragón",
      "Fantasma"
    ],
    "familyId": 885
  },
  {
    "id": 887,
    "key": "dragapult",
    "name": "Dragapult",
    "types": [
      "Dragón",
      "Fantasma"
    ],
    "familyId": 885
  },
  {
    "id": 888,
    "key": "zacian",
    "name": "Zacian",
    "types": [
      "Hada"
    ],
    "familyId": 888
  },
  {
    "id": 889,
    "key": "zamazenta",
    "name": "Zamazenta",
    "types": [
      "Lucha"
    ],
    "familyId": 889
  },
  {
    "id": 890,
    "key": "eternatus",
    "name": "Eternatus",
    "types": [
      "Veneno",
      "Dragón"
    ],
    "familyId": 890
  },
  {
    "id": 891,
    "key": "kubfu",
    "name": "Kubfu",
    "types": [
      "Lucha"
    ],
    "familyId": 891
  },
  {
    "id": 892,
    "key": "urshifu",
    "name": "Urshifu",
    "types": [
      "Lucha",
      "Siniestro"
    ],
    "familyId": 891
  },
  {
    "id": 893,
    "key": "zarude",
    "name": "Zarude",
    "types": [
      "Siniestro",
      "Planta"
    ],
    "familyId": 893
  },
  {
    "id": 894,
    "key": "regieleki",
    "name": "Regieleki",
    "types": [
      "Eléctrico"
    ],
    "familyId": 894
  },
  {
    "id": 895,
    "key": "regidrago",
    "name": "Regidrago",
    "types": [
      "Dragón"
    ],
    "familyId": 895
  },
  {
    "id": 896,
    "key": "glastrier",
    "name": "Glastrier",
    "types": [
      "Hielo"
    ],
    "familyId": 896
  },
  {
    "id": 897,
    "key": "spectrier",
    "name": "Spectrier",
    "types": [
      "Fantasma"
    ],
    "familyId": 897
  },
  {
    "id": 898,
    "key": "calyrex",
    "name": "Calyrex",
    "types": [
      "Psíquico",
      "Planta"
    ],
    "familyId": 898
  }
];

  const NATURES_DATA = [
  {
    "name": "Firme",
    "inc": "Ataque",
    "dec": "At. Esp."
  },
  {
    "name": "Alegre",
    "inc": "Velocidad",
    "dec": "At. Esp."
  },
  {
    "name": "Modesta",
    "inc": "At. Esp.",
    "dec": "Ataque"
  },
  {
    "name": "Miedosa",
    "inc": "Velocidad",
    "dec": "Ataque"
  },
  {
    "name": "Agitada",
    "inc": "Defensa",
    "dec": "At. Esp."
  },
  {
    "name": "Cauta",
    "inc": "Def. Esp.",
    "dec": "At. Esp."
  },
  {
    "name": "Osada",
    "inc": "Defensa",
    "dec": "Ataque"
  },
  {
    "name": "Serena",
    "inc": "Def. Esp.",
    "dec": "Ataque"
  },
  {
    "name": "Audaz",
    "inc": "Ataque",
    "dec": "Velocidad"
  },
  {
    "name": "Mansa",
    "inc": "At. Esp.",
    "dec": "Velocidad"
  },
  {
    "name": "Plácida",
    "inc": "Defensa",
    "dec": "Velocidad"
  },
  {
    "name": "Grosera",
    "inc": "Def. Esp.",
    "dec": "Velocidad"
  },
  {
    "name": "Ingenua",
    "inc": "Velocidad",
    "dec": "Def. Esp."
  },
  {
    "name": "Activa",
    "inc": "Velocidad",
    "dec": "Defensa"
  },
  {
    "name": "Pícara",
    "inc": "Ataque",
    "dec": "Def. Esp."
  },
  {
    "name": "Huraña",
    "inc": "Ataque",
    "dec": "Defensa"
  },
  {
    "name": "Alocada",
    "inc": "At. Esp.",
    "dec": "Def. Esp."
  },
  {
    "name": "Afable",
    "inc": "At. Esp.",
    "dec": "Defensa"
  },
  {
    "name": "Fuerte",
    "inc": "-",
    "dec": "-"
  },
  {
    "name": "Dócil",
    "inc": "-",
    "dec": "-"
  },
  {
    "name": "Tímida",
    "inc": "-",
    "dec": "-"
  },
  {
    "name": "Rara",
    "inc": "-",
    "dec": "-"
  },
  {
    "name": "Seria",
    "inc": "-",
    "dec": "-"
  }
];

  const TYPE_COLORS = {
    "Normal": { bg: "#9FA19F", border: "#6D6D4E", text: "#FFFFFF" },
    "Fuego": { bg: "#E62829", border: "#AB1F24", text: "#FFFFFF" },
    "Agua": { bg: "#2980EF", border: "#1552E2", text: "#FFFFFF" },
    "Planta": { bg: "#3FA129", border: "#147B3D", text: "#FFFFFF" },
    "Eléctrico": { bg: "#FAC000", border: "#DF7807", text: "#1A1A1A" },
    "Hielo": { bg: "#3DCEF3", border: "#1995A1", text: "#1A1A1A" },
    "Lucha": { bg: "#FF8000", border: "#994025", text: "#FFFFFF" },
    "Veneno": { bg: "#9141CB", border: "#682A68", text: "#FFFFFF" },
    "Tierra": { bg: "#915121", border: "#A38541", text: "#FFFFFF" },
    "Volador": { bg: "#81B9EF", border: "#4A677D", text: "#1A1A1A" },
    "Psíquico": { bg: "#EF4179", border: "#A13959", text: "#FFFFFF" },
    "Bicho": { bg: "#91A119", border: "#729F3F", text: "#FFFFFF" },
    "Roca": { bg: "#AFA981", border: "#786824", text: "#FFFFFF" },
    "Fantasma": { bg: "#704170", border: "#493963", text: "#FFFFFF" },
    "Dragón": { bg: "#5060E1", border: "#444E94", text: "#FFFFFF" },
    "Siniestro": { bg: "#50413F", border: "#3C2D23", text: "#FFFFFF" },
    "Acero": { bg: "#60A1B8", border: "#5A8FA3", text: "#FFFFFF" },
    "Hada": { bg: "#EF70EF", border: "#E03A83", text: "#1A1A1A" }
  };

  // Índices para búsqueda rápida
  const byId = new Map();
  const byNameLower = new Map();
  const byFamily = new Map();

  POKEMON_DATA.forEach(p => {
    if (!byId.has(p.id)) byId.set(p.id, p);
    byNameLower.set(p.name.toLowerCase(), p);
    if (!byFamily.has(p.familyId)) byFamily.set(p.familyId, []);
    byFamily.get(p.familyId).push(p);
  });

  window.PokedexDB = {
    all: POKEMON_DATA,
    natures: NATURES_DATA,
    typeColors: TYPE_COLORS,

    getById(id) {
      return byId.get(Number(id)) || null;
    },

    getByName(name) {
      if (!name) return null;
      return byNameLower.get(name.trim().toLowerCase()) || null;
    },

    search(query, limit = 8) {
      if (!query || query.trim().length === 0) return [];
      const q = query.trim().toLowerCase();
      const isNum = !isNaN(q);
      const results = [];

      for (const p of POKEMON_DATA) {
        if (isNum && p.id.toString() === q) {
          results.unshift(p);
        } else if (p.name.toLowerCase().startsWith(q)) {
          results.push(p);
        } else if (p.name.toLowerCase().includes(q)) {
          results.push(p);
        }
        if (results.length >= limit * 2) break;
      }
      return results.slice(0, limit);
    },

    getEvolutionFamily(pokemonIdOrName) {
      let p = typeof pokemonIdOrName === "number" ? this.getById(pokemonIdOrName) : this.getByName(pokemonIdOrName);
      if (!p) return [];
      return byFamily.get(p.familyId) || [p];
    },

    isSameFamily(nameA, nameB) {
      const a = this.getByName(nameA);
      const b = this.getByName(nameB);
      if (!a || !b) return false;
      return a.familyId === b.familyId;
    },

    getSpriteUrl(pokemon, isShiny = false, isAnimated = false) {
      if (!pokemon) return "";
      let id = typeof pokemon === "object" ? pokemon.id : (this.getByName(pokemon)?.id || pokemon);
      if (!id) return "";

      if (isAnimated) {
        return isShiny
          ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/" + id + ".gif"
          : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/" + id + ".gif";
      }

      return isShiny
        ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + id + ".png"
        : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
    },

    getTypeColor(type) {
      return TYPE_COLORS[type] || { bg: "#777777", border: "#555555", text: "#FFFFFF" };
    }
  };
})();
