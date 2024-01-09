const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

console.log(numbers[0]); // Output: 1

numbers[0] = 10; // Error: Cannot assign to '0' because it is a read-only property.

numbers.push(6); // Error: Property 'push' does not exist on type 'ReadonlyArray<number>'.
