'use strict'

import { startGame, gameContainer} from "./gameField.js";
import { resetTimer } from "./timeCount.js";
import { templateObj } from "./templateObj.js";

export const templatesWrapper = document.createElement('div');
templatesWrapper.classList.add('template-wrapper');

export const easyLevelTemplates = document.createElement('div');
easyLevelTemplates.classList.add('simple');

templatesWrapper.append(easyLevelTemplates);


export const gameNameTitleBlock = document.createElement('div');
gameNameTitleBlock.classList.add('game-name-block');
export const gameNameTitle = document.createElement('h1');
gameNameTitle.textContent = 'figure'
gameNameTitleBlock.append(gameNameTitle);

//easy level

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

easyLevelTemplates.append(figureBtn, figure1Btn, figure2Btn, figure3Btn, figure4Btn);

function removePreviousGame() {
    resetTimer();
    while (gameContainer.firstChild) {
        gameContainer.firstChild.remove(); 
    }
}

figureBtn.addEventListener('click', ()=> {
    removePreviousGame();
    startGame(templateObj.figure);
});

figure1Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.figure1);
});

figure2Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.figure2);
});

figure3Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.figure3);
});

figure4Btn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.figure4);
});


// medium level 

export const mediumLevelTemplates = document.createElement('div');
mediumLevelTemplates.classList.add('medium');

const postcardBtn = document.createElement('button');
postcardBtn.classList.add('btn');
postcardBtn.classList.add('templateBtn');
postcardBtn.textContent = 'postcard'

const footballBtn = document.createElement('button');
footballBtn.classList.add('btn');
footballBtn.classList.add('templateBtn');
footballBtn.textContent = 'football';

const homeBtn = document.createElement('button');
homeBtn.classList.add('btn');
homeBtn.classList.add('templateBtn');
homeBtn.textContent = 'home';

const clownBtn = document.createElement('button');
clownBtn.classList.add('btn');
clownBtn.classList.add('templateBtn');
clownBtn.textContent = 'clown'

const aerostatBtn = document.createElement('button');
aerostatBtn.classList.add('btn');
aerostatBtn.classList.add('templateBtn');
aerostatBtn.textContent = 'aerostat'

mediumLevelTemplates.append(postcardBtn, footballBtn, homeBtn, clownBtn, aerostatBtn);


postcardBtn.addEventListener('click', ()=> {
    removePreviousGame();
    startGame(templateObj.postcard);
});

footballBtn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.football);
});

homeBtn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.home);
});

clownBtn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.clown);
});

aerostatBtn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.aerostat);
});


// hard level

export const hardLevelTemplates = document.createElement('div');
hardLevelTemplates.classList.add('medium');

const cloverBtn = document.createElement('button');
cloverBtn.classList.add('btn');
cloverBtn.classList.add('templateBtn');
cloverBtn.textContent = 'clover'

const shadesBtn = document.createElement('button');
shadesBtn.classList.add('btn');
shadesBtn.classList.add('templateBtn');
shadesBtn.textContent = 'shades';

const castleBtn = document.createElement('button');
castleBtn.classList.add('btn');
castleBtn.classList.add('templateBtn');
castleBtn.textContent = 'castle';

castleBtn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.castle);
});

shadesBtn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.shades);
});

cloverBtn.addEventListener('click', ()=> {
    removePreviousGame() 
    startGame(templateObj.clover);
});

hardLevelTemplates.append(cloverBtn,shadesBtn,castleBtn);


