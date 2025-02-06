'use strict'

import { startGame, gameContainer, upperHintsMap, sideHintsMap, fieldMap } from "./gameField.js";
import { resetTimer } from "./timeCount.js";

export const templatesWrapper = document.createElement('div');
templatesWrapper.classList.add('template-wrapper');

const figureBtn = document.createElement('button');
figureBtn.classList.add('btn');
figureBtn.textContent = 'figure'

const figure1Btn = document.createElement('button');
figure1Btn.classList.add('btn');
figure1Btn.textContent = 'figure 1'

const figure2Btn = document.createElement('button');
figure2Btn.classList.add('btn');
figure2Btn.textContent = 'figure 2'

const figure3Btn = document.createElement('button');
figure3Btn.classList.add('btn');
figure3Btn.textContent = 'figure 3'

const figure4Btn = document.createElement('button');
figure4Btn.classList.add('btn');
figure4Btn.textContent = 'figure 4'

templatesWrapper.append(figureBtn, figure1Btn, figure2Btn, figure3Btn, figure4Btn);

function removePreviousGame() {
    resetTimer();
    while (gameContainer.firstChild) {
        gameContainer.firstChild.remove(); 
    }
}

export const figure = {
    upperHintsMap: [null,2,null,null,null,
        2,1,5,4,2],
    sideHintsMap: [null,1,null,3,null,
        5,1,3,null,3],
    fieldMap: [0,0,2,0,0,
        0,2,2,2,0,
        2,2,2,2,2,
        2,0,2,2,2,
        0,2,2,2,0,]
}

export const figure2 = {
    upperHintsMap: [null,null,null,2,null,
        1,2,4,2,2],
    sideHintsMap: [1,1,null,3,null,
        1,1,3,null,3],
    fieldMap:[0,2,0,2,0,
        0,2,2,2,0,
        0,0,2,0,0,
        2,0,2,2,2,
        0,0,2,2,2]
}

export const figure3 = {
    upperHintsMap: [null,null,null,null,1,
                     4,3,1,1,3],
    sideHintsMap: [null,1,null,2,2,
        1,3,1,1,2],
    fieldMap:[0,0,0,0,2,
        2,2,0,0,0,
        2,2,0,0,2,
        2,2,2,0,2,
        2,0,0,2,2]
}

export const figure1 = {
    upperHintsMap: [null,null,null,null,null,
                     3,3,1,2,4],
    sideHintsMap: [null,1,null,2,3,
        1,2,1,2,1],
    fieldMap:[0,0,0,2,0,
        0,0,0,2,2,
        2,2,2,0,2,
        2,2,0,0,2,
        2,2,0,0,2]
}

export const figure4 = {
    upperHintsMap: [null,null,null,null,null,
                     3,1,4,2,3],
    sideHintsMap: [1,2,null,3,'1 1',
        1,1,1,1,1],
    fieldMap:[0,2,0,2,2,
        0,0,2,2,2,
        2,0,2,0,2,
        2,0,2,0,0,
        2,0,2,0,0]
}


figureBtn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(figure.fieldMap, figure.sideHintsMap, figure.upperHintsMap);
});

figure1Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(figure1.fieldMap, figure1.sideHintsMap, figure1.upperHintsMap);
});

figure2Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(figure2.fieldMap, figure2.sideHintsMap,figure2.upperHintsMap);
});

figure3Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(figure3.fieldMap, figure3.sideHintsMap,figure3.upperHintsMap);
});

figure4Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(figure4.fieldMap, figure4.sideHintsMap,figure4.upperHintsMap);
});





