//  const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];
// for (let i = 0, j = i + 1; i < nums.length && j < nums.length; i++, j++) {
//   console.log(nums[i] + nums[j]);
// }
// //output
// let i =0; j=1;
// 0<12 && 1< 12;
// nums[0] && nums[1];
// 12+1;
// console.log(13)
// i++ && j++;
// 0+1 && 1

//const nums = [1,6,8,2,4,10,14,12]. write a function to check for a given array has number 2

// const nums = [1,6,8,2,4,10,14,12];
// function isTwo(array){
//   for(let i=0; i<array.length; i++){
//  if(array[i] === 2)
//   console.log("array has two at index "+i);
//   }
// }

//exe 10
// const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];
// let temp;
// let start = 0;
// let end = nums.length - 1;       
// while (start < end) {
//   temp = nums[start];
//   nums[start] = nums[end];
//   nums[end] = temp;
//   start++;
//   end--;
// }
// console.log(nums);

//Ans
/* 
let temp;
let start = 0;
let end = 12 -1 = 11;
while(1<11){
    temp = nums[0]=1;
    nums[start] = 10;
    nums[end]=1;
    0+1 = 1
    11-1=10
}
ans = [10, 7 , 11, 9, 5 , 4,8,2,6,3,12,1 ]
*/

// //1.

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// } //ans : 1,12,3,6,2,8,4,5,9,11,7,10

// //2.

// for (let j = nums.length - 1; j > 0; j--) {
//     console.log(nums[j]);
//   }
// //Ans: 10,7,11,9,5,4,8,2,6,3,12

// //3.


// for (let j = nums.length - 1; j >= 0; j--) {
//     console.log(nums[j]);
//   }
//   //Ans : 10,7,11,9,5,4,8,2,6,3,12,1

//4.


// for (let k = 0; k < nums.length; k += 2) {
//     console.log(nums[k]);
//   }
//   //Ans : 1,3,2,4,9,7

//5.
//   const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];
// let i = 0;
// while (i < nums.length) {
//   console.log(nums[i]);
//   i++;
// }         //Ans : 1,12,3,6,2,8,4,5,9,11,7,10


//6.
// let i = 0;
// while (i < nums.length) {
//   i++;
//   console.log(nums[i]);
//   i++;
// }       // Ans: 12,6,8,5,11,10

// //7.
//
// let i = 0;
// while (i < nums.length) {
//   i++;
//   console.log(nums[i]);
// }
// //Ans : 12,3,6,2,8,4,5,9,11,7,10,undefined

//8.
const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];

let i = nums.length;
while (i >= 0) {
  console.log(nums[i]);
  i--;
}
//Ans: undefined, 10,7,11,9,5,4,8,2,6,3,12,1