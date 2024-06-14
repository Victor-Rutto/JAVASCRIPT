// Operators are symbols used to perform operations on operands (values and variables)

// 1. Arithmetic
            // Addition
            // let sum = 5+3;
            // console.log(sum);
            // Subtraction
            // let xx = 5-3;
            // console.log(xx);
            
            // Multiplication
            // let y = 5*3;
            // console.log(y);

            // Division
            // let div = 15/3;
            // console.log(div);

            // Remainder/Modulus
            // let mod = 17%3;
            // console.log(mod);

            // Exponential
            // let ex = 2 **4;
            // console.log(ex);



// 2. Assignment
// Used to assign operators to variables
            // Assignment 
            // let x= 5;
            // Addition 

            // x +=3;
            // Subtraction
            // x -=3;
            // Multiplocation
            // x *=3;
            // Division
            // Modulus
    // Increment/Decrement Operators
    // Used to increase or decrease the value by 1.(Prefix or postfix)
            // Increment ++
            // Decrement --

            // let a = 10;
            // console.log(++a);
            // console.log(a);


// 3. Comparison- Compares two values and gives a boolean value
        // == (Equal checks)
        // != (not equal)
        // === strict equality checks - checks data type.
        // !== strict inequality
// 4. Logical
    // AND (&&) - Returns true if both are true
    // OR (||) - Returns true if at least one is true
    // NOT (!) - Converts operator to boolean and returns flipped value
            // let yes = true;
            // let no = false;
            // console.log(!yes);
            // console.log(!no);


// 5. String
// We can use + to concatenate two strings
console.log("hello"+"world");
console.log("hello  "+"world"); //Adds space 

let a = 'Javascript';
a += ' tutorial';
console.log(a);

// 6. Bitwise Operators



// ##################################

// Operator Precedence (BODMAS Principle)
// Determines te order in which operators are parsed concerning eaach other.
let result = 2+3*4;
console.log(result);

// Operator associativity- order in which operators of same precedence are evaluated

// Right-to-left Associativity
let results = 2**3**2;
// This gives 512
console.log(results);