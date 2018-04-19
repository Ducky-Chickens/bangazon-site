'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    payment_type_id: DataTypes.INTEGER
  }, {tableName: 'orders', timestamps: false});
  Order.associate = function(models) {
    Order.hasMany(models.OrderProduct, {
      foreignKey: 'order_id'
    }),
    Order.belongsTo(models.PaymentType, {
      foreignKey: 'payment_type_id'
    }),
    Order.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  }; 
  return Order;
};