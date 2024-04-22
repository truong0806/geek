"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      order_userId: DataTypes.STRING,
      totalprice: DataTypes.INTEGER,
      feeShip: DataTypes.INTEGER,
      totalDiscount: DataTypes.INTEGER,
      totalCheckout: DataTypes.INTEGER,
      order_shipping_method: DataTypes.STRING,
      order_shipping_discount: DataTypes.INTEGER,
      order_shipping_address: DataTypes.STRING,
      order_payment_method: DataTypes.STRING,
      order_products_list: DataTypes.TEXT("long"),
      order_trackingnumber: DataTypes.STRING,
      order_status: DataTypes.STRING,
      createAt: DataTypes.DATE,
      updateAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
