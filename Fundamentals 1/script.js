// const country = "Russia";
// const continent = "Eurasia";
// let population = "144 миллиона";

// console.log(country, continent, population);

// Math operators
// const futureYear = 2037;
// const ageDmitry = futureYear - 1991;
// const ageValeria = futureYear - 1996;
// console.log(ageDmitry, ageValeria);
// console.log(ageDmitry * 2, ageValeria / 2, 2 ** 3);
// // 2 ** 3 means 2 * 2 * 2

// const firstName = "Dmitry";
// const lastName = "Semenov";
// console.log(firstName + " " + lastName);

// // Assigment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // 100
// x--; // 99
// console.log(typeof x, x);

// // Comparison operators
// console.log(ageDmitry > ageValeria); // <, >, >=, <=
// console.log(ageValeria >= 41);

// const isFullAge = ageValeria >= 41;

// console.log(futureYear - 1991 > futureYear - 1996);

// const futureYear = 2037;
// const ageDmitry = futureYear - 1991;
// const ageValeria = futureYear - 1996;

// console.log(futureYear - 1991 > futureYear - 1996);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const averageAge = (ageDmitry + ageValeria) / 2;

// console.log(averageAge);

const firstName = "Dmitry";
const job = "Support IT Engineer";
const birthYear = 1991;
const year = 2022;

const dmitry =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(dmitry);

const dmitryNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(dmitryNew);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);
