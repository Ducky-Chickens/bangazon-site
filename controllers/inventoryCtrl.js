'use strict';

module.exports.renderInventory = (req, res) => {
  const { Product, OrderProduct } = req.app.get('models');
  Product.findAll({
    where: { user_id: req.user.id },
    include: [
      {
        model: OrderProduct
      }
    ]
  })
    .then(products => {
      res.status(200).render('inventory', { products });
    });
};

module.exports.renderAddInventory = (req, res) => {
  const { ProductType } = req.app.get('models');
  ProductType.findAll()
    .then(productTypes => {
      res.status(200).render('product-form', { productTypes });
    });
};