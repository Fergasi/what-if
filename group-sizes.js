const prompt = require('prompt-sync')();

let num1 = Number(prompt('Enter the number of children in the class: '));

if (num1 === 1){
    console.log("You only have one child in your class, you cannot form groups")
} else if (num1 === 2){
    console.log("Divide your class into 2 groups of 2")
} else if (num1 % 3 === 0) {
    //do this
    let result = num1 / 3;
    console.log('Divide your class into', result, 'groups of 3');
} else if (num1 % 3 === 2) {
    //do this
    let result = num1 / 3;
    console.log('Divide your class into', result.toFixed(0), 'groups of 3, and 1 group of 2' );
} else if (num1 % 3 === 1) {
    //do this
    let result = (num1 / 3) - 1;
    console.log('Divide your class into', result.toFixed(0), 'groups of 3, and 2 group of 2' );
} 
