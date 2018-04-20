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