const Projects = require('../model/projectsModel');
const sendToMail = require('../controller/sender')

exports.getAllProjects = async (req, res) => {
    try {
        const allProjects = await Projects.find();
        res
            .status(200)
            .json({
                status: 'success',
                results: allProjects.length,
                data: {
                    allProjects
                }
            });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    } 
};

exports.getProject = (req, res) => {
    res
        .status(200)
        .json({nome: 'dados do projeto'})
};

exports.createProject = (req, res) => {
    req
        .status(200)
        .send('poste o projeto aqui')
};

exports.deleteProject = (req, res) => {
    res
        .status(204)
        .join({
            status: 'success',
            data: null
        })
};

exports.sendEmail = (req, res) => {
    res
        .status(200)
        .send(req.body) 
    
    sendToMail(JSON.stringify(req.body), 'dados do formulario');

}