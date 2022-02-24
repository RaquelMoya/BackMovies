'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Act extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Actor, {
        foreignKey: 'actorId'
      });
      this.belongsTo(models.Movie, {
        foreignKey: "movieId"
      });
    }
  }
  Act.init({
    actorId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Act',
  });
  return Act;
};