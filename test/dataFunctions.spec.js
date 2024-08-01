import { filterData/*sortData,computeStats,decadasData*/} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

//PRUEBA PARA EL METODO FILTER 
describe ('should return all data when "all" is pased', () => {
  const result =filterData(testData,'all');
  expect(result).toEqual(expectedAll);
  it('should filter data inascendin `filterdata`', () => {
    expect(filterData(asc,desc)).toBe('filterData');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
