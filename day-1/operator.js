const {inputInt, inputText, output} = require('./input-output');
const a = inputInt("Enter Value for a");
  const b = inputInt("Enter Value for b"); 
  const operatorCode = inputText("Enter operator code"); 

  let c = null;
  if(operatorCode == "+"){
   c = a + b;
   }
  if(operatorCode == "-") 
  {
   c = a - b; 
  }
  output(c);