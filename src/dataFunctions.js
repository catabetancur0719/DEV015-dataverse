//aqui van las funciones
//  aqui van las funciones del filtro
export const filterData = (data, value) => {
  if (value === "all") {
    return data; // Retornar todos los datos si el filtro es "Todos los años"
  }

  const filterDataResult = data.filter(element => element.facts.añoCreacion === value);
  //console.log(filterDataResult);
  return filterDataResult;
};

export const sortData = (data,sortBy,sortOrder) =>{ //ordena el arreglo

  const sortDataResult = data.sort(function(a,b){//fx compara y determina como ordenar los
    if (sortOrder === "asc") {
      if (a[sortBy] > b[sortBy]) {
        return 1; 
      } else if (a[sortBy] < b[sortBy]) {
        return -1; 
      } else {
        return 0;//es para asegurar que el ordenamiento sea estable
      }
    } else if (sortOrder === "desc") {
      if (b[sortBy] > a[sortBy]) {
        return 1; 
      } else if (b[sortBy] < a[sortBy]) {
        return -1; 
      } else {
        return 0;
      }
    }
  }); 
  //console.log (sortDataResult);
  return sortDataResult;
}

//funcion para recibir los calculos x estadistica
export  function computeStats(data) {
  const usaBands = data.filter(band => band.facts.pais === "Estados Unidos") /* esta busca y contiene todas pas USAband*/
  const usaPromedio = (usaBands.length * 100 / data.length);
  /* console.log(usaBands.length * 100 / data.length) ;*/
  /* console.log(usaPromedio);*/
  
  return usaPromedio; 
   
}

export function decadasData(data) {
  const decadaDeCreacion= data.map(data => data.facts.añoCreacion);

  const bandasNoventeras= decadaDeCreacion.reduce((count, year) => {
    if (year >= 1990 && year < 2000) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);

  console.log(bandasNoventeras);
    

  //return bandasNoventeras
}