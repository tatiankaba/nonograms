import { startGame, gameContainer } from './gameField.js';
import { resetTimer } from './timeCount.js';
import { gameNameTitle } from './templates.js';
import { templateObj } from './templateObj.js';


 
const body = document.body;
export const resetBtn = document.createElement('button');
resetBtn.classList.add('btn')
resetBtn.textContent = 'reset the game'

const clickHandler = () => {
    while (gameContainer.firstChild) {
        gameContainer.firstChild.remove(); 
    }
    resetTimer();
    const gameName = gameNameTitle.textContent;
    const gameTemplates = {...templateObj.simple};
    for (let gameKey in gameTemplates) {
        const game = gameTemplates[gameKey];
        if (game.gameName === gameName) {
               startGame(templateObj.simple[gameName])
        }
    }
}

resetBtn.addEventListener('click', clickHandler)


