const { check } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({
            min : 4,
            max : 25
        }).withMessage('Debe contener entre 5 y 20 caracteres').bail()
        .isAlpha().withMessage('Sólo caracteres alfabéticos'),
    
    check('color')
        .notEmpty().withMessage('Por favor elige un color').bail(),
    
    check('email')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isEmail().withMessage('Este campo solo acepta emails'),

    check('age')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isInt({
            min : 18,
            max : 100
        }).withMessage('Tenes que ser mayor de 18 años')
]