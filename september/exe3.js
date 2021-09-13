function printOddChar(str){
    let oddChar="";
    for(let i = 0; i<str.length; i+=1){
        oddChar == str[i];
        if(i%2 !=0){
            console.log(str[i]);
            
        }
        
        }
    
    return oddChar;
    }
    var result = printOddChar('Apple');
    console.log(result);