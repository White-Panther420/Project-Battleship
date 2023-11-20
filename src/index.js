/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-import-module-exports */
import "./Styles/styles.css";
import {
  createPage, createImage, startTurn, makeAIClickSquare, changeSquareColor, displayGameOverModal, quitGame,
} from "./LoadPage";

import Explosion from "./Assets/Images/Explosion.png";
import MissX from "./Assets/Images/missX.webp";

// Sleep function to delay code execution
// eslint-disable-next-line no-promise-executor-return
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

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
  const setNumShips = () => {
    numShips = 5;
  };
  return {
    getName, getNumShips, reduceNumShips, setNumShips,
  };
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
        return ["sunk", attackedSquare.getShipType()];
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

  const resetBoards = () => {
    for (const board in boards) {
      if (boards.hasOwnProperty(board)) {
        boards[board] = createGameBoard();
      }
    }
  };

  return {
    placeShip, recieveAttack, resetBoards,
  };
})();

const GUIController = (() => {
  const markSquare = (square, isHit, opponentBoardName) => {
    if (isHit === "miss") {
      const missedMark = createImage(MissX, "miss");
      const missSfx = document.querySelector(".splashSfx");
      missSfx.play();
      square.appendChild(missedMark);
      // So AI doesn't have to go through all functions when it makes a wrong move
      square.classList.add("clicked");
    } else if (isHit === "hit" || isHit[0] === "sunk") {
      const explosion = createImage(Explosion, "explosion");
      const explosionSfx = document.querySelector(".explosionSfx");
      explosionSfx.play();
      // Shift explosion img for first square to avoid pushing down the explosion img
      if (square.classList.contains("imgHolderHorizontal")) {
        explosion.style.transform = "translate(0%, -138%)";
        square.appendChild(explosion);
        // Same thing but now we avoid shifting it all the way down
        // Since it will be pushed all the way below vertical div (pretty low)
      } else if (square.classList.contains("imgHolderVertical")) {
        const imgContainer = square.querySelector(".imgContainer");
        imgContainer.appendChild(explosion);
        explosion.style.transform = "translate(0%, -155%)";
        // Append exploson like normal
      } else {
        square.appendChild(explosion);
      }

      if (isHit[0] === "sunk") {
        const board = document.querySelector(`.${opponentBoardName}`);
        const imgContainer = board.querySelector(`.imgContainer.${isHit[1]}`);
        imgContainer.style.background = "rgba(59, 59, 59, 0.4)";
        if (opponentBoardName === "AIBoard") {
          imgContainer.style.display = "block";
          const shipImg = imgContainer.querySelector(".shipImg");
          shipImg.style.opacity = 2;
        }
      }
      square.classList.add("clicked");
    }
  };
  return { markSquare };
})();

createPage();

const GameController = (() => {
  const players = [player("player1"), player("AI")];
  const quitGameBtn = document.querySelector(".quitGameBtn");

  const playTurn = async (square, playerName, opponentBoardName) => {
    const squareCoordinateStr = square.getAttribute("data-state").match(/\d+/g);
    // Turn those strings into ints
    const squareCoordinate = squareCoordinateStr.map((match) => parseInt(match, 10));
    const AIBoardCover = document.querySelector(".AIBoardCover");

    let opponent;
    if (playerName === "player1") {
      opponent = players[1];
    } else {
      opponent = players[0];
    }
    const opponentName = opponent.getName();
    const isHit = GameBoard.recieveAttack(squareCoordinate, opponent, opponentBoardName);
    if (isHit[0] === "sunk") {
      const numShipsP = document.querySelector(`.${opponentName}NumShipsP`);
      numShipsP.textContent = `Ships Remaining: ${opponent.getNumShips()}`;
    }
    AIBoardCover.style.display = "block";
    quitGameBtn.style.border = "2px solid grey";
    quitGameBtn.removeEventListener("click", quitGame);
    await sleep(2000);
    GUIController.markSquare(square, isHit, opponentBoardName);

    if (opponent.getNumShips() === 0) {
      const allAISquares = document.querySelectorAll(".square.AI");
      allAISquares.forEach((AISquare) => {
        AISquare.removeEventListener("click", startTurn);
        AISquare.removeEventListener("mouseover", changeSquareColor);
      });
      displayGameOverModal(opponentName);
      resetGame();
      return "over"; // Game over
    }

    if (opponentName === "AI") {
      // Delay move to let sfxs of player attack finish playing
      // Prevent player from clicking board while AI waits
      await sleep(2000);
      makeAIClickSquare();
      await sleep(3000);
      quitGameBtn.addEventListener("click", quitGame);
      quitGameBtn.style.border = "2px solid white";
      AIBoardCover.style.display = "none";
    }
    return isHit;
  };

  const resetGame = () => {
    players.forEach((player) => {
      player.setNumShips();
    });
    GameBoard.resetBoards();
  };
  return { playTurn, resetGame };
})();

export { GameBoard, GameController, sleep };
