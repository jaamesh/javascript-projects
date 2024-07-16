// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("organization returns 'nonprofit'", function() {
		expect(launchcode.organization).toBe("nonprofit");
	});
  test("director returns 'Jeff'", function() {
		expect(launchcode.executiveDirector).toBe("Jeff");
	});
  test("% cool employees 95", function() {
    expect(launchcode.percentageCoolEmployees).toBe(95);
	});
  test("programs offered is 3", function() {
    expect(launchcode.programsOffered.length).toBe(3);
	});
  test("first program is 'PT Web Dev'", function() {
    expect(launchcode.programsOffered.includes("PT Web Dev")).toBe(true);
	});
  test("second program is 'PT Data Analysis'", function() {
    expect(launchcode.programsOffered.includes("PT Data Analysis")).toBe(true);
	});
  test("third program is 'FT Data Analysis'", function() {
    expect(launchcode.programsOffered.includes("FT Data Analysis")).toBe(true);
	});


let testParams = [
  [4,"When passed a number that is ONLY divisible by 2","Launch!"],
  [3,"When passed a number that is ONLY divisible by 3","Code!"],
  [5,"When passed a number that is ONLY divisible by 5","Rocks!"],
  [6,"When passed a number that is divisible by 2 and 3","LaunchCode!"],
  [15,"When passed a number that is divisible by 3 and 5","Code Rocks!"],
  [10,"When passed a number that is divisible by 2 and 5","Launch Rocks!"],
  [30,"When passed a number that is divisible by 2, 3 and 5","LaunchCode Rocks!"],
  [7,"When passed a number that is NOT divisible by 2, 3 or 5","Rutabagas! That doesn't work."]
                ];

  console.log("testParams:" + testParams);
  for (let i = 0; i < testParams.length; i++) {
    test(`${testParams[i][1]}, return '${testParams[i][2]}'`, function() {
      expect(launchcode.launchOutput(testParams[i][0])).toBe(testParams[i][2]);
    })
  }    


});