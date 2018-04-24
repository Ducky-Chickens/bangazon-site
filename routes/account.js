
'use strict';

const { Router } = require('express');
const router = Router();

const {
  renderAccount,
  updateAccount,
  renderAccountEdit,
  renderAddPaymentType,
  updatePaymentType,
  deletePaymentType,
  renderAccountOrders
 } = require('../controllers/accountCtrl');

router.get("/account/edit", renderAccountEdit);
router.post("/account/edit", updateAccount);
router.get('/account/orders', renderAccountOrders);
router.get("/account", renderAccount); 

router.get("/account/addPaymentType", renderAddPaymentType);
router.post("/account/addPaymentType", updatePaymentType);
router.delete("/account/deletePaymentType", deletePaymentType, renderAccount);

router.get("/account", renderAccount);

module.exports = router;