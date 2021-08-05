// var array =[1,2,3,4,5];
// var arraytwo =[8,9,10,11];

//  function arrayconcat(inputarray,inputarraytwo)
//  {
//      return inputarray.concat(inputarraytwo);
//  }
//  console.log(arrayconcat([1,2,3,4,5], [8,9,10,11]));


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [8, 9, 10, 11];
function mergearray (array, array2) {
    const combined = [];

for (let i = 0; i < array.length; i++) 
{
    combined.push(array[i]);
}
  for (let j = 0; j < array2.length; j++) 
  {
    combined.push(array2[j]); 
  }
  return combined;
}

console.log(mergearray(arr1, arr2));

