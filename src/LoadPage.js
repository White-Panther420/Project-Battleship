/* eslint-disable no-param-reassign */
/* eslint-disable import/no-import-module-exports */
import Luffy from "./Assets/Images/Luffy.png";
import Akainu from "./Assets/Images/Akainu.png";
import OnePieceLogo from "./Assets/Images/One-Piece-Logo.png";
import XCollabLogo from "./Assets/Images/XLogo.png";
import BattleShipLogo from "./Assets/Images/BattleshipLogo.webp";
import BGMusic1 from "./Assets/Music/Background Music/Overtaken.mp3";
import BGMusic2 from "./Assets/Music/Background Music/VeryStrongest.mp3";
import SoundIcon from "./Assets/Images/sound.png";

import ThousandSunny from "./Assets/Images/Thousand_Sunny.png";
import LawSub from "./Assets/Images/Submarine.png";
import Queen from "./Assets/Images/Queen.png";
import OroJackson from "./Assets/Images/Oro.png";
import Boa from "./Assets/Images/Boa.png";

import { GameBoard, GameController } from "./index.js";

const contentDiv = document.getElementById("content");
contentDiv.style.backgroundRepeat = "no-repeat";
contentDiv.style.backgroundSize = "cover";
contentDiv.style.backgroundPosition = "center";

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

const eraseSquares = () => {
  const allPaintedSqaures = document.querySelectorAll(".painted");
  allPaintedSqaures.forEach((paintedSquare) => {
    // eslint-disable-next-line no-param-reassign
    paintedSquare.classList.remove("painted");
  });
};

const placeShipImg = (square, shipImage, shipLength, orientation) => {
  const squareWidth = square.offsetWidth;

  if (orientation === "vertical") {
    // Create a container for the image
    const imgContainer = createElement("div", "imgContainer");
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
  } else {
    // Create a container for the image
    const imgContainer = createElement("div", "imgContainer");
    imgContainer.style.width = `${squareWidth * shipLength}px`;
    imgContainer.style.height = `${squareWidth - 8}px`;

    shipImage.style.height = `${squareWidth - 8}px`;
    shipImage.style.width = `${(squareWidth) * shipLength}px`;
    imgContainer.style.background = "rgb(83, 129, 237)";
    imgContainer.appendChild(shipImage);
    square.appendChild(imgContainer);
  }
};
// Marks placed ships on modal and places ship on actual board
const placeShipOnBoard = (playerName, ships, square) => {
  const firstKeyName = Object.keys(ships)[0];
  const firstShipLength = Object.values(ships)[0][0];
  const firstShipImage = Object.values(ships)[0][1];
  const pointAAttribute = square.getAttribute("data-state");
  const PointAStr = pointAAttribute.match(/\d+/g);
  const pointA = PointAStr.map((match) => parseInt(match, 10));

  // Select board based on who is placing ships
  const boardName = `${playerName}Board`;

  // Avoid placing image on modal gameboard
  const player1Board = document.querySelector(".player1Board");
  const player1BoardSquare = player1Board.querySelector(`[data-state = "${pointAAttribute}"]`);

  let orientation;
  if (playerName === "AI") {
    // AI picks a random orientation
    const randomNumber = Math.random();
    orientation = randomNumber < 0.5 ? "horizontal" : "vertical";
  } else {
    orientation = document.querySelector(".rotateShipBtn").getAttribute("id");
  }

  const image = createImage(firstShipImage, "shipImg");
  placeShipImg(player1BoardSquare, image, firstShipLength, orientation);
  GameBoard.placeShip(pointA, orientation, firstKeyName, boardName);

  const paintedSquares = document.querySelectorAll(".painted");
  paintedSquares.forEach((paintedSquare) => {
    paintedSquare.classList.add("shipPlaced");
  });

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
      const modal = document.querySelector(".modal");
      modal.style.display = "none";
    }
  }
};
const createGameBoardGUI = (playerName, placementBoard = false, ships = "") => {
  const gameBoard = createElement("div", "gameBoard");
  // Will determine if a square can be clicked instead of repeating logic from mouseover
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
          // Get (x, y) coordinate of square as strings in an array
          const squareCoordinateStr = square.getAttribute("data-state").match(/\d+/g);
          // Turn those strings into ints
          const squareCoordinate = squareCoordinateStr.map((match) => parseInt(match, 10));
          const orientation = document.querySelector(".rotateShipBtn").getAttribute("id");
          // Paint squares equivalent to ship length
          for (let k = 0; k < Object.values(ships)[0][0]; k += 1) {
            legalMove = false;
            if (orientation === "horizontal") {
              const dataState = `(${squareCoordinate[0] + k}, ${squareCoordinate[1]})`;
              const placementSquare = document.querySelector(`[data-state="${dataState}"]`);
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
              const placementSquare = document.querySelector(`[data-state="${dataState}"]`);
              if (placementSquare === null || placementSquare.classList.contains("shipPlaced")) {
                eraseSquares();
                break;
              } else {
                placementSquare.classList.add("painted");
                legalMove = true;
              }
            }
          }
        });
        square.addEventListener("mouseleave", () => {
          // Clear squares of bg color
          eraseSquares();
        });
        // eslint-disable-next-line no-loop-func
        square.addEventListener("click", () => {
          if (legalMove) {
            placeShipOnBoard("player1", ships, square);
          } else { // Invalid move

          }
        });
      } else { // Regular gameboard
        // eslint-disable-next-line no-lonely-if
        if (playerName === "AI") {
          square.addEventListener("mouseenter", () => {
            square.style.background = "green";
          });
          square.addEventListener("mouseleave", () => {
            square.style.background = "none";
          });
        }
        square.addEventListener("click", () => {
          // Player clicked AI square
          if (square.classList.contains("AI")) {
            GameController.playTurn(square, "player1");
          } else {
            GameController.playTurn(square, "AI");
          }
        });
      }
      rowDiv.appendChild(square);
    }
  }
  return gameBoard;
};

