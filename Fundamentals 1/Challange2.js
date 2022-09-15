/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀

const Mark = [
  {
    mass: 78,
    height: 1.69,
  },
  {
    mass: 95,
    height: 1.88,
  },
];

const John = [
  { mass: 92, height: 1.95 },
  { mass: 85, height: 1.76 },
];

const MarkBMIData1 = Mark[0].mass / Mark[0].height ** 2;
const JohnBMIData1 = John[0].mass / John[0].height ** 2;

const whoHigherBMIData1 = MarkBMIData1 > JohnBMIData1;
console.log(MarkBMIData1, JohnBMIData1, whoHigherBMIData1);

const MarkBMIData2 = Mark[1].mass / Mark[1].height ** 2;
const JohnBMIData2 = John[1].mass / John[1].height ** 2;

const whoHigherBMIData2 = MarkBMIData2 > JohnBMIData2;
console.log(MarkBMIData2, JohnBMIData2, whoHigherBMIData2);

let whoIsHigher;
if (MarkBMIData1 > JohnBMIData1) {
  whoIsHigher = `Mark's BMI (${MarkBMIData1}) is higher than John's $({JohnBMIData1})!`;
} else {
  whoIsHigher = `John's BMI (${JohnBMIData1}) is higher than Mark's (${MarkBMIData1})!`;
}

console.log(whoIsHigher);
*/
