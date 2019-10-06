const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const configRoutes = require('./routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));

configRoutes(app);

module.exports = app;