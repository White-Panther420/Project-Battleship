/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-import-module-exports */
import Luffy from "./Assets/Images/Luffy.png";
import Akainu from "./Assets/Images/Akainu.png";
import OnePieceLogo from "./Assets/Images/One-Piece-Logo.png";
import XCollabLogo from "./Assets/Images/XLogo.png";
import BattleShipLogo from "./Assets/Images/BattleshipLogo.webp";

import ThousandSunny from "./Assets/Images/Thousand_Sunny.png";
import LawSub from "./Assets/Images/Submarine.png";
import Queen from "./Assets/Images/Queen.png";
import OroJackson from "./Assets/Images/Oro.png";
import Boa from "./Assets/Images/Boa.png";

import NavyShip from "./Assets/Images/NavyShip.png";
import NavyCarrier from "./Assets/Images/NavyCarrier.png";
import NavyDestroyer from "./Assets/Images/NavyDestroyer.png";

import Win from "./Assets/Images/Win.jpeg";
import Lose from "./Assets/Images/Lose.jpg";

import SoundIcon from "./Assets/Images/sound.png";

// Page background music
import Overtaken from "./Assets/Music/Background Music/Overtaken.mp3";
import VeryStrongest from "./Assets/Music/Background Music/VeryStrongest_BG.mp4";
import WanoTheme from "./Assets/Music/Background Music/Wano.mp3";

// End background music
import Victory from "./Assets/Music/Background Music/Victory_BG.mp3";
import Defeat from "./Assets/Music/Background Music/Lose_BG.mp4";

// Sfx
import LoseSfx from "./Assets/Music/SFX/Ridicule_SFX.mp4";
import CannonSfx from "./Assets/Music/SFX/Cannon_SFX.mp4";
import SplashSfx from "./Assets/Music/SFX/Splash_SFX.mp4";
import ExplosionSfx from "./Assets/Music/SFX/Explosion_SFX.mp4";

import { GameBoard, GameController, sleep } from "./index.js";

const createElement = (elementName, elemenetClassName, elementID = "") => {
  const newElement = document.createElement(elementName);
  const classNames = elemenetClassName.split(" ");
  for (let i = 0; i < classNames.length; i += 1) {
    newElement.classList.add(classNames[i]);
  }
  if (elementID !== "") {
    newElement.setAttribute("id", elementID);
  }
  return newElement;
};

const createImage = (ImportedImg, className) => {
  const myImg = new Image();
  myImg.src = ImportedImg;
  myImg.classList.add(className);
  return myImg;
};

const contentDiv = document.getElementById("content");
contentDiv.style.backgroundRepeat = "no-repeat";
contentDiv.style.backgroundSize = "cover";
contentDiv.style.backgroundPosition = "center";

const pageBgAudio = createElement("audio", "pageBgAudio");
const veryStrongest = createElement("source", "bg");
veryStrongest.src = VeryStrongest;
veryStrongest.volume = 0.8;
const overtaken = createElement("source", "bg");
overtaken.src = Overtaken;
overtaken.volume = 0.8;
const wanoTheme = createElement("source", "bg");
wanoTheme.src = WanoTheme;
wanoTheme.volume = 0.8;
wanoTheme.playbackRate = 0.8;

pageBgAudio.appendChild(overtaken);
pageBgAudio.appendChild(veryStrongest);
pageBgAudio.appendChild(wanoTheme);

const cannonSfx = createElement("audio", "cannonSfx");
cannonSfx.src = CannonSfx;
cannonSfx.volume = 1;
const explosionSfx = createElement("audio", "explosionSfx");
explosionSfx.src = ExplosionSfx;
explosionSfx.volume = 1;
const splashSfx = createElement("audio", "splashSfx");
splashSfx.src = SplashSfx;
splashSfx.volume = 1;

const loseSfx = createElement("audio", "sfx");
loseSfx.src = LoseSfx;
const loseBg = createElement("audio", "bg");
loseBg.src = Defeat;

const winAudio = createElement("audio", "winAudio");
const victory = createElement("source", "bg");
victory.src = Victory;
winAudio.appendChild(victory);

