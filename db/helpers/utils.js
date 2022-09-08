let products = JSON.parse(products);

export function flattenObject(products) {
    let flatProducts = {};

    for (let i in products) {
        if (!products.hasOwnProperty(i)) continue;

        if ((typeof products[i]) == 'object' && products[i] !== null) {
            let flatProducts = flattenObject(products[i]);
            for (let x in flatProducts) {
                if (!flatProducts.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatProducts[x];
            }
        } else {
            flatProducts[i] = ob[i];
        }
    }
    return flatProducts;
};

export function typesFromProducts(products) {
    let productTypes = [];

    for(let i in products) {
        productTypes.push(i.type)
    }

    productTypes = Set(productTypes);

    return productTypes;
};
