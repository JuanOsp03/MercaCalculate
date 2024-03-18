const express = require('express');
const facturaController = require ('../Controllers/facturaController');
const router = express.Router();

router.post('/createfactura', facturaController.createFactura);
router.get('/listfactura/:codeFactura', facturaController.listFactura);
router.put('/updatefactura/:codeFactura', facturaController.updateFactura);
router.put('/disablefactura/codeFactura', facturaController.disableFactura);
router.put('/enablefactura/:codeFactura', facturaController.enableFactura);

module.exports = router;