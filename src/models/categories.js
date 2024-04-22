"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Categories.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cate_name: {
        type: DataTypes.STRING(255),
      },
      cate_img: {
        type: DataTypes.STRING(255),
      },
      cate_code: {
        type: DataTypes.STRING(255),
      },
      createAt: {
        type: DataTypes.DATE,
      },
      updateAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "Categories",
      timestamps: false,
    }
  );
  return Categories;
};
