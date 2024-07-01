function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

/* Steal some fuel from the shuttle:
 */
 
//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

let testFuel = function(level) {
  let minFuelNeeded = 100001;
  let fuelStatusColor = checkFuel(level);
  if (fuelStatusColor === "green") {
    minFuelNeeded = 100001;
  } else if (fuelStatusColor === "yellow") {
    minFuelNeeded = 50001;
  } else if (fuelStatusColor === "red") {
    minFuelNeeded = 1;
  } else {
    minFuelNeeded = level;
  }
  fuelLevel = minFuelNeeded;
  return level - minFuelNeeded;
}
//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.
console.log("System Check Follows:");
console.log("Fuel Level Before Test: " + fuelLevel);
let fuelIntegrity = testFuel(fuelLevel);
console.log("Check Fuel: " + fuelIntegrity);
console.log("Fuel Level After Test: " + fuelLevel);
console.log("Check Fuel: " + checkFuel(fuelLevel));
/* Next, liberate some of that glorious cargo.
 */

//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.
let cleanHold = function(hold) {
  let itemsCleaned = [];
  for (let i = 0; i < hold.length; i++){
    if (hold[i] === "gold") {
      itemsCleaned.push(hold[i]);
      hold[i] = "pyrite";
    } else if (hold[i] === "space suits") {
      itemsCleaned.push(hold[i]);
      hold[i] = "footy pajamas";
    }
   }
  return itemsCleaned;
}

console.log("Hold Before Cleaning: " + cargoHold);
console.log("Hold Status: " + holdStatus(cargoHold));
let holdItemsCleaned = cleanHold(cargoHold);
console.log("Hold Items Cleaned: " + holdItemsCleaned);
console.log("Hold After Cleaning: " + cargoHold);
console.log("Hold Status: " + holdStatus(cargoHold));

//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.

//d). Don’t get hasty, matey! Remember to test your function.

/* Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.
 */
 
//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
	
//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."
let irs = function(fuelIntegrity, itemsCleaned) {
  return `Raided ${fuelIntegrity} of fuel from the tanks, and stole ${itemsCleaned[0]} and ${itemsCleaned[1]} from the cargo hold.`;
}

console.log(irs(fuelIntegrity, holdItemsCleaned));