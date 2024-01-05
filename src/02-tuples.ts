// Define a tuple
let person: [string, number, boolean] = ["John", 25, true];

// Accessing tuple elements
let personName: string = person[0];
let age: number = person[1];
let isStudent: boolean = person[2];

console.log(personName);       // Output: John
console.log(age);        // Output: 25
console.log(isStudent);  // Output: true

type StringNumberBooleans = [string, number, ...boolean[]];
// StringNumberBooleans describes a tuple whose first two elements are string and number respectively, but which may have any number of booleans following.
type StringBooleansNumber = [string, ...boolean[], number];
// StringBooleansNumber describes a tuple whose first element is string and then any number of booleans and ending with a number.
type BooleansStringNumber = [...boolean[], string, number];
// BooleansStringNumber describes a tuple whose starting elements are any number of booleans and ending with a string then a number.

const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];
const d: StringNumberBooleans = ["world", 3, true, false, true, false, true, false, true, false, true, false, true, false, true];


