// Non-prmitive data type that allows one to store multiple collection of data.

const person = {
    firstName: "Elon",
    lastName: "Musk",
    age:30,
    address : {
        street: "Tesla road",
        city: "Austin",
        State : "Texas",
        Country : "United States",
        Zipcode: "788763"
    
    }
}

console.log(person);


console.log("methods");
// ####### Methods.
//  When we store a fucntion as key value pair, it is known as a method. 

// Accessing properties of an Object
console.log("Accessing properties of an object");
// Dot notation
console.log(person.firstName);

// Bracket Notation
console.log(person["age"]);

// ######################### Updating values of an Object
console.log("Updating values of an object");
person.firstName = "Mr. Elon";
console.log(person.firstName)



// #################### Adding new properties in the Object
console.log("Adding new properties in the object");

person.company = "Tesla"
console.log(person)


// ###################   Deleting a property from an Object

console.log("Deleting a property of an object");
delete person.age;
console.log(person);


// ####################### Nested Object

const person2 = {
    firstName: "Elon",
    lastName: "Musk",
    age:30,
    address : {
        street: "Tesla road",
        city: "Austin",
        State : "Texas",
        Country : "United States",
        Zipcode: "788763"
    
    }
}

// ################## Accessing properties of object stored in nested object.
console.log("Accessing properties of object stored in nested object.");
console.log(person2.address.city);


// ################# Checking if a property exists in an object
console.log("checking if a property exists");
console.log("age" in person2);

// ################### Accessing all properties using for loop
// This allows you to access all properties and their value without knowing specific name of the property
console.log("for--in loop to check all properties in an object");

for(let prop in person2){
    console.log(prop);
}
console.log("Values");

for(let props in person2){
    console.log(person2[props]);
}

console.log("key value pairs");

for(let props in person2){
    console.log(props + ":" + person2[props]);
}


// ##################### Creating object with "new" keyword
console.log("creating oject with `new` keyword");
// const person3 = new Object();
// person3.firstName = "victor";
// person3.lastName = "Kimutai";
// person3.age = 30;

// console.log(person3);

const person3 = new Object({
    firstName : "victor",
    lastName : "Kimutai",
    age : 30
});

console.log(person3);

