import { startGame, gameContainer , timer} from './gameField.js';
import { resetTimer, timerWrapper, updateTimer } from './timeCount.js';



 
const body = document.body;
export const resetBtn = document.createElement('button');
resetBtn.classList.add('btn')
resetBtn.textContent = 'reset the game'

const clickHandler = () => {
    while (gameContainer.firstChild) {
        gameContainer.firstChild.remove(); 
    }
    clearInterval(timer);
    resetTimer();
    startGame()
}

resetBtn.addEventListener('click', clickHandler)


