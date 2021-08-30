var numbers = [9,2,4,6,23,53,10,33,22];
function  printLargestEvenNumber(array)
{ 
    var largestEvenNum = array[0];
    for (let i = 0; i < array.length; i++) 
    {
        if(array.length%2==0 && largestEvenNum<array[i]) 
      {
        largestEvenNum = array[i];
        
      }
    }

return largestEvenNum;
}
printLargestEvenNumber(9,2,4,6,23,53,10,33,22);
