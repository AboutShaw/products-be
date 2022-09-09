const format = require("pg-format");
const {
    flattenArrayObjs,
  } = require("../helpers/utils");
const db = require("..");
const { dropTables, createTables } = require("../helpers/manage-tables");

const seed = async (products) => {
  await dropTables();
  await createTables();

  const insertProductsQueryStr = format(
    "INSERT INTO products (id, name, description, type, department, weight, priceValue, priceCurrency) VALUES %L RETURNING *;",
    flattenArrayObjs(products).map(({ id, name, description, type, department, weight, priceValue, priceCurrency }) => [id, name, description, type, department, weight, priceValue, priceCurrency])
  );

  const productsPromise = db
    .query(insertProductsQueryStr)
    .then((result) => result.rows);


  await Promise.all(productsPromise);

};

module.exports = seed;