function printAverage(input){
    let averageValue = 0;
    for(var i = 0; i < input.length; i++){
        averageValue += input[i];
        averageValue = averageValue / input.length;
}
return averageValue;
}
 console.log(printAverage([1,4,5]));