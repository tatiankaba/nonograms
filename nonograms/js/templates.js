'use strict'

import { startGame, gameContainer } from "./gameField.js";
import { resetTimer } from "./timeCount.js";

export const templatesWrapper = document.createElement('div');
templatesWrapper.classList.add('template-wrapper');

const heartBtn = document.createElement('button');
heartBtn.classList.add('btn');
heartBtn.textContent = 'heart'

const crossBtn = document.createElement('button');
crossBtn.classList.add('btn');
crossBtn.textContent = 'cross'

const figure2Btn = document.createElement('button');
figure2Btn.classList.add('btn');
figure2Btn.textContent = 'figure 2'

const figure3Btn = document.createElement('button');
figure3Btn.classList.add('btn');
figure3Btn.textContent = 'figure 3'

const figureBtn = document.createElement('button');
figureBtn.classList.add('btn');
figureBtn.textContent = 'figure'

templatesWrapper.append(heartBtn, crossBtn, figureBtn, figure2Btn, figure3Btn);

figureBtn.addEventListener('click', ()=> {

    while (gameContainer.firstChild) {
        gameContainer.firstChild.remove(); 
    }
     const upperHintsMap = [null,2,null,null,null,
        2,1,5,4,2];
    
     const sideHintsMap = [null,1,null,3,null,
        5,1,3,null,3];
    
    
    
     const fieldMap = [0,0,2,0,0,
        0,2,2,2,0,
        2,2,2,2,2,
        2,0,2,2,2,
        0,2,2,2,0,];

        resetTimer();
        startGame(fieldMap, sideHintsMap,upperHintsMap);
})



