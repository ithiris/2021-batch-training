function revertInput(array){
    var output = [];

for (let i = array.length - 1; i>=0; i-- )
{
    output.push(array[i]);
}

    return output;
}
console.log(revertInput([1, 2, 3]));

