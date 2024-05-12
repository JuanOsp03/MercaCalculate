require('express');
const product = require('../Models/product');
const supermarket = require('../Models/supermarket');

async function createProduct (req, res){
    try{
        await product.create({
            productName : req.body.productName,
            productDescription : req.body.productDescription,
            productPrice : req.body.productPrice,
            productBrand : req.body.productBrand,
            productCategory : req.body.productCategory,
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

async function listProducts (req, res){
    try{
        await restaurant.findAll({
            attributes: [
                'productId',
                'productName',
                'productDescription',
                'productPrice',
                'productBrand',
                'productCategory'
            ],
            order: ['productName'],
            include: {
                model: supermarket,
                where: { supermarketId: req.params.supermarketId},
                attributes : ['supermarketName']
            }
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

async function updateProduct (req, res){
    try{
        await product.update({
            productName : req.body.productName,
            productDescription : req.body.productDescription,
            productPrice : req.body.productPrice,
            productBrand : req.body.productBrand,
            productCategory : req.body.productCategory,
            supermarketNit : req.body.supermarketNit
        },{
            where: { productId : req.params.productId }
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

async function disableProduct (req, res){
    try{
        await product.destroy({
            where: { productId : req.params.productId }
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

async function enableProduct (req, res){
    try{
        await product.restore({
            where: { productId : req.params.productId }
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
    createProduct,
    listProducts,
    updateProduct,
    disableProduct,
    enableProduct
}