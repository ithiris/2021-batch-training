var person = ['Rasikhan', 'valiyullah', 'refaideen'];
function firstLetterOfName(array) {
    var name = [];
for(let i=0; i < array.length; i++){
    name.push(array[i][0]);

}
return name;
}
 let result = firstLetterOfName(person);
 console.log(result);