function difference(arr1, arr2){
    var diffNumber = [];


for(let i=0; i<arr2.length; i++){
    
    value = arr2[i]
    arr1.push(value);
}
for(let j=0; j<arr1.length; j++){
    uniqValue = arr1[j];
    if(diffNumber.indexOf(uniqValue) == -1){
    diffNumber.push(uniqValue);
}
}
    return diffNumber;
}
var result = difference([1, 2, 3], [100, 2, 1, 10]);
console.log(result)
