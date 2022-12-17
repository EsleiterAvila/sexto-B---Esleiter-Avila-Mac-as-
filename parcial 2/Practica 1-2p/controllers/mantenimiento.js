const { response, json, request } = require('express');
const Nota = require('../models/mantenimiento');



const gets = async (req, res= response)=>{
        const mantenimientos =await  Mantenimiento.find();
        return res.json({mantenimientos})
}


const getMantenimiento = async (req=request, res= response)=>{
    const {id} = req.params
    const Mantenimiento =  await Mantenimiento.findById(id)
    res.json(Mantenimiento);
}

const createMantenimiento = async(req=request,res=response)=>{
    const { Mantenimiento,  detalle } =  req.body;
    
    const Mantenimientosave = new Mantenimiento({ Mantenimiento,  detalle})

    await Mantenimientosave.save()
  
    res.status(201).json(Mantenimientosave);
}
const updateMantenimiento = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedMantenimiento =  await Mantenimiento.findByIdAndUpdate(id,data )
    res.json(updatedMantenimiento);
}
const deleteMantenimiento =  async (req, res= response)=>{
    const {id} = req.params;
    await Mantenimiento.findByIdAndDelete(id)
    res.json(`Se ha eliminado el documento Mantenimiento`);
}

 module.exports ={
    getMantenimientos, 
    getMantenimiento,
    createMantenimiento,
    updateMantenimiento,
    deleteMantenimiento
 }