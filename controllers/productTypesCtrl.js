'use strict'

module.exports.renderAllProductTypes = (req, res, next) => {
    const { ProductType, Product } = req.app.get('models');
    ProductType.findAll({
        include: [{ model: Product }]
    })
    .then(prodtypes=> {
        let allTypes = JSON.parse(JSON.stringify(prodtypes));
        for(let i=0;i<allTypes.length;i++){
            allTypes[i].Products = allTypes[i].Products.slice(0, 3);
        }
        res.status(200).json(allTypes);
        // res.render('categories', {allProdTypes});
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

        // let allProdTypes = prodtypes.map(({Products})=> {
        //     const [a, b, c] = Products;
        //     Products = [a,b,c];
        //     return { Products };
        // });
        // prodtypes.Products = prodtypes.Products.slice(0,3);