
const nums = [1,3,6,7,4,8]; // [6,4,8]
function even(numbers){
    const output = [];
    for(let n of numbers){
        if(n % 2 === 0){
        output.push( n);
        }
    }
    return output;
}
const evenNumbers = nums.filter((n) => {
    return n % 2 === 0
})
const data = [['a', 1], ['b', 2]];
let output ={}
data.forEach((d) => {
    const [key,value] = d;
    output[key] = value;
})
const allAreEven  = [6,8,4].every((n) => {
    return n%2 ==0
})
//console.log(allAreEven)
const employees = [
    {
        name: 'john',
        age: 20,
        salary: 10
    },
    {
        name: 'george',
        age: 25,
        salary: 20
    },
    {
        name: 'kumar',
        age: 20,
        salary: 35
    },
]
const employeesWithGreeting = employees.map((e,i) =>{
    return {
        ...e,
        name:`hi ${e.name}`
    }
})
const employeesWithAge20 = employees.filter((e) =>{
    e.age == 20
})
console.log(employeesWithAge20)
