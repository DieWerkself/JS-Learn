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

// const firstName = "Dmitry";
// const job = "Support IT Engineer";
// const birthYear = 1991;
// const year = 2022;

// const dmitry =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

// console.log(dmitry);

// const dmitryNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

// console.log(dmitryNew);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String with
// multiple
// lines`);

// const age = 15;

// //if-else control structure
// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsToLicense = 18 - age;
//   console.log(`Sarah is too young⛔. Wait another ${yearsToLicense} years.`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else if (birthYear >= 2001) {
//   century = 21;
// }

// console.log(century);

// Type Conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("inputYear"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Type Coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// let n = "1" + 1; // '11'
// n = n - 1; // 10
// console.log(n);

// 21. Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Dmitry"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 10;

// if (money) {
//   console.log("I have a many money!");
// } else {
//   console.log("I haven't money!");
// }

// let height = 0;
// if (height) {
//   console.log(`Very height! It's ${height}!`);
// } else {
//   console.log(`This height is ${typeof height}`);
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult(strict)");

// if (age == 18) console.log("You just became an adult(loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number!");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number!");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// 24. Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // AND
// console.log(hasDriversLicense || hasGoodVision); // OR
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = true; // C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive!`);wednesdaythu
// } else {
//   console.log("Someone else should drive...");
// }

// 26. Switch Statement

// const day = "mondaya";

// switch (day) {
//   case "monday": // day === monday
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sanday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// let taskForDay;

// if (day === "monday") {
//   taskForDay = `Plan course structure. Go to coding meetup.`;
// } else if (day === "tuesday") {
//   taskForDay = `Prepare theory videos`;
// } else if (day === "wednesday" || day === "thursday") {
//   taskForDay = `Write code examples`;
// } else if (day === "friday") {
//   taskForDay = `Record videos`;
// } else if (day === "saturday" || day === "sanday") {
//   taskForDay = `Enjoy the weekend`;
// } else {
//   taskForDay = `Not a valid day!`;
// }

// console.log(taskForDay);

// const age = 25;
// const areYouAdult = age >= 18;

// areYouAdult
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = areYouAdult ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (areYouAdult) {
//   drink2 = "I like to drink wine";
// } else {
//   drink2 = "I like to drink water";
// }
// console.log(drink2);

// console.log(`I like to drink ${areYouAdult ? "wine" : "water"}`);
