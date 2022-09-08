const {
    flattenArrayObj,
    typesFromProducts,
  } = require("../db/helpers/utils");

describe('unit tests to check util functions work as intended', () => {
    describe('flattenObject tests', () => {
        test('flattenObject takes an array of 3 objects and flattens it into single array with 3 1D objects', () => {
            let testProducts = require('./test_data/testProducts.json');

            testProducts = flattenArrayObj(testProducts);

            console.log(testProducts);
        })
    });

    describe('typesFromProducts tests', () => {
        test('typesFromProducts takes an array of 3 objects and returns an array of unique types', () => {
            let testProducts = require('./test_data/testProducts.json');

            console.log(typesFromProducts(testProducts));
        })
    })
})