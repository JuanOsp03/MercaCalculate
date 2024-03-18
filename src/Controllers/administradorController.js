require('express');
const administrador = require('../Models/administrador');

async function createAdministrador (req, res){
    try{
        await administrador.create({
            usuario: req.params.usuario,
            contraseña: req.params.contraseña
        }).then(function (data){
            return res.status(200).json({
                data : data
            });
        }).catch(error =>{
            return res.status(400).json({
                error : error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function listAdministrador (req, res){
    try{
        await administrador.findAll({
            attributes: [
                'usuario',
                'contraseña'
            ],
            order: ['usuario']
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function updateAdministrador (req, res){
    try{
        await administrador.update({
            contraseña: req.body.contraseña
        },{
            where: { usuario : req.params.usuario }
        }).then(function (data){
            return res.status(200).json({
                data : data
            });
        }).catch(error =>{
            return res.status(400).json({
                error : error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function disableAdministrador (req, res){
    try{
        await administrador.destroy({
            where: { usuario : req.params.usuario }
        }).then(function(data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function enableAdministrador (req, res){
    try{
        await administrador.restore({
            where: { usuario : req.params.usuario }
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error =>{
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    createAdministrador,
    listAdministrador,
    updateAdministrador,
    disableAdministrador,
    enableAdministrador
}