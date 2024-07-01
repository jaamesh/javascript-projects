//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let myFunction = function(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 };

console.log("Reverse 'I am Groot.' " + myFunction("I am Groot."));

let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function(num) {
    return num/2.0;
});

console.log(halved);

let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function(name) {
    return name.slice(0,1);
});

console.log(firstInitials);

function decreasingSum(integer) {
    if (integer === 1){
       return integer;
    } else {
       let nextSum = decreasingSum(integer-1);
        console.log(integer + ", " + nextSum);
        return integer + nextSum;
    }
 }

 let tripleArrr = function (arg) {
    if (typeof arg === "number") {
        return arg * 3;
    } else if (typeof arg === "string" ) {
        return "ARRR!";
    } else {
        return arg;
    }
 }

 let myArray1 = ['Elocution', 21, 'Clean teeth', 100];

 console.log(myArray1.map(tripleArrr));

 console.log("Decreasing sum of 5: " + decreasingSum(5));