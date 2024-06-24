const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let shuttleFuelLevel = -1;
let numberOfAstronauts = -1;
let shuttleAltitude = -1;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
let fuelLevelWithinParameters = false;
let numberOfTries = 0
const minFuelLevel = 5000;
const maxFuelLevel = 30000;
const maxNumberOfTries = 5;
while (!fuelLevelWithinParameters && numberOfTries <= maxNumberOfTries) {
  shuttleFuelLevel = Number(input.question(`Please enter a starting fuel level as an integer between ${minFuelLevel} and ${maxFuelLevel}: `));
  if (isNaN(shuttleFuelLevel)) {
    console.log("The value you entered is not a number.");
  } else if (shuttleFuelLevel !== Math.round(shuttleFuelLevel)) {
    console.log("The value you entered is not an integer.");
  } else if (shuttleFuelLevel < minFuelLevel) {
    console.log("The value you entered is less than the minimum fuel level of " + minFuelLevel);
  } else if (shuttleFuelLevel > maxFuelLevel) {
    console.log("The value you entered is greater than the maximum fuel level of " + maxFuelLevel);
  } else {
    fuelLevelWithinParameters = true;
  }
  numberOfTries++;
}





//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
let numberOfAstronautsWithinParamenters = false;
numberOfTries = 0
const minNumberOfAstronauts = 1;
const maxNumberOfAstronauts = 7;
while (!numberOfAstronautsWithinParamenters && numberOfTries <= maxNumberOfTries) {
  numberOfAstronauts = Number(input.question(`Please enter a number of astronauts as an integer between ${minNumberOfAstronauts} and ${maxNumberOfAstronauts}: `));
  if (isNaN(numberOfAstronauts)) {
    console.log("The value you entered is not a number.");
  } else if (numberOfAstronauts !== Math.round(numberOfAstronauts)) {
    console.log("The value you entered is not an integer.");
  } else if (numberOfAstronauts < minNumberOfAstronauts) {
    console.log("The value you entered is less than the minimum number of astronauts of " + minNumberOfAstronauts);
  } else if (numberOfAstronauts > maxNumberOfAstronauts) {
    console.log("The value you entered is greater than the maximum number of astronauts of " + maxNumberOfAstronauts);
  } else {
    numberOfAstronautsWithinParamenters = true;
  }
  numberOfTries++;
}
  
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
const minimumAltitudeForOrbit = 2000;
const fuelConsumptionPerAstronautPer50km = 100;
let shuttleAchievedOrbit = false;

console.log(`Launching shuttle from ground with goal of achieving orbit at ${minimumAltitudeForOrbit} km.`);
shuttleAltitude = 0;

while (shuttleFuelLevel >= fuelConsumptionPerAstronautPer50km * numberOfAstronauts && !shuttleAchievedOrbit) {
  shuttleFuelLevel -= fuelConsumptionPerAstronautPer50km * numberOfAstronauts;
  shuttleAltitude += 50;
  shuttleAchievedOrbit = shuttleAltitude >= minimumAltitudeForOrbit;
  console.log(`fuel: ${shuttleFuelLevel} units, altitude: ${shuttleAltitude} km, orbit: ${shuttleAchievedOrbit}`);
}

console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`);




/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (shuttleAchievedOrbit) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}
