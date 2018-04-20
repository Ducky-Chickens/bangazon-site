'use strict';

module.exports.renderInventory = (req, res) => {
  const { Product, OrderProduct } = req.app.get('models');

  // TODO: Count products sold to find how many products left and how many sold

  // req.userId

  // TODO: Replace user id with my user name
  Product.findAll({
    where: { user_id: 1 },
    include: [
      {
        model: OrderProduct
      }
    ]
  })
    .then(products => {
      console.log('products', products);
      res.status(200).render('inventory', { products });
    });
};

const getProducts = (id) => {

};