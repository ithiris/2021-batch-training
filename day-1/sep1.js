function findLongestWord(name)
{
    var words = name.split(' ');
    var longest = "";

    for (var word of words) {
        if (word.length > longest.length)
        {
            longest = word;
        }
    }
    return longest;
}

console.log(findLongestWord('Web Development Tutorial'));
