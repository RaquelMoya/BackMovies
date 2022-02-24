'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('acts', [
    {"actorId": 1,"movieId":1, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"actorId": 3,"movieId":1,"createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"actorId": 2,"movieId":2, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"actorId": 4,"movieId":3, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"actorId": 5,"movieId":4, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"actorId": 6,"movieId":5, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"actorId": 7,"movieId":5, "createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('acts', null, {});

}
};
