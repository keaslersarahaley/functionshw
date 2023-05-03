/*Write a function called formatPhoneNumber: This function should
take a string of 10 digits (e.g. '1234567890') as an argument. The
function should format the phone number string into the format '(XXX)
XXX-XXXX' (e.g. '(123) 456-7890') and return the formatted phone
number. */

function formatPhoneNumber(phoneNumber) {
    const areaCode = phoneNumber.slice(0, 3);
    const prefix = phoneNumber.slice(3, 6);
    const lineNumber = phoneNumber.slice(6);
    return `(${areaCode}) ${prefix}-${lineNumber}`;
  }

  const phoneNumber = '1234567890';
const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
console.log(formattedPhoneNumber); // Output: '(123) 456-7890'
