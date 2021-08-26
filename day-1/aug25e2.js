function printOccurrences(str,letter) { 
    var lettercount = 0; 

   for (let i = 0; i < str.length; i++) {
       
       if (str.charAt(i) == letter) {
           lettercount ++;
       }
   
    }
   return lettercount;
   }
       console.log(printOccurrences("Hello",'l'));
       console.log(printOccurrences("Hello",'e'));