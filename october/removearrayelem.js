//5.
/**
 * Task description: Gets all but the first element of array.
 * Expected Result: [1, 2, 3] => [2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @returns {Array}
 */
 const tail = (array) => {
    const myArr = [];
    for(let i = 1; i<array.length; i++){
        myArr.push(array[i]);
    }

 return myArr;   
}
const data = [1, 2, 3];
console.log(tail(data)); //  output = [2, 3]