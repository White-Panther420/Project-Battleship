/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-import-module-exports */
import "./Styles/styles.css";
import {
  createPage, createImage, startTurn, makeAIClickSquare, changeSquareColor, displayGameOverModal,
} from "./LoadPage";

import Explosion from "./Assets/Images/Explosion.png";
import MissX from "./Assets/Images/missX.webp";

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
      lengthOfShip = 2;
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
  const getShipType = () => shipType;

  return {
    hit, getLengthOfShip, getSunkState, getShipType,
  };
};

const player = (name) => {
  const getName = () => name;
  let numShips = 5;
  const getNumShips = () => numShips;
  const reduceNumShips = () => {
    numShips -= 1;
  };
  return { getName, getNumShips, reduceNumShips };
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

  const boards = {
    player1Board: createGameBoard(),
    AIBoard: createGameBoard(),
  };

  const placeShip = (pointA, orientation, shipName, boardName) => {
    const newShip = Battleship(shipName);
    const board = boards[boardName];
    console.log(board);
    for (let i = 0; i < newShip.getLengthOfShip(); i += 1) {
      // Flipped orientation since array is flipped
      if (orientation === "horizontal") {
        board[pointA[1]][pointA[0] + i] = newShip;
      } else if (orientation === "vertical") {
        board[pointA[1] + i][pointA[0]] = newShip;
      }
    }
  };
  const recieveAttack = (attackCoordinate, attackingPlayer, opponentBoardName) => {
    const x = attackCoordinate[0];
    const y = attackCoordinate[1];
    const board = boards[opponentBoardName];
    const attackedSquare = board[y][x];
    if (typeof attackedSquare === "object") {
      attackedSquare.hit();
      board[y][x] = "1";
      if (attackedSquare.getSunkState()) {
        attackingPlayer.reduceNumShips();
        return "sunk";
      }
      return "hit";
    }
    if (board[y][x] === "0") {
      board[y][x] = "X";
      return "miss";
    }
    // Player or AI tries to attack same spot twice
    return "invalid";
  };

  return {
    createGameBoard, placeShip, recieveAttack,
  };
})();

const GUIController = (() => {
  const markSquare = (square, isHit) => {
    if (isHit === "miss") {
      const missedMark = createImage(MissX, "miss");
      square.appendChild(missedMark);
      // So AI doesn't have to go through all functions when it makes a wrong move
      square.classList.add("clicked");
    } else if (isHit === "hit" || isHit === "sunk") {
      const explosion = createImage(Explosion, "explosion");
      square.appendChild(explosion);
      square.classList.add("clicked");
    }
  };
  return { markSquare };
})();

const GameController = (() => {
  const players = [player("player1"), player("AI")];

  const playTurn = (square, playerName, opponentBoardName) => {
    const squareCoordinateStr = square.getAttribute("data-state").match(/\d+/g);
    // Turn those strings into ints
    const squareCoordinate = squareCoordinateStr.map((match) => parseInt(match, 10));
    let opponent;
    if (playerName === "player1") {
      opponent = players[1];
    } else {
      opponent = players[0];
    }
    const opponentName = opponent.getName();
    const isHit = GameBoard.recieveAttack(squareCoordinate, opponent, opponentBoardName);
    if (isHit === "sunk") {
      const numShipsP = document.querySelector(`.${opponentName}NumShipsP`);
      numShipsP.textContent = `Ships Remaining: ${opponent.getNumShips()}`;
    }
    GUIController.markSquare(square, isHit);
    if (opponent.getNumShips() === 0) {
      const allAISquares = document.querySelectorAll(".square.AI");
      allAISquares.forEach((AISquare) => {
        AISquare.removeEventListener("click", startTurn);
        AISquare.removeEventListener("mouseover", changeSquareColor);
      });
      displayGameOverModal(opponentName);
      return "over"; // Game over
    }

    if (opponentName === "AI") {
      makeAIClickSquare();
    }
  };

  return { playTurn };
})();

createPage();

export { GameBoard, GameController };
