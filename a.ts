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


//Interview Question : what is the difference between types and interfaces ?


//What is the Difference Between  Abstract class and interface ?


 

