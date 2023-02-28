const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE_URI.replace(
    '<PASSWORD>', 
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('database connected successfully'))
    .catch(err => console.log(err));

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