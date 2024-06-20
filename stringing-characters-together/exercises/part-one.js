let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 123.45;
console.log("Length of num %f without decimal point:", num, String(num).replace(".","").length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
num = 12348756087;
if (Number.isInteger(num)) {
    console.log("Length of integer: " + String(num).length);
} else {
    console.log("Length of float: " + (String(num).length - 1));
}
