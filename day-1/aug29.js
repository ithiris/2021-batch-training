var persons = [{
    name: "jhon",
    age: 29,
    gender: 'male'
}, {
    name: "david",
    age: 27,
    gender: 'male'
}, {
    name: "rani",
    age: 25,
    gender: 'female'
}, {
    name: "devi",
    age: 23,
    gender: 'female'
}, {
    name: "william",
    age: 30,
    gender: 'male'
}];

function printMaleObj(input, propKey, propValue) {
    var genderArr = [];
    var maleObj = {};
    for (var i = 0; i < input.length; i++) {
        var obj = input[i];  // return obj
        if (obj[propKey] == propValue) { 
            genderArr.push(obj)
        }

    }
    maleObj['male'] = genderArr;          
    return maleObj;
}
console.log(printMaleObj(persons, "gender", "male")) 