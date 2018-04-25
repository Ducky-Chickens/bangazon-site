'use strict';
module.exports = (sequelize, DataTypes) => {
  var order_product = sequelize.define(
    'order_product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    },
    { tableName: 'order_product', timestamps: false }
  );
  order_product.associate = function(models) {
    order_product.belongsTo(models.Order, {
      foreignKey: 'order_id',
      onDelete: 'CASCADE'
    }),
      order_product.belongsTo(models.Product, {
        foreignKey: 'product_id',
        onDelete: 'CASCADE'
      });
  };
  return order_product;
};