//11.
/**
 * Task description: Creates an object composed of the picked object properties.
 * Expected Result: { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'] => { 'a': 1, 'c': 3 }
 * Task Complexity: 1 of 5
 * @param {Object} data - The source object
 * @param {Array} paths - TThe property paths to pick.
 * @returns {Object}
 */
 const pick = (data,paths) => {
    
    var myObj = {};
    let value;
             
            for(let key in data){
                 value = data[key];                    
        if(paths.includes(key))
       myObj[key] = value;      
    }

    
return myObj;
}
const data = {
a : 1,
b : 2,
c : 3
}
const paths =  ['a', 'c']
console.log(pick(data,paths));