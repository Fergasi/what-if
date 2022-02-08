const prompt = require('prompt-sync')();

let earthweight = Number(prompt('Enter your current weight in Earth lbs: '));

console.log("Provide the number that correlates to the planet where your bout will be fought \n \n 1 - Venus \n 2 - Mars \n 3 - Jupiter \n 4 - Saturn \n 5 - Uranus \n 6 - Neptune \n");

let planet = Number(prompt('Please enter your planet code: '));


if (planet === 1) {
    //do this
    let result = earthweight * 0.78;
    console.log("Your current weight on Venus is :", result, "lbs");
} else if (planet === 2) {
    //do this
    let result = earthweight * 0.39;
    console.log("Your current weight on Mars is :", result, "lbs");
} else if (planet === 3) {
    //do this
    let result = earthweight * 2.65;
    console.log("Your current weight on Jupiter is :", result, "lbs");
} else if (planet === 4) {
    //do this
    let result = earthweight * 1.17;
    console.log("Your current weight on Saturn is :", result, "lbs");
} else if (planet === 5) {
    //do this
    let result = earthweight * 1.05;
    console.log("Your current weight on Uranus is :", result, "lbs");
} else if (planet === 6) {
    //do this
    let result = earthweight * 1.23;
    console.log("Your current weight on Neptune is :", result, "lbs");
} else {
    console.log("The planet code you entered is not valid")
}