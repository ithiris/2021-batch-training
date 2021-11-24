//3. word ladder
const words = ['head','heal','tail','teal','tell'];
let ladder = '';
for(w of words){
    if(w !== ''){
        w+='-';
    }
    ladder+=w
}
console.log(ladder); // expected : head-heal-tail-teal-tell