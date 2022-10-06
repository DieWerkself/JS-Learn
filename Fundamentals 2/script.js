"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;

function logger() {
  console.log(`My name is Dmitry`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

// Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Dmitry"));
console.log(yearsUntilRetirement(1980, "Bob"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
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


const friend1 = "Victor";
const friend2 = "Alex";
const friend3 = "Mike";

const friends = ["Victor", "Alex", "Mike"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends[2]);

const firstName = "Dmitry";
const dmitry = [firstName, "Semenov", 2022 - 1991, "Support Engineer", friends];
console.log(dmitry);
console.log(dmitry.length);

// Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);


// Add elements
const friends = ["Victor", "Alex", "Mike"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Alex"));
console.log(friends.indexOf("Max"));

friends.push(23);
console.log(friends.includes("Alex"));
console.log(friends.includes("Max"));
console.log(friends.includes(23));

if (friends.includes("Alex")) {
  console.log("You have a friend called Alex");
}


const dmitryArray = [
  "Dmitry",
  "Semenov",
  2022 - 1991,
  "Support Engineer",
  ["Max", "Alex", "Sam"],
];

const dmitry = {
  firstName: "Dmitry",
  lastName: "Semenov",
  age: 2022 - 1991,
  job: "Support Engineer",
  friends: ["Max", "Alex", "Sam"],
};

console.log(dmitry);
console.log(dmitry.lastName);
console.log(dmitry["lastName"]);

const nameKey = "Name";
console.log(dmitry[`first${nameKey}`]);
console.log(dmitry[`last${nameKey}`]);

// console.log(dmitry.last${nameKey});
const interestedIn = prompt(
  "What do you whant to know about Dmitry? Choose between firstName, lastName, age, job, and friends"
);

if (dmitry[interestedIn]) {
  console.log(dmitry[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

dmitry.location = "Russia";
dmitry["twitter"] = "@dontremember";
console.log(dmitry);

console.log(
  `${dmitry.firstName} has ${dmitry.friends.length} friends, and his best friend called ${dmitry.friends[0]}`
);


const dmitry = {
  firstName: "Dmitry",
  lastName: "Semenov",
  birthYear: 1991,
  job: "Support Engineer",
  friends: ["Max", "Alex", "Sam"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(dmitry.calcAge());
console.log(dmitry.getSummary());

console.log(dmitry.age);
// console.log(dmitry["calcAge"]());


// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}


const dmitry = [
  "Dmitry",
  "Semenov",
  2022 - 1991,
  "Support Engineer",
  ["Victor", "Alex", "Mike"],
  true,
];

const types = [];

// for (let i = 0; i < dmitry.length; i++) {
//   // Reading from array
//   console.log(dmitry[i], typeof dmitry[i]);
//   // Filling types array
//   // types[i] = typeof dmitry[i];
//   types.push(typeof dmitry[i]);
// }

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

// continue and break
for (let i = 0; i < dmitry.length; i++) {
  if (typeof dmitry[i] !== "string") continue;

  console.log(dmitry[i], typeof dmitry[i]);
}

for (let i = 0; i < dmitry.length; i++) {
  if (typeof dmitry[i] === "number") break;

  console.log(dmitry[i], typeof dmitry[i]);
}


const dmitry = [
  "Dmitry",
  "Semenov",
  2022 - 1991,
  "Support Engineer",
  ["Victor", "Alex", "Mike"],
  true,
];

for (let i = dmitry.length - 1; 0 <= i; i--) {
  // if (typeof dmitry[i] !== "string") continue;

  console.log(dmitry[i], typeof dmitry[i]);
}

for (let i = 1; i <= 3; i++) {
  console.log(`------ Starting exercise ${i}`);

  for (let j = 1; j <= 5; j++) {
    console.log(`Exercise ${i}: Lifting weight ${j}`);
  }
}


// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`You win! Dice a ${dice}`);
  }
}
*/
