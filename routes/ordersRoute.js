'use strict';

const { Router } = require('express');
const router = Router();
const { renderOrderDetails } = require('../controllers/orderCtrl');

router.get('/orders/:id', renderOrderDetails);

module.exports = router;