'use strict';
const { Router } = require('express');
const router = Router();

const { renderInventory } = require('../controllers/inventoryCtrl');

router.get('/inventory', renderInventory);
router.get('/inventory/add', (req,res,next)=>res.render('product-form'))

module.exports = router;
