const { model, Schema } = require('mongoose');

const ConceptoSchema = Schema(   {
    descripcion:{
        type: String,
        required: [ true, 'La descripcion del concepto deben ser requerida'],
       
    }
}
);

module.exports = model('Concepto', ConceptoSchema );
