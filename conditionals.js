// CONTROL FLOW STATEMENTS- Controls the execution of code
// 1. Conditional statements
// 2. Loops
// 3. Catch/Try

// ###################################Conditional
// if(true){
//     console.log("Ececute");
// }

let age = 20;

if (age<18){
    console.log("You are not an adult")
}

let country = "Kenya";
let age2 = 20;
if (age2 >=20 && country == "Kenya"){
    console.log("You can drive")
}


// ############################ if else
let age3 = 20;
if (age3<20){
    console.log("You are a minor");
}
else{
    console.log("You are an adult");
}


// ############################ else if
let age4 = 20;
if (age4<20){
    console.log("You are a minor");
}
else if (age4 <=20){
    console.log("you are a teenager");
}
else{
    console.log("You are an adult");
}


// ######################### Switch
// Used to execute a code based on a value of an expression.

let value = "kama";

switch (typeof value){
    case "number":
        console.log("Number")
        break;
    case "string":
        console.log("String")
        break;
    case "boolean":
        console.log("Boolean")
        break;
    default:
        console.log("Other");
        break;
}

// ###################### Example 2 on switch
let dayName = 8;

switch (dayName){
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Sarurday";
        break;
    default:
        dayName = "Invalid day number";
        break;

}
console.log(" The day is " + dayName);


// ######################### Ternary Operator

// Condition ? value if true : value if false;
let age5 = 20;
let msg = (age5 >= 18)? "You are an adult" : "You are a minor";

console.log(msg);
