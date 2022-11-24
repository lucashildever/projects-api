const express = require('express');

const projectsController = require('./controller/projectsController');

const router = express.Router()

router
    .route('/')
    .get(projectsController.getAllProjects)
    .post(projectsController.createProject);

router
    .route('/:id')
    .get(projectsController.getProject)
    .delete(projectsController.deleteProject);

module.exports = router;