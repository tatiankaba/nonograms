import { startGame } from './gameField.js';
import { puzzle } from './gameField.js';


 
const body = document.body;
export const resetBtn = document.createElement('button');
resetBtn.classList.add('btn')
resetBtn.textContent = 'reset the game'

const clickHandler = () => {
    body.removeChild(puzzle);
    startGame()
}

resetBtn.addEventListener('click', clickHandler)


