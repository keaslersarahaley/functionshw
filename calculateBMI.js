/*Write a function called calculateBMI: This function should take two
arguments - a person's weight in kilograms (a number) and height in meters (a number). 
The function should calculate their Body Mass
Index (BMI) using the formula: BMI = weight / (height * height). The
function should return the calculated BMI. */

function calculateBMI(weight, height) {
const BMI = (weight / (height * height))
return BMI; }

const weight = 70
const height = 1.65


const BMI = calculateBMI (weight, height);
console.log(BMI)

