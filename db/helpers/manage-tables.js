const db = require("..");

const createTables = async () => {
  const productsTablePromise = db.query(`
  CREATE TABLE products (
    productNumber SERIAL PRIMARY KEY,
    id VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    department VARCHAR NOT NULL,
    weight VARCHAR NOT NULL,
    priceValue FLOAT NOT NULL,
    priceCurrency VARCHAR NOT NULL
  );`);

  await Promise.all([productsTablePromise]);
  
};

const dropTables = async () => {
  await db.query(`DROP TABLE IF EXISTS products;`);
};

module.exports = { createTables, dropTables };