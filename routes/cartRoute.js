'use strict';

const { Router } = require('express');
const router = Router();
const { renderOrderProducts, destroyAllOrderProducts } = require('../controllers/cartCtrl');

router.get('/cart', renderOrderProducts);
router.delete('/cart/all', destroyAllOrderProducts);

module.exports = router;
