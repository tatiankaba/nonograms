'use strict'
import { resetTimer } from './timeCount.js';

export const solutionBtn = document.createElement('button');
solutionBtn.classList.add('btn');
solutionBtn.textContent = 'solution'

const clickHandler = () => {
    resetTimer();
    const values = Array.from(document.getElementsByClassName('grid-cell'));
    values.forEach((cell)=> {
        const index = cell.getAttribute('data-index');
        if(index == 2) {
            cell.classList.add('filled');
            cell.classList.remove('crossed');
        } else if (index == 3){
            cell.classList.add('empty');
            cell.classList.remove('filled');
        }

    })
}

solutionBtn.addEventListener('click', clickHandler)