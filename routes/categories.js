'use strict';

const { Router } = require("express");
const productTypeRouter = Router();
const { renderAllProductTypes, renderOneProductType } = require('../controllers/productTypesCtrl');


productTypeRouter.get("/categories", renderAllProductTypes);
productTypeRouter.get("/categories/:id", renderOneProductType);

module.exports = productTypeRouter;