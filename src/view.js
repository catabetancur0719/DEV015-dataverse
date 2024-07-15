export const renderItems = (data) => {
    
  const newElementUl = document.createElement("ul");
  
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  data.forEach((element)=> {
    
    const newElementLi = document.createElement("li"); 
    newElementLi.classList.add("cards")
    newElementLi.innerHTML += ` 
    <img src="${element.imageUrl}" alt="${element.id}"/>
     <p><strong>${element.name}</strong></p>
     <p>${element.shortDescripcion}</p>
     <p>Año de creación:${element.facts.añoCreacion}</p> 
     <p>Lugar de Origen:${element.facts.pais}</p>
     <p>Album más vendido:${element.facts.albumMasFamoso}</p>
     <p>Integrantes:${element.facts.integrantes}</p>`
    newElementUl.appendChild(newElementLi);//el ul es el padre y va a tener un hijo li
  
  });
  /* export const usaPromedio = (usaPromedio) => {
  const newBandElement = document.createElement("div");
  newBandElement.innerHTML += ` 
   <p><strong>Dato Curioso </strong></p>
   <p></p>`  
  newBandElement.appendChild(newBandElement);*/


  return newElementUl;
  

};
  
  


  
 
 
   

