//14.
/**
 * Task description: Creates an array of data values not included in the other given arrays
 * Expected Result: [2, 1], [2, 3] => [1]
 * Task Complexity: 2 of 5
 * @param {Array} array - The array to inspect.
 * @param {Array} valuesToExclude - The values to exclude.
 * @returns {Array}
//  * 
//  *///console.log(difference([1,2],[2,3])) // [1]
// console.log(difference([3,2],[2,1])) // [3]
// console.log(difference([2,2],[2,2])) // []
// console.log(difference([1,2,3,5],[2,3,4])) // [1,5]
// console.log(difference([2,3,4],[1,2,3,5])) // [4]

const difference = (arr1, arr2) => {
  const values = [];
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) 
    values.push(arr2[i]);
  }
  return values;
};
/*const data = [2,3,5];
const valuesToExclude = [1,2,4,5];
console.log(difference( valuesToExclude,data )); // [1,5]*/

/*const data = [2,3,5];
const valuesToExclude = [1,2,4,5];
console.log(difference( data, valuesToExclude )); // [1,4]*/

const data = [2,2];
const valuesToExclude = [2,2];
console.log(difference( data, valuesToExclude )); // [ ]
