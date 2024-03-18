require('express');
const provider = require('../Models/provider');


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
    deleteProvider
}