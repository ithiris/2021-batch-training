

function composedKeyValuePair(inputarray)
{     
 var keyValue = {};
       for(var i=0; i < inputarray.length; i++) {

            keyValue[inputarray[i][0]] = inputarray[i][1];

       }

   return keyValue;

  }
  var result = composedKeyValuePair([['a', 1], ['b', 2]]);
  console.log(result);