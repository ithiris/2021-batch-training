var employees = [
    { name: 'sheerin', age: 28 },
    { name: 'umar', age: 31 },
    { name: 'haadhif', age: 3 },
    { name: 'rafan', age: 3 },
    { name: 'adhina', age: 7 }
]
function findIndexInArrOfObj(){
    var index = [];
for(let i=0; i<employees.length; i++)  {
   if(employees[i] == i){
       
   index.push(i);
   }

 }
 return index;
}
var empIndex = findIndexInArrOfObj(employees, 'name','rafan');
console.log('The Index of the employee is:' + empIndex); 

