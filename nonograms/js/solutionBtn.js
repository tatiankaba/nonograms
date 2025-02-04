'use strict'
import { resetTimer } from './timeCount.js';

export const solutionBtn = document.createElement('button');
solutionBtn.classList.add('btn');
solutionBtn.textContent = 'solution'

const clickHandler = () => {
    resetTimer();
    const values = Array.from(document.getElementsByClassName('grid-cell'));
    values.forEach((cell)=> {
        cell.getAttribute('data-index') == '2' ? cell.classList.add('filled') : cell.classList.add('empty')
    })
}

solutionBtn.addEventListener('click', clickHandler)