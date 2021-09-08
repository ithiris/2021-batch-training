
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
    function display(library, book) {

var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";

for (var i = 0; i < library.length; i++) 
   {
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }

}
return library[i];
    }
display(library, 'Mockingjay: The Final Book of The Hunger Games');