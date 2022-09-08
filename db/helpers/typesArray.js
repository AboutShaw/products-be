const products = require('../data/products.json');

function typesFromProducts(products) {
    let productTypes = [];

    for(let i in products) {
        productTypes.push(i.type)
    }

    productTypes = Set(productTypes);

    return productTypes;
}

export default typesFromProducts;