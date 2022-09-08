let products = require('../data/products.json');

products = JSON.parse(products);

function flattenObject(products) {
    let flatProducts = {};

    for (let i in products) {
        if (!products.hasOwnProperty(i)) continue;

        if ((typeof products[i]) == 'object' && products[i] !== null) {
            let flatObject = flattenObject(products[i]);
            for (let x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            flatProducts[i] = ob[i];
        }
    }
    return flatProducts;
}

export default flattenObject;