//10.
/**
 * Task description: Creates an array of the own enumerable property names of object.
 * Expected Result: { 'a': 1, 'b': 2, 'c': 3 } => ['a', 'b', 'c']
 * Task Complexity: 1 of 5
 * @param {Object} data - The object to query.
 * @returns {Array} - Returns the array of property names.
 */
 const keys = (data) => {
    const myArray = [];
    for (let key in data) {
      myArray.push(key);
    }
    return myArray;
  };
  const data = {
    a: 1,
    b: 2,
    c: 3,
  };
  console.log(keys(data)); // output = ['a', 'b', 'c']
  