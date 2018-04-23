'use strict';

module.exports.updateAccount = (req, res, next)=>{
  req.app.get('models').User.find({where: {id: req.user.id}})
  .then(user => {
    return user.updateAttributes(req.body);
  })
  .then(updatedUser => {
    res.render('account', updatedUser.dataValues);
  });
};

module.exports.renderAccountOrders = (req, res, next) => {
  req.app.get('models').Order.findAll({where: {user_id: req.user.id}})
  .then(orders => {
    res.render('accountOrders', { orders });
  });
};

module.exports.renderAccount = (req, res, next) => {
  res.render('account', req.user);
};

module.exports.renderAccountEdit = (req, res, next) => {
  res.render('accountEdit', req.user);
};