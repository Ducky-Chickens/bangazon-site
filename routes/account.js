
'use strict';

const { Router } = require('express');
const router = Router();
const {
  renderAccount,
  updateAccount,
  renderAccountEdit,
  renderAddPaymentType,
  updatePaymentType,
  deletePaymentType
 } = require('../controllers/accountCtrl');

router.get("/account/edit", renderAccountEdit);
router.post("/account/edit", updateAccount);

router.get("/account/addPaymentType", renderAddPaymentType);
router.post("/account/addPaymentType", updatePaymentType);

router.post("/account/deletePaymentType", deletePaymentType);


router.get("/account", renderAccount);

// router.get("/account/orders", renderAccount);

// router.get("/account/paymentOptions", (req, res, next)=>{
//   res.render("paymentOptions", req.user);
// });


module.exports = router;