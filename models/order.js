'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    payment_type: DataTypes.INTEGER
  }, {tableName: 'orders', timestamps: false});
  Order.associate = function(models) {
    Order.belongsToMany(models.Product, {
      through: 'order_products'
    })
  };
  return Order;
};