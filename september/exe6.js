function printTheCountOfLetter(word,letter){
var count = 0;
for(let i=0; i<word.length; i++){
    
    if(word.charAt(i) == letter){
        count += 1;
    }
}
return count;
}
var result = printTheCountOfLetter("mississippi", "s");
console.log(result);