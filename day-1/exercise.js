const data = 5;
const valueToFill = 'a';
const fill = (arraySize, value) => {
    const result = [];
    for (let i = 1; i <= arraySize; i++) {
        result.push(value);
        console.log(result);
    }
}
fill(5, 'a');
fill(4, 'b');