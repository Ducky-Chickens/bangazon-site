'use strict';
const { Router } = require('express');
const router = Router();

const { renderInventory } = require('../controllers/inventoryCtrl');

router.get('/inventory', renderInventory);

module.exports = router;
