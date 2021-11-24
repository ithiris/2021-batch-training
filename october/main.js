const numberss = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}
const myResult = numberss.reduce(getSum, 0);
console.log(myResult); // ans 24
