const autos=[
    {
        id :1,
        descripcion:"chevrolet",
        placa: "ur574",
        color: "azul",
    },
    {
        id:2,
        descripcion:"Mazda",
        placa: "fg344",
        color: "blanco"
    },
    {
        id:3,
        descripcion:"kia",
        placa: "tr546",
        color: "azul"
    },
    {
        id:4,
        descripcion:"Hyundai",
        placa: "gy747",
        color: "amarillo"
    },
    {
        id:5,
        descripcion:"Ford",
        placa: "hj768",
        color: "celeste"
    }
]


const mantenimiento=[
    {
        id: 1,
        idvehiculo: 1,
        idconcepto: 123,
        fecha_mantenimiento:{dia:27, mes:09, año:2022},
        detalle:"se procede a quitar la bujia desgastada y reemplazarla por una nueva bujia ",
    },
    {
        id: 254,
        idvehiculo: 223,
        idconcepto: 222,
        fecha_mantenimiento:{dia:02, mes:04, año:2020},
        detalle:"se procede a hacer debida revision y hacer el cambio de lallanta afectada",
    },
    {
        id: 456,
        idvehiculo: 33,
        idconcepto: 363,
        fecha_mantenimiento:{dia:18, mes:07, año:2021},
        detalle:"se procede a buscar la fuga de aire acondcionado en cañerias , y se procede areemplazar por una nueva",
    },
    {
        id: 475,
        idvehiculo: 7,
        idconcepto: 411,
        fecha_mantenimiento:{dia:16, mes:01, año:2019},
        detalle:" se hace revision de aceite , y se reemplaza por un nuevo aceite de calidad",
    },
    {
        id: 565,
        idvehiculo: 5,
        idconcepto: 534,
        fecha_mantenimiento:{dia:18, mes:12, año:2022},
        detalle:"se procede a cambiar por una nueva bateria o a regargar la misma para evitar estos fallos",
    }
]

//FUNCIONES CON PROMISES//
function buscarmantenimiento(id){
    return new Promise((resolve, reject)=>{
        const mantenimientos = mantenimiento.find((mantenimientos)=> mantenimientos.id===id );
        if (!mantenimientos)
        {
            const error= new Error();
            error.message="El mantenimiento solicitado no se ha realizado";
            reject(error);
        }
        resolve(mantenimientos);
    })
}

function autosfunction(id){
    return new Promise((resolve, reject)=>{
        const auto =  autos.find((auto)=>{
            return auto.id===id;
        });
        if (!auto)
        {
            const error =  new Error();
            error.message="No pudimos encontrar el mantenimiento del auto";
            reject(error);
        }
        resolve(auto);
    })
}

buscarmantenimiento(1)
.then((mantenimientos)=>{ 
    console.log(mantenimientos);
    return autosfunction(mantenimientos.idvehiculo);
})
.then((auto)=>{
    console.log(auto)
})
.catch((error)=>{
    console.log(error.message)
})

//Funciones de Callbacks//

function buscarmantenimientoid(id, callback)
{
    const mantenimiento =  mantenimiento.find((mantenimiento)=>  mantenimiento.id === id ); // true === "true"
    if (!mantenimiento)
    {
        const error =  new Error();
        error.message=` El mantenimiento con id ${id} no pudo ser encontrado`;
        return callback(error);
    }
    
    return callback(null, mantenimiento);
}
function buscarautoautos(autos, callback)
{
    const autos = autos.find((autos)=> autos.autos=== autos );
    if (!autos)
    {
        const error= new Error();
        error.message=`El auto con id ${id} no existe`;
        return callback(error);
    }
    return callback(null, autos);
}

buscarmantenimientoid(2,  (err, idmantenimiento)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    
    buscarautoautos(idmantenimiento.autos, (err, mantenimiento)=>{
        if (err)
        {
            console.log(err.message);
            return;
        }
        mantenimiento.autos = autos;
        delete mantenimiento.autos;
        console.log(mantenimiento)
    })
}
)



