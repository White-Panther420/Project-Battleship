/* eslint-disable no-param-reassign */
/* eslint-disable import/no-import-module-exports */
import "./Styles/styles.css";
import { createPage, createImage } from "./LoadPage";

import Explosion from "./Assets/Images/Explosion.png";

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
  const reduceNumShips = () => {
    numShips -= 1;
  };
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

  const placeShip = (pointA, orientation, shipName, playerName) => {
    const newShip = Battleship(shipName);
    let board;
    if (playerName.toLoverCase === "player1") {
      board = playerBoard;
    } else {
      board = AIBoard;
    }
    for (let i = 0; i < newShip.getLengthOfShip(); i += 1) {
      // Flipped orientation since array is flipped
      if (orientation === "horizontal") {
        board[pointA[1]][pointA[0] + i] = newShip;
      } else if (orientation === "vertical") {
        board[pointA[1] + i][pointA[0]] = newShip;
      }
    }
  };
  const recieveAttack = (attackCoordinate, board) => {
    const x = attackCoordinate[0];
    const y = attackCoordinate[1];

    if (typeof board[y][x] === "object") {
      if (board[y][x].hit().getSunkState()) {
        return "sunk";
      }
      return "hit";
    } if (board[y][x] === "0") {
      board[y][x] = "1";
      return "miss";
    }
  };

  return {
    createGameBoard, placeShip, recieveAttack,
  };
})();

const GameController = (() => {
  const boards = {
    playerBoard: GameBoard.createGameBoard(),
    AIBoard: GameBoard.createGameBoard(),
  };

  const players = [player("Player1"), player("AI")];

  const playTurn = (square, playerName) => {
    const squareCoordinateStr = square.getAttribute("data-state").match(/\d+/g);
    // Turn those strings into ints
    const squareCoordinate = squareCoordinateStr.map((match) => parseInt(match, 10));
    let turn;
    if (playerName.toLoverCase() === "player1") {
      turn = 0;
    } else {
      turn = 1;
    }

    const isHit = GameBoard.recieveAttack(squareCoordinate, Object.values(boards)[turn]);
    markSquare(square, isHit);
    if (isHit === "sunk") {
      players[turn];
    }
  };

  return { playTurn };
})();

const GUIController = (() => {
  const markSquare = (square, isHit) => {
    switch (isHit) {
      case "hit":
      {
        const explosion = createImage(Explosion, "explosion");
        square.appendChild(explosion);
        break;
      }
      case "sunk":
      {
        const imageContainer = square.querySelector(".imgContainer");
        imageContainer.style.background = "black";
        break;
      }
      case "miss":
      {
        square.style.background = "red";
        break;
      }
      default:
        break;
    }
  };
})();

createPage();

export { GameBoard, GameController };
