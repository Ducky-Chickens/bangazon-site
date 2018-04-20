'use strict';

const { Router } = require('express');
const router = Router();

const { renderLatestProducts } = require('../controllers/homeCtrl');


router.get('/', renderLatestProducts);



// pipe all other requests through the route modules
router.use(require('./authRoute'));

router.use(require('./inventoryRoute'));
router.use(require("./account"));
router.use(require('./productDetailRoute'));

module.exports = router;
