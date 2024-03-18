const express = require('express');
const clienteController = require ('../Controllers/clienteController');
const router = express.Router();

router.post('/createcliente', clienteController.createClient);
router.get('/listcliente/:clienteId', clienteController.listClient);
router.put('/updatecliente/:clienteId', clienteController.updateClient);
router.put('/disablecliente/clienteId', clienteController.disableClient);
router.put('/enablecliente/:clienteId', clienteController.enableClient);

module.exports = router;