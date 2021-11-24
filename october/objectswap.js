//9.
/**
 * Task description: Creates an object composed of the inverted keys and values of object.
 * Expected Result: { 'a': 1, 'b': 2, 'c': 3 } => { '1': 'a', '2': 'b', '3': 'c' }
 * Task Complexity: 1 of 5
 * @param {Object} data - The object to invert.
 * @returns {Object} - Returns the new inverted object.
 */
 const invert = (data) => {
    const myObj = {};
    for (let key in data) {
      let temp = data[key];
      myObj[temp] = key;
    }
    return myObj;
  };
  const data = {
    a: 1,
    b: 2,
    c: 3,
  };
  console.log(invert(data)); // output = { '1': 'a', '2': 'b', '3': 'c' }
  