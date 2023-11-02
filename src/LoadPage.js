/* eslint-disable import/no-import-module-exports */
import Luffy from "./Assets/Images/Luffy.png";
import Akainu from "./Assets/Images/Akainu.png";
import OnePieceLogo from "./Assets/Images/One-Piece-Logo.png";
import XCollabLogo from "./Assets/Images/XLogo.png";
import BattleShipLogo from "./Assets/Images/BattleshipLogo.webp";
import BGMusic1 from "./Assets/Music/Background Music/Overtaken.mp3";
import BGMusic2 from "./Assets/Music/Background Music/VeryStrongest.mp3";
import SoundIcon from "./Assets/Images/sound.png";

import GameBoard from ".";

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

const createGameBoardGUI = (placementBoard = false, ships = "") => {
  const gameBoard = createElement("div", "gameBoard");

  for (let i = 0; i < 10; i += 1) {
    // Make it easier to give squares (x, y) coordinates
    const rowDiv = createElement("div", "rowDiv");
    rowDiv.setAttribute("data-state", i);
    gameBoard.appendChild(rowDiv);
    for (let j = 0; j < 10; j += 1) { // X coordinate
      const square = createElement("div", "square player1");
      square.setAttribute("data-state", `(${j}, ${i})`);
      // Add a different eventListener for a board that only places ships
      if (placementBoard) {
        square.addEventListener("mouseenter", () => {
          // Get (x, y) coordinate of square as strings in an array
          const squareCoordinateStr = square.getAttribute("data-state").match(/\d+/g);
          // Turn those strings into ints
          const squareCoordinate = squareCoordinateStr.map((match) => parseInt(match, 10));
          const orientation = document.querySelector(".rotateShipBtn").getAttribute("id");

          // Paint squares equivalent to ship length
          for (let k = 0; k < Object.values(ships)[0]; k += 1) {
            if (orientation === "horizontal") {
              const dataState = `(${squareCoordinate[0] + k}, ${squareCoordinate[1]})`;
              const placementSquare = document.querySelector(`[data-state="${dataState}"]`);
              if (placementSquare === null || placementSquare.classList.contains("shipPlaced")) {
                // Visual message letting the user know they're attempting to place a ship
                // on an invalid spot on the board
                eraseSquares();
              } else {
                placementSquare.classList.add("painted");
              }
            } else {
              const dataState = `(${squareCoordinate[0]}, ${squareCoordinate[1] + k})`;
              const placementSquare = document.querySelector(`[data-state="${dataState}"]`);
              if (placementSquare === null || placementSquare.classList.contains("shipPlaced")) {
                eraseSquares();
              } else {
                placementSquare.classList.add("painted");
              }
            }
          }
        });
        square.addEventListener("mouseleave", () => {
          // Clear squares of bg color
          eraseSquares();
        });
        square.addEventListener("click", () => {
          const firstKeyName = Object.keys(ships)[0];
          const pointAStr = square.getAttribute("data-state").match(/\d+/g);
          // Turn those strings into ints
          const pointA = pointAStr.map((match) => parseInt(match, 10));
          const orientation = document.querySelector(".rotateShipBtn").getAttribute("id");

          GameBoard.placeShip(pointA, orientation, firstKeyName);
          const paintedSquares = document.querySelectorAll(".painted");
          paintedSquares.forEach((paintedSquare) => {
            paintedSquare.classList.add("shipPlaced");
          });

          // eslint-disable-next-line no-param-reassign
          const keys = Object.keys(ships);
          const firstKey = keys[0];
          delete ships[firstKey];

          console.log(ships);
          // All ships are placed
          if (Object.keys(ships).length === 0) {
            const modal = document.querySelector(".modal");
            modal.style.display = "none";
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
    carrier: 5,
    battleship: 4,
    cruiser: 4,
    submarine: 3,
    destroyer: 2,
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
  const placementBoard = createGameBoardGUI(true, ships);

  modal.appendChild(welcomeHeader);
  modal.appendChild(welcomeMsg);
  modal.appendChild(placeShipMsg);
  modal.appendChild(rotateShipBtn);
  modal.appendChild(placementBoard);

  contentDiv.appendChild(modal);
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
  const player1GameBoard = createGameBoardGUI(player1NameP.textContent);
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
  const AIGameBoard = createGameBoardGUI(AINameP.textContent);
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
export default createPage;
