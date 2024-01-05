/**
 * This function runs an infinite loop that prints "Hello" indefinitely.
 */
const withoutEnd = () =>{
  while (true){
    console.log("Hello");
  }
}

const fail = (message:string) =>{
  throw new Error(message);
}

const example = (input: unknown) =>{
  if (typeof input === "string"){
    return input.toUpperCase();
  }
  else if (Array.isArray(input)){
    return 'es un array'
  }
  return fail("Unsupported input");
}

console.log(example('hola'));
console.log(example(['hola']));
console.log(example(1));
console.log(example('hola despues del fail'));// Nunca se ejecuta




