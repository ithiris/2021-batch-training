     function remove_first_occurrence(str,str2) {
                 var resstr = "";
        var newString = str.split(' ')
        for (let i=0; i< newString.length; i++) {  
            const element = newString[i];
            if(element !== str2){
                resstr = resstr + " " + element;
            }
            }
            return resstr.trimLeft();
        }
        var result= remove_first_occurrence(" The quick brown fox jumps over the lazy dog", 'the');
        console.log(result);
    
