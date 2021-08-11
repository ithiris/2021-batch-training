var employees = [{
    name: 'faiyaz',
    age: 30,
    salary: 50000
}, {
    name: 'Mani',
    age: 40,
    salary: 20000
}, {
    name: 'gopi',
    age: 10,
    salary: 30000
},{
    name: 'imran',
    age: 20,
    salary: 320000
}];
let result = employees.filter((employee) => {
    return employee.salary > 30000; 
});
console.log(result);
