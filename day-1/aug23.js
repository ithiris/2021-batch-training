var numbers = [2,8,9,11,39,20];
function getMax(array){
  
    var max = array[0];
    
    for(let i = 0; i < array.length; i++) {
    
        if(array[i] > max) {
        max = array[i];
        
}
    }
    return max;
}
console.log(getMax(numbers));

//exe2

var numbers = [2,8,9,11,39,20];
function getMin(array){
    var minvalue = array[0];
    for(let i = 0; i< array.length; i++) {
        if(array[i] < minvalue) {
        minvalue = array[i];
}
    }
    return minvalue;
}
console.log(getMin(numbers));