/* eslint-disable import/no-import-module-exports */
import Luffy from "./Assets/Images/Luffy.png";
import Akainu from "./Assets/Images/Akainu.png";
import OnePieceLogo from "./Assets/Images/One-Piece-Logo.png";
import XCollabLogo from "./Assets/Images/XLogo.png";
import BattleShipLogo from "./Assets/Images/BattleshipLogo.webp";
import OceanBackground from "./Assets/Images/Ocean.png";

const contentDiv = document.getElementById("content");
contentDiv.style.backgroundImage = `url${OceanBackground}`;
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

const createGameBoardGUI = (playerName) => {
  const gameBoard = createElement("div", `gameBoard ${playerName}`);
  for (let i = 0; i < 10; i += 1) { // Y coordinate
    // Make it easier to give squares (x, y) coordinates
    const rowDiv = createElement("div", "rowDiv");
    rowDiv.setAttribute("data", i);
    gameBoard.appendChild(rowDiv);
    for (let j = 0; j < 10; j += 1) { // X coordinate
      const square = createElement("div", "square player1");
      square.setAttribute("data", `(${j}, ${i}`);
      rowDiv.appendChild(square);
    }
  }
  return gameBoard;
};

const createPage = () => {
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
  const player1NameP = createElement("p", "player1Name");
  player1NameP.textContent = "Player 1";
  const player1GameBoard = createGameBoardGUI(player1NameP.textContent);
  player1GameBoardContainer.appendChild(player1NameP);
  player1GameBoardContainer.appendChild(player1GameBoard);

  const AIGameBoardContainer = createElement("div", "gameBoardContainer");
  const AINameP = createElement("p", "AIName");
  AINameP.textContent = "AI";
  const AIGameBoard = createGameBoardGUI(AINameP.textContent);
  AIGameBoardContainer.appendChild(AINameP);
  AIGameBoardContainer.appendChild(AIGameBoard);

  gameBoardContainers.appendChild(player1GameBoardContainer);
  gameBoardContainers.appendChild(AIGameBoardContainer);

  const actionButtonsDiv = createElement("div", "actionButtonsDiv flex");
  const restartBtn = createElement("button", "restartBtn");
  const quitGameBtn = createElement("button", "quitGameBtn");
  actionButtonsDiv.appendChild(restartBtn);
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
