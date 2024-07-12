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
     <p>Lugar de Origen:${element.facts.lugarCreacion}</p>
     <p>Album más vendido:${element.facts.albumMasFamoso}</p>
     <p>Integrantes:${element.facts.integrantes}</p> `
    newElementUl.appendChild(newElementLi);//el ul es el padre y va a tener un hijo li
     
   
  });
  
  return newElementUl;
  
};

 
 
   

/* <ul itemscope itemtype="Bandas-de-rock">
    <li>Metallica
      <img src="URL_DE_LA_IMAGEN_GENERADA" alt="metallica" />
      <dt>Nombre:</dt><dd itemprop="name">Metallica</dd>
     <dt>Descripción:</dt><dd itemprop="description"> Legendaria banda de thrash metal.</dd>
     <dt>Año de creacion:</dt><dd itemprop="yearOfBirth">1981</dd>
      <dt>Lugar de creacion:</dt><dd itemprop="placeOfBirth">Los Ángeles, California, Estados Unidos</dd>
    </li>
    <li>
        la que sigue
    </li>
  </ul>*/