'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentType = sequelize.define('PaymentType', {
    user_id: DataTypes.INTEGER,
    provider: DataTypes.STRING,
    account_number: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {tableName: 'payment_types', timestamps: false});
    PaymentType.associate = function(models) {
      PaymentType.hasMany(models.Order, {
        foreignKey: 'payment_type_id'
      }),
      PaymentType.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
    };
  return PaymentType;
};