"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// // const interface = "Audio";
// // const private = 534;

// function logger() {
//   console.log(`My name is Dmitry`);
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// // Function declaration
// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

//Function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// // Arrow function
// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Dmitry"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));
const calcAge = (birthYear) => 2022 - birthYear;
const calcRetirement = (age) => 65 - age;

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = calcRetirement(age);

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired`;
  }
};
console.log(yearsUntilRetirement(1991, "Dmitry"));
console.log(yearsUntilRetirement(1950, "Alex"));
