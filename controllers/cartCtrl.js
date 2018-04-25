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
      order.getProducts().then(products => {
        let orderTotal = 0;
        for (let i = 0; i < products.length; i++) {
          orderTotal = orderTotal + parseInt(products[i].price);
        }
        res.render('cart', { products, orderTotal, order });
      });
    });
};

module.exports.destroyAllOrderProducts = (req, res, next) =>  {
  console.log('\n\n\nshiiit yea made it to console\n\n\n');
}