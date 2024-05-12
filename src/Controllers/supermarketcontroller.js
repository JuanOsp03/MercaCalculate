require('express');
const supermarket = require('../Models/supermarket');
//create supermarket
async function createSupermarket (req, res){
    try{
        await supermarket.create({
            supermarketName: req.body.supermarketName,
            supermarketAddress: req.body.supermarketAddress,
            comercialRegistry: req.body.comercialRegistry,
            supermarketNit: req.body.supermarketNit
        }).then(function(data){
            return  res.status(200).json({
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

async function listSupermarket (req, res){
    try{
        await supermarket.findAll({
            attributes: [
                'supermarketName',
                'supermarketAddress',
                'comercialRegistry',
                'supermarketNit'
            ],
            order: ['supermarketName']
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

async function getSupermarket(req, res){
    try{
        await supermarket.findOne({
            where: {supermarketNit : req.params.supermarketNit},
            attributes: [
                'supermarketName',
                'supermarketAddress',
                'comercialRegistry',
                'supermarketNit'
            ],
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}


async function updateSupermarket (req, res){
    try{
        await supermarket.update({
            supermarketName: req.body.supermarketName,
            supermarketAddress: req.body.supermarketAddress,
            comercialRegistry: req.body.comercialRegistry,
            supermarketNit: req.body.supermarketNit
        },{
            where: { supermarketNit : req.params.supermarketNit }
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

async function disableSupermarket (req, res){
    try{
        await supermarket.destroy({
            where: { supermarketNit : req.params.supermarketNit }
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

async function enableSupermarket (req, res){
    try{
        await supermarket.restore({
            where: {  supermarketNit : req.params.supermarketNit }
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
    createSupermarket,
    listSupermarket,
    getSupermarket,
    updateSupermarket,
    disableSupermarket,
    enableSupermarket
}