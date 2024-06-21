const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let arrFood = food.split(",").sort();
let arrEquipment = equipment.split(",").sort();
let arrPets = pets.split(",").sort();
let arrSleepAids = sleepAids.split(",").sort();
console.log(arrFood);
console.log(arrEquipment);
console.log(arrPets);
console.log(arrSleepAids);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(arrFood);
cargoHold.push(arrEquipment);
cargoHold.push(arrPets);
cargoHold.push(arrSleepAids);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetNumber = input.question("Please choose a cabinet (0 - 3) in the cargo hold. ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`Here are the contents of cabinet ${cabinetNumber}: ${cargoHold[cabinetNumber]}`);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let cabinetItem = input.question("Please choose an item from the cabinet. ");
if (cargoHold[cabinetNumber].includes(cabinetItem)) {
    console.log(`Cabinet ${cabinetNumber} DOES contain ${cabinetItem}.`);
} else {
    console.log(`Cabinet ${cabinetNumber} DOES NOT contain ${cabinetItem}.`);
}
