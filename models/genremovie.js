'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GenreMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Genre, {
        foreignKey: 'genreId'
      });
      this.belongsTo(models.Movie, {
        foreignKey: "movieId"
      });
    }
  }
  GenreMovie.init({
    genreId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GenreMovie',
  });
  return GenreMovie;
};