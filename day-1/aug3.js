/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */
 const data = 5;
  const valueToFill = 'a';
 
 const fill = (arraySize, value) => {
    const myArray = [];
    for (let i = 1; i <= arraySize; i++) {
      myArray.push(value);
      console.log(myArray);
    }
  } 
  fill(5, 'a'); // ['a', 'a', 'a']
  fill(4, 'b');