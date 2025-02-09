'use strict';
import './modal.js'
import { openModal } from './modal.js';
import { timerWrapper, updateTimer, minutes, seconds } from './timeCount.js';
import { playSound, playWinSound } from './sound.js';
import { gameNameTitle } from './templates.js';




const body = document.body;
export const gameContainer = document.createElement('div');
gameContainer.classList.add('gameContainer');

let timer;
export function startTimer() {
    timer = setInterval(updateTimer, 1000);
    const gameField = document.querySelector('.game-field');
    gameField.removeEventListener('click', startTimer);
}
export function stopTimer() {
    clearInterval(timer);
}


export function startGame(obj) {


localStorage.removeItem('currentGame');

 const puzzle = document.createElement('div');
 gameContainer.append(puzzle)
puzzle.classList.add('puzzle');

const upperHints = document.createElement('div');
upperHints.classList.add('hints');
upperHints.classList.add('upper-hints');

const sideHints = document.createElement('div');
sideHints.classList.add('hints');
sideHints.classList.add('side-hints');
 const gameField = document.createElement('div');
gameField.classList.add('game-field');

puzzle.append(upperHints, sideHints, gameField);

gameNameTitle.textContent = obj.gameName;
    
obj.fieldMap.forEach((index)=> {
const gameCell = document.createElement('div');
gameCell.classList.add('grid-cell');
gameCell.classList.add('empty');

gameField.append(gameCell);
gameCell.setAttribute('data-index', index)
})     

function addHintsToPuzzle(gameCell, digit) {
    if(digit.length > 0) {
        digit.forEach((num)=> {
            const additionalRow = document.createElement('div');
            additionalRow.textContent = num;
            gameCell.append(additionalRow);
        })
    } else {
        gameCell.textContent = digit;
    }
}

obj.upperHintsMap.forEach((digit)=> {
const gameCell = document.createElement('div');
upperHints.append(gameCell);
gameCell.classList.add('hint');
addHintsToPuzzle(gameCell, digit)
})

obj.sideHintsMap.forEach((digit)=> {
const gameCell = document.createElement('div');
sideHints.append(gameCell);
gameCell.classList.add('hint');
addHintsToPuzzle(gameCell, digit)
})

function isWon() {
const puzzleArray = Array.from(document.getElementsByClassName('grid-cell'));
const indexArray = [];
puzzleArray.forEach((cell)=> {
indexArray.push(cell.getAttribute('data-index'))
})
if(indexArray.includes('2') || indexArray.includes('3') ) {
return false
} else {
const timeFinished = timerWrapper.textContent;
stopTimer() ;
openModal(timeFinished);
playWinSound();
return true
}
}

const leftClickHandler = (event) => {
playSound()
switch (event.target.getAttribute('data-index')) {
case '2':
event.target.setAttribute('data-index', '5');
isWon()
break;
case '0':
event.target.setAttribute('data-index', '3');
break;
case '3':
event.target.setAttribute('data-index', '0');
break;
case '5':
event.target.setAttribute('data-index', '2');
break;
}

if (event.target.classList.contains('empty')) {
event.target.classList.add('filled');
event.target.classList.remove('empty');
} else if (event.target.classList.contains('filled')) {
event.target.classList.remove('filled');
event.target.classList.add('empty');
} else if (event.target.classList.contains('crossed')) {
event.target.classList.remove('crossed');
event.target.classList.add('empty');
}

}

gameField.addEventListener('click', leftClickHandler);

gameField.addEventListener('click', startTimer);
if(minutes > 0 || seconds > 0) {
    startTimer()
}





const rightClickHandler = (event) => {
event.preventDefault();
if (event.target.classList.contains('empty')) {
event.target.classList.add('crossed');
event.target.classList.remove('empty');
} else if (event.target.classList.contains('filled')) {
event.target.classList.remove('filled');
event.target.classList.add('empty');
}  else if (event.target.classList.contains('crossed'))  {
event.target.classList.remove('crossed');
event.target.classList.add('empty');
}
}

localStorage.setItem('currentGame', JSON.stringify(obj));

gameField.addEventListener('contextmenu', rightClickHandler);

}





