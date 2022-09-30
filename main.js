const autos=[
    {
    
        autos :1,
        descripcion:"chevrolet",
    
},
    {
        autos:2,
        descripcion:"Mazda"
    },
    {
        autos:3,
        descripcion:"kia"
    },
    {
        autos:4,
        descripcion:"Hyundai"
    },
    {
        autos:5,
        descripcion:"Ford"
    }


]



const conceptos=[
{
    idconcepto :1,
    descripcion:"desgaste de bujias",
    
},
{
    idconcepto:2,
    descripcion:"llantas lisas producto de tiempo de uso",
},
{
    idconcepto:3, 
    descripcion:"fuga de aire acondicionado",
},
{
    idconcepto:4,
    descripcion:"aceite que ya cumplio con ciclo de uso",
},
{
    idconcepto:5,
    descripcion:" fallos eléctricosluces en el cuadro de mandos, cierre, climatizador",
}

]



const mantenimiento=[
{
    idmanteniento:1,
    idvehiculo:1,
    idconcepto:1,
    fecha_mantenimiento:{dia:27, mes:09, año:2022},
    detalle:"se procede a quitar la bujia desgastada y reemplazarla por una nueva bujia ",
},



{
    idmanteniento:2,
    idvehiculo:2,
    idconcepto:2,
    fecha_mantenimiento:{dia:02, mes:04, año:2020},
    detalle:"se procede a hacer debida revision y hacer el cambio de lallanta afectada",
},

{
    idmanteniento:3,
    idvehiculo:3,
    idconcepto:3,
    fecha_mantenimiento:{dia:18, mes:07, año:2021},
    detalle:"se procede a buscar la fuga de aire acondcionado en cañerias , y se procede areemplazar por una nueva",
},
{
    idmanteniento:4,
    idvehiculo:4,
    idconcepto:4,
    fecha_mantenimiento:{dia:16, mes:01, año:2019},
    detalle:" se hace revision de aceite , y se reemplaza por un nuevo aceite de calidad",
},
{
    idmanteniento:5,
    idvehiculo:5,
    idconcepto:5,
    fecha_mantenimiento:{dia:18, mes:12, año:2022},
    detalle:"se procede a cambiar por una nueva bateria o a regargar la misma para evitar estos fallos",
}
]



console.log('ciclo for')
for(let iterator = 0; iterator<autos.length;iterator++){
    console.log(autos[iterator]);
}
console.log('ciclo for')
for(let iterator = 0; iterator<conceptos.length;iterator++){
    console.log(conceptos[iterator]);
}
console.log('ciclo for')
for(let iterator = 0; iterator<mantenimiento.length;iterator++){
    console.log(mantenimiento[iterator]);
}



for(propiedad in autos) {
    console.log(propiedad);
    console.log(autos[propiedad])
}

for(propiedad in conceptos) {
    console.log(propiedad);
    console.log(conceptos[propiedad])
}
for(propiedad in mantenimiento) {
    console.log(propiedad);
    console.log(mantenimiento[propiedad])
}




for(const propiedad of autos) {
    console.log(propiedad);
}

for(const propiedad of conceptos) {
    console.log(propiedad);
}

for(const propiedad of mantenimiento) {
    console.log(propiedad);
}