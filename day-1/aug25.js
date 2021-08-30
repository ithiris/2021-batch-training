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

    function display(library, title) {
           
        for(var i=0; i<library.length; i++) {
            if(library[i].title == title)   
                {
              if(library[i].readingStatus) 
                        console.log("this book is already read by : " + library[i].author);
                 else
                        console.log("you still need to read the book : " + library[i].author);                   

                }
        }
    }
 display(library, 'Mockingjay: The Final Book of The Hunger Games');



