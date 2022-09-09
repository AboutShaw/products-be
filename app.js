const cors = require('cors');
const express = require("express");

const {
  getProducts
} = require("./controllers/index");

const {
    handleCustomErrors,
    handlePsqlErrors,
    handleServerErrors,
  } = require('./errors/index.js');

const app = express();
app.use(cors());
app.use(express.json());
// Requires and util functions above this line -----
// API requests below this line -----
app.get(`/api/products`, getProducts);



// Error handling below this line -----
app.use(handleCustomErrors);
app.use(handlePsqlErrors);
app.use(handleServerErrors);

app.all('/*', (req, res) => {
  res.status(404).send({ msg: 'Route not found' });
});

module.exports = app;