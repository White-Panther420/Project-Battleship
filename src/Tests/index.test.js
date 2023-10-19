const gameBoard = require("../index.js");

// Testing distance function
test("Horizontal distance between (0,1) and (4,1) to be 4", () => {
  expect(gameBoard.calcShipLength([0, 1], [4, 1])).toBe(5);
});
test("Vertical distance between (2,6) and (2,9) to be 3", () => {
  expect(gameBoard.calcShipLength([2, 6], [2, 9])).toBe(4);
});

// Testing placing a ship
test("Place a ship of length 5 on [3,4] horizontally to span to [7,4]", () => {
  expect(gameBoard.placeShip([3, 4], [7, 4], "horizontal")).toBe(
    [
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "S", "S", "S", "S", "S", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ],
  );
});
