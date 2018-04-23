'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderProduct = sequelize.define('OrderProduct', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {tableName: 'order_products', timestamps: false});
  OrderProduct.associate = function(models) {
    OrderProduct.belongsTo(models.Order, {
      foreignKey: 'order_id',
      onDelete: 'CASCADE',
    }),
    OrderProduct.belongsTo(models.Product, {
      foreignKey: 'product_id',
      onDelete: 'CASCADE',
    });
  };
  return OrderProduct;
};