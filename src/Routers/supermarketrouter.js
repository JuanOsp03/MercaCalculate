const express = require('express');
const supermarketcontroller = require('../Controllers/supermarketcontroller');
const router = express.Router();

router.post('/createsupermarket', supermarketcontroller.createSupermarket);
router.get('/listsupermarket', supermarketcontroller.listSupermarket);
router.put('/updatesupermarket/:supermarketNit', supermarketcontroller.updateSupermarket);
router.put('/disablesupermarket/:supermarketNit', supermarketcontroller.disableSupermarket);
router.put('/enablesupermarket/:supermarketNit', supermarketcontroller.enableSupermarket);

module.exports = router;