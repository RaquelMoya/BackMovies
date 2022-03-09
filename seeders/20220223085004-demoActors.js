'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('actors', [
      {
        "name": "Gerrie",
        "surname": "Buxton",
        "createdAt": "2021-08-01",
        "updatedAt": "2021-08-01 16:27:41"
      }, {
        "name": "Dierdre",
        "surname": "Pavlik",
        "createdAt": "2022-01-16",
        "updatedAt": "2022-01-16 17:18:46"
      }, {
        "name": "Jamie",
        "surname": "Mawer",
        "createdAt": "2022-02-26",
        "updatedAt": "2022-02-26 13:13:22"
      }, {
        "name": "Drusilla",
        "surname": "Winning",
        "createdAt": "2021-11-25",
        "updatedAt": "2021-11-25 19:32:46"
      }, {
        "name": "Vida",
        "surname": "Cumesky",
        "createdAt": "2021-05-15",
        "updatedAt": "2021-05-15 16:41:41"
      }, {
        "name": "Bernadina",
        "surname": "Langshaw",
        "createdAt": "2021-08-12",
        "updatedAt": "2021-08-12 11:49:49"
      }, {
        "name": "Teresita",
        "surname": "Dieton",
        "createdAt": "2021-12-13",
        "updatedAt": "2021-12-13 06:45:40"
      }, {
        "name": "Tracey",
        "surname": "Vasilov",
        "createdAt": "2021-09-11",
        "updatedAt": "2021-09-11 07:44:57"
      }, {
        "name": "Terrell",
        "surname": "Pumphrey",
        "createdAt": "2021-07-20",
        "updatedAt": "2021-07-20 14:20:44"
      }, {
        "name": "Frances",
        "surname": "Yitzhakov",
        "createdAt": "2022-01-12",
        "updatedAt": "2022-01-12 05:40:55"
      }, {
        "name": "Dew",
        "surname": "Barkus",
        "createdAt": "2021-04-24",
        "updatedAt": "2021-04-24 18:52:56"
      }, {
        "name": "Otha",
        "surname": "Krolman",
        "createdAt": "2021-06-28",
        "updatedAt": "2021-06-28 11:40:25"
      }, {
        "name": "Patsy",
        "surname": "Droghan",
        "createdAt": "2021-05-12",
        "updatedAt": "2021-05-12 11:36:46"
      }, {
        "name": "Romola",
        "surname": "Phidgin",
        "createdAt": "2021-12-01",
        "updatedAt": "2021-12-01 05:50:10"
      }, {
        "name": "Sylvan",
        "surname": "Snead",
        "createdAt": "2021-05-02",
        "updatedAt": "2021-05-02 12:33:54"
      }, {
        "name": "Rakel",
        "surname": "Strowan",
        "createdAt": "2021-10-17",
        "updatedAt": "2021-10-17 23:03:17"
      }, {
        "name": "Aloisia",
        "surname": "Bougen",
        "createdAt": "2021-06-05",
        "updatedAt": "2021-06-05 17:01:12"
      }, {
        "name": "Alva",
        "surname": "Impett",
        "createdAt": "2021-07-10",
        "updatedAt": "2021-07-10 10:18:56"
      }, {
        "name": "Lucas",
        "surname": "Dundendale",
        "createdAt": "2021-06-12",
        "updatedAt": "2021-06-12 18:07:26"
      }, {
        "name": "Kingsly",
        "surname": "Stedell",
        "createdAt": "2022-03-07",
        "updatedAt": "2022-03-07 05:05:44"
      }, {
        "name": "Lou",
        "surname": "Citrine",
        "createdAt": "2021-06-02",
        "updatedAt": "2021-06-02 09:33:12"
      }, {
        "name": "Dorine",
        "surname": "Nowakowski",
        "createdAt": "2022-02-22",
        "updatedAt": "2022-02-22 14:56:28"
      }, {
        "name": "Igor",
        "surname": "Allen",
        "createdAt": "2021-07-19",
        "updatedAt": "2021-07-19 11:13:00"
      }, {
        "name": "Damara",
        "surname": "Davydoch",
        "createdAt": "2021-06-06",
        "updatedAt": "2021-06-06 13:47:14"
      }, {
        "name": "Barbette",
        "surname": "Lewsey",
        "createdAt": "2021-07-07",
        "updatedAt": "2021-07-07 20:34:27"
      }, {
        "name": "Chev",
        "surname": "D'Abbot-Doyle",
        "createdAt": "2022-02-14",
        "updatedAt": "2022-02-14 01:11:18"
      }, {
        "name": "Sauveur",
        "surname": "Meckiff",
        "createdAt": "2021-05-28",
        "updatedAt": "2021-05-28 00:19:08"
      }, {
        "name": "Wallie",
        "surname": "Balsellie",
        "createdAt": "2022-01-30",
        "updatedAt": "2022-01-30 19:39:25"
      }, {
        "name": "Minta",
        "surname": "Wiggington",
        "createdAt": "2021-11-19",
        "updatedAt": "2021-11-19 23:04:35"
      }, {
        "name": "Rodie",
        "surname": "Sweatland",
        "createdAt": "2021-07-13",
        "updatedAt": "2021-07-13 12:34:37"
      }, {
        "name": "Hercule",
        "surname": "Hacking",
        "createdAt": "2021-10-11",
        "updatedAt": "2021-10-11 00:17:42"
      }, {
        "name": "Diannne",
        "surname": "Glossup",
        "createdAt": "2022-03-08",
        "updatedAt": "2022-03-08 00:23:15"
      }, {
        "name": "Beverlee",
        "surname": "Rymer",
        "createdAt": "2021-10-16",
        "updatedAt": "2021-10-16 10:30:24"
      }, {
        "name": "Nap",
        "surname": "Broady",
        "createdAt": "2021-12-12",
        "updatedAt": "2021-12-12 09:33:52"
      }, {
        "name": "Sherie",
        "surname": "Rawes",
        "createdAt": "2022-01-07",
        "updatedAt": "2022-01-07 01:41:40"
      }, {
        "name": "Ulises",
        "surname": "Bilham",
        "createdAt": "2021-08-21",
        "updatedAt": "2021-08-21 04:13:54"
      }, {
        "name": "Andrey",
        "surname": "Ellwell",
        "createdAt": "2021-09-18",
        "updatedAt": "2021-09-18 13:45:03"
      }, {
        "name": "Yancey",
        "surname": "Aberdalgy",
        "createdAt": "2021-11-22",
        "updatedAt": "2021-11-22 07:21:10"
      }, {
        "name": "Jandy",
        "surname": "Ast",
        "createdAt": "2021-06-16",
        "updatedAt": "2021-06-16 14:45:03"
      }, {
        "name": "Rudyard",
        "surname": "Matessian",
        "createdAt": "2021-04-26",
        "updatedAt": "2021-04-26 17:14:37"
      }, {
        "name": "Amabelle",
        "surname": "Beaulieu",
        "createdAt": "2021-07-24",
        "updatedAt": "2021-07-24 18:17:49"
      }, {
        "name": "Doralynn",
        "surname": "Blais",
        "createdAt": "2022-02-19",
        "updatedAt": "2022-02-19 08:18:07"
      }, {
        "name": "Stanleigh",
        "surname": "Surr",
        "createdAt": "2021-07-20",
        "updatedAt": "2021-07-20 19:36:08"
      }, {
        "name": "Eli",
        "surname": "Haggie",
        "createdAt": "2021-05-17",
        "updatedAt": "2021-05-17 11:18:25"
      }, {
        "name": "Mischa",
        "surname": "Lawley",
        "createdAt": "2022-02-24",
        "updatedAt": "2022-02-24 03:02:32"
      }, {
        "name": "Sherwin",
        "surname": "Enriques",
        "createdAt": "2021-12-27",
        "updatedAt": "2021-12-27 11:40:22"
      }, {
        "name": "Clay",
        "surname": "Dunthorn",
        "createdAt": "2021-10-02",
        "updatedAt": "2021-10-02 18:13:35"
      }, {
        "name": "Duff",
        "surname": "Dowse",
        "createdAt": "2021-11-22",
        "updatedAt": "2021-11-22 09:28:39"
      }, {
        "name": "Essa",
        "surname": "Wieprecht",
        "createdAt": "2021-07-03",
        "updatedAt": "2021-07-03 15:15:33"
      }, {
        "name": "Fredericka",
        "surname": "Bouldstridge",
        "createdAt": "2022-02-01",
        "updatedAt": "2022-02-01 23:19:13"
      }, {
        "name": "Jasun",
        "surname": "Moff",
        "createdAt": "2021-12-17",
        "updatedAt": "2021-12-17 06:54:32"
      }, {
        "name": "Ardenia",
        "surname": "Coytes",
        "createdAt": "2021-08-25",
        "updatedAt": "2021-08-25 12:49:32"
      }, {
        "name": "Issiah",
        "surname": "Ierland",
        "createdAt": "2021-12-26",
        "updatedAt": "2021-12-26 04:37:22"
      }, {
        "name": "Keen",
        "surname": "Pithcock",
        "createdAt": "2021-10-28",
        "updatedAt": "2021-10-28 21:26:31"
      }, {
        "name": "Marris",
        "surname": "Erasmus",
        "createdAt": "2021-09-20",
        "updatedAt": "2021-09-20 12:38:37"
      }, {
        "name": "Rianon",
        "surname": "Crowest",
        "createdAt": "2021-03-29",
        "updatedAt": "2021-03-29 22:54:10"
      }, {
        "name": "Rianon",
        "surname": "Keppin",
        "createdAt": "2022-01-30",
        "updatedAt": "2022-01-30 11:36:42"
      }, {
        "name": "Annis",
        "surname": "Wistance",
        "createdAt": "2021-12-27",
        "updatedAt": "2021-12-27 06:46:57"
      }, {
        "name": "Stevy",
        "surname": "Darnell",
        "createdAt": "2021-04-04",
        "updatedAt": "2021-04-04 03:32:58"
      }, {
        "name": "Pietra",
        "surname": "Roofe",
        "createdAt": "2021-07-16",
        "updatedAt": "2021-07-16 10:13:31"
      }, {
        "name": "Colby",
        "surname": "Gobat",
        "createdAt": "2021-12-27",
        "updatedAt": "2021-12-27 10:09:25"
      }, {
        "name": "Devland",
        "surname": "Matussow",
        "createdAt": "2021-05-13",
        "updatedAt": "2021-05-13 18:36:57"
      }, {
        "name": "Eva",
        "surname": "McBayne",
        "createdAt": "2021-12-03",
        "updatedAt": "2021-12-03 11:19:54"
      }, {
        "name": "Dara",
        "surname": "Deesly",
        "createdAt": "2022-03-06",
        "updatedAt": "2022-03-06 02:06:04"
      }, {
        "name": "Elset",
        "surname": "Hellmore",
        "createdAt": "2021-06-11",
        "updatedAt": "2021-06-11 17:43:33"
      }, {
        "name": "Sheridan",
        "surname": "Durkin",
        "createdAt": "2021-04-27",
        "updatedAt": "2021-04-27 06:16:46"
      }, {
        "name": "Clark",
        "surname": "Syson",
        "createdAt": "2021-04-15",
        "updatedAt": "2021-04-15 06:50:56"
      }, {
        "name": "Chad",
        "surname": "Kenzie",
        "createdAt": "2021-10-01",
        "updatedAt": "2021-10-01 15:07:06"
      }, {
        "name": "Merle",
        "surname": "Dincey",
        "createdAt": "2022-01-01",
        "updatedAt": "2022-01-01 20:48:39"
      }, {
        "name": "Rainer",
        "surname": "Dobey",
        "createdAt": "2021-03-21",
        "updatedAt": "2021-03-21 02:29:30"
      }, {
        "name": "Marilyn",
        "surname": "Antonoyev",
        "createdAt": "2021-08-22",
        "updatedAt": "2021-08-22 12:43:33"
      }, {
        "name": "Laurence",
        "surname": "Degoey",
        "createdAt": "2021-07-14",
        "updatedAt": "2021-07-14 04:53:50"
      }, {
        "name": "Jaquelyn",
        "surname": "Beggio",
        "createdAt": "2021-07-09",
        "updatedAt": "2021-07-09 07:15:10"
      }, {
        "name": "Giovanna",
        "surname": "Willeman",
        "createdAt": "2022-02-06",
        "updatedAt": "2022-02-06 13:34:18"
      }, {
        "name": "Grete",
        "surname": "Waudby",
        "createdAt": "2022-02-23",
        "updatedAt": "2022-02-23 09:46:47"
      }, {
        "name": "Paula",
        "surname": "Proughten",
        "createdAt": "2021-04-10",
        "updatedAt": "2021-04-10 14:13:45"
      }, {
        "name": "John",
        "surname": "Wainscoat",
        "createdAt": "2021-08-25",
        "updatedAt": "2021-08-25 17:08:20"
      }, {
        "name": "Kendal",
        "surname": "MacNeachtain",
        "createdAt": "2021-09-13",
        "updatedAt": "2021-09-13 22:22:55"
      }, {
        "name": "Brandise",
        "surname": "Fattorini",
        "createdAt": "2021-05-10",
        "updatedAt": "2021-05-10 17:38:49"
      }, {
        "name": "Rory",
        "surname": "Causnett",
        "createdAt": "2022-01-14",
        "updatedAt": "2022-01-14 10:06:29"
      }, {
        "name": "Leonhard",
        "surname": "Duncan",
        "createdAt": "2021-09-07",
        "updatedAt": "2021-09-07 10:15:39"
      }, {
        "name": "James",
        "surname": "Hoys",
        "createdAt": "2021-12-08",
        "updatedAt": "2021-12-08 18:09:06"
      }, {
        "name": "Gwynne",
        "surname": "Struijs",
        "createdAt": "2021-12-07",
        "updatedAt": "2021-12-07 20:47:33"
      }, {
        "name": "Holly",
        "surname": "Cottell",
        "createdAt": "2021-09-23",
        "updatedAt": "2021-09-23 02:46:55"
      }, {
        "name": "Jakob",
        "surname": "Hacksby",
        "createdAt": "2021-03-21",
        "updatedAt": "2021-03-21 00:43:45"
      }, {
        "name": "Mab",
        "surname": "Warriner",
        "createdAt": "2022-02-03",
        "updatedAt": "2022-02-03 21:10:04"
      }, {
        "name": "Rice",
        "surname": "Knappe",
        "createdAt": "2021-05-09",
        "updatedAt": "2021-05-09 07:47:48"
      }, {
        "name": "Cyrill",
        "surname": "Sandry",
        "createdAt": "2022-02-20",
        "updatedAt": "2022-02-20 19:28:27"
      }, {
        "name": "Theodoric",
        "surname": "Fernely",
        "createdAt": "2021-07-21",
        "updatedAt": "2021-07-21 07:45:53"
      }, {
        "name": "Ambur",
        "surname": "Gartland",
        "createdAt": "2022-01-14",
        "updatedAt": "2022-01-14 08:30:28"
      }, {
        "name": "Kacie",
        "surname": "Stutte",
        "createdAt": "2022-03-03",
        "updatedAt": "2022-03-03 01:40:48"
      }, {
        "name": "Bar",
        "surname": "Du Pre",
        "createdAt": "2021-11-17",
        "updatedAt": "2021-11-17 23:59:58"
      }, {
        "name": "Lanette",
        "surname": "Gashion",
        "createdAt": "2021-05-14",
        "updatedAt": "2021-05-14 12:34:08"
      }, {
        "name": "Clement",
        "surname": "Sandercock",
        "createdAt": "2021-07-02",
        "updatedAt": "2021-07-02 08:47:35"
      }, {
        "name": "Erwin",
        "surname": "Philpot",
        "createdAt": "2021-08-13",
        "updatedAt": "2021-08-13 03:51:11"
      }, {
        "name": "Justine",
        "surname": "Penwright",
        "createdAt": "2021-11-19",
        "updatedAt": "2021-11-19 01:12:56"
      }, {
        "name": "Bill",
        "surname": "Jacquemet",
        "createdAt": "2021-10-23",
        "updatedAt": "2021-10-23 17:58:12"
      }, {
        "name": "Correy",
        "surname": "Vatini",
        "createdAt": "2022-01-04",
        "updatedAt": "2022-01-04 07:36:04"
      }, {
        "name": "Danya",
        "surname": "Barkus",
        "createdAt": "2021-10-11",
        "updatedAt": "2021-10-11 12:30:29"
      }, {
        "name": "Winny",
        "surname": "Safhill",
        "createdAt": "2021-03-16",
        "updatedAt": "2021-03-16 10:15:07"
      }]
      
    ,{});
  },

  down: async (queryInterface, Sequelize) => {
        
  await queryInterface.bulkDelete('actors', null, {});
        
  }
};
