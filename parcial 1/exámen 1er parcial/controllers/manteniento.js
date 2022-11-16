const { response } = require('express')
const { Mantenimiento} = require('../models')


const createMantenimiento= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existMantenimiento=  await Mantenimiento.findOne({name: body.name})

    if (existMantenimiento)
    {
        return res.status(400).json({
            msg:`El concepto ${ existMantenimiento.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const Mantenimiento= new Mantenimiento(data);

    const newMantenimiento=  await Mantenimiento.save();
    res.status(201).json(newMantenimiento);
}

const deleteMantenimiento= async (req, res = response)=>{
    const {id} = req.params;
    const deletedMantenimiento=  await Mantenimiento.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedMantenimiento);
}
module.exports = {
    deleteMantenimiento,
    createMantenimiento
};