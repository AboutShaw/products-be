exports.flattenArrayObjs = (array) => {

let arrayWithFlatObjs = array;

arrayWithFlatObjs.forEach(element => {
    element.priceValue = parseFloat(element.price.value);
    element.priceCurrency = parseFloat(element.price.currency);
    delete element.price;
  })
  
  return arrayWithFlatObjs;
};

exports.typesFromProducts = (products) => {
    let productTypes = [];

    products.forEach(element => {
        productTypes.push(element.type)
    });

    productTypes = [...new Set(productTypes)];

    return productTypes;
};
