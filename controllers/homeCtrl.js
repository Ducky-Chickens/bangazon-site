// const express = require('express');
// const app = express();
'use strict'

module.exports.renderLatestProducts = (req, res) => {
  const { Product } = req.app.get('models');
  Product.sequelize.query('select * from products order by id desc limit 20')
  .then(products => {
    console.log(products);
    res.render('home', products);
  });
};
