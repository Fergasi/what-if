const prompt = require('prompt-sync')();

let age = Number(prompt('Enter your age as a number: '));

if (age < 16) {
    //do this
    console.log("You can't drive");
} else if (age >= 16 && age <= 17) {
    //do this
    console.log("You can drive but not vote.");
} else if (age >= 18 && age <= 24) {
    //do this
    console.log("You can vote but not rent a car.");
} else if (age >= 25) {
    //do this
    console.log("You can do pretty much anything.");
} else {
    console.log("You did not enter a valid age!")
}