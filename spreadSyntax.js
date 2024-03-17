// Task 1: Function Argument Expansion

function sum(first, second, third) {
    return first + second + third;
}

const numbers = [7, 16, 334];

// Using spread syntax, we can supply the sum function with the numbers within the array "numbers" to find the sum
const totalSum = sum(...numbers);

console.log("Total Sum of sum function: " + totalSum + "\n");

// Task 2: Merging Arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Using spread syntax, we can combine the two arrays, merging them into a new array with the totality of the numbers
const mergedArray = [...array1, ...array2];

console.log("mergedArray: " + mergedArray + "\n");

// Task 3: Array Element Insertion

const colors = ['red', 'green', 'blue'];

// We can provide elements within the array with and without the use of spread syntax to represent colors within the array
const extendedColors = ['yellow', ...colors, 'purple'];
console.log("extendedColors: " + extendedColors + "\n");

// Task 4: Cloning and Modifying an Object

const person = { name: 'John', age: 30};
// We use person as a template, then overwrite "name" and then include a gender key 
const newPerson = {...person, name: 'Jane', gender: 'female'};

console.log("person: ", person);
console.log("newPerson: ", newPerson);
console.log("\n");

// Task 5: Combining Objects

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

// Spread syntax will overwrite object1's entry for b with object2's b, along with printing out the values for a and c 
const combinedObjects = {...object1, ...object2};
console.log("combinedObjects: ", combinedObjects);

