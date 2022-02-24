'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //El modelo que establece la relacion entre otros modelos, siempre lleva el belongsTo con la id externa del modulo correspondiente
      this.belongsTo(models.Movie, {
        foreignKey: "movieId"
      });
      this.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }

  Order.init({
    movieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rentingDate: DataTypes.DATE,
    returnDate:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};