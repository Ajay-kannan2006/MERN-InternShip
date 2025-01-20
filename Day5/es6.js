//ES6 =>ECMA Script Standard 6

//var- Global Scope
//let - Local/Block Scope
//const -Global scope

// var a = 10;
// const con = 3.14;
// console.log(a);
// console.log(con);
// {
//     let a = 20
//     let b = 30
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(con);
//Class and objects
// class ClassEg {
//     constructor() {
//         this.a = 10;
//     }
//     //we can use only arrow functions to write a method in a class declaration
//     //to access a class variable,this keyword is must ,else we get a ReferenceError
//     funcInClass = () => {
//         console.log(this.a);
//     }
// }
// obj = new ClassEg();
// obj.funcInClass();


//5.ternary operator




// //6.Spread Operator
// let a = [10, 20, 30];
// let b = [50, 60, 70];
// let c = [...a, b];
// console.log(c);


// //7.rest operator
// function restOpEg(a, b, ...arg) {
//     console.log(a);
//     console.log(b);
//     console.log(arg);
// }

// restOpEg(10, 20, 30, 40, 50, ...b);


//8.Destructuring Operator
var array = [10, 20, 30];
var [a, b] = array;
console.log(a, b);   