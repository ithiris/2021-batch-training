function unionOfArr(arr1, arr2) {
    var output = [];
    for (var i = 0; i < arr2.length; i++) {
        var value=arr2[i]
        arr1.push(value);
    }
    for (var j = 0; j < arr1.length; j++) {
        var fullValue=arr1[j]
        if (output.indexOf(fullValue) == -1) {
            output.push(fullValue)
        }
    }
    return output
}
var result = unionOfArr([1, 2, 3, 77, 10], [100, 2, 1, 10]);
console.log(result)