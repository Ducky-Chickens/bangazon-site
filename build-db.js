'use strict';

let models = require('./models');

let { users } = require('./seeders/data/users');
let { products } = require('./seeders/data/products');
let { paymentTypes } = require('./seeders/data/paymentTypes');
let { orders } = require('./seeders/data/orders');
let { orderProducts } = require('./seeders/data/orderProducts');
let { productTypes } = require('./seeders/data/productTypes');

models.sequelize.sync({ force: true })
.then(() => {
  return models.User.bulkCreate(users);
})
.then(() => {
  return models.Product.bulkCreate(products);
})
.then(() => {
  return models.PaymentType.bulkCreate(paymentTypes);
})
.then(() => {
  return models.Order.bulkCreate(orders);
})
.then(() => {
  return models.OrderProduct.bulkCreate(orderProducts);
})
.then(() => {
  return models.ProductType.bulkCreate(productTypes);
})
.then(() => {
  process.exit();
});


// Proof that the bulkCreate succeeded =>
// --------------------------------------
// .then(() => {
//   return models.Director.findAll({ raw: true });
// })
// .then((directorsData) => {
//   console.log(directorsData);
//   process.exit();
// })