require('express');
const factura = require('../Models/cliente');

async function createFactura (req, res){
    try{
        await factura.create({
            codeFactura: req.body.codeFactura,
            item: req.body.item,
            costoTotal: req.body.costoTotal,
            impuestos: req.body.impuestos
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

async function listFactura (req, res){
    try{
        await factura.findAll({
            attributes: [
                'codeFactura',
                'item',
                'costoTotal',
                'impuestos'
            ],
            order: ['codeFactura']
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

async function updateFactura (req, res){
    try{
        await factura.update({
            codeFactura: req.body.codeFactura,
            item: req.body.item,
            costoTotal: req.body.costoTotal,
            impuestos: req.body.impuestos
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

async function disableFactura (req, res){
    try{
        await factura.destroy({
            where: { codeFactura: req.params.codeFactura }
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

async function enableFactura (req, res){
    try{
        await factura.restore({
            where: { codeFactura: req.params.codeFactura  }
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
    createFactura,
    listFactura,
    updateFactura,
    disableFactura,
    enableFactura
}