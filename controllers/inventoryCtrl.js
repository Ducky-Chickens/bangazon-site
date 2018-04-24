'use strict';

let trueCount;
let values;
let productObj;
let conditional;
let easyAccess;
let matcher;

module.exports.gatherInventory = (req, res, next) => {
  const { Product, Order, sequelize } = req.app.get('models');
  Product.findAll({
    where: { user_id: req.user.id }
  })
  .then(products => {
    productObj = products;
    let promiseArr = products.map(product => {
      return sequelize.query(`select count(product_id), product_id from order_product where product_id = ${product.id} group by product_id`, 
      { type: sequelize.QueryTypes.SELECT})
    });
    Promise.all(promiseArr)
    .then(results => {
      trueCount = results.filter(count => count.length);
      next();
    })
  });
};

module.exports.unArrayCount = (req, res, next) => {
  easyAccess = trueCount.map(item => {
    return item[0];
  })
  next();
}

module.exports.findMatch = (req, res, next) => {
  matcher = productObj.map(product => {
    let foundObject = easyAccess.find(countObj => countObj.product_id === product.dataValues.id)
    if (foundObject) {
      product.dataValues.count = parseInt(foundObject.count);
      return {...product}
    } return product
  })
  next();
}

// if the product id is equal to the product of the first index item of any item in this array print the id

module.exports.renderInventory = (req, res, next) => {
  res.render('inventory', {matcher});
  // res.json(matcher);
  console.log('what the fuckl', matcher);
}
