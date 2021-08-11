var employees = [

    {name: 'faiyaz', age: 30, salary: 50000}, 
    {name: 'Mani', age: 40, salary: 20000}, 
    {name: 'gopi', age: 10, salary: 30000},
    {name: 'imran', age: 20, salary: 320000}
];


const highestSalary = employees.filter(function (value) {
    if (value.salary >= 30000) {
        return true;
    }
});
console.log(highestSalary);


// Using ES6 arrow function

// var highestSalary = employees.filter(value => value.salary >= 30000)
// console.log(highestSalary);



