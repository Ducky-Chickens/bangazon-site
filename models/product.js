'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    product_title: DataTypes.STRING,
    product_type: DataTypes.INTEGER,
    product_price: DataTypes.STRING,
    product_description: DataTypes.STRING,
    user_id: DataTypes.STRING,
    listing_date: DataTypes.STRING
  }, {tableName: 'products', timestamps: false});
  Product.associate = function(models) {
    Product.belongsToMany(models.Order, {
      through: 'OrderProducts',
      as: 'order products',
      foreignKey: 'product_id'
    });
  };
  return Product;
};