require('express');
const product = require('../Models/product');

async function createProduct (req, res){
    try{
        await product.create({
            productName : req.body.productName,
            productDescription : req.body.productDescription,
            productPrice : req.body.productPrice,
            productBrand : req.body.productBrand,
            productCategory : req.body.productCategory
            //Falta el Id del supermercado
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
        // Necesito el supermercado
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
            productCategory : req.body.productCategory
            //Falta el Id del supermercado
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