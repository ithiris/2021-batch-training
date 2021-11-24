
//19.
/**
  * Task description: Write a method to convert a string into camel case.
  * Expected Result: (JavaScript exercises) => "JavaScriptExercises"
  * Task Complexity: 1 of 5
*/
const camelize = (str) => {
let uppercamelize="";
  const words = str.split(" ");
  
  for (let word of words){
    const newStr  = word[0].toUpperCase() +  word.substr(1)
    uppercamelize = uppercamelize + newStr;
  }
  
    return uppercamelize;
  }
  
  const str = 'JavaScript exercises'
  console.log(camelize(str)) // "JavaScriptExercises"
  
  
