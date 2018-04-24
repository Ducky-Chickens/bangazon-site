'use strict';
const { Router } = require('express');
const router = Router();

const { renderProductSearch } = require('../controllers/productSearchCtrl.js');

// view search results
router.get('/search', renderProductSearch);

module.exports = router;