
// Had to install readline-sync in the directory with this file.
// Used npm install --save readline-sync
// Prior to doing that I got an error saying readline-sync was not found.
input = require('readline-sync');

let addend1 = input.question("Give me an addend please: ");
let addend2 = input.question("Give me another addend please: ");

console.log("This attempts to add before converting to numbers: ", addend1 + addend2);
console.log("This attempts to add after converting to numbers: ", Number(addend1) + Number(addend2));
