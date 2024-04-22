'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      order_userId: {
        type: Sequelize.STRING
      },
      totalprice: {
        type: Sequelize.INTEGER
      },
      feeShip: {
        type: Sequelize.INTEGER
      },
      totalDiscount: {
        type: Sequelize.INTEGER
      },
      totalCheckout: {
        type: Sequelize.INTEGER
      },
      order_shipping_method: {
        type: Sequelize.STRING
      },
      order_shipping_discount: {
        type: Sequelize.INTEGER
      },
      order_shipping_address: {
        type: Sequelize.STRING
      },
      order_payment_method: {
        type: Sequelize.STRING
      },
      order_products_list: {
        type: Sequelize.TEXT
      },
      order_trackingnumber: {
        type: Sequelize.STRING
      },
      order_status: {
        type: Sequelize.STRING
      },
      createAt: {
        type: Sequelize.DATE
      },
      updateAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};