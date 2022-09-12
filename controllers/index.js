const Joi = require('joi');
const {
    selectProducts
  } = require("../models/index");

const apis = require(`../endpoints.json`);

const schema = Joi.object({
  sort: Joi.string()
    .alphanum()
    .valid('asc', 'desc'),
  limit: Joi.number()
    .integer()
    .min(1)
    .max(100),
})

exports.getProducts = (req, res, next) => {
  let { sort, limit } = req.query

  const { error } = schema.validate({ sort, limit })
  if (error) {
    return res.status(400).send()
  }

  selectProducts({ sort, limit }).then((products) => {
    res.status(200).send({ products })})
    .catch(next);
}