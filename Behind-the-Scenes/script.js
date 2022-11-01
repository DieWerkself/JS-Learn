'use strict';
/*
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW var with same name as outer scope's variable
      const firstName = 'Wrong';

      // Reassigning outer scope's var
      output = 'New output';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Dmitry';
calcAge(1991);


// Variables
console.log(me);
// console.log(job);
// console.log(birthYear);

var me = 'Dmitry';
let job = 'IT Support';
const birthYear = 1991;

// Functions
console.log(addDecl(3, 5));
// console.log(addExpr(3, 5));
// console.log(addArrow(3, 5));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => {
  return a + b;
};

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 1;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const dmitry = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
dmitry.calcAge();

const jonas = {
  year: 1981,
};

jonas.calcAge = dmitry.calcAge;
jonas.calcAge();

const f = dmitry.calcAge;
f();

// var firstName = 'Jonas';

const dmitry = {
  firstName: 'Dmitry',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
dmitry.greet();
dmitry.calcAge();


const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(5, 10);
addExpr(5, 10, 4, 7, 2);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(5, 10);


let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge);
console.log(age);

const me = {
  name: 'Dmitry',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me);
console.log(friend);


// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davies';
console.log(`Before marriage: ${jessica.lastName}`);
console.log(`After marriage: ${marriedJessica.lastName}`);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alica', 'Bob'],
};

const jessica2Copy = Object.assign({}, jessica2);
jessica2Copy.lastName = 'Davies';
jessica2Copy.family.push('Mary');
jessica2Copy.family.push('John');

console.log(`Before marriage`, jessica2);
console.log(`After marriage`, jessica2Copy);
*/
