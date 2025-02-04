import { startGame, gameContainer } from './gameField.js';
import { resetTimer } from './timeCount.js';


 
const body = document.body;
export const resetBtn = document.createElement('button');
resetBtn.classList.add('btn')
resetBtn.textContent = 'reset the game'

const clickHandler = () => {
    while (gameContainer.firstChild) {
        gameContainer.firstChild.remove(); 
    }
    resetTimer();
    startGame()
}

resetBtn.addEventListener('click', clickHandler)


