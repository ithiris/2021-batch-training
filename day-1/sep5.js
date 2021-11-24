function findInterSectionOfObjects(obj1,obj2){
  var outPutObj ={};
    const keys1 = Object.keys(obj1);  
  
    for (let key of keys1) {
      if (obj1[key] == obj2[key]) {
        outPutObj[key] = obj1[key];
      }
    }
  
    return outPutObj;
  }

  let output=findInterSectionOfObjects({ a: 1, b: 2 }, {c: 1, b: 2 });
console.log(output);