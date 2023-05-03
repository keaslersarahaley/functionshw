/* Write a function called calculateDistance: This function should take
two sets of coordinates as arguments, given as arrays (e.g. [x1, y1]
and [x2, y2]). The function should calculate the Euclidean distance
between the two points using the distance formula: sqrt((x2 - x1)^2 +
(y2 - y1)^2). The result should be returned by the function. */

function calculateDistance(point1, point2) {
    const xDistance = point2[0] - point1[0];
    const yDistance = point2[1] - point1[1];
    const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
    return distance;
  }
  const point1 = [2, 3];
  const point2 = [5, 7];
  const distance = calculateDistance(point1, point2);
  console.log(distance); // Output: 8


  