var myArray = ["Jani", "Helen","Stalin", "rasik", "tony"];
function addTheEvenIndex(inputName){
   var result =  myArray.splice(1,0,inputName);
   result = myArray.join();
  
   return result;
}
const output = addTheEvenIndex("jay");
console.log(output);