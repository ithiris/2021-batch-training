let person = {
    name:"rashik",
    age:28,
    education:'B.E',
    city:'tuticorin',
    gender:'male',
    print:function () {
        console.log(this.age);
 
    }
 }
 
 /*console.log(person.age);
 console.log(person['age']);
 let k ='age'
 console.log(person[k]);
 
 console.log(person.print());
 person['print']();
 let l ='print'
 person[l];*/
 
 
 //var personProps = ['age','city'];
 
 function pick(obj,props){
     let picked ={};
     for(let n of props){
         picked[n] =obj[n]
     }
 
     return picked;
 }
 
 const print =pick(person,['age']);
 console.log(print);