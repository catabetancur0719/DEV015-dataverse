// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

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
  console.log (sortDataResult);
  return sortDataResult;
}
//  a qui van las funciones del filtro




  

