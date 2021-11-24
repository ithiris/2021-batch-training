//7.
/**
  * Task description: Write a method that to add up each element in the same position and
    create a new array containing the sum of each pair. Assume both arrays are of the same length.
  * Expected Result: ([4, 6, 7],[8, 1, 9]) => [12, 7, 16]
  * Task Complexity: 1 of 5
*/
const sumOfPairs = (num1, num2) => {
  const sum = [];
  for (let i = 0, j = 0; i < num1.length, j < num2.length; i++, j++) {
    sum.push(num1[i] + num2[j]);
  }
  return sum;
};
let num1 = [4, 6, 7,2];
let num2 = [8, 1, 9];
console.log(sumOfPairs(num1, num2)); // [12, 7, 16]
