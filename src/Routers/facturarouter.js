const express = require('express');
const facturaController = require ('../Controllers/facturaController');
const router = express.Router();

router.post('/createfactura', facturaController.createFactura);
router.get('/listfactura', facturaController.listFactura);
router.put('/updatefactura/:facturaId', facturaController.updateFactura);
router.put('/disablefactura/:facturaId', facturaController.disableFactura);
router.put('/enablefactura/:facturaId', facturaController.enableFactura);

module.exports = router;