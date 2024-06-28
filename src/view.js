export const renderItems = (data) => {
 

  const newElementUl = document.createElement("ul");
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  data.forEach((element)=> {
    console.log(element.name)
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