'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES 5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 4);
createBooking('LH123', 10);

createBooking('LH123', undefined, 1000);


const flight = 'LH234';
const dmitry = {
  name: 'Dmitry Semenov',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 123456789) {
    alert('Check In');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, dmitry);
// console.log(flight);
// console.log(dmitry);

// Is the same as doing...
// const flightNum = flight;
// const passenger = dmitry;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000000);
};

newPassport(dmitry);
checkIn(flight, dmitry);

console.log(flight);
console.log(dmitry);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// Higher-Order Functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const hight5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', hight5);

['Jonas', 'Martha', 'Adam'].forEach(hight5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('Yooou')('Jonas');


const lufthansa = {
  name: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.name} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Dmitry Semenov');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
//book(23, 'Sam Fisher');

// Call method
book.call(eurowings, 23, 'Sam Fisher');
console.log(eurowings);

book.call(lufthansa, 239, 'Nathan Drake');
console.log(lufthansa);

const swiss = {
  name: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 123, 'Ben Gordon');

// Apply method
const flightData = [583, 'Martin Tyler'];
// book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Dmitry Semenov');
bookEW23('Sam Fisher');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(256));
console.log(addVAT(23));

// Challange

const addTaxRate = rate => value => value + value * rate;
const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(256));


const renOnce = function () {
  console.log('This will never run again');
};
renOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
