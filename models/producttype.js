'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProductType = sequelize.define('ProductType', {
    type_name: DataTypes.STRING
  }, {tableName: 'product_types', timestamps: false});
  ProductType.associate = function(models) {
      ProductType.belongsToMany(models.Product, {
        as: 'products',
        foreignKey: 'product_type_id'
      });
    };
  return ProductType;
};