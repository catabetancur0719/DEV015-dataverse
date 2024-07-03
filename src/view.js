export const renderItems = (data) => {
 

  const newElementUl = document.createElement("ul");
  

  
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  data.forEach((element)=> {
    
    const newElementLi = document.createElement("li"); 
       
    newElementLi.innerHTML = `<img src="${element.imageUrl}" alt="${element.id}"/>`
    newElementUl.appendChild(newElementLi);
    newElementUl.innerHTML += `<p><strong>${element.name}</strong></p>`
    newElementUl.innerHTML += `<p>${element.shortDescripcion}</p>`
    newElementUl.innerHTML += `<p>Año de creación:${element.facts.añoCreacion}</p>`,
    newElementUl.innerHTML += `<p>Lugar de Origen:${element.facts.lugarCreacion}</p>`,
    newElementUl.innerHTML += `<p>Album más vendido:${element.facts.albumMasFamoso}</p>`,
    newElementUl.innerHTML += `<p>Integrantes:${element.facts.integrantes}</p>`
  })
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