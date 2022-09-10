const Joi = require('joi');
const {
    selectProducts
  } = require("../models/index");

const apis = require(`../endpoints.json`);

const schema = Joi.object({
  order: Joi.string()
    .alphanum()
    .valid('asc', 'desc'),
  password: Joi.number()
    .integer()
    .min(1)
    .max(100),
})

exports.getProducts = (req, res, next) => {
  let { order, type, limit } = req.params;

  schema.validate({ order, type, limit })

  selectProducts({ order, type, limit }).then((products) => {
    res.status(200).send({ products })})
    .catch(next);
}