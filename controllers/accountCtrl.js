

module.exports.updateAccount = (req, res, next) => {
  console.log('req.user', req.user);
  req.app.get("models").User.find({ where: { id: req.user.id } })
    .then(user => {
      return user.updateAttributes(req.body);
    })
    .then(updatedUser => {
      res.render("account", updatedUser.dataValues);
    })
}

module.exports.renderAccount = (req, res, next) => {
  const { PaymentType } = req.app.get('models');

  PaymentType.findAll({
    where: { user_id: req.user.id, active: 't', },
  }).then(paymentTypes => {
    res.render("account", {
      ...req.user,
      paymentTypes,
    });
  });
}

module.exports.renderAccountEdit = (req, res, next) => {
  res.render("accountEdit", req.user);
}

module.exports.renderAddPaymentType = (req, res, next) => {
  res.render("addPaymentType", req.user);
}

module.exports.updatePaymentType = (req, res, next) => {
  const provider = req.body.provider;
  const accountNumber = req.body.account_number;
  const userId = req.user.id;
  const { PaymentType } = req.app.get('models');

  if (provider && accountNumber && userId) {
    PaymentType.create({
      user_id: userId,
      provider,
      account_number: accountNumber,
      active: 't',
    }).then(() => {
      res.redirect('/account');
    });
  }
}

module.exports.deletePaymentType = (req, res, next) => {
  const paymentTypeId = +req.body.paymentTypeId;
  const { PaymentType } = req.app.get('models');

  PaymentType.update(
    { active: 'f' },
    {
      where: {
        id: paymentTypeId
      }
    }
  ).then(() => {
    res.status(201);
  });
  next();
};