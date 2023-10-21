// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-absolute-path, import/no-unresolved, import/no-import-module-exports
// import "./Styles/style.css";

const Battleship = (length) => {
  let numTimesHit = 0;
  let sunk = false;
  const lengthOfShip = length;
  //   switch (shipType.toLowerCase()) {
  //     case "carrier":
  //       lengthOfShip = 5;
  //       break;
  //     case "battleship":
  //       lengthOfShip = 4;
  //       break;
  //     case "cruiser":
  //       lengthOfShip = 3;
  //       break;
  //     case "submarine":
  //       lengthOfShip = 3;
  //       break;
  //     case "destroyer":
  //       lengthOfShip = 3;
  //       break;
  //     default:
  //       break;
  //   }

  const getLengthOfShip = () => lengthOfShip;
  const getSunkState = () => sunk;

  const isSunk = () => {
    sunk = true;
  };
  const hit = () => {
    numTimesHit += 1;
    if (numTimesHit === lengthOfShip) {
      isSunk();
    }
  };

  return { hit, getLengthOfShip, getSunkState };
};

const player = (name) => {
  const getName = () => name;
  const numShips = 5;
  const getNumShips = () => numShips;
  return { getName, getNumShips };
};

const gameBoard = (() => {
  const createGameBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i += 1) {
      board[i] = [];
      for (let j = 0; j < 10; j += 1) {
        board[i][j] = "0";
      }
    }
    return board;
  };

  const board = createGameBoard();

  const calcShipLength = (pointA, pointB) => {
    const xLength = pointB[0] - pointA[0]; // X2 - X1
    const yLength = pointB[1] - pointA[1]; // Y2 - Y1
    const distance = Math.sqrt((xLength * xLength) + (yLength * yLength));
    return distance + 1; // The first square needs to be included;
  };
  const placeShip = (pointA, pointB, orientation) => {
    // eslint-disable-next-line no-param-reassign
    orientation = orientation.toLowerCase();
    const shipLength = calcShipLength(pointA, pointB);
    const newShip = Battleship(shipLength);
    for (let i = 0; i < shipLength; i += 1) {
      // Flipped orientation since array is flipped
      if (orientation === "horizontal") {
        board[pointA[1]][pointA[0] + i] = newShip;
      } else if (orientation === "vertical") {
        board[pointA[1] + i][pointA[0]] = newShip;
      }
    }
    console.log(board);
    return board;
  };
  const recieveAttack = (attackCoordinate) => {
    const x = attackCoordinate[0];
    const y = attackCoordinate[1];
    if (typeof board[y][x] === "object") {
      board[y][x].hit();

      board[y][x] = "X";
    } else if (board[y][x] === "0") {
      board[y][x] = "1";
    }
    console.log(board);
  };

  return {
    createGameBoard, calcShipLength, placeShip, recieveAttack,
  };
})();

const gameController = (() => {
  const board = gameBoard.createGameBoard();
  const players = [player("Player1"), player("AI")];
})();

gameBoard.placeShip([3, 4], [7, 4], "horizontal");
gameBoard.recieveAttack([6, 4]);
module.exports = gameBoard;
