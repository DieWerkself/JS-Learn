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
*/

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
