'use strict';

//display products with matching keyword
module.exports.renderProductSearch = (req, res) => {
  const { Product } = req.app.get('models');
  Product.findAll()
  .then(products => {
    // console.log(products);
    res.render('search', );
  })
};  