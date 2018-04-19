
'use strict';
const models = require('./models');
const { cutomers } = require('./data/cutomers');
const { products } = require('./data/products');
const { paymentTypes } = require('./data/paymentTypes');
const { orders } = require('./data/orders');

models.sequelize.sync({ force: true })
  .then(() => {
    return models.Director.bulkCreate(cutomers);
  })
  .then(() => {
    return models.Show.bulkCreate(products);
  })
  .then(() => {
    return models.User.bulkCreate(paymentTypes);
  })
  .then(() => {
    return models.User.bulkCreate(orders);
  })
  .then(() => {
    process.exit();
  });