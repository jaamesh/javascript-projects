let shuttleName = "Determination";
const shuttleSpeedMPH = 17500;
const distanceToMarsKM = 225000000;
const distanceToMoonKM = 384400;
const milesPerKM = 0.621;

console.log("shuttleName: ", shuttleName);
console.log("shuttleSpeedMPH: ", shuttleSpeedMPH);
console.log("distanceToMarsKM: ", distanceToMarsKM);
console.log("distanceToMoonKM: ", distanceToMoonKM);
console.log("milesPerKM: ", milesPerKM);

console.log("\n");

console.log("shuttleName: ", typeof shuttleName);
console.log("shuttleSpeedMPH: ", typeof shuttleSpeedMPH);
console.log("distanceToMarsKM: ", typeof distanceToMarsKM);
console.log("distanceToMoonKM: ", typeof distanceToMoonKM);
console.log("milesPerKM: ", typeof milesPerKM);

let milesToMars = distanceToMarsKM * milesPerKM;
let hoursToMars = milesToMars / shuttleSpeedMPH;
const hoursPerDay = 24;
let daysToMars = hoursToMars / hoursPerDay; 

console.log(shuttleName,"will take",daysToMars,"days to get to Mars.");

console.log(shuttleName,"will take",distanceToMoonKM*milesPerKM/shuttleSpeedMPH/hoursPerDay,"days to get to the Moon.");

console.log(Number('3'));
console.log(Number('three'));
console.log(Number('3 3'));
console.log(Number('33'));

console.log(1 + 5 % 3);

console.log(16 - 2 * 5 / 3 + 1);

console.log(2 ** 2 ** 3 * 3);
