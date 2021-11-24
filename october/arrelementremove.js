//2.
/**
 * Task description: Write a method to creates a slice of array with n elements dropped from the beginning.
 * Expected Result: [1, 2, 3, 4] => [3, 4]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @param {Number} elementToDrop - number of elements to drop.
 * @returns {Array}
 */
 const drop = (array, elementToDrop) => {
    const dropElement = [];
    for (let i = elementToDrop; i < array.length; i++) {
      dropElement.push(array[i]);
    }
    return dropElement;
  };
  
  const data = [1, 2, 3, 4];
  const elementToDrop = 2;
  console.log(drop(data, elementToDrop)); // [3, 4]