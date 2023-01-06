import './style.css'
import axios from 'axios'
import { IResmantenimeinto, mantenimeinto } from './interfaces/mantenimeinto';
const httpAxios =  axios.create({
  baseURL:'http://localhost:8000',
})



const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent="ID"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `

<label for ="parcial">parcial</label><input id="parcial"/>
<label for ="mantenimeinto">mantenimeinto</label><input id="mantenimeinto"/>
<label for ="detalle">detalle</label><input id="detalle"/>
<label for ="estado">estado</label><input id="estado"/>
<button id="new" >New</button>
<button id="save" >Save</button>
<button id="query" >Query</button>
<div id="body"/>
`
const newb = document.querySelector<HTMLButtonElement>('#new')!
const save = document.querySelector<HTMLButtonElement>('#save')!
const query = document.querySelector<HTMLButtonElement>('#query')!

const id = document.querySelector<HTMLInputElement>('#id')!


const parcial = document.querySelector<HTMLInputElement>('#parcial')!
const status = document.querySelector<HTMLInputElement>('#status')!
const mantenimeinto = document.querySelector<HTMLInputElement>('#mantenimeinto')!
const detalle = document.querySelector<HTMLInputElement>('#detalle')!
const estado = document.querySelector<HTMLInputElement>('#estado')!
const stock = document.querySelector<HTMLInputElement>('#stock')!
const body = document.querySelector<HTMLDivElement>('#body')!
//#endregion


newb.addEventListener('click',()=>{
  parcial.value=""
  mantenimeinto.value=""
  detalle.value=""
  estado.value=""
  id.value=""
})
query.addEventListener('click', async ()=>{
  const respmantenimeintos:IResmantenimeinto 
  =  await (await httpAxios.get<IResmantenimeinto>('mantenimeinto')).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"


    const { mantenimeintos } = respmantenimeintos;
    console.log(respmantenimeintos)

    for (const product of mantenimeintos)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${product._id}" >${product.parcial}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${product.mantenimeinto}`
    }
    body.innerHTML=``
    body.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const mantenimeinto:mantenimeinto 
          =  await (await httpAxios.get<mantenimeinto>(`mantenimeinto/${idx}`)).data;
          parcial.value= mantenimeinto.parcial;          
          mantenimeinto.value= mantenimeinto.mantenimeinto;  
          detalle.value= mantenimeinto.detalle;  
          estado.value= mantenimeinto.estado;  
          id.value= mantenimeinto._id!;  
           
      })
    })

  

    

  

})
save.addEventListener('click',async ()=>{
  const data:mantenimeinto = {
    parcial:parcial.value,
    mantenimeinto:  mantenimeinto.value,
    detalle:detalle.value,
    estado:estado.value,
  }
  // console.log(data);

  if (id.value.trim().length>0 )
  {
    //        
    const resp: mantenimeinto = await (await httpAxios.put<mantenimeinto>(`mantenimeinto/${id.value}`, data)).data
    console.log(resp)
    console.log(`El prducto ${resp.parcial} fue modificado con éxito`);
    
    return;
  }
  try {
    const resp: mantenimeinto =  await (await httpAxios.post<mantenimeinto>(`mantenimeinto`, data)).data
    console.log(`El mantenimeinto ${resp.parcial} fue grabado con éxito`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
    
  }
  
  
})