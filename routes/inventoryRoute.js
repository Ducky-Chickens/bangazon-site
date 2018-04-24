'use strict';
const { Router } = require('express');
const router = Router();

<<<<<<< HEAD
const { renderInventory, removeInventoryProduct, renderAddInventory, addInventory } = require('../controllers/inventoryCtrl');
=======
const { gatherInventory, renderInventory, unArrayCount, findMatch, renderAddInventory, addInventory } = require('../controllers/inventoryCtrl');
>>>>>>> master

router.get('/inventory', gatherInventory, unArrayCount, findMatch, renderInventory);
router.get('/inventory/add', renderAddInventory);
<<<<<<< HEAD
router.post('/inventory/add', addInventory, renderInventory);
router.delete('/inventory', removeInventoryProduct)
=======
router.post('/inventory/add', addInventory, gatherInventory, unArrayCount, findMatch, renderInventory);
>>>>>>> master

module.exports = router;


