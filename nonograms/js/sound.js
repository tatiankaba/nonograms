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
        soundNotification.textContent = 'sound: on';
        backgroundAudio.muted = false;
        backgroundAudio.play();
    } else {
        soundBtn.checked = true;
        if(!backgroundAudio.muted) {
            backgroundAudio.muted = true;
            backgroundAudio.currentTime = 0;
        }
        soundNotification.textContent = 'sound: off';

    }
});

const winSound = new Audio('./sounds/win.mp3');
sound.preload = 'auto';

export function playWinSound() {
    if(soundInput.checked) {
        backgroundAudio.pause();
        winSound.play()
    }
}

const backgroundAudio = new Audio('./sounds/background-music.mp3');
backgroundAudio.loop = true;
backgroundAudio.muted = true; 
backgroundAudio.autoplay = true;

export function playBackgroundMusic() {
    if(soundInput.checked) {
        backgroundAudio.muted = false;
        backgroundAudio.play();
    }
}
export function resumeBackgroundMusic() {
    if(soundInput.checked &&  backgroundAudio.paused) {
        backgroundAudio.play();
    }
}

const resetBtnAudio = new Audio('./sounds/resetBtn.mp3');

export function playResetBtnAudio() {
    if(soundInput.checked) {
        resetBtnAudio.play();
    }
}



