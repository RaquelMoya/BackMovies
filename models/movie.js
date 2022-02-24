'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //El modelo base con relacion uno a muchos, siempre lleva hasMany y exporta su id al modulo de relacion
      this.hasMany(models.Order, {
        foreignKey: 'movieId'
      });
      this.hasMany(models.Act, {
        foreignKey: 'actorId'
      });
      this.hasMany(models.GenreMovie, {
        foreignKey: 'genreId'
      });
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    adult: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    rented: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};