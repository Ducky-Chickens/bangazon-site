'use strict';
const { Router } = require('express');
const router = Router();

const { gatherInventory, renderInventory, unArrayCount, findMatch, renderAddInventory, addInventory } = require('../controllers/inventoryCtrl');

router.get('/inventory', gatherInventory, unArrayCount, findMatch, renderInventory);
router.get('/inventory/add', renderAddInventory);
router.post('/inventory/add', addInventory, gatherInventory, unArrayCount, findMatch renderInventory);

module.exports = router;


