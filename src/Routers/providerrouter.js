const express = require('express');
const providercontroller = require('../Controllers/providercontroller');
const router = express.Router();

router.post('/addprovider', providercontroller.addProvider);
router.get('/listproviders', providercontroller.listProviders);
router.get('/getprovider/:providerId', providercontroller.getProvider);
router.put('/deleteprovider/:providerId', providercontroller.deleteProvider);
router.put('/updateprovider/:providerId' , providercontroller.updateProvider);

module.exports = router;