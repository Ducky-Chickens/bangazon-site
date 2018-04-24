'use strict';

let trueCount;
let values;
let productObj;
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

module.exports.renderInventory = (req, res, next) => {
  res.render('inventory', {matcher});
}


module.exports.renderAddInventory = (req, res) => {
  const { ProductType } = req.app.get('models');
  ProductType.findAll()
    .then(productTypes => {
      res.status(200).render('product-form', { productTypes });
    });
};

module.exports.addInventory = (req, res, next) => {
  const { Product } = req.app.get('models'); 
  req.body.user_id = req.user.id;
  req.body.listing_date = new Date().toISOString().split('T')[0];
  Product.create(req.body)
  .then(res=>res.status(201))
  .catch(err=>err.status(501).json(err));
  next();
}

module.exports.removeInventoryProduct = (req, res, next) => {
  const { Product, order_product, sequelize } = req.app.get('models');
  Product.destroy({
    where: {
      user_id: req.user.id,
      id: req.query.id
    },
  })
  .then(data => {
    Product.findAll({
      where: { user_id: req.user.id }
    })
    .then(products => {
      // res.status(200).render('inventory', { matcher });
      res.redirect('/inventory');
    });
  });
};

