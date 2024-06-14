// Callbacks, Anonymous and Recursive
// Callback is a function passed as an argument to another function.
// Callback can run after another function has finished.

function display(result){
    console.log(result);
}

function add(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);

}

add(10, 20, display)

// ######################### Anonymous function
console.log("anonymous function");
// Functions that are not declared with a name.
let sum = function(x,y){
    return x+y;
}


console.log(sum(10,20));


// ########### Example 2
console.log("Example 2");

(
function(){
    console.log("Example 2")
}
)();

// ############ Example 3

console.log("Example 3")

setTimeout(
    function(){
        console.log("Hello, Victor")
}, 4000);



// ###################### Recursive Functions
console.log("Recursive Functions");
// A function that calls itself.
// They can call itself endlessly, therefore, they are used with conditional statements.


// ###########
// function myFunction(){
//     if(condition){
//         myFunction();
//     }
//     else{
//         // stop calling the function 
//     }
    
// }

// myFunction();

// ########

function countDown(num){
    console.log(num);
    num--;
    if (num>=0){
        countDown(num);
    }

}
countDown(10);






