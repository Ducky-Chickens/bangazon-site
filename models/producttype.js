'use strict';

module.exports = (sequelize, DataTypes) => {
  var ProductType = sequelize.define('ProductType', {
    name: DataTypes.STRING
  }, {tableName: 'product_types', timestamps: false});
  ProductType.associate = function(models) {
      ProductType.hasMany(models.Product, {
        foreignKey: 'product_type_id'
      });
    };
  return ProductType;
};
