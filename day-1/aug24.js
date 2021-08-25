// exe2
function toUpperCase() {
const str = 'js string exercises';
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);
} 
toUpperCase();

// ex1
function toArray(){
const str = "Robin, Singh";

const words = str.split(", ");

console.log(words);
}
toArray();


// exe3

// input:console.log(repeat_string('a', 4));
// input:console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

function repeat_string(string, count) 
  {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
      {
        return('Error in string or count.');
      }
        count = count | 0;
    return new Array(count + 1).join(string);
  }

console.log(repeat_string('a', 3));
console.log(repeat_string('a'));
 
 

