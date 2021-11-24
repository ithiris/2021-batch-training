//18.
/**
 * Task description: Write a method that returns an array composed of nested array
 * Expected Result: {a : 1, b :2, c:3} => [['a', 1], ['b', 2], ['c', 3]]
 * Task Complexity: 2 of 5
 * @param {Object} obj - The object to query.
 * @returns {Array}
 */
 const toPairs = (obj) => {
    var nestedArr = [];
  
    for (let key in obj) {
      var value = obj[key];
  
      nestedArr.push([key, value]);
    }
  
    return nestedArr;
  };
  const data = {
    a: 1,
    b: 2,
    c: 3,
  };
  console.log(toPairs(data)); // [['a', 1], ['b', 2], ['c', 3]]
  