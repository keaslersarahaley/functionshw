/* Write a function called calculateAge: This function should take a
person's birth year (a number) as an argument. To calculate their age,
subtract the birth year from the current year (you can use the Date
object in JavaScript to obtain the current year). The function should
return the calculated age. */



function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }
  
  const birthYear = 1991;
  const age = calculateAge(birthYear);
  console.log(age); // Output: 32
  
  