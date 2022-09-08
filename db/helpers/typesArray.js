let products = require('../data/products.json');

products = JSON.parse(products);

export function typesFromProducts(products) {
    let productTypes = [];

    for(let i in products) {
        productTypes.push(i.type)
    }

    productTypes = Set(productTypes);

    return productTypes;
};