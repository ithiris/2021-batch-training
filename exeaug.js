// //exe 1 - printing the odds from the array.

for (let i=0; i<=20; i++) 
    {
   if(i%2==1) 
   console.log(i);
    }
    
    
//     //exe 2 - Descending order

    for (let i=20; i>=1; i--) 
    {
        console.log(i)
    }

//  //exe 3 - printing the output fully including the input parameter

        function test() {
  
            for(let i=1; i<=10; i++) {
               
              console.log("9 * " + i + ' = ' + (9 * i))
            //   console.log(i)
            
            }
            }
            test();


// exe1 - To print the result depending upon the reading status.

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

function display(library, bookName) {

    for(var i=0; i < library.length; i++)
     {
        if(library[i].title==bookName)
            {
                if(library[i].readingStatus)                    
                    console.log("this book was already read by : " + library[i].author);
                else
                    console.log("you still need to read the book : " + library[i].author);                   

            }                

    }      

}
display(library, 'Mockingjay: The Final Book of The Hunger Games');



//   exe2 - To print the occurences of string


            function occurences(str,letter) { 
                var lettercount = 0; 
            
               for (let i = 0; i < str.length; i++) {
                   
                   if (str.charAt(i) == letter) {
                       lettercount += 1 ;
                   }
               
                }
               return lettercount;
               }
                   console.log(occurences("Hello",'l'));
                   console.log(occurences("Hello",'e'));

            function printOccurrences(str,letter) {
                var lettercount = 0;
               for (let i = 0; i < str.length; i++) {
                   if (str.charAt(i) == letter) {
                       lettercount += i;
                   }
                }
               return lettercount;
               }
                   console.log(printOccurrences("Hello",'l'));
                   console.log(printOccurrences("Hello",'e'));


    //    Ithiris - 26/8 
    // exe1 - To find the max  from 4 values
//  findMax(A,B,C,D) {}findMax(30,45,70,87);

// 1st approach

function findMax(A,B,C,D) {
    
  if (A>B && A>C && A>D)
  {
      console.log(A);
  }
  else if (B>A && B>C && B>D)
  {
      console.log(B);
  }
  else if (C>A && C>B && C>D)
  {
      console.log(C);
  }
  else
  {
      console.log(D);
  }
  
}

findMax(30,45,98,87);

// exe1 - To find the max  from 4 values
// 2nd approach

function findMax(A,B,C,D) {
  var maxValue = - 1;
if(A > B) {
  maxValue = A;
}
else {
  maxValue = B;
}

if(C > maxValue) {
  maxValue = C
}

if( D > maxValue) {
  maxValue = D
}
return maxValue;
}

var result = findMax(30,45,90,87);
console.log(result);
