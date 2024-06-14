// 1 ##########var 
var x = 30;

var $x = "hello world";

var _x = "underscore";

// CASE SENSITIVE

var firstName = "John";

var firstname = "Victor";

// 2 ##########let 
// Used to declare block-scoped variable.
// Only visible within block it is declared.

// let x = 10;

// if (x>5){
//     let y =20;
//     console.log(y);
// }
// console.log(y);



// const

// Used to declare a constant variable. (cannot be reassigned to a new value)
const a = 4;
console.log(a);


// ##################################### SCOPE
// Visibility of functions and variables within a program. 

// ################################    Global Funtion
// Functions declared in the global scope are visible anywhere in the program.

// var x = "Hello, great";
// function example (){
//     console.log(x);
// }
// example();

// ########################### Funtion Block
// Functions and variables declared in a fucntion's scope only visible within that function. \
// function example(){
//     var fs = "Hello greatstack";
//     console.log(fs);
// }
// example();

// console.log(fs); //This gives an error.

// ##############################Block Scope
// Visibility of functions and variables within a block of code.
// A block of code is enclosed in {}

// function example(){
//     if(true){
//         let bv = "greatstack";
//         console.log(bv);
//     }

// }
// example();
