let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 7,
   move: function () {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, superChimpTwo, salamander, dog, tardigrade];

for (let i = 0; i < crew.length; i++) {
   console.log(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} years old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`);
}


// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

const stepsToFinishRace = 20;
const maxTurns = 5;
let steps = Array(crew.length).fill(0);
let turns = Array(crew.length).fill(-1);
let turn = 1;

while(turns.includes(-1) && turn < maxTurns) {
   console.log("Turn " + turn + ":");
   for (let i = 0; i < crew.length; i++) {
      if (turns[i] === -1) {
         steps[i] = steps[i] + crew[i].move();
         if (steps[i] >= stepsToFinishRace) {
            turns[i] = turn;
            console.log("  " + crew[i].name + " " + steps[i] + " steps and finished the race!");
         } else {
            console.log("  " + crew[i].name + " " + steps[i] + " steps.");
         }
         }
   }
   turn = turn + 1;
}

for (let i = 0; i < crew.length; i++){
   if (turns[i] > -1) {
      console.log(`${crew[i].name} took ${turns[i]} turns to take ${stepsToFinishRace} or more steps.`);
   } else {
      console.log(`${crew[i].name} didn't finish the race taking only ${steps[i]} steps in ${maxTurns} turns.`);
   }
}