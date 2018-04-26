'use strict';
// require Options method from sequelize
const { Op } = require('sequelize');

module.exports.renderOrderProducts = (req, res, next) => {
  req.app
    .get('models')
    .Order.find({
      where: { user_id: req.user.id, payment_type_id: { [Op.eq]: null } }
    })
    .then(order => {
      if (order) {
        order.getProducts().then(products => {
          let orderTotal = 0;
          for (let i = 0; i < products.length; i++) {
            orderTotal = orderTotal + parseInt(products[i].price);
          }
          res.render('cart', { products, orderTotal, order });
        });
      } else {
        res.render('cart');
      }
    });
};


module.exports.destroyAllOrderProducts = (req, res, next) =>  {
  console.log('\n\n\nshiiit yea made it to console\n\n\n');
  const { order_product } = req.app.get('models');
  order_product.destroy({
    where: {
      order_id: req.query.id
    },
  })
    .then(data => {
      res.redirect('/cart');
  });
}

module.exports.removeOrderProduct = (req, res, next) => {
  const { Product, order_product } = req.app.get('models');
  order_product
    .destroy({
      where: {
        order_id: req.query.order,
        product_id: req.query.product
      }
    })
    .then(data => {
      res.redirect('/cart');
    });
};

module.exports.renderCheckoutPayments = (req, res, next) => {
  req.app.get('models').
  PaymentType.findAll({
    where: { user_id: req.user.id, active: 't', },
  }).then(paymentTypes => {
    res.render("checkout", {
      ...req.user,
      paymentTypes,
    });
  });
}

module.exports.checkOut = (req, res, next) => {
  req.app.get('models').Order.find({
    where: {user_id: req.user.id, payment_type_id: { [Op.eq]: null }}
  }).then(order => {
    req.app.get('models').Order.update(
      { payment_type_id: req.body.payType },
      {
        where: {
          id: order.id
        }
      }
    ).then(() => {
      res.redirect('/cart/complete');
      res.render('complete');
    });
  });
};

