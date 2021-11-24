const fruits = ["Banana","Apple", "Mango"];
console.log(fruits.toString());
//Ans Banana, Apple, Mango

const names = ["Rasikhan", "fawaaz", "Raj"];
console.log(names.join(' * '));
// Ans: Rasikhan * fawaaz * Raj

const games= ['cricket', 'football', 'carrom'];
console.log(games.pop());
console.log(games)
/*output 
carrom
[ 'cricket', 'football' ]*/

// create a new array to move elements from existing array[reverse]
const numbers = [11,22,14,24,4,88];
const output = [];
const n = numbers.length - 1;
for(let i=n; i>=0; i--){
  output.push(numbers[i]);
}
console.log(output);
 //Ans : [ 88, 4, 24, 14, 22, 11 ];

output.shift();
console.log(output);  // Ans output = [4,24,14,22,11]
output.unshift(3);
console.log(output); //Ans [ 3, 4, 24, 14, 22, 11 ]
output[output.length] = 2;
console.log(output); // [ 3, 4, 24, 14, 22, 11, 2 ]

const places = ['Tirunelveli', 'Nagercoil', 'chennai', 'madurai'];
places.splice(0,0,"tuticorin");
console.log(places); //Ans [ 'tuticorin', 'Tirunelveli', 'Nagercoil', 'chennai', 'madurai' ]
places.splice(3,2);
console.log(places); //Ans [ 'tuticorin', 'Tirunelveli', 'Nagercoil' ] 


const arr1 = ["raj", "pavi"];
const arr2 = ["Rasikhan", "Abdul", "farook"];
const arr3 = ["Robin", "mani"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren); 
 /*Ans [
    'raj',      'pavi',
    'Rasikhan', 'Abdul',
    'farook',   'Robin',
    'mani'
  ]*/

  const requiredNames = myChildren.slice(2,6);
  console.log(requiredNames); //Ans [ 'Rasikhan', 'Abdul', 'farook', 'Robin' ]  

 const isit = requiredNames.includes('Robin', 0);
 console.log(isit);  // Ans : true

console.log(requiredNames.indexOf('Abdul'));  // Ans 1

console.log(requiredNames.indexOf('Rasik'));  // Ans -1

//String

let str = "HELLO WORLD";
const char = str.charAt(str.length-1);
console.log(char); //Ans : D

const string = "How are you doing today?";
const myArr = string.split(" ", 3);
console.log(myArr); // ANS :  ['How', 'are', 'you']

const newArrey = string.split("",3);
console.log(newArrey); //Ans : [ 'H', 'o', 'w' ]


