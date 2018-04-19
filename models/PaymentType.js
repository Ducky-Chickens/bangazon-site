'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentType = sequelize.define('PaymentType', {
    customer_id: DataTypes.INTEGER,
    provider: DataTypes.STRING,
    account_number: DataTypes.STRING,
    active: DataTypes.TINYINT
  }, {tableName: 'payment_types', timestamps: false});
    PaymentType.associate = function(models) {
      PaymentType.belongsTo(models.Order, {
        as: 'payment type',
        foreignKey: 'payment_type_id'
      });
    };
  return PaymentType;
};