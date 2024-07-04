import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
//aqui va todo lo del DOM eventos de escucha y mostrar datos en pantalla

console.log(example, renderItems(data), data);
const root =  document.getElementById("root");
root.appendChild(renderItems(data)) //esta inyectando el contenido generado en data

// de aqui hacia abajo es codigo de prueba
const searchInput = document.getElementById("banda");

const handleSearch = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filterRoot = root.filter( (banda)=> banda.name.toLowerCase().startWith(searchTerm));

  filterRoot.forEach= (banda) =>{
    const li = document.createElemente("li");
    li.textContent = banda.name;
    root.appendChild(li);
    
  }

};
searchInput.addEventListener("input", handleSearch);
