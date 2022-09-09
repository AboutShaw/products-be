const db = require("../db");
const { typesFromProducts } = require("../db/helpers/utils");

exports.selectProducts = ({ order = 'ASC', limit = 100 }) => {
    return db
      .query(
        `    SELECT  *
                  FROM    products
                  ORDER BY priceValue ${order}
                  LIMIT ${limit};`
      )
      .then((result) => {
        return result.rows;
      });
  };