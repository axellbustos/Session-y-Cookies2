var express = require('express');
var router = express.Router();
const {mostrarDatos, logout}= require('../controllers/usersController')
/* GET users listing. */
router.get('/mostrarDatos', mostrarDatos)
router.get('/logout', logout)


module.exports = router;
