const db = require("../db");
const { typesFromProducts } = require("../db/helpers/utils");

exports.selectProducts = ({ order = 'ASC', type, limit = 100 }) => {
  if(!type){
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
  }
  return db
      .query(
        `    SELECT  *
                  FROM    products
                  WHERE type = '${type}'
                  ORDER BY priceValue ${order}
                  LIMIT ${limit};`
      )
      .then((result) => {
        return result.rows;
      });
};