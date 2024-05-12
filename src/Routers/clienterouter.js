const express = require('express');
const clienteController = require ('../Controllers/clienteController');
const router = express.Router();

router.post('/createcliente', clienteController.createClient);
router.get('/listcliente', clienteController.listClient);
router.put('/updatecliente/:clientId', clienteController.updateClient);
router.put('/disablecliente/:clientId', clienteController.disableClient);
router.put('/enablecliente/:clientId', clienteController.enableClient);
router.get('/getclientbyid/:clientId', clienteController.getClientById);

module.exports = router;