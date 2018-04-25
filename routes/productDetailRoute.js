'use strict'; 
const { Router } = require('express');
const router = Router();

const { renderProductDetails, addProductToCart } = require('../controllers/productDetailCtrl.js');

// view product
router.get('/products/:id', renderProductDetails);
router.post('/products/:id', addProductToCart);

module.exports = router;