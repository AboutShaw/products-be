const {
    selectProducts
  } = require("../models/index");

const apis = require(`../endpoints.json`);

exports.getProducts = (req, res, next) => {
  const { sort, limit } = req.params;

  selectProducts({ sort, limit }).then((products) => {
    res.status(200).send({ products })})
    .catch(next);
}