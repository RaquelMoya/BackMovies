'use strict';

const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
//name,surname,age,phone,adress,email, password
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
    {"name":"Frannie", "surname": "Milvarnie", "age": 24, "phone": 124534, "adress": "c/uno", "email":"fmilvarnie0@trellian.com","password":bcrypt.hashSync("cwoxsprq", Number.parseInt(authConfig.rounds)), "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"John", "surname": "Depp", "age": 73, "phone": 124654, "adress": "c/dos", "email":"jdepp30@trellian.com","password":bcrypt.hashSync("cwgefd", Number.parseInt(authConfig.rounds)), "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Marge", "surname": "Bouvier", "age": 45, "phone": 165443, "adress": "c/tres", "email":"margeBouvier0@trellian.com","password":bcrypt.hashSync("nhcxsfd", Number.parseInt(authConfig.rounds)), "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Dexter", "surname": "Maddox", "age": 33, "phone": 8765345, "adress": "c/cuatro", "email":"dexter50@trellian.com","password":bcrypt.hashSync("mjgsdf", Number.parseInt(authConfig.rounds)), "createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('usuarios', null, {});

}
};
