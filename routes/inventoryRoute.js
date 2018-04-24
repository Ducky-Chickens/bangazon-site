'use strict';
const { Router } = require('express');
const router = Router();

const { gatherInventory, renderInventory, unArrayCount, findMatch } = require('../controllers/inventoryCtrl');

router.get('/inventory', gatherInventory, unArrayCount, findMatch, renderInventory);

module.exports = router;
