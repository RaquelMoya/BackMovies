'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', [
    {"title":"Death on the Nile", "sinopsis": "Basada en la novela de Agatha Christie, publicada en 1937. Muerte en el Nilo es un thriller de misterio dirigido por Kenneth Branagh sobre el caos emocional y las consecuencias letales que provocan los amores obsesivos.", "adult": true, "genre": "thriller", "actors":"Kenneth Branagh", "price":5, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Super-héros malgré lui", "sinopsis": "Cedric intenta ganarse la vida como actor, pero parece destinado al fracaso. Hasta que por fin consigue un papel protagonista: el del superhéroe Badman.", "adult": false, "genre": "comedy", "actors":"Philippe Lacheau","price":10, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"La pasajera", "sinopsis": "Los ocupantes de una furgoneta que transporta a una excursionista herida deben evitar sentarse a su lado durante el viaje.", "adult": true, "genre": "horror", "actors":"Ramiro Blas","price":8, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Azor", "sinopsis": "Yvan De Wiel, un banquero privado de Ginebra, viaja a Argentina en plena dictadura para sustituir a su socio, objeto de los más inquietantes rumores, y desaparecido de la noche a la mañana.", "adult": true, "genre": "thriller", "actors":"Fabrizio Rongione","price":7, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"The Medium", "sinopsis": "Un documental sobre chamanismo se convierte en una horrible pesadilla cuando una muchacha es poseída por algo diferente a la diosa que todos esperaban.", "adult": true, "genre": "horror", "actors":"Sawanee Utoomma", "price":5, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Ainbo: Spirit of the Amazon", "sinopsis": "La pequeña Ainbo vive en lo más profundo de la selva amazónica. Tras perder a su madre y pelearse con los adultos de su aldea, esta joven arquera emprende un viaje para salvar a su pueblo del poder destructor del hombre blanco.", "adult": false, "genre": "comedy", "actors":"animation","price":10, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Un triomphe", "sinopsis": "Aunque esté en el paro con frecuencia, Etienne (Kad Meran) es un entrañable actor que dirige un taller de teatro en un centro penitenciario", "adult": false, "genre": "comedy", "actors":"Kad Merad","price":8, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"The Godfather", "sinopsis": "América, años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. ", "adult": true, "genre": "thriller", "actors":"Marlon Brando","price":7, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Marry Me", "sinopsis": "Las superestrellas de la música: Kat Valdez (Jennifer Lopez) y Bastian (Maluma)se están por casar frente a una audiencia mundial de fans.", "adult": false, "genre": "comedy", "actors":"Jennifer Lopez", "price":5, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"CODA", "sinopsis": "Ruby (Emilia Jones) es el único miembro oyente de una familia de sordos. A sus 17 años, trabaja por la mañana con sus padres y su hermano en Gloucester, Massachusetts, antes de ir a clase, tratando de mantener a flote el negocio pesquero familiar.", "adult": true, "genre": "drama", "actors":"Emilia Jones","price":10, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"The Lost Daughter", "sinopsis": "Sola en unas vacaciones junto al mar, Leda (Olivia Colman) se ve consumida por una joven madre y su hija mientras las observa en la playa.", "adult": true, "genre": "drama", "actors":"Olivia Colman","price":8, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Mothering Sunday", "sinopsis": "El matrimonio Niven perteneciente a la aristocracia inglesa y que ha perdido a sus hijos en la guerra, se prepara para celebrar el Día de la Madre y el compromiso de Paul, el hijo de sus vecinos, con Emma Hobday.", "adult": true, "genre": "drama", "actors":"Colin Firth","price":7, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Flee", "sinopsis": "Un refugiado afgano residente en Dinamarca acepta contar su historia personal con la condición de que no se revele su identidad.", "adult": true, "genre": "comedy", "actors":"animation", "price":5, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Spiritwalker", "sinopsis": "Cada doce horas, un hombre despierta en el cuerpo de una persona distinta, sin saber dónde se encuentra e incapaz de recordar quién era originalmente.", "adult": true, "genre": "thriller", "actors":"Yoon Kye-sang","price":10, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Competencia oficial", "sinopsis": "En busca de trascendencia y prestigio social, un empresario multimillonario decide hacer una película que deje huella.", "adult": false, "genre": "comedy", "actors":"Antonio Banderas","price":8, "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"title":"Illusions perdues", "sinopsis": "Lucien, un joven francés, sueña con forjar su destino como poeta.", "adult": false, "genre": "comedy", "actors":"Benjamin Voisin","price":7, "createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ],{});
},

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('movies', null, {});

}
};