function oddEven(num)
{
    
    let oddEvenNum = 0;
    for(var i = 0; i < num; i++)
  {  
    oddEvenNum = num;
     if(num % 2 == 0){
             console.log(oddEvenNum+" is evennumber");
      }else
            console.log(oddEvenNum+ " is oddnumber");   
  }
return oddEvenNum;
}
oddEven(1);