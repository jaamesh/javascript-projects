const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strRearranged = str.slice(3) + str.slice(0,3);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The original string was '${str}' and the new string is '${strRearranged}'.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numToRelocate = input.question("How many characters do you want to rearrange? ");
//strRearranged = str.slice(numToRelocate) + str.slice(0,numToRelocate);
//console.log(`The original string was '${str}' and the new string is '${strRearranged}'.`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numToRelocate > str.length) {
    console.log(`You've entered ${numToRelocate} which is larger than the original string length of ${str.length}; defaulting to 3.`);
    numToRelocate = 3;
}
strRearranged = str.slice(numToRelocate) + str.slice(0,numToRelocate);
console.log(`The original string was '${str}' and the new string is '${strRearranged}'.`);