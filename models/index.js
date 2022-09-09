const db = require("../db");
const { typesFromProducts } = require("../db/helpers/utils");

exports.selectProducts = () => {
    return db
      .query(
        `    SELECT  *
                  FROM    products;`
      )
      .then((result) => {
        return result.rows;
      });
  };