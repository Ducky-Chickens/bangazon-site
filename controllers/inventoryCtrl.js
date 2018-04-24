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

module.exports.removeInventoryProduct = (req, res) => {
  const { Product, OrderProduct } = req.app.get('models');
  Product.destroy({
    where: { 
      user_id: req.user.id, 
      id: req.query.id },
  })
    .then(data => {
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
    });
};

module.exports.renderAddInventory = (req, res) => {
  const { ProductType } = req.app.get('models');
  ProductType.findAll()
    .then(productTypes => {
      res.status(200).render('product-form', { productTypes });
    });
};

module.exports.addInventory = (req, res, next) => {
  const { Product } = req.app.get('models'); 
  req.body.user_id = req.user.id;
  req.body.listing_date = new Date().toISOString().split('T')[0];
  Product.create(req.body)
  .then(res=>res.status(201))
  .catch(err=>err.status(501).json(err));
  next();
}
