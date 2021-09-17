function printTheLongestWord(words){
    
    var longestName = "";

     for (var word of words) {
     if (word.length > longestName.length)
         {
              longestName = word;
         }
        }
      return longestName;
        
}
var result = printTheLongestWord(['apple', 'orange', 'pineapple', 'watermelon']);
console.log(result)