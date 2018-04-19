'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    customer_id: DataTypes.INTEGER,
    payment_type: DataTypes.INTEGER
  }, {tableName: 'orders', timestamps: false});
  Order.associate = function(models) {
    Order.belongsToMany(models.Products, {
      through: 'order_products'
    })
  };
  return Order;
};