'use strict'
import { seconds, minutes } from './timeCount.js';
import { showSavedGamePopUp } from './modal.js';


function readCurrentStateGame() {
    const currentGame = {
        gameObj: JSON.parse(localStorage.getItem('currentGame'))
    }
    const arr =  Array.from(document.getElementsByClassName('grid-cell'));
    let classes = [];
    let dataIndexArray = [];
    arr.forEach((cell)=> {
        classes.push(cell.getAttribute('class'));
        dataIndexArray.push(cell.getAttribute('data-index'))
    });
    let gameState = {
        "classes": `${classes}`,
        "dataIndex": `${dataIndexArray.join('')}`
    };
    let time = {seconds, minutes}
    return JSON.stringify({gameState, ...currentGame, ...time});
}

function clearLocalStorage() {
    localStorage.getItem('savedGame') ? localStorage.removeItem('savedGame'): '';
}

function saveGameDataToLocalStorage() {
    showSavedGamePopUp();
      localStorage.setItem('savedGame',readCurrentStateGame() )
}

export const saveBtn = document.createElement('button');
saveBtn.classList.add('btn');

saveBtn.textContent = 'Save Game';

saveBtn.addEventListener('click', saveGameDataToLocalStorage)

