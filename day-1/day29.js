function printAverage(input){
    let averageValue = 0;
    for(var i = 0; i < input.length; i++){
        averageValue = input[i].length;
        averageValue = averageValue / input.length;
}
return averageValue.toFixed(0);
}
 console.log(printAverage([1,4,7]));