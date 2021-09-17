
function printFirstLetterOfName(userNames) {
    const firstLetters = userNames.map(function(userName) {
        const firstChar = userName.charAt(0);
    return firstChar;
    });

return firstLetters;
}
const userNames = ['Rasikhan', 'valiyullah', 'refaideen'];
 let result = printFirstLetterOfName(userNames);
 console.log(result);