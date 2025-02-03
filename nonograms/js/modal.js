'use strict'

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

