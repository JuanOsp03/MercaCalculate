const express = require('express');
const administradorController = require('../Controllers/administradorController');
const router = express.Router();

router.post('/createadministrador', administradorController.createAdministrador);
router.get('/listadministrador', administradorController.listAdministrador);
router.put('/updateadministrador/:usuario', administradorController.updateAdministrador);
router.put('/disableadministrador/:usuario', administradorController.disableAdministrador);
router.put('/enableadministrador/:usuario', administradorController.enableAdministrador);

module.exports = router;