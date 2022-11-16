const Mantenimiento =  require('./Mantenimiento');

module.exports= {
    Mantenimiento
}

const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  3000;


app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )

//servicio REST

let autos = [];

app.get('/', (req,res)=>{
    res.status(200).send(
        autos
    )
})

app.get('/:id', (req,res)=>{
    const {id} =  req.params;
    let result = autos.filter(p => p.id === id);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"id no encontrado"
    });
})

app.post('/', (req,res)=>{
    const {body} = req;
    autos.push(body);
    res.status(200).send({
        message:"insertado correctamente",
        response: body
    })
})

//apartado donde se ingresan los atribustos de la entidad
app.put('/', (req,res)=>{
    const {id, descripcion, placa, color} = req.body;
    
    let auto =  autos.filter(p=> p.id === id)[0] || {}
 
    auto.descripcion = descripcion;
    auto.placa = placa;
    auto.color = color;

    res.status(200).send(
        {
            
            message:"dato modificado correctamente",
            response: auto
        }
    )

})
app.delete('/:id', (req,res)=>{
    const {id} =  req.params;
    autos = autos.filter(p => p.id !== id);
    res.status(200).send({
        response:"El carros fue eliminado exitosamente"
    })
})
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})