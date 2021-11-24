function printOddChar(str){
    let oddChar="";
    for(let i = 0; i<str.length; i+=1){
        
        if(i%2 !=0){
            
            oddChar += str[i];
        }
        
        }
    
    return oddChar;
    }
    var result = printOddChar('Apple');
    console.log(result);