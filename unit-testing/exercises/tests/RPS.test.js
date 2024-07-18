const rps = require("../RPS.js");

describe("RPS Unit Tests", () => {
    test("rock, paper", () => {
        expect(rps.whoWon("rock","paper")).toBe("Player 2 wins!");
    })

    test("rock, rock", () => {
        expect(rps.whoWon("rock","rock")).toBe("TIE!");
    })

    test("rock, scissors", () => {
        expect(rps.whoWon("rock","scissors")).toBe("Player 1 wins!");
    })

    test("paper, rock", () => {
        expect(rps.whoWon("paper","rock")).toBe("Player 1 wins!");
    })

})