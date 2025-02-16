'use strict';

import { resumeBackgroundMusic } from "./sound.js";

const body = document.body;
const overlay = document.createElement('div');
overlay.classList.add('overlay');
const closeBtn = document.createElement('div');
closeBtn.classList.add('close-btn');


const modal = document. createElement('div');
modal.classList.add('modal');

const inscriptionWrapper = document.createElement('div');


modal.append(closeBtn)
modal.append(inscriptionWrapper)
overlay.append(modal);

body.append(overlay);



const closeModal = (event) => {
    if(event.target.classList.contains('overlay') || event.target.classList.contains('close-btn')) {
        resumeBackgroundMusic();
        overlay.style.display = 'none';
        body.style.overflow = 'auto';
    }
}
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

export function openModal(timeFinished) {
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';
    inscriptionWrapper.textContent = `Great! You have solved the nonogram in ${timeFinished} !`

}

export function openContinueModal(message) {
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';
    inscriptionWrapper.textContent = 'No saved games'
}

export function showSavedGamePopUp() {
    const popUp = document.createElement('div');
    popUp.classList.add('information-pop-up')
    popUp.textContent = 'saved';
    body.append(popUp);
    setTimeout(()=> {
    body.removeChild(popUp)}, 500)
}

export function openWinnerTable(winners) {
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';
    const winnersWrapper = document.createElement('div');
    inscriptionWrapper.textContent = '';
    if(winners) {
        const title = document.createElement('div');
        title.classList.add('winners-title');
        title.textContent = 'winners';
        inscriptionWrapper.append(winnersWrapper);
        winnersWrapper.classList.add('winners-wrapper')
        winnersWrapper.append(title);
        let count = 1;
        winners.forEach((winner)=> {
            const winnerRow = document.createElement('div');
            winnerRow.classList.add('winner-row');
            const num =  document.createElement('div');
            num.classList.add('winner-num');
            num.textContent = `${count}.`
            const gameName =  document.createElement('div');
            gameName.classList.add('winner-game-name');
            gameName.textContent = `${winner.name}`;
            const level =  document.createElement('div');
            level.classList.add('winner-level');
            level.textContent = `${winner.level}`;
            const time =  document.createElement('div');
            time.classList.add('winner-level');
            time.textContent = `${winner.secMinTime}`;
            winnerRow.append(num, gameName,level, time);
            winnersWrapper.append(winnerRow);
            count++;
        })

    } else {
        inscriptionWrapper.textContent = 'no winners';
    }

}
