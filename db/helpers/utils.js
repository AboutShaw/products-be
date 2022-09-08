exports.flattenArrayObj = (obj, parent, res = {}) => {
    for (const key of Object.keys(obj)) {
      const propName = parent ? parent + '.' + key : key;
      if (typeof obj[key] === 'object') {
        this.flattenArrayObj(obj[key], propName, res);
      } else {
        res[propName] = obj[key];
      }
    }
    return res;
  };

exports.typesFromProducts = (products) => {
    let productTypes = [];

    products.forEach(element => {
        productTypes.push(element.type)
    });

    productTypes = [...new Set(productTypes)];

    return productTypes;
};
