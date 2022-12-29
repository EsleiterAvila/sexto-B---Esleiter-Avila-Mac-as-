const express = require("express");
const cors = require('cors');
const app = express();



const Concepto = require('./models/Concepto');



app.use(express.json());
app.use(cors());

//Ruta para obtener concepto
app.get("/api/v2/concepto", async (req,res)=>{
    const concepto = await Concepto.find();
    return res.send(concepto);
})

app.post("/api/v2/concepto", async (req,res)=>{
    const { descripcion} =  req.body;
    
    const concepto = new Concepto({ descripcion})

    await concepto.save()
  
    res.status(201).json(concepto);
})


app.put("/api/v2/concepto/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const actualizadoConcepto =  await Concepto.findByIdAndUpdate(id,data )
    res.json(actualizadoConcepto);
})

app.delete("/api/v2/concepto/:id", async (req,res)=>{
    const {id} = req.params;
    await Concepto.findByIdAndDelete(id)
    res.json(`Eliminado concepto`);
})


module.exports= app;