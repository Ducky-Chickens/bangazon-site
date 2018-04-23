'use strict'

module.exports.renderAllProductTypes = (req, res, next) => {
    const { ProductType, Product } = req.app.get('models');
    ProductType.findAll({
        include: [{ model: Product }]
    })
    .then(prodtypes=> {
        let allTypes = JSON.parse(JSON.stringify(prodtypes));
        for(let i=0;i<allTypes.length;i++){
            allTypes[i].total_products = allTypes[i].Products.length;
            allTypes[i].Products = allTypes[i].Products.slice(0, 3);
        }
        res.render('categories', {allTypes});
    });
}

module.exports.renderOneProductType = (req, res, next) => {
    const { ProductType, Product } = req.app.get('models');
    ProductType.findOne({
        where: { id: req.params.id },
        include: [{ model: Product }]
    })
    .then(typeprods => res.render('category-products', {typeprods}));
}
