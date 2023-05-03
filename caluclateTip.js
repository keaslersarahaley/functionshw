/*Write a function called calculateTip: This function should take two
arguments - the total bill amount (a number) and the tip percentage (a\
  number representing the percentage, e.g. 15 for 15%). The function
    should calculate the tip amount by multiplying the bill amount by the
    tip percentage and dividing the result by 100. It should return the
    calculated tip amount. */



const totalBill = 100;
const tipPercentage = 15;

function calculateTip(totalBill, tipPercentage) {
  const tipAmount = (totalBill * tipPercentage) / 100;
  return tipAmount;
  }
  
const tipAmount = calculateTip(totalBill, tipPercentage);
console.log(tipAmount)