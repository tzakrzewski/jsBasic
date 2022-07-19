// Arrays usefull methods
const numbers = [1, 2, 3];
const numbers1 = [1, 2, 3];
const numbers5 = [1, 2, 1, 3];
numbers.push(4); // Add at end
numbers.unshift(0); // Add at begining
numbers.splice(2, 0, 'a', 'b'); // Add at index 2, 0 since not deleting
numbers.indexOf('a') // Index of where value is -1 if doesn't exist
numbers.includes(1) // True/False if it exists
numbers.pop(); // Removes at ends
numbers.shift(); // Removes at begining
numbers.splice(1, 1); // Removes 1 element at index 1
// To empty Array
//numbers = []; // Assign new location to empty out, original array may be collected by garbage if not referenced
//numbers.length = 0; // Truncates array
//numbers.splice(0, numbers.length); // Empties out array
//we can also pop to empty out in a loop, but better length 
numbers.concat(numbers, numbers1); // Combines an array
numbers.slice(2, 4); // Copy array from index 2-4 - original not affected
numbers.slice(2); // Copy array from index 2 and all elements after - original not affected
numbers.slice(); // Copy of original array original not affected
// For concat/slice - primitive values are copied, for objectes references are copied
const combined = [...numbers, 'a', ...numbers1]; // Spread operator when creating new array to combine
const copy = [...numbers]; // Works as well to copy also. Not also copies obj references
numbers.join(','); // will print out 1,2,3 as a string
// If you have a string, you can split with a seperator like ' ' so, an array is created
// Particularly usefull for url slugs when you want to split empty spaces then add - to add to URL /xxx
numbers.sort(); // Usefull to ASC sort
numbers.reverse(); // Usefull to DESC sort
// Sorting for objects won't work above, we need to add a function
// numbers.sort(function(a, b) {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
  
//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// })


const courses = [
  { id: 1, name: 'a'},
  { id: 2, name: 'b'}
]
let found = courses.find(function(course) { // Using Predicate since different Reference Type. Undefined if not found
  return course.id === 2;
});

// Arrow function
// Only if course is only element else () if empty or (x, y)
// Curly brackets not needed if single line of return code. Else follow up steps
// Course goes to course.name === 'a';
let arrowFound = courses.find(course => course.name === 'a');

// ForEach Method - Call Back Fn
// We could of also done (number, index) if we needed index instead of doing a for in
//numbers.forEach(number => console.log(number));

// Call Back Fn can return true or false - Check if EVERY Element is true in this case, or result is false
// There is a similar for .some, checks if atleast 1 is positive
numbers.every(value => value >= 0);

// Filter method used to return what you want from original array
numbers.filter(value => value >= 0);

// Map method - we can use this to alter the data and store it somewhere 
numbers.map(n => '<li>' + n + '</li>');
// If returning an object need to use paranthesis. Or else it thinks its a code block and not an object
numbers.map(n => ({ value: n }));

// When chaining add .x to newline
// const item = numbers
//   .filter(etc)
//   .concat(etc);

// Reducing an Array, great for getting sum or iterating through array to do something
// If we don't need to set initial value then we can get rid of {} and return
numbers5.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is initial value of accumulator but if we remove it, its set to whatever is array[0]

// EXERCISES
// Print out an array based on min/max
function arrayFromRange(min, max) {
  const range = [];
  for (let i = min; i <= max; i++)
    range.push(i);
  return range;
}

// Write a function to mimic the include method
function includes(array, searchElement) {
  for (let a of array)
    if (a === searchElement) return true;
  
  return false;
}

// Create an array that excludes from original array
function except1(array, excluded) {
  let output = [];

  for (let a of array) {
    if (!excluded.includes(a)) output.push(a);
  }
}

// Move based on index and offset
function move(array, index, offset) {
  if (offset === 0) return output;
  if ( index + offset >= output.length || index + offset < 0) {
    console.error('Invalid offset.');
    return undefined;
  }

  const output = [...array];
  let num = output.splice(index, 1);// could also do splice(index, 1)[0] to get only the value;
  output.splice(index + offset, 0, num[0]);

  return output;
}

// Count Occurrences in an array
function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, element) => {
    return element === searchElement ? ++accumulator : accumulator;
  }, 0)
}

// Get Max from an array
function getMax(array) {
  // Simple solution
  // array.sort();
  // return array[array.length - 1];

  // Reduce solution
  if (array.length === 0) return undefined;
  return array.reduce((max, element) => max > element ? max : element);
}

const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 }
];

let output = movies
  .filter(movie => movie.rating > 4 && movie.year === 2018)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(movie => movie.title);

console.log(output);
console.log(movies);


