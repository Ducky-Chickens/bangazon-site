'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    type: DataTypes.INTEGER,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    listing_date: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {tableName: 'products', timestamps: false});
  Product.associate = function(models) {
    Product.hasMany(models.OrderProduct, {
      foreignKey: 'product_id' 
    });
    Product.belongsTo(models.ProductType, {
      foreignKey: 'product_type_id'
    })
    Product.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  };
  return Product;
};