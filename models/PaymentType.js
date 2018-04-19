'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentType = sequelize.define('PaymentType', {
    customer_id: DataTypes.INTEGER,
    provider: DataTypes.STRING,
    account_number: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {tableName: 'payment_types', timestamps: false});
    PaymentType.associate = function(models) {
      PaymentType.hasMany(models.Order, {
        foreignKey: 'payment_type_id'
      });
    };
  return PaymentType;
};