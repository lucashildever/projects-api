const express = require("express");

const projectsRouter = require('./projectsRouter')

const app = express();

app.use('/api/projects', projectsRouter)

module.exports = app;