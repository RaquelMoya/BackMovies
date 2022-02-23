'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('actors', [
    {"name":"Jhonny", "surname": "Depp", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Jennifer", "surname": "Lawrence", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Penelope", "surname": "Cruz", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Luis", "surname": "Tosar", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Paul", "surname": "Walker", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Christian", "surname": "Bale", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Jessica", "surname": "Alba", "createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('actors', null, {});

}
};
