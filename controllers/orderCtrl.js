'use strict';

module.exports.renderOrderDetails = (req, res, next) => {
  req.app.get('models').Order.find({where: {id: req.params.id}})
  .then(order => {
    order.getProducts()
    .then(orderWithProducts => {
      let orderTotal = 0;
      for (let i = 0; i < orderWithProducts.length; i++) {
        orderTotal = orderTotal + parseInt(orderWithProducts[i].price);
      }
      res.render('order', { orderWithProducts, order, orderTotal });
    })
  });
};