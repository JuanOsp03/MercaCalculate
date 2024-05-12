require('express');
const provider = require('../Models/provider');
const supermarket = require('../Models/supermarket');


async function addProvider(req, res) {
    try {
        await provider.create ({
            providerName: req.body.providerName,
            providerAddress: req.body.providerAddress,
            providerPhone: req.body.providerPhone,
            providerTaxStatus: req.body.providerTaxStatus
        }) .then(function (data){
            return res.status(200).json ({
                data:data
            });
        }) .catch(error => {
            return res.status(400).json ({
                error: error
            });
        })
    }
    catch(e) {
        console.log(e);
    }
}

async function listProviders(req, res) {
    try {
        await provider.listProviders ({
            attributes: [
                'providerId',
                'providerName',
                'providerAddress',
                'providerPhone'
            ],
            order: ['providerName'],
            include: {
                model: supermarket,
                where: { supermarketId : req.params.supermarketId },
                attributes: ['supermarketName']
            }
        }) .then(function (data){
            return res.status(200).json ({
                data:data
            });
        }) .catch(error => {
            return res.status(400).json ({
                error: error
            });
        })
    }
    catch(e) {
        console.log(e);
    }
}

async function updateProvider(req, res) {
    try{
        await provider.update({
            providerName: req.body.providerName,
            providerAddress: req.body.providerAddress,
            providerPhone: req.body.providerPhone,
            providerTaxStatus: req.body.providerTaxStatus,
            supermarketId: req.body.supermarketId
        },{ 
            where: { providerId :  req.params.providerId }
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

async function deleteProvider(req, res) {
    try{
        await provider.destroy({
            where: { providerId :  req.params.providerId }
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

module.exports = {
    addProvider,
    deleteProvider,
    listProviders,
    updateProvider
}