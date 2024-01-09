// Esteban => [E,S,T,E,B,A,N] => string =>string[]
// [E,S,T,E,B,A,N] => Esteban => string[] => string

// La sobre carga de funciones solo funciona con las funciones declaradas con function
export function parseSt(input: string): string[];
export function parseSt(input: string[]): string;

export function parseSt(input: unknown): unknown {
  return typeof input === 'string' ? input.split('') : (input as string[]).join('');
}

console.log(` Esteban   =>  ${parseSt('Esteban')}`);
console.log(`'E','s','t','e','b','a','n'  => ${parseSt(['E','s','t','e','b','a','n'])}`);

// Reglas para utilizar las sobrecargas de funciones
// 1. Las sobrecargas de funciones deben ser declaradas antes de la implementación de la función
// 2. Las sobrecargas de funciones deben ser declaradas en el mismo scope que la implementación de la función
// 3. Si tienes una sobrecarga de la función con un unknown es mejor dejarlo al final de las declaraciones
// 4. Las sobrecargas de funciones no pueden ser declaradas con arrow functions
// 5. Las sobrecargas de funciones no pueden ser declaradas con funciones anónimas
// 6. Evalua bien la necesidad de tener sobrecargas de funciones, si se trata del numero de argumentos de una función se puede hacer perfectamente con los valores opcionales
