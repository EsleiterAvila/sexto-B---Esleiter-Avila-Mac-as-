const express = require("express");


const cors = require('cors');


const app = express();
const Auto = require('./models/Auto');



app.use(express.json());
app.use(cors());





app.get("/api/v2/auto", async (req,res)=>{
    const auto = await Auto.find();
    return res.send(auto);
})

app.post("/api/v2/auto", async (req,res)=>{
    const { descripcion, placa ,color  } =  req.body;
    
    const auto = new Auto({ descripcion, placa ,color})

    await auto.save()
  
    res.status(201).json(auto);
})

app.put("/api/v2/auto/:id", async (req,res)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const actualizarauto =  await Auto.findByIdAndUpdate(id,data )
    res.json(actualizarauto);
})

app.delete("/api/v2/auto/:id", async (req,res)=>{
    const {id} = req.params;
    await Auto.findByIdAndDelete(id)
    res.json(`Eliminado el auto`);
})




module.exports= app;