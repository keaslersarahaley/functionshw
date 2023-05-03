/* Write a function called calculateInterest: This function should take
three arguments - the principal amount (a number), the annual interest
rate (a number representing the percentage, e.g. 5 for 5%), and the
number of years (a number). The function should calculate the total
amount after interest has been applied using the formula: totalAmount
= principalAmount * (1 + (interestRate / 100) * years). The function
should return the total amount after interest. */

function calculateInterest(principalAmount, interestRate, years) {
    // Convert the interest rate to a decimal
    interestRate = interestRate / 100;
    
    // Calculate the total amount after interest
    const totalAmount = principalAmount * (1 + (interestRate * years));
    return totalAmount;
  }
  
const principalAmount = 1000;
const interestRate = 5;
const years = 3;

const totalAmount = calculateInterest(principalAmount, interestRate, years);
console.log(`The total amount after interest is ${totalAmount}`);
// Output: The total amount after interest is 1150


