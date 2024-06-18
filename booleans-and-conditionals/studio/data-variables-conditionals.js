// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 8;
const maxAstronauts = 7
let astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
let fuelTempCelsius = -125;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
let fuelLevel = 1.0;
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > maxAstronauts) {
    console.log("More than %d astronauts!", maxAstronauts);
    preparedForLiftOff = false;
}

// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready") {
    console.log("Astronauts are not ready!");
    preparedForLiftOff = false;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
    console.log("Maximum mass of %dkg exceeded!", maximumMassLimit);
    preparedForLiftOff = false;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    console.log("Fuel temp is outside range of %d to %d Celsius.", minimumFuelTemp, maximumFuelTemp);
    preparedForLiftOff = false;
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel < 1.0) {
    console.log("Gas tank is not completely full!");
    preparedForLiftOff = false;
}

// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
    console.log("The weather is not clear!");
    preparedForLiftOff = false;
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {
    console.log("All sytems go!  Initiating space shuttle launch sequence.");
} else {
    console.log("Launch aborted.  See messages above.");
}

console.log("Date: ", date);
console.log("Time: ", time);
console.log("Astronaut Count: ", astronautCount);
console.log("Crew Mass (kg): ", crewMassKg);
console.log("Fuel Mass (kg): ", fuelMassKg);
console.log("Shuttle Mass (kg): ", shuttleMassKg);
console.log("Total Mass (kg): ", totalMassKg);
console.log("Fuel Temp (C): ", fuelTempCelsius);
console.log("Weather: ", weatherStatus);

if (preparedForLiftOff) {
    console.log("Take your protein pills and put your helmet on!");
} else {
    console.log("There's a starman waiting in the sky, he'd like to come and meet us, but that'll have to wait.");
}
