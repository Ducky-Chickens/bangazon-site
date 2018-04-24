'use strict';
const { Router } = require('express');
const router = Router();

const { renderInventory, renderAddInventory, addInventory } = require('../controllers/inventoryCtrl');

router.get('/inventory', renderInventory);
router.get('/inventory/add', renderAddInventory);
router.post('/inventory/add', addInventory);

module.exports = router;
