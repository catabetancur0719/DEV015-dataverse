import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
//aqui va todo lo del DOM eventos de escucha y mostrar datos en pantalla

console.log(example, renderItems(data), data);
const root =  document.getElementById("root");
root.appendChild(renderItems(data))