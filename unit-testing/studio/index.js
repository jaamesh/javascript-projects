
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 95,
  programsOffered: ["PT Web Dev", "PT Data Analysis", "FT Data Analysis"],
  launchOutput: launchOutput
}

function findFactors(numToFactor) {
    let factors = [];
    for(let i = 1; i <= numToFactor; i++) {
       if(numToFactor % i == 0) {
            factors.push(i);
        }
    }
    return factors;
}

function launchOutput(numForCommand) {
    let factors = findFactors(numForCommand);

    if (factors.includes(2) && !factors.includes(3) && !factors.includes(5)) {
        return "Launch!";
    } else if (!factors.includes(2) && factors.includes(3) && !factors.includes(5)) {
        return "Code!";
    } else if (!factors.includes(2) && !factors.includes(3) && factors.includes(5)) {
        return "Rocks!";
    } else if (factors.includes(2) && factors.includes(3) && !factors.includes(5)) {
        return "LaunchCode!";
    } else if (!factors.includes(2) && factors.includes(3) && factors.includes(5)) {
        return "Code Rocks!";
    } else if (factors.includes(2) && !factors.includes(3) && factors.includes(5)) {
        return "Launch Rocks!";
    } else if (factors.includes(2) && factors.includes(3) && factors.includes(5)) {
        return "LaunchCode Rocks!";
    } else if (!factors.includes(2) && !factors.includes(3) && !factors.includes(5)) {
        return "Rutabagas! That doesn't work.";
    } else {
        return "";
    } 
    /*
    if (factors.length === 2) {
        if (factors[1] === 2) {
            return "Launch!";
        } else if (factors[1] === 3) {
            return "Code!";
        } else if (factors[1] === 5) {
            return "Rocks!";
        }
    }
    else if (factors.length === 4) {
        if (factors[1] === 2 && factors[2] === 3) {
            return "LaunchCode!";
        } else if (factors[1] === 3 && factors[2] === 5) {
            return "Code Rocks!";
        } else if (factors[1] === 2 && factors[2] === 5) {
            return "Launch Rocks!";
        }
    }
    else if (factors.length > 4) {
        if (factors[1] === 2 && factors[2] === 3 && factors.includes(5)) {
            return "LaunchCode Rocks!";
        }
    }

    if (!factors.includes(2) && !factors.includes(3) && !factors.includes(5)) {
        return "Rutabagas! That doesn't work.";
    }
*/
}

module.exports = launchcode;

