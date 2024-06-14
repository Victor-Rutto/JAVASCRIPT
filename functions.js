function victor(){
   console.log("Hello, Victor");
}

victor();


console.log("Parameters and Arguments");
// ############## Parameters and Arguments

// Parameters are the variables declared in the function definition.
// Argumenst are the values passed to the function when calling it

function greet(firstName, lastName){
    console.log("Hello "+ firstName + " " +lastName);
}
greet("Victor", "Kimutai");

// ############# Default Parameters
console.log("default parameters")
function sum(x, y=0){
    console.log(x+ y);
}
sum(10, 15);

// ################# Function  Return 
// Return statement denotes that the function has ended. Any code after return is not executed.
function add(a,b){
    return a+b;
    a*b // this will not be executed.
}
let result = add(10,20);
console.log("the sum is "+ result)


// ############# Function calling function

console.log("Function calling a function");

function fn1(x){
    function fn2(y=3){
        return x*y;
    }
    return fn2;
}
let result1 = fn1(3);
console.log(result1);

console.log(result1());