function number(){
for (let i = 0; i < 6; i++) {
    if(i==2) {
      console.log(i+' is favourite number');
    } else if(i==5) {
      console.log('stop the loop');
        } else
    console.log('Number ' +i);
  }
}
number(); 
let final = number.filter(function(value){
  return value % 2;
});
console.log(final);