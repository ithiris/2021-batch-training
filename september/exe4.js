function  removeDuplicateNumber(array){
    var output  = [];

    for(let  i = 0; i<array.length; i++) {
        if(output.indexOf(array[i]) == -1) {
         output.push(array[i]);
}
    }
    return output;
}
var result = removeDuplicateNumber([1,3,3,4,8,0,76,1,0,55,4] );
console.log(result)