// Code your orbitCircumference function here:

function computeCircumference(radius) {
  return Math.round(2*Math.PI*radius);
}

// Code your missionDuration function here:

function missionDuration(numOrbits, orbitRadius, orbitalSpeed) {
  return Number(numOrbits*orbitRadius/orbitalSpeed).toFixed(2);
}

// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];


 const orbitRadiusKM = 2000;
 const orbitalSpeedKMperHR = 28000;
 const orbitsToComplete = 5;
 let orbitCircumference = computeCircumference(orbitRadiusKM);
 let timeToCompleteMission = missionDuration(orbitsToComplete, orbitCircumference, orbitalSpeedKMperHR)
 console.log("Radius (KM): " + orbitRadiusKM);
 console.log("Circumference (KM): " + orbitCircumference);
 console.log(`The mission will travel ${orbitCircumference*orbitsToComplete} km around the planet, and it will take ${timeToCompleteMission} hours to complete.`);
 