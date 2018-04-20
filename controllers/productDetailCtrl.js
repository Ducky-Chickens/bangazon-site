'use strict';

//display product details
module.exports.renderProductDetails = (req, res) => {
  // get Product model to access sequelize method
  const { Product } = req.app.get('models');
  Product.findById(req.params.id)
  .then(product => {
    // pass product object to productDetails view
    res.render('productDetails', product.dataValues);
  })
};