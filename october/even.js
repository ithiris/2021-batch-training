//6.
/**
 * Task description: Write a method that to print a even Numbers only without conditional statement using loop.
 * Expected Result: (15) => 0,2,4,6,8,10,12,14,16,18,20,22,24,26,28
 * Task Complexity: 1 of 5
 */
 const printEvenNumbers = (size) => {
   const evenNum = [];
    for (let i = 0; i < size; i++) {
      evenNum.push(i * 2);
    }
    return evenNum.join();
  };
  const size = 15;
  console.log(printEvenNumbers(size));  // Ans = 0,2,4,6,8,10,12,14,16,18,20,22,24,26,28
  