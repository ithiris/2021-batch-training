const company = {
    name : 'provility',
    noOfEmployess: 20,
    owner:'ashraf',
    services: ['mobile app' ,'web app'],
    companyInfo:'name',
    companyAttributes: ['noOfEmployess','owner']
}
company.prototype.salary = 2000;
console.log(company.name); // Ans: provility
console.log(company.noOfEmployess); // Ans : 20
console.log(company['name']); //Ans : provility
company.name = "mathdisk"
console.log(company['name']); // Ans: mathdisk
console.log(company[company.companyInfo]); // Ans: undefined
company[company.companyInfo] = "mathdisk"
console.log(company['name']); // Ans: mathdisk
console.log(company[company.companyAttributes[1]]); // Ans: undefined
console.log(company[company.companyAttributes[0]]); // Ans : undefined
//3.
const bird = {
    size: 'small',
};
  
const mouse = {
    name: 'Mickey',
    small: true,
};
console.log(mouse[bird.size]); //Ans: true
console.log(mouse[bird['size']]); // Ans: true
//4.
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj); // { b: "two", a: "three" }