const { Router } = require('express')
const { check } =  require('express-validator')

const { createMantenimiento,
     deleteMantenimiento } = require('../controllers').Mantenimiento;

const { validateFields } = require('../middlewares')

const router = Router();

router.post('/',[
    check('mantenimiento', 'El mantenimiento es requerido').not().isEmpty(),
    validateFields
] , createMantenimiento)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteMantenimiento)

module.exports = router;