var express = require('express');
var router = express.Router();
const {index, register, destroy,salida}=require("../controllers/indexController")
const registerValidations = require ('../validations/registerValidations')

/* GET home page. */
router.get('/', index);
router.post('/',registerValidations, register);
router.get('/salida', salida)
router.get('/delete', destroy)

module.exports = router;
