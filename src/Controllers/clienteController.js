require('express');
const client = require('../Models/cliente');

async function createClient (req, res){
    try{
        await client.create({
            //clientId: req.body.clientId,
            clientName: req.body.clientName
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

async function listClient (req, res){
    try{
        await client.findAll({
            attributes: [
                'clientId',
                'clientName'
            ],
            order: ['clientId']
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

async function updateClient (req, res){
    try{
        await client.update({
            clientName: req.body.clientName
        },{
            where: { clientId : req.params.clientId }
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

async function disableClient (req, res){
    try{
        await client.destroy({
            where: { clientId : req.params.clientId }
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

async function enableClient (req, res){
    try{
        await client.restore({
            where: { clientId : req.params.clientId }
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
    createClient,
    listClient,
    updateClient,
    disableClient,
    enableClient
}