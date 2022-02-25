'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('genreMovies', [
    {"genreId": 1,"movieId":1, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"genreId": 3,"movieId":1, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"genreId": 2,"movieId":2, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"genreId": 4,"movieId":3, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"genreId": 5,"movieId":4, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"genreId": 6,"movieId":5, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"genreId": 7,"movieId":5, "createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('genreMovies', null, {});

}
};
