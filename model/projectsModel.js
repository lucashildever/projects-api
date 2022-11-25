const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    title: String,
    techs: Array,
    img: String,
    code: String,
    live: String,
    desc: String,
    descPt: String
})

const Projects = mongoose.model('Project', projectSchema);

module.exports = Projects;