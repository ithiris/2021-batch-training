function removeArrayElement(arr, num){
    var output = [];
for(let key in arr){
    if(arr[key] !== num) {
        value = arr[key] ;
        output.push(value);
    }


}

return output;
}
console.log(removeArrayElement([2, 5, 9, 6], 5)); 
