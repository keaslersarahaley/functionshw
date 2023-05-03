/* Write a function called findEarliestDate: This function should take an
array of date strings (e.g. ['2023-05-01', '2023-04-30',
'2023-05-02']) as an argument. The function should iterate through
the date strings, compare them, and determine the earliest date in the
array. The earliest date should be returned by the function. */


function findEarliestDate(dateStrings) {
    let earliestDate = dateStrings[0];
    for (let i = 1; i < dateStrings.length; i++) {
      if (dateStrings[i] < earliestDate) {
        earliestDate = dateStrings[i];
      }
    }
    return earliestDate;
  }
  const dateStrings = ['2023-05-01', '2023-04-30', '2023-05-02'];
  const earliestDate = findEarliestDate(dateStrings);
  console.log(earliestDate); // Output: '2023-04-30'
     