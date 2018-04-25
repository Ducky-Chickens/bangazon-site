'use strict';

const { Router } = require('express');
const router = Router();
const {
  renderOrderProducts,
  removeOrderProduct
} = require('../controllers/cartCtrl');

router.get('/cart', renderOrderProducts);
router.delete('/cart', removeOrderProduct);

module.exports = router;
