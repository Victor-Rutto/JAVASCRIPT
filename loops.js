// ############ For loop

// for (let i = 1; i<=10; i++){
//     console.log(i);
// }

// ###### Example 2.
let coding = ["Javascript", "Python", "C++"];

for (let i =0; i< coding.length; i++){
    console.log(coding[i]);
}

// #######                       Loop inside a loop
// for (let i = 1; i<=5; i++){
//     console.log(i);

//     for (let j= 1; j<=3; j++){
//         console.log("Inner loop " + j);

//         for (let k=1; k<=5; k+=2){
//             console.log("Mshamba " + k)
//         }
//     }
// }

// #####################             While loop
// while (condition){
//     // condition to be repeated
// }

let i=0;

while (i<=10){
    console.log(i);
    i++;
}


// #####################             Do while loop
// do{
//     // code to be repeated
// }while(condition);

// #### Exmple

let m = 1;

do{
    console.log(m)
    m++;
}while(m<=5);


console.log("Break")

// ##############################     BREAK & CONTINUE
// #############    Break


for (let i = 1; i <=5; i++){

    if (i==3){
        break
    }console.log(i);
}


console.log("Continue")

// ############# Continue
// Used to break the current loop and move to the next iteration.
for (let i = 1; i <=5; i++){

    if (i==3){
        continue
    }console.log(i);
}
