'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('genreMovies', [
      {
        "genreId": 10,
        "movieId": 62,
        "createdAt": "2021-12-05",
        "updatedAt": "2021-12-05 17:45:24"
      }, {
        "genreId": 3,
        "movieId": 115,
        "createdAt": "2021-05-02",
        "updatedAt": "2021-05-02 22:25:08"
      }, {
        "genreId": 2,
        "movieId": 197,
        "createdAt": "2022-03-04",
        "updatedAt": "2022-03-04 15:39:15"
      }, {
        "genreId": 4,
        "movieId": 373,
        "createdAt": "2021-12-11",
        "updatedAt": "2021-12-11 16:58:03"
      }, {
        "genreId": 7,
        "movieId": 104,
        "createdAt": "2021-07-22",
        "updatedAt": "2021-07-22 05:20:39"
      }, {
        "genreId": 9,
        "movieId": 352,
        "createdAt": "2022-02-23",
        "updatedAt": "2022-02-23 13:17:45"
      }, {
        "genreId": 5,
        "movieId": 291,
        "createdAt": "2021-03-13",
        "updatedAt": "2021-03-13 14:21:09"
      }, {
        "genreId": 6,
        "movieId": 393,
        "createdAt": "2021-03-27",
        "updatedAt": "2021-03-27 05:59:58"
      }, {
        "genreId": 5,
        "movieId": 28,
        "createdAt": "2021-12-31",
        "updatedAt": "2021-12-31 21:10:00"
      }, {
        "genreId": 9,
        "movieId": 214,
        "createdAt": "2021-08-16",
        "updatedAt": "2021-08-16 06:15:55"
      }
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('genreMovies', null, {});

}
};
