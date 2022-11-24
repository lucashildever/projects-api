const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    title: String,
    description: String,
    techs: Array
})

exports.Projects = mongoose.model('Project', projectSchema);