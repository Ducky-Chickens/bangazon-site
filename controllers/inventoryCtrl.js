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
    where: { user_id: req.user.id, id: req.query.id },
  })
    // .then(data => {
    //   Product.findAll({
    //     where: { user_id: req.user.id },
    //     include: [
    //       {
    //         model: OrderProduct
    //       }
    //     ]
    //   })
    //     .then(products => {
    //       res.status(200).render('inventory', { products });
    //     });
    // });
};
