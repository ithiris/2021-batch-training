console.log('start execution');

doSomeOperationAsync(3,4,(output)=>{

    var result1 = output;
    console.log(result1)

    doSomeOperationAsync(result1,15,(output1)=>{
        console.log(output1)
});

});

console.log('end execution');



function doSomeOperationAsync(a,b,cb){
    console.log('operation running');
    setTimeout(() => {
        const sum = a + b;
        cb(sum);
        
    },3000)
}



