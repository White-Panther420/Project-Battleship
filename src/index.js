/* eslint-disable import/no-import-module-exports */
import "./Styles/styles.css";
import createPage from "./LoadPage";

const Battleship = (shipType) => {
  let numTimesHit = 0;
  let sunk = false;
  let lengthOfShip;
  switch (shipType) {
    case "carrier":
      lengthOfShip = 5;
      break;
    case "battleship":
      lengthOfShip = 4;
      break;
    case "cruiser":
      lengthOfShip = 3;
      break;
    case "submarine":
      lengthOfShip = 3;
      break;
    case "destroyer":
      lengthOfShip = 3;
      break;
    default:
      break;
  }

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

const GameBoard = (() => {
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

  const placeShip = (pointA, orientation, shipName) => {
    const newShip = Battleship(shipName);
    for (let i = 0; i < newShip.getLengthOfShip(); i += 1) {
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
    createGameBoard, placeShip, recieveAttack,
  };
})();

const gameController = (() => {
  const board = GameBoard.createGameBoard();
  const players = [player("Player1"), player("AI")];
})();

createPage();

export default GameBoard;
