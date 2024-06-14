// Javascript method is an object property that contains a function definition.
const person = {
    firstName: "Victor",
    lastName: "Kim",
    greet: function greet(){ // alternatively we can create an empty function: function(){}
        console.log("Hello World");
    }
}

person.greet();


// ############# Assigning a function inside an object
console.log("Assigning a function inside an object");
function gree(){
    console.log("Hello victor");
}

person.greeting = gree;

person.greeting();

// ##################### Declaring a funtion as a property
const person2 = {
    firstName: "Victor",
    lastName: "Kim",
    greet(){ 
        console.log("Hello World");
    }
}

person2.greet();

// #################### "This " keyword
console.log("`this` keyword in Javascript");
// To access the other properties of an object within a method of the same object, we use "this" keyword

// const person4 = {
//     firstName: "Victor",
//     lastName: "Rutto",
//     greet: function(){
//         console.log("Hello " + this.firstName);
//     }
// }
// person4.greet();


const person4 = {
    firstName: "Victor",
    lastName: "Rutto",
    getFullname: function(){
        return this.firstName + " " + this.lastName
    }
}
console.log(person4.getFullname());


console.log(this); // If we use outside alone or inside a function, it reffers to the global object - windo object

// When we use "this" keyword in the "Event" it will refer to the element that receive the event

