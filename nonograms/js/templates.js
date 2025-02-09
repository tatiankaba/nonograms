'use strict'

import { startGame, gameContainer} from "./gameField.js";
import { resetTimer } from "./timeCount.js";

export const templatesWrapper = document.createElement('div');
templatesWrapper.classList.add('template-wrapper');

export const gameNameTitleBlock = document.createElement('div');
gameNameTitleBlock.classList.add('game-name-block');
export const gameNameTitle = document.createElement('h1');
gameNameTitle.textContent = 'figure'
gameNameTitleBlock.append(gameNameTitle);

const figureBtn = document.createElement('button');
figureBtn.classList.add('btn');
figureBtn.classList.add('templateBtn');
figureBtn.textContent = 'figure'

const figure1Btn = document.createElement('button');
figure1Btn.classList.add('btn');
figure1Btn.classList.add('templateBtn');
figure1Btn.textContent = 'figure 1'

const figure2Btn = document.createElement('button');
figure2Btn.classList.add('btn');
figure2Btn.classList.add('templateBtn');
figure2Btn.textContent = 'figure 2'

const figure3Btn = document.createElement('button');
figure3Btn.classList.add('btn');
figure3Btn.classList.add('templateBtn');
figure3Btn.textContent = 'figure 3'

const figure4Btn = document.createElement('button');
figure4Btn.classList.add('btn');
figure4Btn.classList.add('templateBtn');
figure4Btn.textContent = 'figure 4'

templatesWrapper.append(figureBtn, figure1Btn, figure2Btn, figure3Btn, figure4Btn);

function removePreviousGame() {
    resetTimer();
    while (gameContainer.firstChild) {
        gameContainer.firstChild.remove(); 
    }
}

export const figure = {
    gameName: "figure",
    upperHintsMap: [[2],[[2],[1]],[5],
[4],[2]],
    sideHintsMap: [[1],[3],[5],[[1],[3]],[3]],
    fieldMap: [0,0,2,0,0,
        0,2,2,2,0,
        2,2,2,2,2,
        2,0,2,2,2,
        0,2,2,2,0,]
}


export const figure2 = {
    gameName: "figure 2",
    upperHintsMap: [[1],[2],[4],[[2],[2]],[2]],
    sideHintsMap: [[[1],[1]],[3],[1],[[1],[3]],[3]],
    fieldMap:[0,2,0,2,0,
        0,2,2,2,0,
        0,0,2,0,0,
        2,0,2,2,2,
        0,0,2,2,2]
}

export const figure3 = {
    gameName: "figure 3",
    upperHintsMap: [[4],[3],[1],[1],[[1],[3]]],
    sideHintsMap: [[1],[2] ,[[2],[1]] ,[[3],[1]] ,[[1],[2]]],
    fieldMap:[0,0,0,0,2,
        2,2,0,0,0,
        2,2,0,0,2,
        2,2,2,0,2,
        2,0,0,2,2]
}

export const figure1 = {
    gameName: "figure 1",
    upperHintsMap:  [[3],[3],[1],[2],[4]],
    sideHintsMap: [[1],[2],[[3], [1]],[[2],[1]],[[2],[1]]],
    fieldMap:[0,0,0,2,0,
        0,0,0,2,2,
        2,2,2,0,2,
        2,2,0,0,2,
        2,2,0,0,2]
}

export const figure4 = {
    gameName: "figure 4",
    upperHintsMap: [[3],[1],[4],[2],[3]],
    sideHintsMap: [[[1],[2]],[3],[[1], [1],
        [1]],[[1],[1]],[[1],[1]]],
    fieldMap:[0,2,0,2,2,
        0,0,2,2,2,
        2,0,2,0,2,
        2,0,2,0,0,
        2,0,2,0,0]
}


figureBtn.addEventListener('click', ()=> {
    removePreviousGame();
    startGame(figure);
});

figure1Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(figure1);
});

figure2Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(figure2);
});

figure3Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(figure3);
});

figure4Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(figure4);
});





