'use strict';

const { Router } = require('express');
const router = Router();
const { renderOrderProducts, renderCheckoutPayments, checkOut } = require('../controllers/cartCtrl');

router.get('/cart', renderOrderProducts);
router.get('/cart/checkout/:id', renderCheckoutPayments);
router.patch('/cart/checkout', checkOut)
router.get('/cart/complete', (req, res) => res.render('complete'))

module.exports = router;
