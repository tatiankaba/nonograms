import { startGame, gameContainer } from './gameField.js';
import { resetTimer } from './timeCount.js';
import { gameNameTitle } from './templates.js';
import { templateObj } from './templateObj.js';
import { playResetBtnAudio } from './sound.js';



export const resetBtn = document.createElement('button');
resetBtn.classList.add('btn')
resetBtn.textContent = 'reset the game'

const clickHandler = () => {
    playResetBtnAudio();
    while (gameContainer.firstChild) {
        gameContainer.firstChild.remove(); 
    }
    resetTimer();
    let gameName = gameNameTitle.textContent;
    const gameTemplates = {...templateObj};
    for (let gameKey in gameTemplates) {
        const game = gameTemplates[gameKey];
        if (game.gameName === gameName) {
            gameName = gameName.split(' ').join('')
            startGame(templateObj[gameName]);
        }
    }
}

resetBtn.addEventListener('click', clickHandler)


