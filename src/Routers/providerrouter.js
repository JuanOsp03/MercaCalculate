const express = require('express');
const proveedorcontroller = require('../Controllers/providercontroller');
const router = express.Router();

router.post('/addprovider', providercontroller.addProvider);
router.put('/deleteprovider/:providerId', providercontroller.deleteProvider);





module.exports = router;