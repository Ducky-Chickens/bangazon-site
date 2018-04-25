'use strict';

const { Router } = require('express');
const router = Router();
const { renderOrderProducts } = require('../controllers/cartCtrl');

router.get('/cart', renderOrderProducts);

module.exports = router;
