// const express = require('express');
// const app = express();
'use strict'

module.exports.renderLatestProducts = (req, res) => {
  const { sequelize } = req.app.get('models');
  sequelize.query('select * from products order by id desc limit 20', 
  { type: sequelize.QueryTypes.SELECT})
  .then(products => {
    console.log(products);
    res.render('home', {products});
  });
};
