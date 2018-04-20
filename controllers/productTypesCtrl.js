'use strict'


module.exports.renderAllProductTypes = (req, res, next) => {
    const { ProductType, Product } = req.app.get('models');
    ProductType.findAll({
        include: [{ 
            model: Product, 
        }]
    })
    .then(prodtypes=> res.status(200).json(prodtypes));
}

module.exports.renderOneProductType = (req, res, next) => {
    const { ProductType, Product } = req.app.get('models');
    ProductType.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Product,
        }]
    })
    .then(prodtypes => res.status(200).json(prodtypes));
}