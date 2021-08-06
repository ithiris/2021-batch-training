var obj1={name:"ithiris",age:30,gender:"male"}
var obj2={ name:"umar",age:20,gender:"male"}  
var obj3={ name:"jamal",age:25,gender:"male"}
var obj4={name:"sirin",age:30,gender:"female"} 
var obj5={name:"fathima",age:25,gender:"female"}
var obj6={name:"ladha",age:30,gender:"female"}
var obj7={name:"salma",age:30,gender:"female" }
var person =[obj1,obj2,obj3,obj4,obj5,obj6,obj7]

function checkedBygender(array,a,b){
             var male=[];
             var result ={};
             for (let i=0; i<array.length; i++) {
               value = array[i];
               if(value[a] == b) {
                 male.push(value);
               }
              }
            
            return male;
          }
         console.log(checkedBygender(person,"gender","male"));
