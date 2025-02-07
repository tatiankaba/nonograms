'use strict'
import { startGame ,gameContainer} from "./gameField.js";
import { updateTimeFromLocalStorage } from "./timeCount.js";

export const continueBtn = document.createElement('button');
continueBtn.classList.add('btn');
continueBtn.textContent = 'continue the game'

function retrieveLocalStorageData() {
    const {gameObj, gameState: {classes, dataIndex}, minutes, seconds} = JSON.parse(localStorage.getItem('savedGame'));
    return [gameObj, classes, dataIndex, minutes, seconds]
};

function launchSavedGame() {

        while (gameContainer.firstChild) {
            gameContainer.firstChild.remove(); 
        }
    const [gameObj, classes, dataIndex, min, sec] = retrieveLocalStorageData();
    updateTimeFromLocalStorage();
    startGame(gameObj);
    const gameFieldCells = Array.from(document.querySelectorAll('.grid-cell'));
    const classArray = classes.split(',');
    const dataIndexArray = dataIndex.split('');
    for (let i = 0; i < gameFieldCells.length; i++) {
        gameFieldCells[i].className = '';
        if(classArray[i]){
            gameFieldCells[i].classList.add(...classArray[i].split(' ').map(className =>  className.trim()));
        }
        gameFieldCells[i].setAttribute('data-index',dataIndexArray[i]);
        console.log(...classArray)
    }
}

continueBtn.addEventListener('click', launchSavedGame)
