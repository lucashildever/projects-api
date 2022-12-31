const express = require("express");

const compression = require('compression');

const projectsRouter = require('./routes/projectsRouter')

const app = express();

app.use(compression());
app.use(projectsRouter);

module.exports = app;