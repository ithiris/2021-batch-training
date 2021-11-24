function addNumbers(arr) {
var output = 0;
for(let i=0; i<arr.length; i++){
    output = output + arr[i]
}
return output;
}

console.log(addNumbers([130, 333,30,]));