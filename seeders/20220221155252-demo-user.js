'use strict';

const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
//name,surname,age,phone,adress,email, password
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
    {"name":"Raquel", "surname": "Moya", "age": 31, "phone": 124534, "adress": "c/uno", "email":"raquel@gmail.com","password":bcrypt.hashSync("admin", Number.parseInt(authConfig.rounds)), "nickname": "administrador", "rol": true, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"John", "surname": "Depp", "age": 73, "phone": 124654, "adress": "c/dos", "email":"jdepp30@trellian.com","password":bcrypt.hashSync("user", Number.parseInt(authConfig.rounds)), "nickname": "usuario","rol": false, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Marge", "surname": "Bouvier", "age": 45, "phone": 165443, "adress": "c/tres", "email":"margeBouvier0@trellian.com","password":bcrypt.hashSync("user", Number.parseInt(authConfig.rounds)), "nickname": "ahfos","rol": false, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Dexter", "surname": "Maddox", "age": 33, "phone": 8765345, "adress": "c/cuatro", "email":"dexter50@trellian.com","password":bcrypt.hashSync("user", Number.parseInt(authConfig.rounds)), "nickname": "gravd","rol": false,"createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Bonnie", "surname": "Winterbottom", "age": 42, "phone": 763245, "adress": "c/cinco", "email":"bonnie0@trellian.com","password":bcrypt.hashSync("user", Number.parseInt(authConfig.rounds)), "nickname": "ytsdcvxc","rol": false,"createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Laurel", "surname": "Castillo", "age": 25, "phone": 6534223, "adress": "c/seis", "email":"laurel@trellian.com","password":bcrypt.hashSync("user", Number.parseInt(authConfig.rounds)), "nickname": "jytsdc","rol": false,"createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Usher", "surname": "Milston", "age": 23, "phone": 35431, "adress": "c/siete", "email":"milston0@trellian.com","password":bcrypt.hashSync("user", Number.parseInt(authConfig.rounds)), "nickname": "bvcsds","rol": false,"createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"name":"Connor", "surname": "Wals", "age": 29, "phone": 642345, "adress": "c/ocho", "email":"connor@trellian.com","password":bcrypt.hashSync("user", Number.parseInt(authConfig.rounds)), "nickname": "ynsdc","rol": false,"createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('users', null, {});

}
};
