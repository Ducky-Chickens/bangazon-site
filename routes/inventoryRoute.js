'use strict';
const { Router } = require('express');
const router = Router();

const { renderInventory, removeInventoryProduct, renderAddInventory, addInventory } = require('../controllers/inventoryCtrl');

router.get('/inventory', renderInventory);
router.get('/inventory/add', renderAddInventory);
router.post('/inventory/add', addInventory, renderInventory);

router.delete('/inventory', removeInventoryProduct)

module.exports = router;


