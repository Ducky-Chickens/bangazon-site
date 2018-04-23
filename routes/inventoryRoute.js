'use strict';
const { Router } = require('express');
const router = Router();

const { renderInventory, renderAddInventory } = require('../controllers/inventoryCtrl');

router.get('/inventory', renderInventory);
router.get('/inventory/add', renderAddInventory)

module.exports = router;
