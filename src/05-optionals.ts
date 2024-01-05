// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

interface Person {
  name: string;
  age?: number;
}
// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

class Employee {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

// Los parámetros opcionales son aquellos que podemos obviar su envío cuando mandamos datos en una función que requiere argumentos.

// El nullish-coalescing nos permite evaluar si una variable está definida, pero si esta es null o undefined, retorna un segundo valor diferente.

const createProduct = (
  id: string | number,
  // Puede ser de tipostringonumber`.
  isNew: boolean,
  stock?: number,
  // PARÁMETRO OPCINAL.
  ) => { return {
    // Retornamos un objeto con los valores pasados como parámetros.
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }}

console.log( createProduct(1, true) ) // { id: 1, stock: undefined, isNew: true }

// PARAMETROS POR DEFECTO
// Los parámetros por defecto son aquellos que podemos definir un valor por defecto en caso de que no se envíe ningún valor al llamar a la función.
function suma(x: number =10, y: number = 20){
  return x + y;
}
console.log(suma())          // 30

//* PARAMETROS REST

// Los parámetros rest son aquellos que nos permiten pasar un número indefinido de argumentos a una función.
// Para definir un parámetro rest, debemos anteponer tres puntos (…) al nombre del parámetro.
// Los parámetros rest son almacenados en un array.
// Los parámetros rest deben ser el último parámetro de la función.


function sumar(a:number, b:number, ...c:number[]):number{
  let resultado = a + b;
  c.forEach(n => resultado += n);
  return resultado;
}

console.log(sumar(1,2,3,4,5,6,7,8,9,10)) // 55

//* PARAMETROS SPREAD
let arr=[1,2,3];
let arr2=[4,5,6];
let arr3=[...arr,...arr2];
console.log(arr3); // [1,2,3,4,5,6]

// LA FUNCIÓN REST Y EL OPERADOR SPREAD NO SON
// LO MISMO

// La función rest se utiliza para agrupar los elementos de un array en un
// parámetro, mientras que el operador spread se utiliza para expandir los
// elementos de un array en un lugar donde se esperan cero o más argumentos.
// EN ESTE CASO SE USA EL OPERADOR SPREAD
function sumar3(...nums: (number | string)[]): number {
  let resultado = 0;
  nums.forEach(n => {
    if (typeof n === 'number') {
      resultado += n;
    }
  });
  return resultado;
}

let numeros=[1,2,'hola'];
console.log(sumar3(...numeros)); // 3
