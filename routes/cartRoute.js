'use strict';

const { Router } = require('express');
const router = Router();
const { renderOrderProducts, renderCheckoutPayments, checkOut, removeOrderProduct } = require('../controllers/cartCtrl');

router.get('/cart', renderOrderProducts);
router.get('/cart/checkout/:id', renderCheckoutPayments);
router.patch('/cart/checkout', checkOut)
router.get('/cart/complete', (req, res) => res.render('complete'))
router.delete('/cart', removeOrderProduct);

module.exports = router;
