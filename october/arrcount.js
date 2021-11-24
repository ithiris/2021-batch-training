
//1.
/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
*/
const fill = (arraySize, value) => {
   const newArray = [];
   for(let i =0; i < arraySize; i++){
       newArray.push(value);
   } 
   return newArray;
}
const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']