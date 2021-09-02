function unionOfArr(arr1, arr2) 
{
var unionArrValue = [];
for(var i = 0; i < arr1.length; i++)
   {      
       unionArrValue.push(arr1[i]);
   }
   
   for(var i = 0; i < arr2.length; i++)
   {
       
       unionArrValue.push(arr2[i]);

   }
   let result = [...new Set(unionArrValue)];
   return result;
}
var result = unionOfArr([1, 2, 5,5,3], [100, 2, 1, 10]);
console.log(result);