contentDiv.appendChild(cannonSfx);
contentDiv.appendChild(explosionSfx);
contentDiv.appendChild(splashSfx);
contentDiv.appendChild(loseSfx);
contentDiv.appendChild(loseBg);
contentDiv.appendChild(winAudio);
contentDiv.appendChild(pageBgAudio);

// Variables to help AI become smarter
let prevAIMove = "";
let prevAIMoveResult = "";

const changeSquareColor = (event) => {
  const square = event.currentTarget;
  if (square.classList.contains("clicked")) {
    square.style.background = "#b40808";
  } else {
    square.style.background = "#0db849";
  }
};

const eraseSquares = () => {
  const allPaintedSqaures = document.querySelectorAll(".painted");
  allPaintedSqaures.forEach((paintedSquare) => {
    // eslint-disable-next-line no-param-reassign
    paintedSquare.classList.remove("painted");
  });
};

const placeShipImg = (square, shipImage, shipLength, shipName, orientation) => {
  const squareWidth = square.offsetWidth;

  if (orientation === "vertical") {
    // Create a container for the image
    const imgContainer = createElement("div", `imgContainer ${shipName}`);
    imgContainer.style.width = `${squareWidth - 4}px`;
    imgContainer.style.height = `${(squareWidth - 3) * shipLength}px`;
    imgContainer.style.background = "rgb(83, 129, 237)";
    // Positioning the ship with absolute so we can move it up when it rotates
    shipImage.style.height = `${squareWidth - 4}px`;
    shipImage.style.width = `${(squareWidth - 3) * shipLength}px`;

    shipImage.style.transformOrigin = "bottom left";
    shipImage.style.transform = "translate(0%, -100%) rotate(90deg)";

    imgContainer.appendChild(shipImage);
    square.appendChild(imgContainer);
    square.classList.add("imgHolderVertical");
  } else {
    // Create a container for the image
    const imgContainer = createElement("div", `imgContainer ${shipName}`);
    imgContainer.style.width = `${squareWidth * shipLength}px`;
    imgContainer.style.height = `${squareWidth - 4}px`;

    shipImage.style.height = `${squareWidth - 4}px`;
    shipImage.style.width = `${(squareWidth) * shipLength}px`;
    imgContainer.style.background = "rgb(83, 129, 237)";
    imgContainer.appendChild(shipImage);
    square.appendChild(imgContainer);
    square.classList.add("imgHolderHorizontal");
  }

  return square;
};
// Marks placed ships on modal and places ship on actual board
const placeShipOnBoard = (playerName, ships, square, orientation) => {
  const firstKeyName = Object.keys(ships)[0];
  const firstShipLength = Object.values(ships)[0][0];
  const firstShipImage = Object.values(ships)[0][1];
  const pointAAttribute = square.getAttribute("data-state");
  const PointAStr = pointAAttribute.match(/\d+/g);
  const pointA = PointAStr.map((match) => parseInt(match, 10));
  const image = createImage(firstShipImage, "shipImg");

  // Select board based on who is placing ships
  const boardName = `${playerName}Board`;

  const player1Board = document.querySelector(".player1Board");
  const player1BoardSquare = player1Board.querySelector(`[data-state = "${pointAAttribute}"]`);

  const paintedSquares = document.querySelectorAll(".painted");
  paintedSquares.forEach((paintedSquare) => {
    paintedSquare.classList.add("shipPlaced");
  });

  if (playerName === "AI") {
    const squareToPlaceImg = placeShipImg(square, image, firstShipLength, firstKeyName, orientation);

    // Clear AI board of mmarkings
    const shipsPlacedSquares = document.querySelectorAll(".shipPlaced");
    shipsPlacedSquares.forEach((markedSquare) => {
      markedSquare.style.background = "none";
    });
    // Hide AI ships
    const imageContainer = squareToPlaceImg.querySelector(".imgContainer");
    // Add name of ship to square to make it easier to mark square
    imageContainer.classList.add(`${firstKeyName}`);
    imageContainer.style.background = "none";
    image.style.opacity = 0;
  } else {
    // Avoid placing image on modal gameboard
    placeShipImg(player1BoardSquare, image, firstShipLength, firstKeyName, orientation);
  }

  // Place ship in array
  GameBoard.placeShip(pointA, orientation, firstKeyName, boardName);

  // Prevent user from double clicking on a square
  eraseSquares();

  // eslint-disable-next-line no-param-reassign
  const keys = Object.keys(ships);
  const firstKey = keys[0];
  // eslint-disable-next-line no-param-reassign
  delete ships[firstKey];
  // All ships are placed
  if (Object.keys(ships).length === 0) {
    if (playerName === "player1") {
      const modalBg = document.querySelector(".modalBg");
      modalBg.style.display = "none";
      pageBgAudio.play();
    }
  }
};
// Checks to make sure move is legal and not overlapping with other ships
const checkForIllegalMove = (square, orientation, ships, playerName) => {
  // Get (x, y) coordinate of square as strings in an array
  const squareCoordinateStr = square.getAttribute("data-state").match(/\d+/g);
  // Turn those strings into ints
  const squareCoordinate = squareCoordinateStr.map((match) => parseInt(match, 10));
  // Select appropriate gameboard
  const board = document.querySelector(`.${playerName}Board`);
  // Will determine if a square can be clicked instead of repeating logic from mouseover
  let legalMove;

  // Paint squares equivalent to ship length
  for (let k = 0; k < Object.values(ships)[0][0]; k += 1) {
    legalMove = false;
    if (orientation === "horizontal") {
      const dataState = `(${squareCoordinate[0] + k}, ${squareCoordinate[1]})`;
      const placementSquare = board.querySelector(`[data-state="${dataState}"]`);
      if (placementSquare === null || placementSquare.classList.contains("shipPlaced")) {
        // Visual message letting the user know they're attempting to place a ship
        // on an invalid spot on the board
        eraseSquares();
        // Don't need to check other squares
        break;
      } else {
        placementSquare.classList.add("painted");
        legalMove = true;
      }
    } else {
      const dataState = `(${squareCoordinate[0]}, ${squareCoordinate[1] + k})`;
      const placementSquare = board.querySelector(`[data-state="${dataState}"]`);
      if (placementSquare === null || placementSquare.classList.contains("shipPlaced")) {
        eraseSquares();
        break;
      } else {
        placementSquare.classList.add("painted");
        legalMove = true;
      }
    }
  }
  return legalMove;
};

