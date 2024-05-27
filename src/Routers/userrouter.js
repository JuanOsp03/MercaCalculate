const express = require('express')
const userController = require('../Controllers/userController')
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router()

// Rutas públicas
router.post('/createUser', userController.createUser);
router.post('/login', userController.login);

// Rutas protegidas
router.get('/listUserRoles', verifyToken, userController.listUserRoles);

module.exports = router;