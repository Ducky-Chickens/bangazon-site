'use strict';

let models = require('./models');

let { users } = require('./seeders/data/users');
let { products } = require('./seeders/data/products');
let { paymentTypes } = require('./seeders/data/paymentTypes');
let { orders } = require('./seeders/data/orders');
let { orderProducts } = require('./seeders/data/orderProducts');
let { productTypes } = require('./seeders/data/productTypes');

const { generateHash } = require('./config/passport-strat.js');

// hash user data passwords
users.forEach(user => {
  user["password"] = generateHash(user["password"])
})

models.sequelize.sync({ force: true })
.then(() => {
  return models.User.bulkCreate(users);
})
.then(() => {
  return models.ProductType.bulkCreate(productTypes);
})
.then(() => {
  return models.PaymentType.bulkCreate(paymentTypes);
})
.then(() => {
  return models.Order.bulkCreate(orders);
})
.then(() => {
  return models.Product.bulkCreate(products);
})
.then(() => {
  return models.order_product.bulkCreate(orderProducts);
})
.then(() => {
  process.exit();
});

