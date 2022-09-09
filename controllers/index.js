const {
    selectProducts
  } = require("../models/index");

const apis = require(`../endpoints.json`);

exports.getProducts = (req, res, next) => {
selectTopics().then((products) => {
    res.status(200).send({ products })})
    .catch(next);
}