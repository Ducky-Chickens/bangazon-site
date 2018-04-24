'use strict';
const { Router } = require('express');
const router = Router();

<<<<<<< HEAD
const { gatherInventory, renderInventory, unArrayCount, findMatch } = require('../controllers/inventoryCtrl');

router.get('/inventory', gatherInventory, unArrayCount, findMatch, renderInventory);
=======
const { renderInventory, renderAddInventory, addInventory } = require('../controllers/inventoryCtrl');

router.get('/inventory', renderInventory);
router.get('/inventory/add', renderAddInventory);
router.post('/inventory/add', addInventory, renderInventory);
>>>>>>> master

module.exports = router;


