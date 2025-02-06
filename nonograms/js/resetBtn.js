import { startGame, gameContainer } from './gameField.js';
import { resetTimer } from './timeCount.js';
import { figure, figure1, figure2,figure3,figure4, gameNameTitle } from './templates.js';


 
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
    const gameTemplates = {figure, figure1, figure2, figure3, figure4};
    for (let gameKey in gameTemplates) {
        const game = gameTemplates[gameKey];
        if (game.gameName === gameName) {
               startGame(game)
        }
    }
}

resetBtn.addEventListener('click', clickHandler)


