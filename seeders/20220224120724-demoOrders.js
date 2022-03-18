'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
    {"movieId": 1,"userId":1, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"movieId": 3,"userId":1, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"movieId": 2,"userId":2, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"movieId": 4,"userId":3, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"movieId": 5,"userId":4, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"movieId": 6,"userId":5, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"movieId": 7,"userId":5, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"movieId": 8,"userId":8, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"movieId": 9,"userId":5, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"movieId": 10,"userId":10, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"movieId": 11,"userId":5, "rentingDate": "2022-01-28", "returnDate": "2022-02-20", "createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('orders', null, {});

}
};
