import {sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
//aqui va todo lo del DOM eventos de escucha y mostrar datos en pantalla

console.log(sortData,renderItems(data), data);
const root =  document.getElementById("root");
root.appendChild(renderItems(data)) //esta inyectando el contenido generado en data


const selectOrder = document.getElementById("select-order"); 
selectOrder.addEventListener ("change", (event) => {
  const newValue = event.target.value;

  console.log(sortData(data,"name",newValue));

 
  console.log(data);
});




