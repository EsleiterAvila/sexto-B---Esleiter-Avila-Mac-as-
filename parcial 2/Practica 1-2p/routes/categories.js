const { Router } = require('express');
const { check } =  require('express-validator')

const {
    getMantenimiento, 
    getMantenimiento,
    createMantenimiento,
    updateMantenimiento,
    deleteMantenimiento
} = require('../controllers/Mantenimiento');

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getMantenimiento );

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getMantenimiento );


 router.post('/',
        [ check('fecha_mantenimiento')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo fecha_mantenimeinto'),
        check('Detalle')
        .not()],
 createMantenimiento);


 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updateMantenimiento);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deleteMantenimiento);



module.exports = router;