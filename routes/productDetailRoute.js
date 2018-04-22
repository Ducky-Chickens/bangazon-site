'use strict'; 
const { Router } = require('express');
const router = Router();

const { renderProductDetails } = require('../controllers/productDetailCtrl.js');

// view product
router.get('/products/:id', renderProductDetails);

module.exports = router;