
'use strict';

const { Router } = require('express');
const router = Router();
const { renderAccount, updateAccount, renderAccountEdit, renderAccountOrders } = require('../controllers/accountCtrl');

router.get("/account/edit", renderAccountEdit);
router.post("/account/edit", updateAccount);
router.get('/account/orders', renderAccountOrders);
router.get("/account", renderAccount); 

// ------------------------------------------

// router.get("/account/paymentOptions", (req, res, next)=>{
//   res.render("paymentOptions", req.user);
// });


module.exports = router;