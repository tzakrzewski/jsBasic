// If and Else
if (1 > 2) { // curly braces are not needed if single statement
  console.log('False');
  // another statement
}
else {
  // stuff
}

// Switch Cases
let role;

switch (role) {
  case 'guest':
    // statement
    break; // else other cases will execute
  default:
    // statement no need for break, will automatically leave block
}

// For Loop
for(let i = 0; i < 5; i++) {
  // statement - no need for curly if single
}

// While Loop
let i = 0;
while (i < 5) {
  // statement
  i++;
}

// Do-While Loop
i = 0;
do {
  // statement
  i++;
} while (i < 5);

// For-in Loop -- best for objects
const person = {
  name: 'Teddy',
  age: 30
};

for (let key in person) {
  // console.log(key, person[key]);
}

// For-of Loop -- best for arrays
const colors = ['red', 'blue', 'purple'];

for (let color of colors){
  // console.log(color);
}

// EXERCISES
// Write a func that takes 2 nums and returns the maximum of the two
function max (a, b) {
  return (a > b) ? a : b;
}

// Returns true if width > height else false
function isLandscape(width, height) {
  return (width > height);
}

// if divisible by 3 - Fizz, if divisible by 5 - Buzz, if divisibly by 3 & 5 - FizzBuzz
// if neither then same number outputed
// if not a number print 'Not a number'
function fizzBuzz(input) {
  if (!Number.isFinite(input)) // Can also use typeof input !== 'number'
    return 'Not a number';
  else if ((input % 5 === 0) && (input % 3 === 0))
    return 'FizzBuzz';
  else if ( input % 5 === 0)
    return 'Buzz';
  else if ( input % 3 === 0)
    return 'Fizz';  
  else
    return input;
  }

// Check speed limit = 70km, if over 5 -> 1 point each,
// License is suspended when more then 12 points
function checkSpeed(speed) {
  const speedLimit = 70;
  const overSpeed = 5;
  let points = 0;

  if (speed > speedLimit) {
    points = Math.floor((speed - speedLimit) / overSpeed);
  }

  points > 12 ? console.log('License Suspended') : console.log('Points: ', points) 
}

// Limit print if odd then odd else even if even
function showNumbers(limit) {
  for(let i = 0; i <= 10; i++){
    const message = (i % 2 === 0) ? 'EVEN'  : 'ODD';
    console.log(i, message);
  }
}

// Count number of Truthy in array
function countTruthy(array) {
  let totalTruthy = 0;

  for(let a of array) {
    if(a) totalTruthy++;
  }
  
  console.log('Truthy Count: ', totalTruthy);
}

// Show all properties of objects of type string
function showProperties(obj) {
 for(let key in obj)
  if(typeof obj[key] === 'string')
    console.log(key, obj[key]);
}

/// Multiples of 3 and 5 in sum
function sum(limit) {
  let sum = 0;

  for(let i = 0; i <= limit; i++)
    if ((i % 3 === 0) || (i % 5 === 0))
      sum += i;

  console.log(sum);
}

// Get average of grade and return A, B, C...etc
const marks = [80, 80, 50];
function calculateGrade(marks) { // This can be broken into 2 funcs. One for getting average. Another for get grade
  let average = 0;
  let sum = 0;  
  
  for(let mark of marks)
    sum += mark;

  average = sum / marks.length;

  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  return 'F';
}

// Print Stars
function showStars(rows) {
  for(let i = 1; i <= rows; i++){
    console.log('*'.repeat(i));
  }

  // Another way
  for(let row = 1; row <= rows; row++){
    let pattern = '';
    for(let i = 0; i < row; i++)
      pattern += '*';
    console.log(pattern);
  }

}


// Show prime numbers up to limit
function showPrimes(limit) { // To avoid break and nested loops, break into smaller functions
  for(let i = 2; i < limit; i++){
    let isPrime = true;
    for(let j = 2; j < i; j++)
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    if (isPrime) console.log(i);
  }
}

// DONE