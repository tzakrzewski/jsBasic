// Function Declaration
function walk() {
  console.log('walk');
}

// Function Expression, Anonymous since it doesnt have a name function name()...etc
// Else it wouldl be called a Named Function Expression
let run = function() {
  console.log('run');
};

// When an argument is not passed, its undefined
function sum(a, b) {
  console.log(a + b); //
  //arguments - obj, we will be able to see 1, 2, 3, 4 for example
  //THIS obj does have an iterator, doing so we can update sum to sum() but there is a better way to implement
}
// console.log(sum(1)); results NaN, since b is undefined
// console.log(sum(1, 2, 3, 4)); will return 3

// Function with varying number of params REST operator (not spread used to copy arrays)
function sum1(...args) {
  // args = an array of x elements
}// rest param must be the last param

// Default Params
function interest(principal, rate = 3.5, years = 5) {
  // Will use Thruthy, if not set where called then will use default
  // if default, all the params to the rights should have a default by standard  
}

// Getter and Setter access properties in an obj or change and mutate them
const person = {
  firstName: 'Ted',
  lastName: 'Zakr',
  get fullName() {
    if (typeof value !== 'string')
      throw new Error('Value is not a string') //Error object that is now an exception because it is thrown
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    // Do stuff
  }
};

// Definsive programing Try Catch
try {
  person.fullName = null;
}
catch (e) {
  console.log(e); // Once throw is invoked, controll moves to catch with the error exception
}

// Power of this insdie object -> method
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag); //In order to pass this object, we need to pass it as 2nd arg
    }, this) // Only passibly since it had anyArgs? param
  }
}

// If there are no anyArgs to pass this, here is a solution
const video1 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach( tag => {
      console.log(this.title, tag); // Arrow function inherits THIS
    })
  }
}

// EXERCISES
function exSum(...args) {
  if (args.length === 1 && Array.isArray[args[0]])
    args = [...args[0]];

  return args.reduce((a, b) => a + b);
}

// Simple getter/setter -- makes it into a property
const circle = {
  radius: 0,
  get area() {
    return this.radius * this.radius * Math.PI;
  }
}

// Error Handling Try Catch Throw
function countOccurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error("Not an array!!");

  return array.reduce((accumulator, element) => {
    return element === searchElement ? ++accumulator : accumulator;
  }, 0)
}

try {
  console.log(countOccurrences(true, 1));
}
catch (e) {
  console.log(e.message);
}
