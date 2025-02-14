"use strict";

import { startGame, gameContainer } from "./gameField.js";
import { resetTimer } from "./timeCount.js";
import { templateObj } from "./templateObj.js";

export const templatesWrapper = document.createElement("div");
templatesWrapper.classList.add("template-wrapper");

export const easyLevelTemplates = document.createElement("div");
easyLevelTemplates.classList.add("simple");

export const mediumLevelTemplates = document.createElement("div");
mediumLevelTemplates.classList.add("medium");

export const hardLevelTemplates = document.createElement("div");
hardLevelTemplates.classList.add("hard");

templatesWrapper.append(easyLevelTemplates);

export function removePreviousGame() {
  resetTimer();
  while (gameContainer.firstChild) {
    gameContainer.firstChild.remove();
  }
}

export const gameNameTitleBlock = document.createElement("div");
gameNameTitleBlock.classList.add("game-name-block");
export const gameNameTitle = document.createElement("h1");
gameNameTitle.textContent = "figure";
gameNameTitleBlock.append(gameNameTitle);

Object.keys(templateObj).forEach((key) => {
  if (templateObj[key].level === "easy") {
    let btnName = `${key}+Btn`;
    btnName = document.createElement("button");
    btnName.classList.add("btn");
    btnName.classList.add("templateBtn");
    btnName.textContent = templateObj[key].gameName;
    easyLevelTemplates.append(btnName);
    btnName.addEventListener("click", () => {
      removePreviousGame();
      startGame(templateObj[key]);
    });
  }
  if (templateObj[key].level === "medium") {
    let btnName = `${key}+Btn`;
    btnName = document.createElement("button");
    btnName.classList.add("btn");
    btnName.classList.add("templateBtn");
    btnName.textContent = templateObj[key].gameName;
    mediumLevelTemplates.append(btnName);
    btnName.addEventListener("click", () => {
      removePreviousGame();
      startGame(templateObj[key]);
    });
  }
  if (templateObj[key].level === "hard") {
    let btnName = `${key}+Btn`;
    btnName = document.createElement("button");
    btnName.classList.add("btn");
    btnName.classList.add("templateBtn");
    btnName.textContent = templateObj[key].gameName;
    hardLevelTemplates.append(btnName);
    btnName.addEventListener("click", () => {
      removePreviousGame();
      startGame(templateObj[key]);
    });
  }
});
