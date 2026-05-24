// chapter02/Literals.js
// Examples of JavaScript literals

// String literal
const greeting = 'Hello, world!';

// Numeric literals
const integer = 42;
const floatNumber = 3.14;

// Boolean literals
const isActive = true;
const isComplete = false;

// Array literal
const colors = ['red', 'green', 'blue'];

// Object literal
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York',
};

// Null and undefined literals
const emptyValue = null;
let notDefined;

// Regular expression literal
const pattern = /\w+@\w+\.com/;

console.log('greeting:', greeting);
console.log('integer:', integer);
console.log('floatNumber:', floatNumber);
console.log('isActive:', isActive);
console.log('isComplete:', isComplete);
console.log('colors:', colors);
console.log('person:', person);
console.log('emptyValue:', emptyValue);
console.log('notDefined:', notDefined);
console.log('pattern test:', pattern.test('user@example.com'));
