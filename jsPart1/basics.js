let name;
// Modern best practice is to have them in their own line but possible
let first, last = 'Hello';

// Constant
const interestRate = 0.3;

// Object Literal {}
let person = {
  name: 'Teddy',
  age: 31
};

// Accessing Members
person.name = 'Teddy';
person['name'] = 'Teddy'; //  Best for when user selectes property at runtime

// Array Literal []
let selectedColor = ['red', 'blue'];

// Accessing Members
selectedColor[0] = 'purple';

// Function
let test = function greet(name) { // Note it doesn't have let/variable type
  // Body
  return name; //  Note type isn't declared for function
}

// EXERCISE
// Swap a and b
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b= c;

// DONE