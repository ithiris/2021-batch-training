var array =[1,2,3,4,5];
var arraytwo =[6,7]
var arraythree =[8,9,10,11];
 function arrayconcat(inputarray,inputarraytwo,inputarraythree)
 {
     return inputarray.concat(inputarraytwo,inputarraythree);
 }
 console.log(arrayconcat(array,arraytwo,arraythree));