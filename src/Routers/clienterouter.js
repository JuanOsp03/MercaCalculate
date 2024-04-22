const express = require('express');
const clienteController = require ('../Controllers/clienteController');
const router = express.Router();

router.post('/createcliente', clienteController.createClient);
router.get('/listcliente/:clientId', clienteController.listClient);
router.put('/updatecliente/:clientId', clienteController.updateClient);
router.put('/disablecliente/clientId', clienteController.disableClient);
router.put('/enablecliente/:clientId', clienteController.enableClient);

module.exports = router;