'use strict';
const { Router } = require('express');
const router = Router();

const { gatherInventory, renderInventory, unArrayCount, findMatch, renderAddInventory, addInventory, removeInventoryProduct } = require('../controllers/inventoryCtrl');

router.get('/inventory', gatherInventory, unArrayCount, findMatch, renderInventory);
router.get('/inventory/add', renderAddInventory);
router.post('/inventory/add', addInventory, gatherInventory, unArrayCount, findMatch, renderInventory);
router.delete('/inventory', removeInventoryProduct)

module.exports = router;


