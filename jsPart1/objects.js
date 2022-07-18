// Factory Function
function createCircle(radius) {
  return {
    // radius: radius,
    // draw: function() {
    //   console.log('draw')
    // }
    // Better way to write
    radius, // if param and key are the same
    draw() {
      console.log('draw');
    }
  };
}

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
// const circle = new Circle(1);

// Delete Property/Method
// delete circle.radius;

// Cloning an object
// for (let key in circle) {
//   another[key] = circle[key]
// }
// Old method, new way below
// Object.assign({target obj, source obj Multi++...});
// OR const another = { ...circle }; Spread operator

// Create Address Obj
const address = {
  street: 'Johnson Drive',
  city: 'Chicago',
  zipCode: 60614,
  showAddress(adress) {
    for (let key in address)
      console.log(key, address[key]);
  }
};

// Use the above and set Factory/Consturctor Functions
function addressCreate(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

function Address(street, city, zipCode) {
  this.street = street,
  this.city = city,
  this.zipCode = zipCode
}

// Create 2 function, 1. areEqual check if equal return true false
// 2. areSame if pointing to same object referencing. 
function areEqual(address1, address2) {
  for (let key in address1)
    if (address1[key] !== address2[key])
      return false;
  return true;
}

function areSame(address1, address2) {
  return address1 === address2;
}

// Blog post object title/body/aurtho/views/comments - author, body/isLive
const blogPost = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 3,
  comments: [
    { author: 'd', body: 'e'},
    { author: 'd', body: 'e'}
  ],
  isLive: true
};

// Constructor Function of a post object
function Post(title, body, author) {
  this.title = title,
  this.body = body,
  this.author = author,
  this.views = 0,
  this.comments = [],
  this.isLive = false
}

// Price Range
let priceRange = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10}
]