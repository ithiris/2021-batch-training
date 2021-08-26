// find the max  from 4 values
//  findMax(A,B,C,D) {}findMax30,45,70,87();

function findMax(A,B,C,D) {
    var maxValue = - 1;
if(A > B) {
    maxValue = A;
}
else {
    maxValue = B;
}
if(C > maxValue) {
    maxValue = C
}

if( D > maxValue) {
    maxValue = D
}
 return maxValue;
}

var result = findMax(30,45,90,87);
console.log(result);