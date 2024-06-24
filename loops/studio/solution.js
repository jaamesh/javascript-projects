const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  let meal = [];
  
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///
  for (let i = 0; i < numMeals; i++) {
    meal = [];
    for (let j = 0; j < pantry.length; j++) {
      meal.push(pantry[j][i%pantry[j].length]);
    }
    meals.push(meal);
  }

  return meals;
}


function askForNumber() {
  const minNumberOfMeals = 1;
  const maxNumberOfMeals = 20;
  let numberOfTries = 0;
  const maxNumberOfTries = 5;
  let numberIsValid = false;

  /// CODE YOUR SOLUTION TO PART B here ///
  while (!numberIsValid && numberOfTries <= maxNumberOfTries) {
    numMeals = Number(input.question("How many meals would you like to make?"));
    if (isNaN(numMeals)) {
      console.log("The value you entered is not a number.");
    } else if (numMeals !== Math.round(numMeals)) {
      console.log("The value you entered is not an integer.");
    } else if (numMeals < minNumberOfMeals) {
      console.log("The value you entered is less than the minimum number of meals of " + minNumberOfMeals);
    } else if (numMeals > maxNumberOfMeals) {
      console.log("The value you entered is greater than the maximum number of meals of " + maxNumberOfMeals);
    } else {
      numberIsValid = true;
    }
    numberOfTries++;
  
  }

  return numMeals;
}


function generatePassword(string1, string2) {
  let code = '';

  /// Code your Bonus Mission Solution here ///
  for (let i = 0; i < Math.max(string1.length, string2.length); i++) {
    code += string1[i%string1.length];
    code += string2[i%string2.length];
  }

  return code;
}

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 9);
  console.log(meals)
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
  let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  let password1 = '1234';
  let password2 = '56789ABC';
  console.log("Time to run the password generator so we can update the menu tomorrow.")
  console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
