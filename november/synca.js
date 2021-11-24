console.log('start execution');

doSomeOperationAsync(3,4,(output)=>{
    console.log(output)
});

doSomeOperationAsync(77,4,(output)=>{
    console.log(output)
});

console.log('end execution');

doSomeOperationAsync(77,88,(output)=>{
    console.log(output)
});

function doSomeOperationAsync(a,b,cb){
    console.log('operation running');
    setTimeout(() => {
        const nums = [1,3,6,7,4,8,a,b]; 


const evenNumbers = nums.filter((n) => {
    return n % 2 === 0
})
        cb(evenNumbers);
        
    },4000)
}