// Displays the board where player will place their ships
const displayPlacementBoardModal = () => {
  const ships = {
    carrier: [5, Queen],
    battleship: [4, OroJackson],
    cruiser: [4, Boa],
    submarine: [3, LawSub],
    destroyer: [2, ThousandSunny],
  };

  const modal = createElement("modal", "modal");
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
  const placementBoard = createGameBoardGUI("placement", true, ships);

  modal.appendChild(welcomeHeader);
  modal.appendChild(welcomeMsg);
  modal.appendChild(placeShipMsg);
  modal.appendChild(rotateShipBtn);
  modal.appendChild(placementBoard);

  contentDiv.appendChild(modal);
};

const placeAIShips = () => {
  const AIBoard = document.querySelector(".AIBoard");
  const AIShips = {
    carrier: [5, Queen],
    battleship: [4, OroJackson],
    cruiser: [4, Boa],
    submarine: [3, LawSub],
    destroyer: [2, ThousandSunny],
  };
  const x = Math.floor(Math.random() * 10); // Random number between 0 and 9
  const y = Math.floor(Math.random() * 10);
  const dataState = `(${x}, ${y})`;
  const moveSquare = AIBoard.querySelector(`[data-state = "${dataState}"]`);

  while (Object.keys(AIShips).length > 0) {
    placeShipOnBoard("AI", AIShips, square);
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

  // Background music
  const overtakenAudio = createElement("audio", "audio");
  overtakenAudio.src = BGMusic1;
  const veryStrongestAudio = createElement("audio", "audio");
  veryStrongestAudio.src = BGMusic2;
  gameContainer.appendChild(overtakenAudio);
  gameContainer.appendChild(veryStrongestAudio);

  const gameBoardContainers = createElement("div", "gameBoardContainers");

  const player1GameBoardContainer = createElement("div", "gameBoardContainer");
  const playerInfoContainer = createElement("div", "playerInfoContainer flex");
  const player1Token = createElement("div", "player1Token");
  playerInfoContainer.appendChild(player1Token);
  const player1NameP = createElement("p", "player1Name");
  player1NameP.textContent = "Monkey D. Luffy";
  playerInfoContainer.appendChild(player1NameP);
  const player1GameBoard = createGameBoardGUI("player1");
  player1GameBoard.classList.add("player1Board");
  player1GameBoardContainer.appendChild(playerInfoContainer);
  player1GameBoardContainer.appendChild(player1GameBoard);

  const AIGameBoardContainer = createElement("div", "gameBoardContainer");
  const AIInfoContainer = createElement("div", "AIInfoContainer flex");
  const AIToken = createElement("div", "AIToken");
  const AINameP = createElement("p", "AIName");
  AINameP.textContent = "Admiral Sakazuki";
  AIInfoContainer.appendChild(AIToken);
  AIInfoContainer.appendChild(AINameP);
  AIGameBoardContainer.appendChild(AIInfoContainer);
  const AIGameBoard = createGameBoardGUI("AI");
  AIGameBoard.classList.add("AIBoard");
  AIGameBoardContainer.appendChild(AIGameBoard);
  gameBoardContainers.appendChild(player1GameBoardContainer);
  gameBoardContainers.appendChild(AIGameBoardContainer);

  const actionButtonsDiv = createElement("div", "actionButtonsDiv flex");
  const quitGameBtn = createElement("button", "quitGameBtn");
  quitGameBtn.textContent = "Quit Game";
  const sound = createImage(SoundIcon, "sound");
  sound.addEventListener("click", () => {
    veryStrongestAudio.play();
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
};
export {
  createPage,
  createImage,
  createElement,
};