const startTurn = (event) => {
  const square = event.currentTarget;
  cannonSfx.play();

  if (square.classList.contains("AI")) {
    // Prevent player from double-clicking (causes AI to go twice)
    square.removeEventListener("click", startTurn);
    // Player clicked AI square
    GameController.playTurn(square, "player1", "AIBoard");
  } else {
    prevAIMoveResult = GameController.playTurn(square, "AI", "player1Board");
  }
};

const createGameBoardGUI = (playerName, placementBoard = false, ships = "") => {
  const gameBoard = createElement("div", "gameBoard");
  gameBoard.classList.add(`${playerName}Board`);
  let legalMove;
  for (let i = 0; i < 10; i += 1) {
    // Make it easier to give squares (x, y) coordinates
    const rowDiv = createElement("div", "rowDiv");
    rowDiv.setAttribute("data-state", i);
    gameBoard.appendChild(rowDiv);
    for (let j = 0; j < 10; j += 1) {
      const square = createElement("div", `square ${playerName}`);
      square.setAttribute("data-state", `(${j}, ${i})`);
      // Add a different eventListener for a board that only places ships
      if (placementBoard) {
        // eslint-disable-next-line no-loop-func
        square.addEventListener("mouseenter", () => {
          const orientation = document.querySelector(".rotateShipBtn").getAttribute("id");
          legalMove = checkForIllegalMove(square, orientation, ships, "placement");
        });
        square.addEventListener("mouseleave", () => {
          // Clear squares of bg color
          eraseSquares();
        });
        // eslint-disable-next-line no-loop-func
        square.addEventListener("click", () => {
          if (legalMove) {
            const orientation = document.querySelector(".rotateShipBtn").getAttribute("id");
            placeShipOnBoard("player1", ships, square, orientation);
            // Prevents user from double-clicking
            legalMove = false;
          } else { // Invalid move

          }
        });
      } else { // Regular gameboard
        if (playerName === "AI") {
          square.addEventListener("mouseover", changeSquareColor);
          square.addEventListener("mouseout", () => {
            square.style.background = "none";
          });
        }
        square.addEventListener("click", startTurn);
      }
      rowDiv.appendChild(square);
    }
  }
  return gameBoard;
};

