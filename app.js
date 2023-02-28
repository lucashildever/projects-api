const express = require('express');
const compression = require('compression');
const projectsRouter = require('./routes/projectsRouter');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(compression());
app.use(projectsRouter);
app.use(express.json());
app.use(bodyParser.json());

module.exports = app;