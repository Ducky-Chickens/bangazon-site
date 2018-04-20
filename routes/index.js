'use strict';

const { Router } = require('express');
const router = Router();

const { renderLatestProducts } = require('../controllers/homeCtrl');


router.get('/', renderLatestProducts);

// pipe all other requests through the route modules
router.use(require('./authRoute'));
// router.use(require('./foo'));

module.exports = router;
