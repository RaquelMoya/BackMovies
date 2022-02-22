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
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    adult: DataTypes.BOOLEAN,
    genre: DataTypes.STRING,
    actors: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};