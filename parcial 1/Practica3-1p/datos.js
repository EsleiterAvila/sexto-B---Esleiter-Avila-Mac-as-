
// mongodb+srv://di1234:di1234@cluster0.d8ckl.mongodb.net/test

const mongoose = require('mongoose');






const connectionURL= "mongodb+srv://di1234:di1234@cluster0.d8ckl.mongodb.net/test";
// mongodb+srv://di1234:di1234@cluster0.d8ckl.mongodb.net/test


( async ()=>{

try {

    //conectarse a la base de datos
    const stateConnection = await mongoose.connect(connectionURL);



    const Auto = mongoose.model("auto", { descripcion:String, color:String, placa:String }  );
    const Concepto = mongoose.model("concepto", { descripcion:String }  );
    const Mantenimiento = mongoose.model("mantenimiento",
     { 
               id_vehiculo: { type: mongoose.Types.ObjectId , ref:"auto" } ,
               id_concepto: { type: mongoose.Types.ObjectId , ref:"mantenimiento" } ,
               fecha_mantemiento:String, 
               detalle:String, 
         }  
        );

         const Concepto1 =  new Concepto({descripcion:"mantenimiento", });
         const saveconcepto = await  Concepto1.save();
         const auto1 =  new Auto({descripcion:"chevrolet",color:"azul",placa:"ur574"});
         const saveautos = await  auto1.save();
        
        
        const mantenimiento1 =  new Mantenimiento(
                 {
                         fecha_mantemiento:'dia:18, mes:07, año:2021',
                         detalle: "se procede a quitar la bujia desgastada y reemplazarla por una nueva bujia ",
                         id_vehiculo: saveautos._id,
                         id_concepto: saveconcepto._id,

                     }
                     );
                
         const saveMantenimiento = mantenimiento1.save();
                
                
                
                
            
} catch (error) {
    console.log(error.message);       
}
})();
    
