import { filterData,sortData,computeStats /*,decadasData*/} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


//PRUEBA PARA EL METODO FILTER 
describe ('should return all data when "all" is pased', () => {
  it('should return  añoCreacion from "filterDataResult"', () => {
    /*expect(filterData(fakeData,'1980')).toEqual([{"facts": {"añoCreacion": "1980"}}]);*/
    expect(filterData(fakeData,'1980')).toEqual([{"facts": {"añoCreacion": "1980"}}]);
  });
});

//PRUEBA DE METODO SORT
describe ('should return sortData when "asc" is pased', () => {
  it('should return names in ascending order when "asc" is passed', () => {
    expect(sortData(fakeData,'name')).toEqual(fakeData); /*esta es la comprobacion de que el resultado es correcto*/
  });
});

// PRUEBA DE METODO COMPUTESTAT
describe ('computeStats function', () => {
  it('should returns the countri which created more band "Pais" is passed', () => {
    const calcularPromedio = (3/15)*100;
    expect(computeStats(fakeData,' Estados Unidos')).toEqual(calcularPromedio); /*Aqui comprobacion de que el resultado es correcto*/
  });
});

