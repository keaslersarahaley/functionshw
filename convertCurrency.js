/* Write a function called convertCurrency: This function should take
three arguments - an amount (a number), the currency to convert from
(a string, e.g. 'USD'), and the currency to convert to (a string, e.g.
'EUR'). The function should use a predefined conversion rate to
convert the amount from one currency to another and return the
converted amount. */


function convertCurrency(amount, fromCurrency, toCurrency) {
    // Define the conversion rates for different currency pairs
    const conversionRates = {
      USD: { EUR: 0.84, GBP: 0.72, JPY: 109.97 },
      EUR: { USD: 1.19, GBP: 0.86, JPY: 131.65 },
      GBP: { USD: 1.38, EUR: 1.17, JPY: 152.37 },
      JPY: { USD: 0.0091, EUR: 0.0076, GBP: 0.0066 }
    };
  
    // Convert the amount using the appropriate conversion rate
    const conversionRate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;
  
    // Return the converted amount
    return convertedAmount;
  }

const amount = 100;
const fromCurrency = 'USD';
const toCurrency = 'EUR';

const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);

console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
// Output: "100 USD is equal to 84 EUR"
