'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('genres', [
    {"name":"Horror","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Comedy", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Animation", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Thriller", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Drama", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Romantic", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Apocaliptic", "createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('genres', null, {});

}
};
