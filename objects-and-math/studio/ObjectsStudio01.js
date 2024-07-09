// Code your selectRandomEntry function here:

function selectRandomEntry(idsToChooseFrom) {
  console.log("items to choose from: " + idsToChooseFrom);
  console.log("Random number: " + Math.floor(Math.random()*idsToChooseFrom.length));
  return idsToChooseFrom[Math.floor(Math.random()*idsToChooseFrom.length)];
}

function chooseSomeDistinctIds(candidateIds, numToChoose = 3) {
  let crewIds = [];
  let chosenId;
  console.log("Num to Choose: " + numToChoose);
  while (crewIds.length < numToChoose) {
    chosenId = selectRandomEntry(candidateIds);
    console.log ("selectedId: " + chosenId);
    while (crewIds.includes(chosenId)) {
      chosenId = selectRandomEntry(candidateIds);
      console.log ("  selectedId: " + chosenId);
    }
    crewIds.push(chosenId);
  }
  return crewIds;
}

// Code your buildCrewArray function here:

function buildCrewArray(crewIdsChosen, candidates) {
  let crew = [];
  for (let i = 0; i < crewIdsChosen.length; i++) {
    for (let j = 0; j < candidates.length; j++) {
      if (candidates[j].astronautID === crewIdsChosen[i]) {
        crew.push(candidates[j]);
        break;
      }
    }
  }
  return crew;
}


let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let idsChosen = chooseSomeDistinctIds(idNumbers)
console.log("Chose the following IDs: " + idsChosen);

let crew = buildCrewArray(idsChosen, animals)
console.log("Chose the following crew: " + crew[0].name);

console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`);