const { model, Schema } = require('mongoose');

const MantenimientoSchema = Schema(   {
    fecha_mantenimiento:{
        type: String,
        required: [ true, 'El campo fecha mantenimeinto debe ser requerido'],
       
    },
    Detalle:{
        type: String,
        required: [ true, 'El campo Detalle debe ser requerido'],
    },
}
);

module.exports = model('Mantenimiento', MantenimientoSchema );
