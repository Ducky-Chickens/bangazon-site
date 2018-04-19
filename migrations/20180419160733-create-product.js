'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_title: {
        type: Sequelize.STRING
      },
      product_type: {
        type: Sequelize.INTEGER
      },
      product_price: {
        type: Sequelize.STRING
      },
      product_description: {
        type: Sequelize.STRING
      },
      customer_id: {
        type: Sequelize.STRING
      },
      listing_date: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};