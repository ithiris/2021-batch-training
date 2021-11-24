function removeUniqNum(arr1, arr2){
    var myArray = [ ];    
    var value;
    var len = arr1.length
for(var i=0; i< len; i++) {
    value = arr1[i];
    arr2.push(value);

for(var k=0; k<arr2.length; k++)
  {
    
        fullValue = arr2[k];
        if(myArray.indexOf(fullValue) == -1){
    
    myArray.push(fullValue);
          
  
  
        }
}
}
    return myArray;
}
var result = removeUniqNum([1,2,3], [100, 2, 1, 10]);
console.log(result)
