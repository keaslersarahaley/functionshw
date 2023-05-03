/* Write a function called convertTemperature: This function should
take two arguments - a temperature value (a number) and the unit of
measurement (a string, either 'F' for Fahrenheit or 'C' for Celsius).
Based on the unit of measurement, the function should convert the
temperature value to the other unit (Celsius to Fahrenheit or vice
versa) using the appropriate formula and return the converted
temperature value. */

function convertTemperature(temperature, unit) {
  let convertedTemp;
  
  if (unit === 'C') {
    // Convert Celsius to Fahrenheit
    convertedTemp = (temperature * 9/5) + 32;
  } else if (unit === 'F') {
    // Convert Fahrenheit to Celsius
    convertedTemp = (temperature - 32) * 5/9;
  } else {
    // Invalid unit of measurement
    return 'Invalid unit of measurement. Please enter "C" or "F".';
  }

  return convertedTemp;
}

const temperatureInCelsius = 30;
const temperatureInFahrenheit = 86;

const convertedTemp1 = convertTemperature(temperatureInCelsius, 'C');
console.log(convertedTemp1); // Output: 86

const convertedTemp2 = convertTemperature(temperatureInFahrenheit, 'F');
console.log(convertedTemp2); // Output: 30
