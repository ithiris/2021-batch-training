//16.
/**
 * Task description: Write a method that finds shallow intersections of objects
 * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * Task Complexity: 3 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {Object}
 */
const intersection = (firstObject, secondObject) => {
  const newObj = {};
  for (let key1 in firstObject) {
    value1 = firstObject[key1];
    for (let key2 in secondObject) {
      if (key1 === key2) {
        newObj[key1] = value1;
      }
    }
  }
  return newObj;
};

/*const data = { a: 1, b: 2 };
  const data2 = { c: 1, b: 2, a:1};
  console.log(intersection(data, data2)); // output =  {a:1, b: 2}*/

const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // output =  {b: 2}
