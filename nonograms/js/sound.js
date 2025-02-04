'use strict'

export const soundBtn = document.createElement('label');
soundBtn.classList.add('sound-label');
const soundNotification = document.createElement('div');
soundBtn.classList.add('btn');
const soundInput = document.createElement('input');
soundInput.classList.add('sound-input');
soundInput.setAttribute('id', 'sound')
soundBtn.setAttribute('for','sound');
soundNotification.textContent = 'sound: on';
soundInput.setAttribute('type','checkbox')
const sound = new Audio('./sounds/sound.mp3');
sound.preload = 'auto';
soundInput.checked = true;
soundBtn.append(soundInput)
soundBtn.append(soundNotification)

export function playSound() {
    if(soundInput.checked) {
        sound.play()
    }
}

soundBtn.addEventListener('click', ()=> {
    if(soundInput.checked) {
        soundBtn.checked = false;
        soundNotification.textContent = 'sound: on'

    } else {
        soundBtn.checked = true;
        soundNotification.textContent = 'sound: off';

    }
});

const winSound = new Audio('./sounds/win.mp3');
sound.preload = 'auto';

export function playWinSound() {
    if(soundInput.checked) {
        winSound.play()
    }
}

