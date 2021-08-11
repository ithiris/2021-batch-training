//    =====================Inbuilt method test===========================

// function remove_first_occurrence(str1,str2){
//     let resstr="";
//     resstr = str1.replace(str2, '').replace('  ',' ')
//    return resstr
//     }
//    console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'))



// function remove_first_occurrence(str1,str2) {
//     let resstr = "";
//     let newString = str1.split(' ')
//     for (let i=0; i< newString.length; i++) {  

//         const element = newString[i];
//         if(element !== str2){
//             resstr = resstr + " " + element;
//         }
//         }
//         return resstr.trimLeft()
//     }
//     let out = remove_first_occurrence(" The quick brown fox jumps over the lazy dog", 'the');
//     console.log(out)



    // inbuilt ===========

//    function is_array(a){
//     return Array.isArray(a)

// }

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));


// function is_array (input) 
// {
//     if (toString.call(input) === "[object Array]")
//       return true;
//     return false; 
     
//       };
  
// console.log(is_array([1, 2, 4, 0]));
// console.log(is_array('w3resource'));

// function is_array(a) {
//     return Array.isArray(a)
// }
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// var myArray= [1, 2, 3, 4];
// let final = myArray.filter(function(value){
//    return true;
// });
// console.log(final);


// let myName="The quick brown fox jumps over the lazy dog"
// let splittedName=myName.split(' ')
// // console.log(splittedName)

// for(let i=0; i<splittedName.length; i++){

//   const val = splittedName[i]
//   console.log(val)
// }


// Callback functions sample

// // (A) FUNCTION TO CALLBACK
// function foo () {
//     console.log("bar");
//   }
  
//   // (B) PASS FOO() INTO SETTIMEOUT()
//   setTimeout(foo, 1000);

//   // filter

const ages = [32, 33, 16, 40];

ages.filter(checkAdult)

function checkAdult(age) {
    
  return age >= 18;
}

