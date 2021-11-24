/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */
 const data = 9;
  const valueToFill = 'a';
 
 const fill = (arraySize, value) => {
   
    myArr = [];
    for(let i=0; i<arraySize; i++){
      myArr.push(value)
    }
      
  return myArr;
  } 
   // ['a', 'a', 'a']
  console.log(fill(data, 'a'));

  const newArr = myArr.map(e => `${data}${e}`);
  console.log(newArr)