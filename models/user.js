'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    tableName: 'users', timestamps: false
  }); 
  User.associate = function(models) {
    User.hasMany(models.PaymentType, {
      foreignKey: "user_id"
    });
    User.hasMany(models.Order, {
      foreignKey: "user_id"
    });
    User.hasMany(models.Product, {
      foreignKey: "user_id"
    });
  };
  return User;
};