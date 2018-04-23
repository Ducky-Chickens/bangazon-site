'use strict';
const { Router } = require('express');
const router = Router();

const { renderInventory, removeInventoryProduct } = require('../controllers/inventoryCtrl');

router.get('/inventory', renderInventory);

router.delete('/inventory', removeInventoryProduct)

module.exports = router;