const makeAIMOve = () => {
  const x = Math.floor(Math.random() * 10); // Random number between 0 and 9
  const y = Math.floor(Math.random() * 10);

  const dataState = `(${x}, ${y})`;
  return dataState;
};

const makeSmartAIMove = () => {
  // Get (x, y) coordinate of prevMove as strings in an array
  const prevMoveCoordinatesStr = prevAIMove.match(/\d+/g);
  // Turn coordinates into ints
  const prevMoveCoordinates = prevMoveCoordinatesStr.map((match) => parseInt(match, 10));
  const x = prevMoveCoordinates[0];
  const y = prevMoveCoordinates[1];
  const moveDirections = {
    left: [x - 1, y],
    right: [x + 1, y],
    up: [x, y + 1],
    down: [x, y - 1],
  };

  let moveDirection;
  // Ensure AI is in bounds of game board
  do {
    // Generate a number 0-3 inlusive
    const randomDirection = Math.floor(Math.random() * 4);
    console.log(randomDirection);
    moveDirection = Object.values(moveDirections)[randomDirection];
    console.log(moveDirection);
    // eslint-disable-next-line max-len
  } while (moveDirection[0] < 0 || moveDirection[1] < 0 || moveDirection[0] > 9 || moveDirection[1] > 9);

  const dataState = `(${moveDirection[0]}, ${moveDirection[1]})`;
  return dataState;
};

const makeAIClickSquare = () => {
  const playerBoard = document.querySelector(".player1Board");
  let dataState;
  let targetSquare;

  if (prevAIMoveResult === "hit") {
    // Keep making a move close to the hit while invalid
    do {
      dataState = makeSmartAIMove();
      targetSquare = playerBoard.querySelector(`[data-state = "${dataState}"]`);
    } while (targetSquare.classList.contains("clicked"));
  } else {
    // Keep picking a square while the selected one is invalid
    do {
      dataState = makeAIMOve();
      targetSquare = playerBoard.querySelector(`[data-state = "${dataState}"]`);
    } while (targetSquare.classList.contains("clicked"));
  }
  prevAIMove = dataState;
  targetSquare.click();
  targetSquare.classList.add("clicked");
};

const restartGame = () => {
  const gameBoardWrappers = document.querySelectorAll(".gameBoardWrapper");
  gameBoardWrappers.forEach((boardWrapper) => {
    boardWrapper.innerHTML = " ";

    // Create new fresh boards
    if (boardWrapper.classList.contains("player1Wrapper")) {
      const boardCover = createElement("div", "boardCover");
      boardWrapper.appendChild(boardCover);
      boardWrapper.appendChild(createGameBoardGUI("player1"));
      const playerNumShipsP = document.querySelector(".player1NumShipsP");
      playerNumShipsP.textContent = "Ships Remaining: 5";
    } else if (boardWrapper.classList.contains("AIWrapper")) {
      const AIboardCover = createElement("div", "boardCover AIBoardCover");
      boardWrapper.appendChild(AIboardCover);
      AIboardCover.style.display = "none";
      boardWrapper.appendChild(createGameBoardGUI("AI"));
      const AINumShipsP = document.querySelector(".AINumShipsP");
      AINumShipsP.textContent = "Ships Remaining: 5";
      // eslint-disable-next-line no-use-before-define
      placeAIShips();
    } else {
      const ships = {
        carrier: [5, Queen],
        battleship: [4, Boa],
        cruiser: [3, OroJackson],
        submarine: [3, LawSub],
        destroyer: [2, ThousandSunny],
      };
      boardWrapper.appendChild(createGameBoardGUI("placement", true, ships));
    }
  });
};

