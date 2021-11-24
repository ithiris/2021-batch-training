
//20.
/**
  * Task description: Write a method that creates to capitalize the first letter of each word in a string.
  * Expected Result: (js string exercises) => "Js String Exercises"
  * Task Complexity: 1 of 5
*/
const capitalize = (str) => {
    let upCamelCase="";
  const words = str.split(" ");
  
  for (let word of words){
    const newStr  = word[0].toUpperCase() +  word.substr(1);
    upCamelCase = upCamelCase + newStr + " ";
  }
  
    return upCamelCase;
  
}
const str = 'js string exercises'
console.log(capitalize(str)) // "Js String Exercises"