const express = require('express');
const supermarketcontroller = require('../Controllers/supermarketcontroller');
const router = express.Router();

router.post('/createsupermarket', supermarketcontroller.createSupermarket);
router.get('/listsupermarket', supermarketcontroller.listSupermarket);
router.get('/getsupermarket/:supermarketId', supermarketcontroller.getSupermarket);
router.put('/updatesupermarket/:supermarketId', supermarketcontroller.updateSupermarket);
router.put('/disablesupermarket/:supermarketId', supermarketcontroller.disableSupermarket);
router.put('/enablesupermarket/:supermarketId', supermarketcontroller.enableSupermarket);

module.exports = router;