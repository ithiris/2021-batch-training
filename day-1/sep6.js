var person = ['Rasikhan', 'valiyullah', 'refaideen'];
function firstLetterOfName(array) {
    var name = [];
    for(let key in array){
        name.push(array[key][0]);
}
return name;
}
 let result = firstLetterOfName(person);
 console.log(result);