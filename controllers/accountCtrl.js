

module.exports.updateAccount = (req, res, next)=>{
  console.log('req.user',req.user);
  req.app.get("models").User.find({where: {id: req.user.id}})
  .then(user=>{
    return user.updateAttributes(req.body);
  })
  .then(updatedUser=>{
    res.render("account", updatedUser.dataValues);
  })
}

module.exports.renderAccount = (req, res, next)=>{
  res.render("account", req.user);
}
module.exports.renderAccountEdit = (req, res, next)=>{
  res.render("accountEdit", req.user);
}