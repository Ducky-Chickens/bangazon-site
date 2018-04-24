'use strict';

//display product details
module.exports.renderProductDetails = (req, res) => {
  // get Product model to access sequelize method
  const { Product } = req.app.get('models');
  Product.findById(req.params.id)
  .then(product => {
    // pass product object to productDetails view
    res.render('productDetails', product.dataValues);
  })
};  


module.exports.addProductToCart = (req, res) => {
  req.app.get("models").Order.find({where: {user_id: req.session.passport.user.id, payment_type_id: null}})
  .then(order=>{
    // if there isnt one, create one and post it to the orders table
    if(!order){
      let order = {
        id: null,
        user_id: req.session.passport.user.id,
        payment_type_id: null,
      }
      req.app.get("models").Order.create(order)
      .then(newOrder=>{

        let product = {
          product_id: +req.body.product_id,
          order_id: newOrder.dataValues.id,
        }
        return req.app.get("models").order_product.create(product)
      })
      .then(newProduct=>{
        // redirect to "cart" page?
      })
      

    } else if(order){
      
      let product = {
        id: null,
        product_id: +req.body.product_id,
        order_id: order.dataValues.id,
      }
      req.app.get("models").order_product.create(product)
      .then(newProduct=>{
        // redirect to "cart" page?
      })

    } 
  })

};  

