
//13.
/**
 * Task description: Omit the properties from the source object
 * Expected Result: {a :1 ,b:2 : c:3} => {b : 2}
 * Task Complexity: 1 of 5
 * @param {object} data - The source object
 * @param {Array} paths - The property paths to omit.
 * @returns {Object}
 */
 const omit = (data,paths) => {
    var myObj = {};
    let value;
    let idea;
        for(let i=0; i< paths.length; i++){   
            for(let key in data){
                 value = data[key];
                 idea = key ;
        if(!paths.includes(idea))
       myObj[idea] = value;      
    }
}
    
return myObj;
}
const data = {
    a : 1,
    b : 2,
    c : 3,
}
const paths = ['a', 'c']
console.log(omit(data,paths));