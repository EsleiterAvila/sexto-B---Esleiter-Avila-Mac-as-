const { model, Schema } = require('mongoose');

const AutoSchema = Schema(   {
    descripcion:{
        type: String,
        required: [ true, 'La descripcion deben ser requerida'],
       
    },
    placa:{
        type: String,
        required: [ true, 'La placa deben ser requerida'],
    },
    color:{
        type: String,
        required: [ true, 'El color deben ser requerido'],
    },
}
);

module.exports = model('Auto', AutoSchema );
