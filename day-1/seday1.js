function checkWhereStringEmpty(str){
  var stringStatus = null;
  for (var i = 0; i < str.length; i++) {
      if(str[i] === ' ') {
          stringStatus = false;
   }else
      stringStatus = true;
  }
  return stringStatus;
}
console.log(checkWhereStringEmpty(" "));
