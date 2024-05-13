require('express');
const factura = require('../Models/factura');

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
                'facturaId',
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

async function getFactura(req, res){
    try{
        await factura.findOne({
            where: {facturaId : req.params.facturaId},
            attributes: [
                'facturaId',
                'codeFactura',
                'item',
                'costoTotal',
                'impuestos'
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

async function updateFactura (req, res){
    try{
        await factura.update({
            codeFactura: req.body.codeFactura,
            item: req.body.item,
            costoTotal: req.body.costoTotal,
            impuestos: req.body.impuestos
        },{
            where: { facturaId : req.params.facturaId }
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
            where: { facturaId : req.params.facturaId }
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
            where: { facturaId: req.params.facturaId  }
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
    getFactura,
    updateFactura,
    disableFactura,
    enableFactura
}