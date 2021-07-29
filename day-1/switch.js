const {inputInt, inputText, output} = require('./input-output');
const a = inputInt("Enter Value for a");
const b = inputInt("Enter Value for b");
const operatorCode = inputText("Enter operator code");
let c = null;
switch(operatorCode){
	case "+":
	    c=a+b;
	    break;
	case "-":
    	c=a-b;
    	break;
}
output(c);