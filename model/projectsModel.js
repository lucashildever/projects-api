const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    title: String,
    description: String,
    techs: Array
})

const Projects = mongoose.model('Project', projectSchema);

module.exports = Projects;