const quitGame = () => {
  pageBgAudio.pause();
  pageBgAudio.currentTime = 0;
  GameController.resetGame();
  restartGame();
  const modalBg = document.querySelector(".modalBg");
  modalBg.style.display = "block";
};

// Displays the board where player will place their ships
const displayPlacementBoardModal = () => {
  const ships = {
    carrier: [5, Queen],
    battleship: [4, Boa],
    cruiser: [3, OroJackson],
    submarine: [3, LawSub],
    destroyer: [2, ThousandSunny],
  };
  // Backgroudn to cover game boards when modal is displayed
  const modalBg = createElement("div", "modalBg");
  const modal = createElement("modal", "modal");
  modalBg.appendChild(modal);

  const welcomeHeader = createElement("h1", "welcomeHeader");
  welcomeHeader.textContent = "Welcome to One Piece Battleship!";
  const welcomeMsg = createElement("p", "welcomeMsg");
  welcomeMsg.textContent = "Oh No! Adimral Akainu has targeted your ships with his new ship-targeting system! Place your ships strategically to escape his wrath and sink those Navy Ships!";

  const placeShipMsg = createElement("p", "placeSHipMsg");
  placeShipMsg.textContent = "Place your ";

  const rotateShipBtn = createElement("button", "rotateShipBtn");
  rotateShipBtn.setAttribute("id", "horizontal");
  rotateShipBtn.textContent = "Rotate Ship";
  rotateShipBtn.addEventListener("click", () => {
    if (rotateShipBtn.getAttribute("id") === "horizontal") {
      rotateShipBtn.setAttribute("id", "vertical");
    } else {
      rotateShipBtn.setAttribute("id", "horizontal");
    }
  });
  const gameBoardWrapper = createElement("div", "gameBoardWrapper");
  const placementBoard = createGameBoardGUI("placement", true, ships);
  placementBoard.classList.add("placementBoard");
  gameBoardWrapper.appendChild(placementBoard);

  modal.appendChild(welcomeHeader);
  modal.appendChild(welcomeMsg);
  modal.appendChild(placeShipMsg);
  modal.appendChild(rotateShipBtn);
  modal.appendChild(gameBoardWrapper);

  contentDiv.appendChild(modalBg);
};

const displayGameOverModal = (loser) => {
  const gameOverModalBg = createElement("div", "modalBg");
  const gameOverModal = createElement("modal", "modal");
  gameOverModalBg.appendChild(gameOverModal);

  const winMsgP = createElement("h1", "winMsgP");
  const consequenceMsgP = createElement("p", "consequenceMsgP");
  let endImg;

  pageBgAudio.pause();
  let audioToPlay;
  if (loser === "player1") {
    loseSfx.play();
    audioToPlay = loseBg;
    audioToPlay.play();
    audioToPlay.volume = 1;
    winMsgP.textContent = "YOU LOSE!!!";
    endImg = createImage(Lose, "loseEndImg");
    consequenceMsgP.textContent = "The Navy has captured your crew and Monkey D. Luffy has been sentenced to LIFE in Impeldown!";
    sleep(2000);
    loseBg.play();
  } else {
    audioToPlay = winAudio;
    audioToPlay.play();
    winMsgP.textContent = "YOI WIN!!!";
    endImg = createImage(Win, "winEndImg");
    consequenceMsgP.textContent = "You have saved your crew and yourself from the clutches of Akainu! You live to sail another day!!";
  }

  const restartMsgP = createElement("p", "restartMsgP");
  restartMsgP.textContent = "Do you wish to restart the game?";

  const actionButtonsDiv = createElement("div", "actionButtonsDiv gameOver flex");
  const restartBtn = createElement("button", "restartBtn");
  restartBtn.textContent = "Restart Game";
  restartBtn.addEventListener("click", () => {
    audioToPlay.pause();
    pageBgAudio.currentTime = 0;
    restartGame();
    contentDiv.removeChild(gameOverModalBg);
    const modalBg = document.querySelector(".modalBg");
    modalBg.style.display = "block";
  });
  const sound = createImage(SoundIcon, "sound");
  sound.addEventListener("click", () => {
    audioToPlay.muted = !audioToPlay.muted;
  });
  actionButtonsDiv.appendChild(sound);
  actionButtonsDiv.appendChild(restartBtn);

  gameOverModal.appendChild(winMsgP);
  gameOverModal.appendChild(consequenceMsgP);
  gameOverModal.appendChild(endImg);
  gameOverModal.appendChild(restartMsgP);
  gameOverModal.appendChild(actionButtonsDiv);

  contentDiv.appendChild(gameOverModalBg);
};

