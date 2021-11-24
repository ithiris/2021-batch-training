const capitalize = (str) => {
    let capitalized = "";
    const words = str.split(" ");
    for(let word of words){
        const finalWord = word[0].toUpperCase() + word.substring(1)
        capitalized = `${capitalized} ${finalWord}`
    }
    return capitalized;
  }
  const str = 'js string exercises'
  console.log(capitalize(str)) // Js String Exercises
