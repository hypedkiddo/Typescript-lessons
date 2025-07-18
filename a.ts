// const x:number=1; //Giving the type to a variable
// console.log(x);

// function greet(firstname :String){
//     console.log("Hello",firstname);
// }

// greet("naren");

//Interfaces
//a typical use case of interface
// interface User{
//     name:string;
//     age:number;
//     adress?:string; //? is used to make the field a optional component
// }

// let user:User={
//     name:"naren",
//     age:12,
//     adress:"bg"
// }

// function isLegal(user : User) :boolean{
//     if (user.age > 18){
//         return true;
//     }

//     else{
//         return false;
//     }
// }

// isLegal(user);


//An Interface can use another interface

// interface Adress{
//     city :string;
//     country:string;
//     pincode:string;
// }

// interface Office {
//     adress: Adress;
// }

interface Person{
  name:string;
  age:number;
  greet():string;
}

let person:Person={
  name :"naren",
  age: 12,
  greet:()=>{
    return "hi"
  }
}

class Manager implements Person{
  name :string;
  age:number;

  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }

  greet():string{
    return `hi ${this.name}`
  }
}

let man=new Manager("john",30);
console.log(man.greet());


//1.Interview Question : what is the difference between types and interfaces ?
// 1: Syntax is Different type User={};
// 2: You cannot implement an type
// 3: Types let you perform unions and intersections.

//2.What is the Difference Between  Abstract class and interface ?
// In Interface you just define an method you do not provide the implemention
// whereas in abstract class you provide a default implementaion to the methods defined in abstract class.


//Types

// What are types?
// Very similar to interfaces , types let you aggregate data together.
type User = {
	firstName: string;
	lastName: string;
	age: number
}

// But they let you do a few other things.
 
// 1. Unions
// Let’s say you want to print the id of a user, which can be a number or a string.
// 💡
// You can not do this using interfaces
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

// 2. Intersection
// What if you want to create a type that has every property of multiple types/ interfaces
// 💡
// You can not do this using interfaces
type Employee = {
  name: string;
  startDate: Date;
};

type NewManager = {
  name: string;
  department: string;
};

type TeamLead = Employee & NewManager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};
