console.log('STARTING>>>> ');

var counter= 5; //global variable // can use in the function.

function sayName(){
    var name="MOHAN LAR";
    console.log(counter);
}
sayName();
// console.log(name);// can't access 

//ES6

const name1= "LALA";
// name1= "mohan"; //can't reassign 
// both let and const can't re-declare.



//globle and function scoping.. 
for (let i=0; i<10; i++){ //if you use var , it can be use outside of the scope. 
    console.log(i);

}
// console.log(i); //can't access 

const name2="MOHAN LAR";
const age=24;
console.log(`hello my name is ${name2} and my age is ${age}`);

//OLD WAY
function getBook(title, author){
    return {
        titile:title,
        author:author
    }
}

var book= getBook("Harry Potter", "JK");
console.log(book);

//ES6 WAY
function getBook(title, author){
    return {
        title,
        author
    }
}

var book= getBook("Harry Potter", "JK");
console.log(book);

//Object deconstruction  OLD WAY.

var user={
    name:'MOHAN',
    age:25
}
var myName=user.name;
console.log(myName);

// ES6 Object Deconstruction.
const list={
    name:"Shopping LIST",
    items:["MILK","ORANGE"]
}

const {name,items}=list;
console.log(items);

// Arrow Function OLD WAY

function sayName(){
    console.log("HEllo I am MOHAN ");

}

var sayAge= function(){
    console.log(" my age is 24");
}


sayName();
sayAge();

//ES 6

const sayNameArr=name=>{ // if you have both name and age (name,age)
    console.log(`Hello I AM MOHAN WITH Arrow function ${name}`);
}

// const sayNameArr=name=>console.log(`Hello I am Mohan with the arrow function ${name}`);

// sayNameArr("MOHAN")


// OLD WAY
var user={
    name:'MOHAN',
    age:25,
    sayName:function(){
        console.log(`my name is ${this.name}`);
        var that=this;
        var fullName=function(){
            console.log(`My name is ${that.name} and my age is ${that.age}`);
        }
    }
}

//ES 6
const user1={
    name:'MOHAN',
    age:24,
    sayName:function (){
        console.log(`My name is ${this.name}`);
        const fullName=()=> console.log(`Name ${this.name} and my age is ${this.age}`)
        // arrow function can userstand surrounding variable
        fullName(); 

    }   

}
console.log(user1.sayName());

// old way default parameter

function multiply(x,y){
    var a=x | 5;
    var b= y| 10;
    console.log(a*b);
}
multiply();

//ES6 new JS 

const add=(c=2,d=5)=>console.log(c+d);

add(2,4);

const shoppingList=['Milk', 'Cow', 'Eggs', 'Banna'];
shoppingList.forEach((x,i)=>console.log(`${x} ${i}`))
// MAP

shoppingList.map(x=> [x]).forEach(x=>console.log(x));

//filter 

const filterList=shoppingList.filter(x=>x==="Milk");
console.log(filterList);

//constructor function  OLD WAY.

function Person(name ,age , hariColor){ //object
    this.name=name;
    this.age=age;
    this.hariColor=hariColor;
}
Person.prototype.newProp=" &&  New one";

Person.prototype.sayName=function(){
    console.log("My name is "+ this.name + this.newProp);
}

var mhn=new Person("MOHAN", 24, "gray");
console.log(mhn);
console.log(mhn.sayName());

//inherientic 
function Employee(position,experience,name,age,hariColor){
    Person.call(this,name,age,hariColor);
    this.experience=experience;
    this.position=position;
}

Employee.prototype=Object.create(Person.prototype);
//inheritence prototype object;

var emp=new Employee("Full Stack",3,"Dave",29,"black");

console.log(emp);
console.log(emp.sayName());

//ES 6 /// 

class  Professor{
    constructor(name, age){
        this.name=name;
        this.age=age;

    }
    sayName(){
        console.log(this.name)
    }
}

const  p= new Professor("Payment",54);
p.sayName();

class AssistenceProfessor extends Professor{
    constructor(name,age,experience){
        super(name,age);
        this.experience=experience;
    }
}
const p2= new AssistenceProfessor("Kalu",43,2);

console.log(p2.sayName());

// Promises OLD WAY

function getData(data,callback){
    setTimeout(()=>{
        console.log("reading from the database");
        callback({data:data});
    },2000);
}

getData({data:'HELLO OWLDS'},function(data){
    console.log(data);
})

// Promises NEW WAY ES6

const promise=new Promise((resolve, reject)=>{

    setTimeout(() => {

        resolve({user:"mohan.lar",password:"dslfjalsdfwoieior20239023"});
        reject("this is 500 error");
    },  2000);

});
promise.then(data=>{
    console.log(data);
}).catch(e=>console.log(e));







console.log('ENDINGGG>>>> ');

