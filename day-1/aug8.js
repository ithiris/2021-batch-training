function is_array(a) {
     return Array.isArray(a)
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
var myArray= [1, 2, 3, 4];
let final = myArray.filter(function(value){
    return value < 4;
});
console.log(final);