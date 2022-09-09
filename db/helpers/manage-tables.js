const db = require("..");

const createTables = async () => {
  const productsTablePromise = db.query(`
  CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    department VARCHAR NOT NULL,
    weight VARCHAR NOT NULL,
    priceValue INT NOT NULL,
    priceCurrency VARCHAR NOT
  );`);

  await Promise(productsTablePromise);
  
};

const dropTables = async () => {
  await db.query(`DROP TABLE IF EXISTS products;`);
};

module.exports = { createTables, dropTables };