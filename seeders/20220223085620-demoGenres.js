'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('genres', [
      {
        "name": "Western",
        "createdAt": "2021-07-11",
        "updatedAt": "2021-07-11 08:39:10"
      }, {
        "name": "Comedy",
        "createdAt": "2021-12-30",
        "updatedAt": "2021-12-30 07:42:36"
      }, {
        "name": "Drama|War",
        "createdAt": "2021-11-06",
        "updatedAt": "2021-11-06 04:40:08"
      }, {
        "name": "Action|Adventure|Crime|Drama",
        "createdAt": "2021-07-25",
        "updatedAt": "2021-07-25 14:34:39"
      }, {
        "name": "Crime|Drama|Thriller",
        "createdAt": "2021-06-25",
        "updatedAt": "2021-06-25 17:29:17"
      }, {
        "name": "(no genres listed)",
        "createdAt": "2021-11-26",
        "updatedAt": "2021-11-26 12:12:00"
      }, {
        "name": "Comedy",
        "createdAt": "2021-09-03",
        "updatedAt": "2021-09-03 00:52:41"
      }, {
        "name": "Drama",
        "createdAt": "2022-02-07",
        "updatedAt": "2022-02-07 03:23:09"
      }, {
        "name": "Comedy|Drama|Mystery",
        "createdAt": "2021-06-05",
        "updatedAt": "2021-06-05 15:11:42"
      }, {
        "name": "Drama|Romance",
        "createdAt": "2021-11-22",
        "updatedAt": "2021-11-22 10:54:39"
      }]
      
  ,{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('genres', null, {});

}
};
