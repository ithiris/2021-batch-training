//3.
/**
 * Task description: Removes all given values from array using values array for equality comparisons.
 * Expected Result: ['a', 'b', 'c', 'a', 'b', 'c'] => ['b', 'b']
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @param {Array} values - The values to remove.
 * @returns {Array}
 */
 const data = ["a", "b", "c", "a", "b", "c"];
 const values = ["a", "c"];
 const pull = (array, values) => {
   const remainingValue = [];
   const maxLength = Math.max(array.length,values.length);
   for (let i = 0; i < maxLength; i++) {
    if(!values.includes(array[i]))
       remainingValue.push(array[i]);
   }
   return remainingValue;
 };
 
 console.log(pull(data, values)); // output = ['b', 'b']
 