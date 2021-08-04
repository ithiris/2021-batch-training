// Output like this 
// Number 0
// Number 1
// 2 is my favorite number
// Number 3
// Number 4
// Stop the loop
// Loop is 2 print in console 2 is my favorite number loop is 5 stop the loop and execution also stop.
// exe 1 for loop.js 


for(let i = 0; i <=5; i++){
    if(i === 2){
     console.log('2 is my favorite number');
      continue;
    }
     if(i === 5){
      console.log('Stop the loop');
      break;
     }
    console.log('Number '+ i);
   }
