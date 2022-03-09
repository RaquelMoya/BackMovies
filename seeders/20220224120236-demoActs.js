'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('acts', [
      {
      "actorId": 28,
      "movieId": 196,
      "createdAt": "2022-02-24",
      "updatedAt": "2022-02-24 01:06:19"
    }, {
      "actorId": 42,
      "movieId": 168,
      "createdAt": "2022-02-22",
      "updatedAt": "2022-02-22 16:49:16"
    }, {
      "actorId": 37,
      "movieId": 97,
      "createdAt": "2022-02-01",
      "updatedAt": "2022-02-01 18:29:31"
    }, {
      "actorId": 69,
      "movieId": 149,
      "createdAt": "2021-09-21",
      "updatedAt": "2021-09-21 14:28:05"
    }, {
      "actorId": 8,
      "movieId": 264,
      "createdAt": "2021-07-18",
      "updatedAt": "2021-07-18 17:55:43"
    }, {
      "actorId": 2,
      "movieId": 316,
      "createdAt": "2021-08-29",
      "updatedAt": "2021-08-29 12:14:51"
    }, {
      "actorId": 50,
      "movieId": 302,
      "createdAt": "2021-12-10",
      "updatedAt": "2021-12-10 19:51:40"
    }, {
      "actorId": 71,
      "movieId": 48,
      "createdAt": "2021-05-23",
      "updatedAt": "2021-05-23 23:07:53"
    }, {
      "actorId": 18,
      "movieId": 233,
      "createdAt": "2022-02-03",
      "updatedAt": "2022-02-03 07:43:40"
    }, {
      "actorId": 11,
      "movieId": 185,
      "createdAt": "2021-04-10",
      "updatedAt": "2021-04-10 06:35:58"
    }, {
      "actorId": 14,
      "movieId": 138,
      "createdAt": "2021-10-17",
      "updatedAt": "2021-10-17 18:40:48"
    }, {
      "actorId": 87,
      "movieId": 310,
      "createdAt": "2021-08-05",
      "updatedAt": "2021-08-05 18:19:31"
    }, {
      "actorId": 54,
      "movieId": 336,
      "createdAt": "2021-04-11",
      "updatedAt": "2021-04-11 19:32:27"
    }, {
      "actorId": 95,
      "movieId": 364,
      "createdAt": "2021-08-13",
      "updatedAt": "2021-08-13 16:26:04"
    }, {
      "actorId": 70,
      "movieId": 399,
      "createdAt": "2021-07-09",
      "updatedAt": "2021-07-09 17:32:19"
    }, {
      "actorId": 21,
      "movieId": 57,
      "createdAt": "2022-03-03",
      "updatedAt": "2022-03-03 14:40:31"
    }, {
      "actorId": 44,
      "movieId": 281,
      "createdAt": "2021-07-30",
      "updatedAt": "2021-07-30 09:45:15"
    }, {
      "actorId": 57,
      "movieId": 180,
      "createdAt": "2021-08-12",
      "updatedAt": "2021-08-12 00:01:32"
    }, {
      "actorId": 57,
      "movieId": 44,
      "createdAt": "2021-04-18",
      "updatedAt": "2021-04-18 19:27:56"
    }, {
      "actorId": 23,
      "movieId": 67,
      "createdAt": "2021-04-07",
      "updatedAt": "2021-04-07 16:13:00"
    }, {
      "actorId": 76,
      "movieId": 344,
      "createdAt": "2022-02-06",
      "updatedAt": "2022-02-06 03:50:59"
    }, {
      "actorId": 49,
      "movieId": 116,
      "createdAt": "2022-02-27",
      "updatedAt": "2022-02-27 07:20:45"
    }, {
      "actorId": 29,
      "movieId": 129,
      "createdAt": "2022-02-01",
      "updatedAt": "2022-02-01 01:46:52"
    }, {
      "actorId": 5,
      "movieId": 151,
      "createdAt": "2022-02-12",
      "updatedAt": "2022-02-12 14:00:17"
    }, {
      "actorId": 38,
      "movieId": 149,
      "createdAt": "2021-10-19",
      "updatedAt": "2021-10-19 17:12:30"
    }, {
      "actorId": 42,
      "movieId": 385,
      "createdAt": "2021-05-04",
      "updatedAt": "2021-05-04 19:35:09"
    }, {
      "actorId": 15,
      "movieId": 53,
      "createdAt": "2021-06-11",
      "updatedAt": "2021-06-11 22:39:22"
    }, {
      "actorId": 39,
      "movieId": 66,
      "createdAt": "2021-08-30",
      "updatedAt": "2021-08-30 04:09:49"
    }, {
      "actorId": 76,
      "movieId": 4,
      "createdAt": "2021-06-04",
      "updatedAt": "2021-06-04 16:43:45"
    }, {
      "actorId": 58,
      "movieId": 167,
      "createdAt": "2021-09-17",
      "updatedAt": "2021-09-17 19:24:25"
    }, {
      "actorId": 74,
      "movieId": 228,
      "createdAt": "2021-08-01",
      "updatedAt": "2021-08-01 03:17:10"
    }, {
      "actorId": 81,
      "movieId": 136,
      "createdAt": "2021-05-03",
      "updatedAt": "2021-05-03 22:12:59"
    }, {
      "actorId": 27,
      "movieId": 384,
      "createdAt": "2021-07-23",
      "updatedAt": "2021-07-23 20:40:40"
    }, {
      "actorId": 48,
      "movieId": 292,
      "createdAt": "2022-02-19",
      "updatedAt": "2022-02-19 17:22:39"
    }, {
      "actorId": 82,
      "movieId": 200,
      "createdAt": "2021-04-22",
      "updatedAt": "2021-04-22 11:20:43"
    }, {
      "actorId": 1,
      "movieId": 283,
      "createdAt": "2021-05-04",
      "updatedAt": "2021-05-04 10:42:25"
    }, {
      "actorId": 70,
      "movieId": 67,
      "createdAt": "2021-07-27",
      "updatedAt": "2021-07-27 03:55:49"
    }, {
      "actorId": 94,
      "movieId": 217,
      "createdAt": "2021-05-04",
      "updatedAt": "2021-05-04 14:42:47"
    }, {
      "actorId": 48,
      "movieId": 116,
      "createdAt": "2021-10-13",
      "updatedAt": "2021-10-13 02:40:31"
    }, {
      "actorId": 49,
      "movieId": 346,
      "createdAt": "2021-11-15",
      "updatedAt": "2021-11-15 18:16:40"
    }, {
      "actorId": 48,
      "movieId": 159,
      "createdAt": "2021-12-14",
      "updatedAt": "2021-12-14 07:10:04"
    }, {
      "actorId": 37,
      "movieId": 173,
      "createdAt": "2021-09-12",
      "updatedAt": "2021-09-12 23:54:57"
    }, {
      "actorId": 83,
      "movieId": 337,
      "createdAt": "2022-01-30",
      "updatedAt": "2022-01-30 13:25:38"
    }, {
      "actorId": 95,
      "movieId": 33,
      "createdAt": "2021-05-16",
      "updatedAt": "2021-05-16 22:07:03"
    }, {
      "actorId": 75,
      "movieId": 58,
      "createdAt": "2021-04-29",
      "updatedAt": "2021-04-29 08:19:21"
    }, {
      "actorId": 96,
      "movieId": 175,
      "createdAt": "2022-03-01",
      "updatedAt": "2022-03-01 12:27:06"
    }, {
      "actorId": 76,
      "movieId": 302,
      "createdAt": "2022-02-06",
      "updatedAt": "2022-02-06 18:32:28"
    }, {
      "actorId": 57,
      "movieId": 350,
      "createdAt": "2021-04-21",
      "updatedAt": "2021-04-21 15:39:49"
    }, {
      "actorId": 28,
      "movieId": 253,
      "createdAt": "2021-05-17",
      "updatedAt": "2021-05-17 23:45:48"
    }, {
      "actorId": 48,
      "movieId": 295,
      "createdAt": "2021-03-21",
      "updatedAt": "2021-03-21 09:24:13"
    }, {
      "actorId": 15,
      "movieId": 22,
      "createdAt": "2021-04-16",
      "updatedAt": "2021-04-16 20:07:19"
    }, {
      "actorId": 16,
      "movieId": 268,
      "createdAt": "2021-09-18",
      "updatedAt": "2021-09-18 23:17:09"
    }, {
      "actorId": 38,
      "movieId": 223,
      "createdAt": "2022-03-06",
      "updatedAt": "2022-03-06 08:16:27"
    }, {
      "actorId": 90,
      "movieId": 18,
      "createdAt": "2021-11-28",
      "updatedAt": "2021-11-28 04:23:33"
    }, {
      "actorId": 67,
      "movieId": 91,
      "createdAt": "2021-06-18",
      "updatedAt": "2021-06-18 00:29:41"
    }, {
      "actorId": 39,
      "movieId": 265,
      "createdAt": "2021-05-14",
      "updatedAt": "2021-05-14 21:54:32"
    }, {
      "actorId": 26,
      "movieId": 372,
      "createdAt": "2021-07-13",
      "updatedAt": "2021-07-13 19:33:27"
    }, {
      "actorId": 17,
      "movieId": 27,
      "createdAt": "2021-11-26",
      "updatedAt": "2021-11-26 21:40:51"
    }, {
      "actorId": 47,
      "movieId": 118,
      "createdAt": "2021-07-17",
      "updatedAt": "2021-07-17 18:08:43"
    }, {
      "actorId": 16,
      "movieId": 174,
      "createdAt": "2021-09-24",
      "updatedAt": "2021-09-24 23:58:08"
    }, {
      "actorId": 50,
      "movieId": 395,
      "createdAt": "2022-02-20",
      "updatedAt": "2022-02-20 08:58:53"
    }, {
      "actorId": 24,
      "movieId": 13,
      "createdAt": "2021-12-31",
      "updatedAt": "2021-12-31 23:30:58"
    }, {
      "actorId": 75,
      "movieId": 351,
      "createdAt": "2022-01-12",
      "updatedAt": "2022-01-12 13:27:01"
    }, {
      "actorId": 4,
      "movieId": 210,
      "createdAt": "2022-01-05",
      "updatedAt": "2022-01-05 21:44:35"
    }, {
      "actorId": 94,
      "movieId": 66,
      "createdAt": "2021-06-07",
      "updatedAt": "2021-06-07 05:20:15"
    }, {
      "actorId": 75,
      "movieId": 196,
      "createdAt": "2021-03-16",
      "updatedAt": "2021-03-16 01:45:54"
    }, {
      "actorId": 46,
      "movieId": 255,
      "createdAt": "2021-10-12",
      "updatedAt": "2021-10-12 15:31:17"
    }, {
      "actorId": 26,
      "movieId": 313,
      "createdAt": "2021-08-21",
      "updatedAt": "2021-08-21 11:47:59"
    }, {
      "actorId": 53,
      "movieId": 184,
      "createdAt": "2021-03-20",
      "updatedAt": "2021-03-20 22:14:23"
    }, {
      "actorId": 45,
      "movieId": 196,
      "createdAt": "2022-02-03",
      "updatedAt": "2022-02-03 15:18:08"
    }, {
      "actorId": 82,
      "movieId": 109,
      "createdAt": "2021-08-27",
      "updatedAt": "2021-08-27 20:02:26"
    }, {
      "actorId": 78,
      "movieId": 167,
      "createdAt": "2021-07-06",
      "updatedAt": "2021-07-06 14:30:25"
    }, {
      "actorId": 94,
      "movieId": 227,
      "createdAt": "2021-10-11",
      "updatedAt": "2021-10-11 20:45:21"
    }, {
      "actorId": 90,
      "movieId": 339,
      "createdAt": "2022-02-01",
      "updatedAt": "2022-02-01 16:19:14"
    }, {
      "actorId": 81,
      "movieId": 132,
      "createdAt": "2021-10-31",
      "updatedAt": "2021-10-31 22:08:48"
    }, {
      "actorId": 96,
      "movieId": 364,
      "createdAt": "2021-12-24",
      "updatedAt": "2021-12-24 18:10:35"
    }, {
      "actorId": 58,
      "movieId": 70,
      "createdAt": "2021-11-16",
      "updatedAt": "2021-11-16 20:06:08"
    }, {
      "actorId": 92,
      "movieId": 66,
      "createdAt": "2021-08-07",
      "updatedAt": "2021-08-07 16:12:58"
    }, {
      "actorId": 59,
      "movieId": 167,
      "createdAt": "2021-07-24",
      "updatedAt": "2021-07-24 11:17:42"
    }, {
      "actorId": 99,
      "movieId": 344,
      "createdAt": "2021-03-13",
      "updatedAt": "2021-03-13 08:18:29"
    }, {
      "actorId": 80,
      "movieId": 48,
      "createdAt": "2021-09-08",
      "updatedAt": "2021-09-08 09:31:06"
    }, {
      "actorId": 15,
      "movieId": 342,
      "createdAt": "2021-10-31",
      "updatedAt": "2021-10-31 06:23:04"
    }, {
      "actorId": 84,
      "movieId": 165,
      "createdAt": "2022-02-12",
      "updatedAt": "2022-02-12 10:43:27"
    }, {
      "actorId": 64,
      "movieId": 231,
      "createdAt": "2021-11-28",
      "updatedAt": "2021-11-28 10:15:44"
    }, {
      "actorId": 42,
      "movieId": 152,
      "createdAt": "2021-12-18",
      "updatedAt": "2021-12-18 12:52:30"
    }, {
      "actorId": 79,
      "movieId": 202,
      "createdAt": "2021-08-29",
      "updatedAt": "2021-08-29 09:26:05"
    }, {
      "actorId": 84,
      "movieId": 236,
      "createdAt": "2021-11-27",
      "updatedAt": "2021-11-27 20:22:48"
    }, {
      "actorId": 22,
      "movieId": 172,
      "createdAt": "2021-04-12",
      "updatedAt": "2021-04-12 16:04:11"
    }, {
      "actorId": 100,
      "movieId": 89,
      "createdAt": "2022-01-14",
      "updatedAt": "2022-01-14 07:07:22"
    }, {
      "actorId": 79,
      "movieId": 94,
      "createdAt": "2021-10-05",
      "updatedAt": "2021-10-05 03:58:54"
    }, {
      "actorId": 11,
      "movieId": 399,
      "createdAt": "2021-09-23",
      "updatedAt": "2021-09-23 23:43:39"
    }, {
      "actorId": 86,
      "movieId": 247,
      "createdAt": "2021-06-16",
      "updatedAt": "2021-06-16 17:24:30"
    }, {
      "actorId": 70,
      "movieId": 263,
      "createdAt": "2021-07-11",
      "updatedAt": "2021-07-11 03:41:21"
    }, {
      "actorId": 3,
      "movieId": 285,
      "createdAt": "2021-12-26",
      "updatedAt": "2021-12-26 09:57:51"
    }, {
      "actorId": 84,
      "movieId": 363,
      "createdAt": "2021-09-17",
      "updatedAt": "2021-09-17 04:34:39"
    }, {
      "actorId": 6,
      "movieId": 63,
      "createdAt": "2021-09-05",
      "updatedAt": "2021-09-05 01:47:31"
    }, {
      "actorId": 73,
      "movieId": 334,
      "createdAt": "2022-02-21",
      "updatedAt": "2022-02-21 11:12:19"
    }, {
      "actorId": 42,
      "movieId": 294,
      "createdAt": "2022-02-26",
      "updatedAt": "2022-02-26 09:49:55"
    }, {
      "actorId": 44,
      "movieId": 170,
      "createdAt": "2022-01-10",
      "updatedAt": "2022-01-10 08:42:06"
    }, {
      "actorId": 2,
      "movieId": 92,
      "createdAt": "2021-07-12",
      "updatedAt": "2021-07-12 16:44:01"
    }]
    
  ,{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('acts', null, {});

}
};
