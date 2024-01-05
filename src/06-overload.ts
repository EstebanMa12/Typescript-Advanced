// Esteban => [E,S,T,E,B,A,N] => string =>string[]
// [E,S,T,E,B,A,N] => Esteban => string[] => string

// La sobre carga de funciones solo funciona con las funciones declaradas con function
export function parseSt(input: string): string[];
export function parseSt(input: string[]): string;

export function parseSt(input: unknown): unknown {
  return typeof input === 'string' ? input.split('') : (input as string[]).join('');
}

console.log(parseSt('Esteban'));
console.log(parseSt(['E','s','t','e','b','a','n']));

