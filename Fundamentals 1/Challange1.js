/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.


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

const markHigherBMIData1 = MarkBMIData1 > JohnBMIData1;
console.log(MarkBMIData1, JohnBMIData1, markHigherBMIData1);

const MarkBMIData2 = Mark[1].mass / Mark[1].height ** 2;
const JohnBMIData2 = John[1].mass / John[1].height ** 2;

const markHigherBMIData2 = MarkBMIData2 > JohnBMIData2;
console.log(MarkBMIData2, JohnBMIData2, markHigherBMIData2);
*/
