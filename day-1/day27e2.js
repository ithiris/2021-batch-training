function assignGrade(A,B,C,D,E) {
    let score = 69;
    
if (score >= 90) 
{
    letter = 'A';
}
else if (score >= 80)
{
    letter  = 'B';

}
else if (score >= 70)
{
    letter  = 'C';
    
}
else if (score >= 60)
{
    letter  = 'D';
    
}
else {
    letter = 'E';
}
}
var score = assignGrade(100,90,80,70,60);
console.log(letter);
