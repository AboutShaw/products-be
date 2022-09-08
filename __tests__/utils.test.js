const {
    flattenArrayObjs,
    typesFromProducts,
  } = require("../db/helpers/utils");

describe('unit tests to check util functions work as intended', () => {
    describe('flattenObject tests', () => {
        test('flattenObject takes an array of 3 2D objects and flattens it into single array with 3 1D objects', () => {
            let testProducts = require('./test_data/testProducts.json');

            testProducts = flattenArrayObjs(testProducts);

            expect(testProducts.length).toBe(3);
            expect(testProducts[0].priceValue).toBe(299.99);
            expect(testProducts[0].priceCurrency).toBe('GBP');
        })
    });

    describe('typesFromProducts tests', () => {
        test('typesFromProducts takes an array of 3 objects and returns an array of unique types', () => {
            let testProducts = require('./test_data/testProducts.json');

            expect(typesFromProducts(testProducts).length).toBe(2);
        })
    })
})