const placeAIShips = () => {
  const AIShips = {
    carrier: [5, NavyCarrier],
    battleship: [4, NavyDestroyer],
    cruiser: [3, NavyDestroyer],
    submarine: [3, NavyShip],
    destroyer: [2, NavyShip],
  };

  while (Object.keys(AIShips).length > 0) {
    // AI picks a random orientation
    const randomNumber = Math.random();
    const orientation = randomNumber < 0.5 ? "horizontal" : "vertical";
    const AIBoard = document.querySelector(".AIBoard");

    let squareDataState = makeAIMOve();
    let moveSquare = AIBoard.querySelector(`[data-state = "${squareDataState}"]`);

    // Check if move is legal and ships are not overlapping
    while (!checkForIllegalMove(moveSquare, orientation, AIShips, "AI")) {
      squareDataState = makeAIMOve();
      moveSquare = AIBoard.querySelector(`[data-state = "${squareDataState}"]`);
    }

    placeShipOnBoard("AI", AIShips, moveSquare, orientation);
  }
};

const createPage = () => {
  displayPlacementBoardModal();
  const leftImgDiv = createElement("div", "leftImgDiv");
  const luffyImg = createImage(Luffy, "LuffyImg");
  leftImgDiv.appendChild(luffyImg);

  const gameContainer = createElement("div", "gameContainer flex");

  const titleContainer = createElement("div", "titleContainer flex");
  const onePieceLogoImg = createImage(OnePieceLogo, "onePieceLogoImg");
  const xCollabLogo = createImage(XCollabLogo, "xLogo");
  const battleshipLogo = createImage(BattleShipLogo, "battleshipLogo");
  titleContainer.appendChild(onePieceLogoImg);
  titleContainer.appendChild(xCollabLogo);
  titleContainer.appendChild(battleshipLogo);

  const gameBoardContainers = createElement("div", "gameBoardContainers");

  const player1GameBoardContainer = createElement("div", "gameBoardContainer");
  const playerInfoContainer = createElement("div", "playerInfoContainer flex");
  const player1Token = createElement("div", "player1Token");
  playerInfoContainer.appendChild(player1Token);
  const player1NameP = createElement("p", "player1Name");
  player1NameP.textContent = "Monkey D. Luffy";
  playerInfoContainer.appendChild(player1NameP);

  // Make it easier to make a new gameboard by clearing out current one
  const gameBoardWrapper = createElement("div", "gameBoardWrapper player1Wrapper");
  const boardCover = createElement("div", "boardCover");
  const player1GameBoard = createGameBoardGUI("player1");
  gameBoardWrapper.appendChild(boardCover);
  gameBoardWrapper.appendChild(player1GameBoard);

  // Prevent user form clicking their own squares

  const shipInfoContainer = createElement("div", "shipInfoContainer flex");
  const shipImgIcon = createImage(ThousandSunny, "shipImgIcon");
  const numShipsP = createElement("p", "player1NumShipsP");
  numShipsP.textContent = "Ships Remaining: 5";
  shipInfoContainer.appendChild(shipImgIcon);
  shipInfoContainer.appendChild(numShipsP);

  player1GameBoardContainer.appendChild(playerInfoContainer);
  player1GameBoardContainer.appendChild(gameBoardWrapper);
  player1GameBoardContainer.appendChild(shipInfoContainer);

  const AIGameBoardContainer = createElement("div", "gameBoardContainer");
  const AIInfoContainer = createElement("div", "AIInfoContainer flex");
  const AIToken = createElement("div", "AIToken");
  const AINameP = createElement("p", "AIName");
  AINameP.textContent = "Admiral Sakazuki";
  AIInfoContainer.appendChild(AIToken);
  AIInfoContainer.appendChild(AINameP);
  const AIGameBoardWrapper = createElement("div", "gameBoardWrapper AIWrapper");
  // Temp cover to block player from clicking while AI plays (need 5 sec delay for audios to play)
  const AIBoardCover = createElement("div", "boardCover AIBoardCover");
  AIBoardCover.style.display = "none";
  const AIGameBoard = createGameBoardGUI("AI");
  AIGameBoardWrapper.appendChild(AIBoardCover);
  AIGameBoardWrapper.appendChild(AIGameBoard);

  const AIshipInfoContainer = createElement("div", "shipInfoContainer flex");
  const AIshipImgIcon = createImage(NavyShip, "shipImgIcon");
  const AInumShipsP = createElement("p", "AINumShipsP");
  AInumShipsP.textContent = "Ships Remaining: 5";
  AIshipInfoContainer.appendChild(AIshipImgIcon);
  AIshipInfoContainer.appendChild(AInumShipsP);

  AIGameBoardContainer.appendChild(AIInfoContainer);
  AIGameBoardContainer.appendChild(AIGameBoardWrapper);
  AIGameBoardContainer.appendChild(AIshipInfoContainer);

  gameBoardContainers.appendChild(player1GameBoardContainer);
  gameBoardContainers.appendChild(AIGameBoardContainer);

  const actionButtonsDiv = createElement("div", "actionButtonsDiv flex");
  const quitGameBtn = createElement("button", "quitGameBtn");
  quitGameBtn.textContent = "Quit Game";

  quitGameBtn.addEventListener("click", quitGame);

  const sound = createImage(SoundIcon, "sound");

  pageBgAudio.addEventListener("timeupdate", () => {
    console.log("WE IN HERE");
    // Check if the audio is close to the end (e.g., within 1 second)
    if (pageBgAudio.currentTime >= pageBgAudio.duration - 0.01) {
      const activeSource = document.querySelector(".pageBgAudio source.active");
      const nextSource = document.querySelector(".pageBgAudio source.active + source")
            || document.querySelector(".pageBgAudio source:first-child");

      console.log(nextSource);
      // Deactivate current source and activate next source
      activeSource.className = "";
      nextSource.className = "active";

      // Update audio source and start playback
      pageBgAudio.src = nextSource.src;
      pageBgAudio.play();
    }
  });

  // Set the initial source to the first one
  const firstSource = document.querySelector(".pageBgAudio source:first-child");
  firstSource.className = "active";
  pageBgAudio.src = firstSource.src;
  pageBgAudio.muted = true;

  sound.addEventListener("click", () => {
    // Toggle mute
    pageBgAudio.muted = !pageBgAudio.muted;
  });
  actionButtonsDiv.appendChild(sound);
  actionButtonsDiv.appendChild(quitGameBtn);

  gameContainer.appendChild(titleContainer);
  gameContainer.appendChild(gameBoardContainers);
  gameContainer.appendChild(actionButtonsDiv);

  const rightImgDiv = createElement("div", "rightImgDiv");
  const akainuImg = createImage(Akainu, "akainuImg");
  rightImgDiv.appendChild(akainuImg);

  contentDiv.appendChild(leftImgDiv);
  contentDiv.appendChild(gameContainer);
  contentDiv.appendChild(rightImgDiv);
  placeAIShips();
};
export {
  createPage,
  createImage,
  createElement,
  startTurn,
  makeAIClickSquare,
  changeSquareColor,
  displayGameOverModal,
  quitGame,
};
