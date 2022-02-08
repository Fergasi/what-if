const prompt = require('prompt-sync')();

let num1 = Number(prompt('Enter a number: '));



if (num1 % 3 === 0 && num1 % 5 === 0) {
    //do this
    console.log("fizzbuzz");
} else if (num1 % 3 === 0) {
    //do this
    console.log("fizz");
} else if (num1 % 5 === 0) {
    //do this
    console.log("buzz");
} else {
    console.log("Thank you, try again next time!")
}