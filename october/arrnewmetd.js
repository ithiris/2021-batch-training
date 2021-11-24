// 1.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter((n) => {
  return n % 2 == 0;
});
console.log(evenNumbers); // ans = [ 2, 4, 6, 8 ]

//2.
const oddnums = numbers.filter((o) => o % 2 == 1);
console.log(oddnums); // ans = [ 1, 3, 5, 7 ]

//3.

const allAreEven = numbers.every((n) => {
  return n % 2 == 0;
});
console.log(allAreEven); // ans = false

//4.
const employees = [
  {
    name: "john",
    age: 20,
    salary: 10,
  },
  {
    name: "george",
    age: 25,
    salary: 20,
  },
  {
    name: "kumar",
    age: 20,
    salary: 35,
  },
];
const employeesWithGreeting = employees.map((e) => {
  return {
    ...e,
    name: `hi ${e.name}`,
  };
});
console.log(employeesWithGreeting);
/* Ans
[
  { name: 'hi john', age: 20, salary: 10 },
  { name: 'hi george', age: 25, salary: 20 },
  { name: 'hi kumar', age: 20, salary: 35 }
]
*/

// 5.
const employeesWithAge20 = employees.filter((e) => e.age == 20);
console.log(employeesWithAge20);
/* ans
[
  { name: 'john', age: 20, salary: 10 },
  { name: 'kumar', age: 20, salary: 35 }
]
*/

// 6.

const data = [
  ["a", 1],
  ["b", 2],
];
let output = {};
data.forEach((d) => {
  const [key, value] = d;
  output[value] = key;
});
console.log(output); // ans = { '1': 'a', '2': 'b' }

// 7.
const numberss = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}
const myResult = numberss.reduce(getSum, 0);
console.log(myResult); // ans 24

//8.
const people = [
  { name:'John', year: 1984 },
  { name:'Robert', year: 1987 },
  { name:'Harry', year: 1972 },
  { name:'Alex', year: 2017 },                
];
function calculateAge(year){
  const currentYear = (new Date()).getFullYear();
  return currentYear-year;
}
const hasAdult = people.some(function(person) {
  const age = calculateAge(person.year);
  return age>= 19;
});
// console.log(hasAdult);
const comments = [
  { text:'Love this', id: 523321 },
  { text:'Super good', id: 725683 },
  { text:'You are the best', id: 906241 },
  { text: 'Simply cool', id: 832651 },  
  { text:'Nice Nice!', id: 367254 },               
];
//map used to add extra property "age" in the objects and return from an array.
const peopleWithAge = people.map((person) =>{
  return {
      ...person,
      age:calculateAge(person.year)
  };
});
console.table(peopleWithAge);