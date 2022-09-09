const {
    selectProducts
  } = require("../models/index");

const apis = require(`../endpoints.json`);

exports.getProducts = (req, res, next) => {
  selectProducts().then((products) => {
    res.status(200).send({ products })})
    .catch(next);
}