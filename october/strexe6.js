
//22.
/**
  * Task description: Write a method that to chop a string into chunks of a given length
  * Expected Result: (javascript) =>  ["ja", "va", "sc", "ri", "pt"]
  * Task Complexity: 1 of 5
*/

    const chop = (str, chunk) => {
        let choppedElements = [];
        let str2;
        for (let i = 0; i < str.length; i += chunk) {
          str2 = str.substr(i, chunk);
          choppedElements.push(str2);
        }
      
        return choppedElements;
      };
      const str = "javascript";
      const chunk = 2;
      console.log(chop(str, chunk)); // ['ja','va','sc','ri','pt']
