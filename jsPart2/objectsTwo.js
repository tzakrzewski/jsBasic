// Constructor with Private Members (Property + Methods)
function Circle(radius) {
  this.radius = radius;
  let color = 'purple'; // Private to Circle

  this.draw = function() {
    round(); // No need for THIS keyword sinve its a variable
    console.log('Draw');
  };
  let round = function() {
    console.log('Private Round Function');
  };

  // Getter and Setter
  Object.defineProperty(this, 'color', {
    get: function() {
      return color;
    },
    set: function(value) {
      color = value;
    }
  })

};
// let c = new Circle(1);
// c.color = 'red';
// console.log(c.color);

// Factory Functions
function createCircle(radius) {
  let width = 1; // Private
  return {
    radius,
    width
  };
}

// More recent https://www.youtube.com/watch?v=Ex_PYQCj7xE&t=248s
// Factory Function
const createPerson = (firstName, lastName, age, height) => {
  let pFirstName = firstName;
  let pLastName = lastName;
  let pAge = age;
  isValidaAge = (age) => {
    return age > 0;
  }

  return {
    get age() { // makes it into a property not a function
      return pAge + 20;
    },
    set age(age) {
      pAge = age;
    },
    height
  }
}
//console.log(createPerson("bill", "bob", 45, 100).age);
