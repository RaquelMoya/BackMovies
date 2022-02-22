'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', [
    {"title":"Death on the Nile", "sinopsis": "Basada en la novela de Agatha Christie, publicada en 1937. Muerte en el Nilo es un thriller de misterio dirigido por Kenneth Branagh sobre el caos emocional y las consecuencias letales que provocan los amores obsesivos.", "adult": true, "genre": "thriller", "actors":"Kenneth Branagh", "price":5, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Super-héros malgré lui", "sinopsis": "Cedric intenta ganarse la vida como actor, pero parece destinado al fracaso. Hasta que por fin consigue un papel protagonista: el del superhéroe Badman.", "adult": false, "genre": "comedy", "actors":"Philippe Lacheau","price":10, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"La pasajera", "sinopsis": "Los ocupantes de una furgoneta que transporta a una excursionista herida deben evitar sentarse a su lado durante el viaje.", "adult": true, "genre": "horror", "actors":"Ramiro Blas","price":8, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Azor", "sinopsis": "Yvan De Wiel, un banquero privado de Ginebra, viaja a Argentina en plena dictadura para sustituir a su socio, objeto de los más inquietantes rumores, y desaparecido de la noche a la mañana.", "adult": true, "genre": "thriller", "actors":"Fabrizio Rongione","price":7, "createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('movies', null, {});

}
};
