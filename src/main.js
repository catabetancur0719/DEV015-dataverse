import {filterData} from './dataFunctions.js';
import {sortData } from './dataFunctions.js';
import {renderItems} from './view.js';
import data from './data/dataset.js';
//aqui va todo lo del DOM eventos de escucha y mostrar datos en pantalla

//console.log(sortData,renderItems(data), data);
const root =  document.getElementById("root");
root.appendChild(renderItems(data)) //esta inyectando el contenido generado en data

const selectFilter = document.getElementById("year");
selectFilter.addEventListener("change", (event)=> {
  const valueFilter = event.target.value;
  const filteredData = filterData(data,valueFilter);

  root.innerHTML= ""; //limpia el contenido actual
  root.appendChild(renderItems(filteredData)); //mostara los datos filtrados)
});

const selectOrder = document.getElementById("select-order"); 
selectOrder.addEventListener ("change", (event) => {
  const newValue = event.target.value; ///esta es la q capta loas asc y desc
  const ordenLetras = sortData(data,"name",newValue) //este es el q ordena el array y los muestra
  
  root.innerHTML= ""  // captura el div  del root y lo limpia
  root.appendChild(renderItems(ordenLetras)); //agrega los nuevos elementos ordenados
  

 
 
  const clearbtn = document.querySelector('[data-testid="button-clear"]'); //es el evento para que el boton limpie
  clearbtn.addEventListener('click', () => {
    root.innerHTML=""
    root.appendChild(renderItems(data));
  
  })

// console.log(data);
});










