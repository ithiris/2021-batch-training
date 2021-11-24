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
