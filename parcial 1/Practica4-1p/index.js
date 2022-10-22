const path = require("path");

const express = require("express");
const cors =  require("cors");

const PUERTO = 4040;
//sdfsdf

const urlautos = path.join(__dirname,"./Public/autos.html")
const urlconcepto = path.join(__dirname,"./Public/concepto.html")
const urlmantenimiento = path.join(__dirname,"./Public/mantenimiento.html")

 
const server =  express();

server.use(cors()).use(express.json())


server.get('/', functionIndex )

server.get('/concepto', (req,res)=>{
    res.status(200).sendFile(urlconcepto);
    // res.status(200).send({
    //     response:"Acerca de!!!!!!"
    // })
})

server.get('/autos', (req,res)=>{
    res.status(200).sendFile(urlautos);
    // res.status(200).send({
    //     response:"Acerca de!!!!!!"
    // })
})

server.get('/mantenimiento', (req,res)=>{
    res.status(200).sendFile(urlmantenimiento);
    // res.status(200).send({
    //     response:"Acerca de!!!!!!"
    // })
})

function functionIndex (req, res){
    res.status(200).sendFile (urlautos);
}


server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})



