'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    product_title: DataTypes.STRING,
    product_type: DataTypes.INTEGER,
    product_price: DataTypes.STRING,
    product_description: DataTypes.STRING,
    customer_id: DataTypes.STRING,
    listing_date: DataTypes.STRING
  }, {tableName: 'products', timestamps: false});
  Product.associate = function(models) {
    Product.hasMany(models.OrderProduct, {
      foreignKey: 'product_id' 
    });
    Product.belongsTo(models.ProductType, {
      foreignKey: 'product_id'
    })
  };
  return Product;
};