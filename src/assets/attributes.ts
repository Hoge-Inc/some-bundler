
const options = {method: 'GET', headers: {accept: '*/*', 'x-api-key': 'demo-api-key'}}
/*
fetch('https://api.reservoir.tools/collections/0x63d85ec7B1561818Ec03E158ec125a4113038A00/attributes/all/v2', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


*/ 

export const citizen = {
    "attributes": [
      {
        "key": "FACE WEAR",
        "attributeCount": 17,
        "kind": "string",
        "values": [
          {
            "count": 85,
            "value": "Muerte Gold",
            "floorAskPrice": 0.169
          },
          {
            "count": 132,
            "value": "Muerte Black",
            "floorAskPrice": 0.069
          },
          {
            "count": 179,
            "value": "Mars",
            "floorAskPrice": 0.065
          },
          {
            "count": 54,
            "value": "Illuminati",
            "floorAskPrice": 0.07
          },
          {
            "count": 193,
            "value": "HUD",
            "floorAskPrice": 0.069
          },
          {
            "count": 177,
            "value": "Hermes",
            "floorAskPrice": 0.057
          },
          {
            "count": 77,
            "value": "Goliath",
            "floorAskPrice": 0.06
          },
          {
            "count": 335,
            "value": "Goblin",
            "floorAskPrice": 0.0383
          },
          {
            "count": 325,
            "value": "Glass",
            "floorAskPrice": 0.062
          },
          {
            "count": 157,
            "value": "Error",
            "floorAskPrice": 0.068
          },
          {
            "count": 76,
            "value": "Elven",
            "floorAskPrice": 0.15
          },
          {
            "count": 285,
            "value": "Aviators",
            "floorAskPrice": 0.059
          },
          {
            "count": 135,
            "value": "Zeus",
            "floorAskPrice": 0.085
          },
          {
            "count": 82,
            "value": "Visor",
            "floorAskPrice": 0.13
          },
          {
            "count": 34,
            "value": "Weed",
            "floorAskPrice": 0.15
          },
          {
            "count": 362,
            "value": "Potter",
            "floorAskPrice": 0.05
          },
          {
            "count": 7312,
            "value": "None",
            "floorAskPrice": 0.05555
          }
        ]
      },
      {
        "key": "CLOTHING",
        "attributeCount": 103,
        "kind": "string",
        "values": [
          {
            "count": 4958,
            "value": "None",
            "floorAskPrice": 0.059
          },
          {
            "count": 58,
            "value": "Andromeda Black",
            "floorAskPrice": 0.0999
          },
          {
            "count": 43,
            "value": "Andromeda Green",
            "floorAskPrice": 0.059
          },
          {
            "count": 46,
            "value": "Andromeda Navy",
            "floorAskPrice": 0.059
          },
          {
            "count": 21,
            "value": "Andromeda Pink"
          },
          {
            "count": 52,
            "value": "Andromeda Purple",
            "floorAskPrice": 0.05
          },
          {
            "count": 44,
            "value": "Andromeda White",
            "floorAskPrice": 0.0525
          },
          {
            "count": 61,
            "value": "Aquila Black"
          },
          {
            "count": 58,
            "value": "Aquila Brown",
            "floorAskPrice": 0.05555
          },
          {
            "count": 34,
            "value": "Aquila Grey",
            "floorAskPrice": 0.0895
          },
          {
            "count": 16,
            "value": "Aquila Pink"
          },
          {
            "count": 53,
            "value": "Aquila Tan"
          },
          {
            "count": 56,
            "value": "Aquila White",
            "floorAskPrice": 0.085
          },
          {
            "count": 79,
            "value": "Aries Black",
            "floorAskPrice": 0.059
          },
          {
            "count": 65,
            "value": "Aries Blue",
            "floorAskPrice": 0.0778
          },
          {
            "count": 72,
            "value": "Aries Brown",
            "floorAskPrice": 0.084
          },
          {
            "count": 70,
            "value": "Aries Green",
            "floorAskPrice": 0.069
          },
          {
            "count": 38,
            "value": "Aries Orange"
          },
          {
            "count": 44,
            "value": "Aries Pink",
            "floorAskPrice": 0.093
          },
          {
            "count": 88,
            "value": "Corvus Brown",
            "floorAskPrice": 0.066
          },
          {
            "count": 30,
            "value": "Corvus Joker",
            "floorAskPrice": 0.075
          },
          {
            "count": 64,
            "value": "Corvus Navy"
          },
          {
            "count": 41,
            "value": "Corvus Purple",
            "floorAskPrice": 0.0689
          },
          {
            "count": 21,
            "value": "Corvus Red",
            "floorAskPrice": 0.4624
          },
          {
            "count": 29,
            "value": "Corvus Wick",
            "floorAskPrice": 1
          },
          {
            "count": 91,
            "value": "Cygnus Green",
            "floorAskPrice": 0.3
          },
          {
            "count": 61,
            "value": "Cygnus Navy",
            "floorAskPrice": 0.095
          },
          {
            "count": 26,
            "value": "Cygnus Neon"
          },
          {
            "count": 39,
            "value": "Cygnus Olive",
            "floorAskPrice": 0.059
          },
          {
            "count": 38,
            "value": "Cygnus Pink",
            "floorAskPrice": 0.06
          },
          {
            "count": 38,
            "value": "Cygnus Teal",
            "floorAskPrice": 0.1498
          },
          {
            "count": 37,
            "value": "Cygnus White"
          },
          {
            "count": 17,
            "value": "Draco Bitcoin",
            "floorAskPrice": 0.188
          },
          {
            "count": 85,
            "value": "Draco Black",
            "floorAskPrice": 0.068
          },
          {
            "count": 70,
            "value": "Draco Green",
            "floorAskPrice": 0.065
          },
          {
            "count": 38,
            "value": "Draco Orange"
          },
          {
            "count": 34,
            "value": "Draco Purple"
          },
          {
            "count": 34,
            "value": "Draco Red",
            "floorAskPrice": 0.0578
          },
          {
            "count": 13,
            "value": "Draco Skull"
          },
          {
            "count": 39,
            "value": "Gemini Navy",
            "floorAskPrice": 0.079
          },
          {
            "count": 51,
            "value": "Gemini Orange",
            "floorAskPrice": 0.08
          },
          {
            "count": 21,
            "value": "Gemini Pink"
          },
          {
            "count": 52,
            "value": "Gemini Purple",
            "floorAskPrice": 0.065
          },
          {
            "count": 40,
            "value": "Gemini Red",
            "floorAskPrice": 0.069
          },
          {
            "count": 56,
            "value": "Gemini White",
            "floorAskPrice": 0.065
          },
          {
            "count": 67,
            "value": "Hydra Black",
            "floorAskPrice": 0.06
          },
          {
            "count": 61,
            "value": "Hydra Brown"
          },
          {
            "count": 47,
            "value": "Hydra Green",
            "floorAskPrice": 0.09
          },
          {
            "count": 44,
            "value": "Hydra Grey",
            "floorAskPrice": 0.07
          },
          {
            "count": 53,
            "value": "Hydra Red",
            "floorAskPrice": 0.069
          },
          {
            "count": 56,
            "value": "Hydra White",
            "floorAskPrice": 0.0524
          },
          {
            "count": 41,
            "value": "Lynx Grey",
            "floorAskPrice": 0.1169
          },
          {
            "count": 48,
            "value": "Lynx Navy",
            "floorAskPrice": 0.125
          },
          {
            "count": 57,
            "value": "Lynx Olive"
          },
          {
            "count": 31,
            "value": "Lynx Purple"
          },
          {
            "count": 55,
            "value": "Lynx Red",
            "floorAskPrice": 0.06
          },
          {
            "count": 42,
            "value": "Lynx White",
            "floorAskPrice": 0.1169
          },
          {
            "count": 42,
            "value": "Lyra Black",
            "floorAskPrice": 0.12
          },
          {
            "count": 52,
            "value": "Lyra Brown",
            "floorAskPrice": 0.0775
          },
          {
            "count": 40,
            "value": "Lyra Green"
          },
          {
            "count": 41,
            "value": "Lyra Navy",
            "floorAskPrice": 0.07
          },
          {
            "count": 14,
            "value": "Lyra Pink",
            "floorAskPrice": 0.055
          },
          {
            "count": 48,
            "value": "Lyra Purple",
            "floorAskPrice": 0.057
          },
          {
            "count": 50,
            "value": "Medusa Black",
            "floorAskPrice": 0.2
          },
          {
            "count": 68,
            "value": "Medusa Blue",
            "floorAskPrice": 0.065
          },
          {
            "count": 55,
            "value": "Medusa Green",
            "floorAskPrice": 0.06
          },
          {
            "count": 54,
            "value": "Medusa Purple",
            "floorAskPrice": 0.05
          },
          {
            "count": 39,
            "value": "Medusa Red",
            "floorAskPrice": 0.188
          },
          {
            "count": 58,
            "value": "Medusa White",
            "floorAskPrice": 0.125
          },
          {
            "count": 99,
            "value": "Orion Black",
            "floorAskPrice": 0.04
          },
          {
            "count": 91,
            "value": "Orion Brown",
            "floorAskPrice": 0.069
          },
          {
            "count": 85,
            "value": "Orion Green",
            "floorAskPrice": 0.0482
          },
          {
            "count": 31,
            "value": "Orion Red"
          },
          {
            "count": 27,
            "value": "Orion Teal",
            "floorAskPrice": 0.065
          },
          {
            "count": 73,
            "value": "Pegasus Black",
            "floorAskPrice": 0.111
          },
          {
            "count": 85,
            "value": "Pegasus Blue",
            "floorAskPrice": 0.0524
          },
          {
            "count": 73,
            "value": "Pegasus Brown",
            "floorAskPrice": 0.09
          },
          {
            "count": 62,
            "value": "Pegasus Green",
            "floorAskPrice": 0.111
          },
          {
            "count": 26,
            "value": "Pegasus Orange"
          },
          {
            "count": 39,
            "value": "Pegasus Red",
            "floorAskPrice": 0.059
          },
          {
            "count": 82,
            "value": "Perseus Black",
            "floorAskPrice": 0.05
          },
          {
            "count": 24,
            "value": "Perseus Camo",
            "floorAskPrice": 0.0495
          },
          {
            "count": 73,
            "value": "Perseus Green",
            "floorAskPrice": 0.067
          },
          {
            "count": 52,
            "value": "Perseus Navy",
            "floorAskPrice": 0.117
          },
          {
            "count": 45,
            "value": "Perseus Olive"
          },
          {
            "count": 31,
            "value": "Perseus Purple"
          },
          {
            "count": 64,
            "value": "Taurus Black",
            "floorAskPrice": 0.0383
          },
          {
            "count": 58,
            "value": "Taurus Blue",
            "floorAskPrice": 0.0445
          },
          {
            "count": 59,
            "value": "Taurus Green"
          },
          {
            "count": 46,
            "value": "Taurus Grey",
            "floorAskPrice": 0.369
          },
          {
            "count": 23,
            "value": "Taurus Pink"
          },
          {
            "count": 42,
            "value": "Taurus Teal",
            "floorAskPrice": 0.059
          },
          {
            "count": 87,
            "value": "Ursa Black",
            "floorAskPrice": 0.045
          },
          {
            "count": 70,
            "value": "Ursa Blue",
            "floorAskPrice": 0.098
          },
          {
            "count": 31,
            "value": "Ursa Orange",
            "floorAskPrice": 0.15
          },
          {
            "count": 32,
            "value": "Ursa Red",
            "floorAskPrice": 0.062
          },
          {
            "count": 30,
            "value": "Ursa Teal",
            "floorAskPrice": 0.05
          },
          {
            "count": 38,
            "value": "Ursa Yellow",
            "floorAskPrice": 0.15
          },
          {
            "count": 67,
            "value": "Vela Blue",
            "floorAskPrice": 0.08
          },
          {
            "count": 47,
            "value": "Vela Green",
            "floorAskPrice": 0.055
          },
          {
            "count": 53,
            "value": "Vela Grey",
            "floorAskPrice": 0.099
          },
          {
            "count": 48,
            "value": "Vela Orange"
          },
          {
            "count": 23,
            "value": "Vela Pink"
          }
        ]
      },
      {
        "key": "BASE",
        "attributeCount": 3,
        "kind": "string",
        "values": [
          {
            "count": 9018,
            "value": "Human",
            "floorAskPrice": 0.05555
          },
          {
            "count": 486,
            "value": "Human Meta Spice",
            "floorAskPrice": 0.1
          },
          {
            "count": 496,
            "value": "Human BioSynth",
            "floorAskPrice": 0.15
          }
        ]
      },
      {
        "key": "Defence - Base",
        "kind": "number",
        "minRange": 25,
        "maxRange": 25
      },
      {
        "key": "BACKGROUND",
        "attributeCount": 8,
        "kind": "string",
        "values": [
          {
            "count": 1451,
            "value": "Grey",
            "floorAskPrice": 0.056
          },
          {
            "count": 1524,
            "value": "Pink",
            "floorAskPrice": 0.05555
          },
          {
            "count": 1559,
            "value": "White",
            "floorAskPrice": 0.057
          },
          {
            "count": 1518,
            "value": "Yellow",
            "floorAskPrice": 0.0383
          },
          {
            "count": 510,
            "value": "BioSynth",
            "floorAskPrice": 0.0589
          },
          {
            "count": 1462,
            "value": "Blue",
            "floorAskPrice": 0.059
          },
          {
            "count": 1465,
            "value": "Green",
            "floorAskPrice": 0.0578
          },
          {
            "count": 511,
            "value": "MetaSpice",
            "floorAskPrice": 0.065
          }
        ]
      },
      {
        "key": "HAIR",
        "attributeCount": 236,
        "kind": "string",
        "values": [
          {
            "count": 37,
            "value": "Windy White",
            "floorAskPrice": 0.099
          },
          {
            "count": 12,
            "value": "Locs Orange"
          },
          {
            "count": 9,
            "value": "Locs Pink"
          },
          {
            "count": 8,
            "value": "Locs Purple"
          },
          {
            "count": 15,
            "value": "Locs Red"
          },
          {
            "count": 28,
            "value": "Locs Silver"
          },
          {
            "count": 36,
            "value": "Locs White"
          },
          {
            "count": 29,
            "value": "Mohawk Black",
            "floorAskPrice": 0.135
          },
          {
            "count": 34,
            "value": "Mohawk Blonde",
            "floorAskPrice": 0.079
          },
          {
            "count": 14,
            "value": "Mohawk Blue"
          },
          {
            "count": 28,
            "value": "Mohawk Brown"
          },
          {
            "count": 8,
            "value": "Mohawk Green"
          },
          {
            "count": 9,
            "value": "Mohawk Orange"
          },
          {
            "count": 9,
            "value": "Mohawk Pink"
          },
          {
            "count": 7,
            "value": "Mohawk Purple",
            "floorAskPrice": 0.25
          },
          {
            "count": 7,
            "value": "Mohawk Red"
          },
          {
            "count": 39,
            "value": "Mohawk Silver",
            "floorAskPrice": 0.05
          },
          {
            "count": 34,
            "value": "Mohawk White",
            "floorAskPrice": 0.12
          },
          {
            "count": 27,
            "value": "Mommy Black",
            "floorAskPrice": 0.08
          },
          {
            "count": 20,
            "value": "Mommy Blonde"
          },
          {
            "count": 20,
            "value": "Mommy Blue"
          },
          {
            "count": 23,
            "value": "Mommy Brown",
            "floorAskPrice": 0.055
          },
          {
            "count": 15,
            "value": "Mommy Green"
          },
          {
            "count": 12,
            "value": "Mommy Orange"
          },
          {
            "count": 7,
            "value": "Mommy Pink"
          },
          {
            "count": 12,
            "value": "Mommy Purple"
          },
          {
            "count": 4,
            "value": "Mommy Red"
          },
          {
            "count": 29,
            "value": "Mommy Silver",
            "floorAskPrice": 0.06
          },
          {
            "count": 31,
            "value": "Mommy White"
          },
          {
            "count": 2015,
            "value": "None",
            "floorAskPrice": 0.07777
          },
          {
            "count": 47,
            "value": "Over Black",
            "floorAskPrice": 0.069
          },
          {
            "count": 75,
            "value": "Over Blonde",
            "floorAskPrice": 0.14
          },
          {
            "count": 50,
            "value": "Over Blue",
            "floorAskPrice": 0.04
          },
          {
            "count": 62,
            "value": "Over Brown",
            "floorAskPrice": 0.11
          },
          {
            "count": 32,
            "value": "Over Green",
            "floorAskPrice": 0.068
          },
          {
            "count": 29,
            "value": "Over Orange",
            "floorAskPrice": 0.062
          },
          {
            "count": 21,
            "value": "Over Red",
            "floorAskPrice": 0.059
          },
          {
            "count": 79,
            "value": "Over Silver",
            "floorAskPrice": 0.079
          },
          {
            "count": 70,
            "value": "Over White",
            "floorAskPrice": 0.0689
          },
          {
            "count": 48,
            "value": "Ponytail Black",
            "floorAskPrice": 0.065
          },
          {
            "count": 36,
            "value": "Ponytail Blonde"
          },
          {
            "count": 43,
            "value": "Ponytail Blue"
          },
          {
            "count": 47,
            "value": "Ponytail Brown",
            "floorAskPrice": 0.03996
          },
          {
            "count": 9,
            "value": "Ponytail Green"
          },
          {
            "count": 12,
            "value": "Ponytail Orange",
            "floorAskPrice": 0.075
          },
          {
            "count": 20,
            "value": "Ponytail Pink",
            "floorAskPrice": 0.09
          },
          {
            "count": 12,
            "value": "Ponytail Purple"
          },
          {
            "count": 18,
            "value": "Ponytail Red"
          },
          {
            "count": 56,
            "value": "Ponytail Silver",
            "floorAskPrice": 0.055
          },
          {
            "count": 44,
            "value": "Ponytail White",
            "floorAskPrice": 0.95
          },
          {
            "count": 47,
            "value": "Quiff Black",
            "floorAskPrice": 0.0495
          },
          {
            "count": 54,
            "value": "Quiff Blonde"
          },
          {
            "count": 37,
            "value": "Quiff Blue",
            "floorAskPrice": 0.069
          },
          {
            "count": 56,
            "value": "Quiff Brown"
          },
          {
            "count": 27,
            "value": "Quiff Green",
            "floorAskPrice": 0.0482
          },
          {
            "count": 30,
            "value": "Quiff Orange",
            "floorAskPrice": 0.15
          },
          {
            "count": 16,
            "value": "Quiff Red"
          },
          {
            "count": 62,
            "value": "Quiff Silver"
          },
          {
            "count": 55,
            "value": "Quiff White",
            "floorAskPrice": 0.115
          },
          {
            "count": 57,
            "value": "Rows Black",
            "floorAskPrice": 0.18
          },
          {
            "count": 56,
            "value": "Rows Blonde"
          },
          {
            "count": 37,
            "value": "Rows Blue",
            "floorAskPrice": 0.059
          },
          {
            "count": 46,
            "value": "Rows Brown"
          },
          {
            "count": 28,
            "value": "Rows Green",
            "floorAskPrice": 0.07
          },
          {
            "count": 32,
            "value": "Rows Orange",
            "floorAskPrice": 0.1
          },
          {
            "count": 26,
            "value": "Rows Red",
            "floorAskPrice": 0.065
          },
          {
            "count": 71,
            "value": "Rows Silver"
          },
          {
            "count": 58,
            "value": "Rows White",
            "floorAskPrice": 0.068
          },
          {
            "count": 24,
            "value": "Shaved Black",
            "floorAskPrice": 0.05555
          },
          {
            "count": 26,
            "value": "Shaved Blonde"
          },
          {
            "count": 20,
            "value": "Shaved Blue"
          },
          {
            "count": 19,
            "value": "Shaved Brown"
          },
          {
            "count": 10,
            "value": "Shaved Green"
          },
          {
            "count": 9,
            "value": "Shaved Orange"
          },
          {
            "count": 9,
            "value": "Shaved Pink",
            "floorAskPrice": 1
          },
          {
            "count": 5,
            "value": "Shaved Purple"
          },
          {
            "count": 14,
            "value": "Shaved Red"
          },
          {
            "count": 34,
            "value": "Shaved Silver",
            "floorAskPrice": 0.3
          },
          {
            "count": 37,
            "value": "Shaved White",
            "floorAskPrice": 0.065
          },
          {
            "count": 46,
            "value": "Short Black",
            "floorAskPrice": 0.53
          },
          {
            "count": 34,
            "value": "Short Blonde"
          },
          {
            "count": 41,
            "value": "Short Blue"
          },
          {
            "count": 52,
            "value": "Short Brown"
          },
          {
            "count": 52,
            "value": "Shorter Black",
            "floorAskPrice": 1
          },
          {
            "count": 41,
            "value": "Shorter Blonde",
            "floorAskPrice": 0.085
          },
          {
            "count": 39,
            "value": "Shorter Blue",
            "floorAskPrice": 0.25
          },
          {
            "count": 52,
            "value": "Shorter Brown",
            "floorAskPrice": 0.05
          },
          {
            "count": 20,
            "value": "Shorter Green"
          },
          {
            "count": 28,
            "value": "Shorter Orange",
            "floorAskPrice": 0.199
          },
          {
            "count": 21,
            "value": "Shorter Red"
          },
          {
            "count": 63,
            "value": "Shorter Silver"
          },
          {
            "count": 49,
            "value": "Shorter White",
            "floorAskPrice": 0.057
          },
          {
            "count": 33,
            "value": "Short Green",
            "floorAskPrice": 0.07
          },
          {
            "count": 25,
            "value": "Short Orange"
          },
          {
            "count": 24,
            "value": "Short Red",
            "floorAskPrice": 0.06
          },
          {
            "count": 46,
            "value": "Short Silver",
            "floorAskPrice": 0.093
          },
          {
            "count": 51,
            "value": "Short White",
            "floorAskPrice": 0.0589
          },
          {
            "count": 39,
            "value": "Side Black"
          },
          {
            "count": 28,
            "value": "Side Blonde",
            "floorAskPrice": 0.07
          },
          {
            "count": 32,
            "value": "Side Blue",
            "floorAskPrice": 0.188
          },
          {
            "count": 28,
            "value": "Side Brown"
          },
          {
            "count": 12,
            "value": "Side Green"
          },
          {
            "count": 15,
            "value": "Side Orange",
            "floorAskPrice": 0.0895
          },
          {
            "count": 13,
            "value": "Side Pink"
          },
          {
            "count": 8,
            "value": "Side Purple"
          },
          {
            "count": 10,
            "value": "Side Red"
          },
          {
            "count": 30,
            "value": "Side Silver",
            "floorAskPrice": 0.069
          },
          {
            "count": 35,
            "value": "Side White",
            "floorAskPrice": 0.05
          },
          {
            "count": 38,
            "value": "Straight Black",
            "floorAskPrice": 0.195
          },
          {
            "count": 39,
            "value": "Straight Blonde",
            "floorAskPrice": 0.0524
          },
          {
            "count": 23,
            "value": "Straight Blue"
          },
          {
            "count": 33,
            "value": "Straight Brown"
          },
          {
            "count": 10,
            "value": "Straight Green"
          },
          {
            "count": 12,
            "value": "Straight Orange",
            "floorAskPrice": 0.25
          },
          {
            "count": 6,
            "value": "Straight Pink"
          },
          {
            "count": 14,
            "value": "Straight Purple"
          },
          {
            "count": 12,
            "value": "Straight Red",
            "floorAskPrice": 0.129
          },
          {
            "count": 45,
            "value": "Straight Silver",
            "floorAskPrice": 0.098
          },
          {
            "count": 51,
            "value": "Straight White"
          },
          {
            "count": 41,
            "value": "Swept Black",
            "floorAskPrice": 0.117
          },
          {
            "count": 69,
            "value": "Swept Blonde",
            "floorAskPrice": 0.0495
          },
          {
            "count": 36,
            "value": "Swept Blue",
            "floorAskPrice": 0.1
          },
          {
            "count": 62,
            "value": "Swept Brown"
          },
          {
            "count": 35,
            "value": "Swept Green",
            "floorAskPrice": 0.17
          },
          {
            "count": 21,
            "value": "Swept Orange"
          },
          {
            "count": 17,
            "value": "Swept Red",
            "floorAskPrice": 0.079
          },
          {
            "count": 77,
            "value": "Swept Silver",
            "floorAskPrice": 0.065
          },
          {
            "count": 61,
            "value": "Swept White",
            "floorAskPrice": 0.1498
          },
          {
            "count": 54,
            "value": "Up Black",
            "floorAskPrice": 0.089
          },
          {
            "count": 75,
            "value": "Up Blonde"
          },
          {
            "count": 47,
            "value": "Up Blue",
            "floorAskPrice": 0.05
          },
          {
            "count": 56,
            "value": "Up Brown",
            "floorAskPrice": 0.06
          },
          {
            "count": 13,
            "value": "Up Green"
          },
          {
            "count": 18,
            "value": "Up Orange",
            "floorAskPrice": 0.1169
          },
          {
            "count": 20,
            "value": "Up Pink",
            "floorAskPrice": 0.0775
          },
          {
            "count": 15,
            "value": "Up Purple",
            "floorAskPrice": 0.0383
          },
          {
            "count": 23,
            "value": "Up Red",
            "floorAskPrice": 0.065
          },
          {
            "count": 67,
            "value": "Up Silver",
            "floorAskPrice": 0.059
          },
          {
            "count": 75,
            "value": "Up White",
            "floorAskPrice": 0.17
          },
          {
            "count": 31,
            "value": "Windy Black"
          },
          {
            "count": 34,
            "value": "Windy Blonde"
          },
          {
            "count": 21,
            "value": "Windy Blue"
          },
          {
            "count": 26,
            "value": "Windy Brown",
            "floorAskPrice": 0.158
          },
          {
            "count": 6,
            "value": "Windy Green"
          },
          {
            "count": 12,
            "value": "Windy Orange"
          },
          {
            "count": 8,
            "value": "Windy Pink"
          },
          {
            "count": 11,
            "value": "Windy Purple"
          },
          {
            "count": 10,
            "value": "Windy Red"
          },
          {
            "count": 42,
            "value": "Windy Silver",
            "floorAskPrice": 0.095
          },
          {
            "count": 28,
            "value": "Back Black",
            "floorAskPrice": 0.129
          },
          {
            "count": 36,
            "value": "Back Blonde",
            "floorAskPrice": 0.118
          },
          {
            "count": 26,
            "value": "Back Blue"
          },
          {
            "count": 38,
            "value": "Back Brown",
            "floorAskPrice": 0.72
          },
          {
            "count": 14,
            "value": "Back Green"
          },
          {
            "count": 10,
            "value": "Back Orange"
          },
          {
            "count": 15,
            "value": "Back Pink",
            "floorAskPrice": 0.09
          },
          {
            "count": 8,
            "value": "Back Purple",
            "floorAskPrice": 0.0525
          },
          {
            "count": 13,
            "value": "Back Red"
          },
          {
            "count": 30,
            "value": "Back Silver",
            "floorAskPrice": 0.06
          },
          {
            "count": 36,
            "value": "Back White"
          },
          {
            "count": 48,
            "value": "Badger Black",
            "floorAskPrice": 0.1
          },
          {
            "count": 50,
            "value": "Badger Blonde"
          },
          {
            "count": 34,
            "value": "Badger Blue",
            "floorAskPrice": 0.059
          },
          {
            "count": 50,
            "value": "Badger Brown",
            "floorAskPrice": 0.058
          },
          {
            "count": 20,
            "value": "Badger Green"
          },
          {
            "count": 31,
            "value": "Badger Orange",
            "floorAskPrice": 0.069
          },
          {
            "count": 24,
            "value": "Badger Red",
            "floorAskPrice": 0.13
          },
          {
            "count": 52,
            "value": "Badger Silver",
            "floorAskPrice": 0.061
          },
          {
            "count": 59,
            "value": "Badger White"
          },
          {
            "count": 43,
            "value": "Barbie Black",
            "floorAskPrice": 0.08
          },
          {
            "count": 45,
            "value": "Barbie Blonde",
            "floorAskPrice": 0.079
          },
          {
            "count": 37,
            "value": "Barbie Blue",
            "floorAskPrice": 0.06
          },
          {
            "count": 48,
            "value": "Barbie Brown",
            "floorAskPrice": 0.12
          },
          {
            "count": 11,
            "value": "Barbie Green",
            "floorAskPrice": 0.085
          },
          {
            "count": 16,
            "value": "Barbie Orange"
          },
          {
            "count": 9,
            "value": "Barbie Pink",
            "floorAskPrice": 0.11
          },
          {
            "count": 15,
            "value": "Barbie Purple"
          },
          {
            "count": 14,
            "value": "Barbie Red",
            "floorAskPrice": 0.07
          },
          {
            "count": 44,
            "value": "Barbie Silver",
            "floorAskPrice": 0.18
          },
          {
            "count": 55,
            "value": "Barbie White",
            "floorAskPrice": 0.056
          },
          {
            "count": 47,
            "value": "Bob Black",
            "floorAskPrice": 0.15
          },
          {
            "count": 42,
            "value": "Bob Blonde",
            "floorAskPrice": 0.057
          },
          {
            "count": 34,
            "value": "Bob Blue"
          },
          {
            "count": 46,
            "value": "Bob Brown"
          },
          {
            "count": 14,
            "value": "Bob Green"
          },
          {
            "count": 12,
            "value": "Bob Orange"
          },
          {
            "count": 14,
            "value": "Bob Pink"
          },
          {
            "count": 12,
            "value": "Bob Purple",
            "floorAskPrice": 0.096
          },
          {
            "count": 19,
            "value": "Bob Red",
            "floorAskPrice": 0.06
          },
          {
            "count": 45,
            "value": "Bob Silver"
          },
          {
            "count": 49,
            "value": "Bob White",
            "floorAskPrice": 0.0445
          },
          {
            "count": 47,
            "value": "Bone Black",
            "floorAskPrice": 0.129
          },
          {
            "count": 58,
            "value": "Bone Blonde",
            "floorAskPrice": 0.099
          },
          {
            "count": 31,
            "value": "Bone Blue"
          },
          {
            "count": 47,
            "value": "Bone Brown",
            "floorAskPrice": 0.059
          },
          {
            "count": 22,
            "value": "Bone Green"
          },
          {
            "count": 14,
            "value": "Bone Orange",
            "floorAskPrice": 0.2
          },
          {
            "count": 9,
            "value": "Bone Pink"
          },
          {
            "count": 12,
            "value": "Bone Purple"
          },
          {
            "count": 18,
            "value": "Bone Red"
          },
          {
            "count": 61,
            "value": "Bone Silver",
            "floorAskPrice": 0.1499
          },
          {
            "count": 68,
            "value": "Bone White",
            "floorAskPrice": 0.13
          },
          {
            "count": 81,
            "value": "Bun Black",
            "floorAskPrice": 0.084
          },
          {
            "count": 64,
            "value": "Bun Blonde"
          },
          {
            "count": 46,
            "value": "Bun Blue",
            "floorAskPrice": 0.11
          },
          {
            "count": 57,
            "value": "Bun Brown",
            "floorAskPrice": 0.23
          },
          {
            "count": 45,
            "value": "Bun Green",
            "floorAskPrice": 0.11
          },
          {
            "count": 25,
            "value": "Bun Orange",
            "floorAskPrice": 0.079
          },
          {
            "count": 26,
            "value": "Bun Red"
          },
          {
            "count": 73,
            "value": "Bun Silver",
            "floorAskPrice": 0.069
          },
          {
            "count": 65,
            "value": "Bun White",
            "floorAskPrice": 0.0524
          },
          {
            "count": 44,
            "value": "Down Black"
          },
          {
            "count": 34,
            "value": "Down Blonde",
            "floorAskPrice": 0.065
          },
          {
            "count": 22,
            "value": "Down Blue",
            "floorAskPrice": 0.074
          },
          {
            "count": 40,
            "value": "Down Brown"
          },
          {
            "count": 13,
            "value": "Down Green",
            "floorAskPrice": 0.0999
          },
          {
            "count": 10,
            "value": "Down Orange",
            "floorAskPrice": 0.12
          },
          {
            "count": 14,
            "value": "Down Pink"
          },
          {
            "count": 7,
            "value": "Down Purple"
          },
          {
            "count": 17,
            "value": "Down Red"
          },
          {
            "count": 35,
            "value": "Down Silver",
            "floorAskPrice": 0.0799
          },
          {
            "count": 41,
            "value": "Down White",
            "floorAskPrice": 0.1
          },
          {
            "count": 83,
            "value": "Dreads Black",
            "floorAskPrice": 0.115
          },
          {
            "count": 99,
            "value": "Dreads Blonde",
            "floorAskPrice": 0.045
          },
          {
            "count": 91,
            "value": "Dreads Blue",
            "floorAskPrice": 0.0578
          },
          {
            "count": 88,
            "value": "Dreads Brown",
            "floorAskPrice": 0.079
          },
          {
            "count": 55,
            "value": "Dreads Green",
            "floorAskPrice": 0.07
          },
          {
            "count": 49,
            "value": "Dreads Orange"
          },
          {
            "count": 52,
            "value": "Dreads Red",
            "floorAskPrice": 0.07
          },
          {
            "count": 107,
            "value": "Dreads Silver",
            "floorAskPrice": 0.066
          },
          {
            "count": 106,
            "value": "Dreads White",
            "floorAskPrice": 0.067
          },
          {
            "count": 23,
            "value": "Locs Black",
            "floorAskPrice": 0.08
          },
          {
            "count": 28,
            "value": "Locs Blonde"
          },
          {
            "count": 15,
            "value": "Locs Blue",
            "floorAskPrice": 0.369
          },
          {
            "count": 29,
            "value": "Locs Brown",
            "floorAskPrice": 0.169
          },
          {
            "count": 13,
            "value": "Locs Green",
            "floorAskPrice": 0.055
          }
        ]
      },
      {
        "key": "Defence - Helmet",
        "kind": "number",
        "minRange": 0,
        "maxRange": 22
      },
      {
        "key": "TATTOO",
        "attributeCount": 7,
        "kind": "string",
        "values": [
          {
            "count": 744,
            "value": "Trident",
            "floorAskPrice": 0.0383
          },
          {
            "count": 7500,
            "value": "None",
            "floorAskPrice": 0.05555
          },
          {
            "count": 989,
            "value": "Mechanical",
            "floorAskPrice": 0.0578
          },
          {
            "count": 352,
            "value": "Barcode",
            "floorAskPrice": 0.058
          },
          {
            "count": 204,
            "value": "Blocks",
            "floorAskPrice": 0.055
          },
          {
            "count": 137,
            "value": "Glow",
            "floorAskPrice": 0.079
          },
          {
            "count": 74,
            "value": "Hexagon",
            "floorAskPrice": 0.09
          }
        ]
      },
      {
        "key": "Defence - Armour",
        "kind": "number",
        "minRange": 0,
        "maxRange": 70
      },
      {
        "key": "Attack - Base",
        "kind": "number",
        "minRange": 25,
        "maxRange": 25
      },
      {
        "key": "FACIAL HAIR",
        "attributeCount": 29,
        "kind": "string",
        "values": [
          {
            "count": 44,
            "value": "Moustache Black",
            "floorAskPrice": 0.13
          },
          {
            "count": 38,
            "value": "Scraggly Black",
            "floorAskPrice": 0.1
          },
          {
            "count": 47,
            "value": "Scraggly Blonde"
          },
          {
            "count": 46,
            "value": "Scraggly Brown",
            "floorAskPrice": 0.129
          },
          {
            "count": 39,
            "value": "Scraggly White"
          },
          {
            "count": 39,
            "value": "Stark Black",
            "floorAskPrice": 0.065
          },
          {
            "count": 30,
            "value": "Stark Blonde",
            "floorAskPrice": 0.13
          },
          {
            "count": 32,
            "value": "Stark Brown"
          },
          {
            "count": 30,
            "value": "Stark White",
            "floorAskPrice": 0.0589
          },
          {
            "count": 72,
            "value": "Stubble Black",
            "floorAskPrice": 0.3
          },
          {
            "count": 82,
            "value": "Stubble Blonde",
            "floorAskPrice": 0.075
          },
          {
            "count": 85,
            "value": "Stubble Brown",
            "floorAskPrice": 0.0689
          },
          {
            "count": 88,
            "value": "Stubble White",
            "floorAskPrice": 0.12
          },
          {
            "count": 78,
            "value": "Beard Black"
          },
          {
            "count": 65,
            "value": "Beard Blonde",
            "floorAskPrice": 0.37
          },
          {
            "count": 86,
            "value": "Beard Brown",
            "floorAskPrice": 0.13
          },
          {
            "count": 69,
            "value": "Beard White",
            "floorAskPrice": 0.1
          },
          {
            "count": 32,
            "value": "Goatee Black",
            "floorAskPrice": 0.0778
          },
          {
            "count": 25,
            "value": "Goatee Blonde",
            "floorAskPrice": 0.4624
          },
          {
            "count": 27,
            "value": "Goatee Brown",
            "floorAskPrice": 0.158
          },
          {
            "count": 35,
            "value": "Goatee White",
            "floorAskPrice": 0.11
          },
          {
            "count": 33,
            "value": "Moustache Blonde",
            "floorAskPrice": 0.1
          },
          {
            "count": 33,
            "value": "Moustache Brown",
            "floorAskPrice": 0.061
          },
          {
            "count": 34,
            "value": "Moustache White",
            "floorAskPrice": 0.098
          },
          {
            "count": 8511,
            "value": "None",
            "floorAskPrice": 0.05555
          },
          {
            "count": 69,
            "value": "Rugged Black",
            "floorAskPrice": 10
          },
          {
            "count": 73,
            "value": "Rugged Blonde",
            "floorAskPrice": 0.17
          },
          {
            "count": 82,
            "value": "Rugged Brown",
            "floorAskPrice": 0.0399
          },
          {
            "count": 76,
            "value": "Rugged White",
            "floorAskPrice": 0.085
          }
        ]
      },
      {
        "key": "ARMOUR",
        "attributeCount": 99,
        "kind": "string",
        "values": [
          {
            "count": 28,
            "value": "Assassin MK3"
          },
          {
            "count": 46,
            "value": "Mass MK3",
            "floorAskPrice": 0.25
          },
          {
            "count": 76,
            "value": "Mass MK2",
            "floorAskPrice": 0.3
          },
          {
            "count": 134,
            "value": "Mass MK1",
            "floorAskPrice": 0.08
          },
          {
            "count": 17,
            "value": "Marine SpecOps",
            "floorAskPrice": 1.11
          },
          {
            "count": 7,
            "value": "Marine Officer"
          },
          {
            "count": 5,
            "value": "Marine MK5",
            "floorAskPrice": 1.25
          },
          {
            "count": 20,
            "value": "Marine MK4"
          },
          {
            "count": 53,
            "value": "Marine MK3",
            "floorAskPrice": 0.13
          },
          {
            "count": 79,
            "value": "Marine MK2",
            "floorAskPrice": 0.079
          },
          {
            "count": 105,
            "value": "Marine MK1",
            "floorAskPrice": 0.0589
          },
          {
            "count": 16,
            "value": "Frontier SpecOps",
            "floorAskPrice": 0.21
          },
          {
            "count": 5,
            "value": "Frontier Officer"
          },
          {
            "count": 13,
            "value": "Frontier MK5"
          },
          {
            "count": 54,
            "value": "Frontier MK4",
            "floorAskPrice": 0.15
          },
          {
            "count": 70,
            "value": "Frontier MK3"
          },
          {
            "count": 139,
            "value": "Frontier MK2",
            "floorAskPrice": 0.1
          },
          {
            "count": 163,
            "value": "Frontier MK1"
          },
          {
            "count": 16,
            "value": "Effect SpecOps"
          },
          {
            "count": 5,
            "value": "Effect Officer",
            "floorAskPrice": 3
          },
          {
            "count": 15,
            "value": "Effect MK5",
            "floorAskPrice": 0.9
          },
          {
            "count": 51,
            "value": "Effect MK4"
          },
          {
            "count": 100,
            "value": "Effect MK3",
            "floorAskPrice": 0.0899
          },
          {
            "count": 167,
            "value": "Effect MK2",
            "floorAskPrice": 0.065
          },
          {
            "count": 188,
            "value": "Effect MK1",
            "floorAskPrice": 0.03996
          },
          {
            "count": 16,
            "value": "Colony SpecOps"
          },
          {
            "count": 3,
            "value": "Colony Officer"
          },
          {
            "count": 26,
            "value": "Colony MK5",
            "floorAskPrice": 0.399
          },
          {
            "count": 39,
            "value": "Colony MK4",
            "floorAskPrice": 0.2444
          },
          {
            "count": 99,
            "value": "Colony MK3",
            "floorAskPrice": 0.09
          },
          {
            "count": 116,
            "value": "Colony MK2",
            "floorAskPrice": 0.096
          },
          {
            "count": 184,
            "value": "Colony MK1",
            "floorAskPrice": 0.169
          },
          {
            "count": 19,
            "value": "Bionic SpecOps",
            "floorAskPrice": 0.95
          },
          {
            "count": 9,
            "value": "Bionic Officer"
          },
          {
            "count": 22,
            "value": "Bionic MK5"
          },
          {
            "count": 40,
            "value": "Bionic MK4"
          },
          {
            "count": 96,
            "value": "Bionic MK3",
            "floorAskPrice": 0.078
          },
          {
            "count": 147,
            "value": "Bionic MK2",
            "floorAskPrice": 0.0799
          },
          {
            "count": 197,
            "value": "Bionic MK1",
            "floorAskPrice": 0.055
          },
          {
            "count": 11,
            "value": "Bianca SpecOps"
          },
          {
            "count": 2,
            "value": "Bianca Officer",
            "floorAskPrice": 3.33
          },
          {
            "count": 21,
            "value": "Bianca MK5",
            "floorAskPrice": 0.3
          },
          {
            "count": 41,
            "value": "Bianca MK4",
            "floorAskPrice": 0.135
          },
          {
            "count": 84,
            "value": "Bianca MK3",
            "floorAskPrice": 0.18
          },
          {
            "count": 146,
            "value": "Bianca MK2",
            "floorAskPrice": 0.1
          },
          {
            "count": 186,
            "value": "Bianca MK1",
            "floorAskPrice": 0.06
          },
          {
            "count": 5,
            "value": "Assassin SpecOps"
          },
          {
            "count": 4,
            "value": "Assassin Officer"
          },
          {
            "count": 6,
            "value": "Assassin MK5"
          },
          {
            "count": 17,
            "value": "Assassin MK4"
          },
          {
            "count": 8,
            "value": "Vanguard SpecOps"
          },
          {
            "count": 3,
            "value": "Vanguard Officer"
          },
          {
            "count": 15,
            "value": "Vanguard MK5"
          },
          {
            "count": 16,
            "value": "Vanguard MK4"
          },
          {
            "count": 40,
            "value": "Vanguard MK3",
            "floorAskPrice": 0.2222
          },
          {
            "count": 77,
            "value": "Vanguard MK2",
            "floorAskPrice": 0.07
          },
          {
            "count": 98,
            "value": "Vanguard MK1",
            "floorAskPrice": 0.1
          },
          {
            "count": 9,
            "value": "Templar SpecOps"
          },
          {
            "count": 6,
            "value": "Templar Officer",
            "floorAskPrice": 1.2
          },
          {
            "count": 8,
            "value": "Templar MK5"
          },
          {
            "count": 20,
            "value": "Templar MK4"
          },
          {
            "count": 56,
            "value": "Templar MK3"
          },
          {
            "count": 78,
            "value": "Templar MK2",
            "floorAskPrice": 0.1
          },
          {
            "count": 120,
            "value": "Templar MK1",
            "floorAskPrice": 0.072
          },
          {
            "count": 12,
            "value": "Samurai SpecOps",
            "floorAskPrice": 0.295
          },
          {
            "count": 7,
            "value": "Samurai Officer"
          },
          {
            "count": 10,
            "value": "Samurai MK5"
          },
          {
            "count": 18,
            "value": "Samurai MK4",
            "floorAskPrice": 1.69
          },
          {
            "count": 43,
            "value": "Samurai MK3",
            "floorAskPrice": 0.187
          },
          {
            "count": 76,
            "value": "Samurai MK2",
            "floorAskPrice": 0.07
          },
          {
            "count": 121,
            "value": "Samurai MK1",
            "floorAskPrice": 0.09
          },
          {
            "count": 81,
            "value": "Assassin MK2",
            "floorAskPrice": 0.2
          },
          {
            "count": 93,
            "value": "Assassin MK1",
            "floorAskPrice": 0.145
          },
          {
            "count": 7,
            "value": "Recon SpecOps"
          },
          {
            "count": 4,
            "value": "Recon Officer"
          },
          {
            "count": 9,
            "value": "Recon MK5",
            "floorAskPrice": 1.4
          },
          {
            "count": 18,
            "value": "Recon MK4"
          },
          {
            "count": 40,
            "value": "Recon MK3"
          },
          {
            "count": 84,
            "value": "Recon MK2",
            "floorAskPrice": 0.115
          },
          {
            "count": 95,
            "value": "Recon MK1",
            "floorAskPrice": 0.079
          },
          {
            "count": 5042,
            "value": "None",
            "floorAskPrice": 0.05555
          },
          {
            "count": 9,
            "value": "Mjolnir SpecOps",
            "floorAskPrice": 1.69
          },
          {
            "count": 10,
            "value": "Mjolnir Officer",
            "floorAskPrice": 0.666
          },
          {
            "count": 6,
            "value": "Mjolnir MK5"
          },
          {
            "count": 18,
            "value": "Mjolnir MK4"
          },
          {
            "count": 45,
            "value": "Mjolnir MK3",
            "floorAskPrice": 0.75
          },
          {
            "count": 79,
            "value": "Mjolnir MK2",
            "floorAskPrice": 0.11
          },
          {
            "count": 108,
            "value": "Mjolnir MK1",
            "floorAskPrice": 0.079
          },
          {
            "count": 6,
            "value": "Medic SpecOps"
          },
          {
            "count": 5,
            "value": "Medic Officer"
          },
          {
            "count": 7,
            "value": "Medic MK5"
          },
          {
            "count": 20,
            "value": "Medic MK4"
          },
          {
            "count": 48,
            "value": "Medic MK3",
            "floorAskPrice": 0.1
          },
          {
            "count": 78,
            "value": "Medic MK2"
          },
          {
            "count": 98,
            "value": "Medic MK1",
            "floorAskPrice": 0.2
          },
          {
            "count": 13,
            "value": "Mass SpecOps"
          },
          {
            "count": 1,
            "value": "Mass Officer"
          },
          {
            "count": 10,
            "value": "Mass MK5"
          },
          {
            "count": 17,
            "value": "Mass MK4"
          }
        ]
      },
      {
        "key": "HELMET",
        "attributeCount": 70,
        "kind": "string",
        "values": [
          {
            "count": 19,
            "value": "Nova MK4"
          },
          {
            "count": 46,
            "value": "Nova MK3",
            "floorAskPrice": 0.18
          },
          {
            "count": 59,
            "value": "Nova MK2",
            "floorAskPrice": 0.12
          },
          {
            "count": 70,
            "value": "Nova MK1",
            "floorAskPrice": 0.069
          },
          {
            "count": 113,
            "value": "Ballistic MK1",
            "floorAskPrice": 0.079
          },
          {
            "count": 83,
            "value": "Ballistic MK2",
            "floorAskPrice": 0.12
          },
          {
            "count": 60,
            "value": "Ballistic MK3"
          },
          {
            "count": 30,
            "value": "Ballistic MK4"
          },
          {
            "count": 14,
            "value": "Ballistic MK5",
            "floorAskPrice": 0.9
          },
          {
            "count": 5,
            "value": "Ballistic Officer"
          },
          {
            "count": 16,
            "value": "Ballistic SpecOps"
          },
          {
            "count": 57,
            "value": "Droid MK1",
            "floorAskPrice": 0.08
          },
          {
            "count": 44,
            "value": "Droid MK2"
          },
          {
            "count": 28,
            "value": "Droid MK3"
          },
          {
            "count": 8,
            "value": "Droid MK4"
          },
          {
            "count": 8,
            "value": "Droid MK5",
            "floorAskPrice": 1.25
          },
          {
            "count": 5,
            "value": "Droid Officer"
          },
          {
            "count": 7,
            "value": "Droid SpecOps"
          },
          {
            "count": 80,
            "value": "Ghost MK1",
            "floorAskPrice": 0.95
          },
          {
            "count": 52,
            "value": "Ghost MK2",
            "floorAskPrice": 0.11
          },
          {
            "count": 34,
            "value": "Ghost MK3",
            "floorAskPrice": 0.2444
          },
          {
            "count": 24,
            "value": "Ghost MK4",
            "floorAskPrice": 0.252
          },
          {
            "count": 8,
            "value": "Ghost MK5"
          },
          {
            "count": 6,
            "value": "Ghost SpecOps",
            "floorAskPrice": 0.95
          },
          {
            "count": 77,
            "value": "Hellcat MK1",
            "floorAskPrice": 0.15
          },
          {
            "count": 58,
            "value": "Hellcat MK2",
            "floorAskPrice": 0.19
          },
          {
            "count": 31,
            "value": "Hellcat MK3"
          },
          {
            "count": 11,
            "value": "Hellcat MK4"
          },
          {
            "count": 6,
            "value": "Hellcat MK5",
            "floorAskPrice": 0.42
          },
          {
            "count": 2,
            "value": "Hellcat Officer",
            "floorAskPrice": 3.33
          },
          {
            "count": 7,
            "value": "Hellcat SpecOps"
          },
          {
            "count": 94,
            "value": "Holo MK1",
            "floorAskPrice": 0.1
          },
          {
            "count": 71,
            "value": "Holo MK2",
            "floorAskPrice": 0.206
          },
          {
            "count": 29,
            "value": "Holo MK3",
            "floorAskPrice": 0.187
          },
          {
            "count": 18,
            "value": "Holo MK4"
          },
          {
            "count": 5,
            "value": "Holo MK5"
          },
          {
            "count": 4,
            "value": "Holo Officer"
          },
          {
            "count": 11,
            "value": "Holo SpecOps"
          },
          {
            "count": 7985,
            "value": "None",
            "floorAskPrice": 0.05555
          },
          {
            "count": 8,
            "value": "Tron SpecOps"
          },
          {
            "count": 10,
            "value": "Tron Officer",
            "floorAskPrice": 1.2
          },
          {
            "count": 7,
            "value": "Tron MK5"
          },
          {
            "count": 14,
            "value": "Tron MK4"
          },
          {
            "count": 33,
            "value": "Tron MK3",
            "floorAskPrice": 0.13
          },
          {
            "count": 36,
            "value": "Tron MK2",
            "floorAskPrice": 0.26
          },
          {
            "count": 77,
            "value": "Tron MK1",
            "floorAskPrice": 0.07777
          },
          {
            "count": 5,
            "value": "Star SpecOps",
            "floorAskPrice": 1.11
          },
          {
            "count": 7,
            "value": "Star Officer"
          },
          {
            "count": 9,
            "value": "Star MK5"
          },
          {
            "count": 5,
            "value": "Star MK4"
          },
          {
            "count": 22,
            "value": "Star MK3",
            "floorAskPrice": 0.24
          },
          {
            "count": 37,
            "value": "Star MK2",
            "floorAskPrice": 0.129
          },
          {
            "count": 60,
            "value": "Star MK1",
            "floorAskPrice": 0.097
          },
          {
            "count": 3,
            "value": "Pilot SpecOps"
          },
          {
            "count": 4,
            "value": "Pilot Officer"
          },
          {
            "count": 3,
            "value": "Pilot MK5"
          },
          {
            "count": 16,
            "value": "Pilot MK4",
            "floorAskPrice": 1.69
          },
          {
            "count": 27,
            "value": "Pilot MK3",
            "floorAskPrice": 0.37
          },
          {
            "count": 47,
            "value": "Pilot MK2"
          },
          {
            "count": 75,
            "value": "Pilot MK1",
            "floorAskPrice": 0.46
          },
          {
            "count": 5,
            "value": "Oracle SpecOps"
          },
          {
            "count": 1,
            "value": "Oracle Officer"
          },
          {
            "count": 7,
            "value": "Oracle MK5",
            "floorAskPrice": 0.399
          },
          {
            "count": 15,
            "value": "Oracle MK4"
          },
          {
            "count": 35,
            "value": "Oracle MK3",
            "floorAskPrice": 0.329
          },
          {
            "count": 55,
            "value": "Oracle MK2",
            "floorAskPrice": 0.1
          },
          {
            "count": 75,
            "value": "Oracle MK1",
            "floorAskPrice": 0.08
          },
          {
            "count": 7,
            "value": "Nova SpecOps"
          },
          {
            "count": 2,
            "value": "Nova Officer",
            "floorAskPrice": 3
          },
          {
            "count": 8,
            "value": "Nova MK5"
          }
        ]
      },
      {
        "key": "FACIAL EXPRESSION",
        "attributeCount": 49,
        "kind": "string",
        "values": [
          {
            "count": 107,
            "value": "Bored Red",
            "floorAskPrice": 0.125
          },
          {
            "count": 120,
            "value": "Confused Red",
            "floorAskPrice": 0.07
          },
          {
            "count": 230,
            "value": "Curious Blue",
            "floorAskPrice": 0.08
          },
          {
            "count": 346,
            "value": "Curious Brown",
            "floorAskPrice": 0.059
          },
          {
            "count": 158,
            "value": "Curious Green",
            "floorAskPrice": 0.084
          },
          {
            "count": 112,
            "value": "Curious Red",
            "floorAskPrice": 0.055
          },
          {
            "count": 228,
            "value": "Determined Blue",
            "floorAskPrice": 0.055
          },
          {
            "count": 322,
            "value": "Determined Brown",
            "floorAskPrice": 0.05
          },
          {
            "count": 159,
            "value": "Determined Green",
            "floorAskPrice": 0.0589
          },
          {
            "count": 95,
            "value": "Determined Red",
            "floorAskPrice": 0.03996
          },
          {
            "count": 226,
            "value": "Happy Blue",
            "floorAskPrice": 0.07
          },
          {
            "count": 290,
            "value": "Happy Brown",
            "floorAskPrice": 0.058
          },
          {
            "count": 139,
            "value": "Happy Green",
            "floorAskPrice": 0.0482
          },
          {
            "count": 97,
            "value": "Happy Red",
            "floorAskPrice": 0.066
          },
          {
            "count": 232,
            "value": "High Blue",
            "floorAskPrice": 0.059
          },
          {
            "count": 176,
            "value": "Bored Green",
            "floorAskPrice": 0.06
          },
          {
            "count": 343,
            "value": "Bored Brown",
            "floorAskPrice": 0.061
          },
          {
            "count": 251,
            "value": "Bored Blue",
            "floorAskPrice": 0.059
          },
          {
            "count": 136,
            "value": "Angry Red",
            "floorAskPrice": 0.07
          },
          {
            "count": 294,
            "value": "High Brown",
            "floorAskPrice": 0.0383
          },
          {
            "count": 150,
            "value": "High Green",
            "floorAskPrice": 0.069
          },
          {
            "count": 114,
            "value": "High Red",
            "floorAskPrice": 0.057
          },
          {
            "count": 30,
            "value": "Tired",
            "floorAskPrice": 0.23
          },
          {
            "count": 90,
            "value": "Shocked Red"
          },
          {
            "count": 138,
            "value": "Shocked Green",
            "floorAskPrice": 0.059
          },
          {
            "count": 305,
            "value": "Shocked Brown",
            "floorAskPrice": 0.08
          },
          {
            "count": 215,
            "value": "Shocked Blue",
            "floorAskPrice": 0.158
          },
          {
            "count": 111,
            "value": "Scared Red",
            "floorAskPrice": 0.098
          },
          {
            "count": 158,
            "value": "Scared Green",
            "floorAskPrice": 0.3
          },
          {
            "count": 325,
            "value": "Scared Brown",
            "floorAskPrice": 0.075
          },
          {
            "count": 231,
            "value": "Scared Blue",
            "floorAskPrice": 0.059
          },
          {
            "count": 132,
            "value": "Sad Red",
            "floorAskPrice": 0.069
          },
          {
            "count": 164,
            "value": "Sad Green",
            "floorAskPrice": 0.115
          },
          {
            "count": 334,
            "value": "Sad Brown",
            "floorAskPrice": 0.085
          },
          {
            "count": 275,
            "value": "Sad Blue",
            "floorAskPrice": 0.05555
          },
          {
            "count": 101,
            "value": "Laugh Red",
            "floorAskPrice": 0.12
          },
          {
            "count": 164,
            "value": "Laugh Green",
            "floorAskPrice": 0.123
          },
          {
            "count": 282,
            "value": "Laugh Brown",
            "floorAskPrice": 0.06
          },
          {
            "count": 230,
            "value": "Laugh Blue",
            "floorAskPrice": 0.074
          },
          {
            "count": 178,
            "value": "Irritated Green",
            "floorAskPrice": 0.065
          },
          {
            "count": 332,
            "value": "Irritated Brown",
            "floorAskPrice": 0.06
          },
          {
            "count": 251,
            "value": "Irritated Blue",
            "floorAskPrice": 0.0524
          },
          {
            "count": 106,
            "value": "Irritated Red",
            "floorAskPrice": 0.1195
          },
          {
            "count": 157,
            "value": "Angry Green",
            "floorAskPrice": 0.07
          },
          {
            "count": 322,
            "value": "Angry Brown",
            "floorAskPrice": 0.056
          },
          {
            "count": 253,
            "value": "Angry Blue",
            "floorAskPrice": 0.057
          },
          {
            "count": 312,
            "value": "Confused Blue",
            "floorAskPrice": 0.065
          },
          {
            "count": 320,
            "value": "Confused Brown",
            "floorAskPrice": 0.07777
          },
          {
            "count": 159,
            "value": "Confused Green",
            "floorAskPrice": 0.099
          }
        ]
      }
    ]
  }