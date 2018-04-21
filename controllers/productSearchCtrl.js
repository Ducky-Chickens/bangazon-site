'use strict';
// require Options method from sequelize
const { Op } = require('sequelize');

//display products with matching keyword
module.exports.renderProductSearch = (req, res) => {
  const { Product } = req.app.get('models');
  // return all products where title LIKE user search
  Product.findAll({
    where: { title: { [Op.iLike]: `%${req.query.keywords}%`}}
  })
  .then(products => {
    let message = null;
    // if no products returned, show message
    if(products.length === 0){
      message = `Sorry, no products found matching your search`
    }
    res.render('search', { message, products });
  })
};  
