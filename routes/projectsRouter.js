const express = require('express');
const bodyParser = require('body-parser');

let urlEncodedParser = bodyParser.urlencoded({extended: false})

const router = express.Router();

const projectsController = require('../controller/projectsController');

router.get('/', (req, res) => res.redirect('/api/projects'));
router.get('/api/projects', projectsController.getAllProjects);
router.post('/api/sendform', urlEncodedParser, projectsController.sendEmail)

module.exports = router;