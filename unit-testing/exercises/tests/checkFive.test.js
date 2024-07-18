const checkFive = require("../checkFive.js");

describe("checkFive", function() {
    test("Number less than five", () => {
        expect(checkFive.checkFive(4)).toBe("4 is less than 5.");
    })
    test("Number more than five", () => {
        expect(checkFive.checkFive(6)).toBe("6 is greater than 5.");
    })
    test("Number equal to five", () => {
        expect(checkFive.checkFive(5)).toBe("5 is equal to 5.");
    })
})