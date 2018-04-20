'use strict'

module.exports.renderAllProductTypes = (req, res, next) => {
    const { ProductType, Product } = req.app.get('models');
    ProductType.findAll({
        include: [{ model: Product }]
    })
    .then(prodtypes=> {
        let newProdTypes = prodtypes.map(({Products})=> {
            const [a, b, c] = Products;
            Products = [a,b,c];
            return { Products };
        });
        res.status(200).json(newProdTypes);
    });
}

module.exports.renderOneProductType = (req, res, next) => {
    const { ProductType, Product } = req.app.get('models');
    ProductType.findOne({
        where: { id: req.params.id },
        include: [{ model: Product }]
    })
    .then(prodtypes => res.status(200).json(prodtypes));
}