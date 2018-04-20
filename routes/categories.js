'use strict';

const { Router } = require("express");
const productTypeRouter = Router();
const {  } = require('../controllers/productTypeCtrl');


productTypeRouter.get("/categories", renderAllProductTypes);
productTypeRouter.get("/categories/:id", renderOneProductType);

module.exports = productTypeRouter;