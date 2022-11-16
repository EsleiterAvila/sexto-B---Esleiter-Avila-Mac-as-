const { model, Schema } = require('mongoose');

const MantenimientoSchema = Schema(
    {
        idmantenimiento:{
            type: Number,
            default:0
        },
        idvehiculo:{
            type: Number,
            default:0
        },

        idconcepto:{
            type: Number,
            default:0
    },
        fechamantenimiento:{
            type: String,
            required: [ true, 'muestre la fecha de mantenimiento'],
            unique:true
        },
        detalle:{
            type: Number,
            required: [ true, 'muestre el detalle de mantenimiento'],
            unique:true
        },
    }
);

MantenimientoSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Mantenimiento', MantenimientoSchema );