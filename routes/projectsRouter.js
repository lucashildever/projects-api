const express = require('express');

const router = express.Router()

const projectsController = require('../controller/projectsController');

router.get('/', (req, res) => res.redirect('/api/projects'));
router.get('/api/projects', projectsController.getAllProjects);

module.exports = router;