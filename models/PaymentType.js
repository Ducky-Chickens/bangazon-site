'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentType = sequelize.define('PaymentTypes', {
    customer_id: DataTypes.INTEGER,
    provider: DataTypes.STRING,
    account_number: DataTypes.STRING,
    active: DataTypes.TINYINT
  }, {tableName: 'payment_types', timestamps: false});
    PaymentType.associate = function(models) {
      PaymentType.belongsToMany(models.Order, {
        as: 'orders',
        foreignKey: 'payment_type_id'
      });
    };
  return PaymentType;
};