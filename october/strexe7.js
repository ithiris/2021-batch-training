//23.
/**
  * Task description: Write a method to convert a string into snakeCase case.
  * Expected Result: (Robin Singh from USA) => "robin-singh-from-usa"
  * Task Complexity: 1 of 5
*/
const snakeCase = (str) => {
  let fullWord = "";
  const words = str.split(" ")
     for(let word of words){
       
       fullWord = `${fullWord}-${word}`

       
     }
       output = fullWord.toLocaleLowerCase()
       result = output.slice(1)
  

   return result;
}
const str = 'Robin Singh from USA.'
console.log(snakeCase(str)) // "robin-singh-from-usa"
