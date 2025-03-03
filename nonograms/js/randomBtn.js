'use strict';

import { templateObj } from './templateObj.js';
import { startGame } from './gameField.js';
import { removePreviousGame } from './templates.js';

export const randomGame = document.createElement('div');
randomGame.classList.add('btn');
randomGame.textContent = 'random game';

randomGame.addEventListener('click', () => {
    const keys = Object.keys(templateObj);
    const number = Math.floor(Math.random() * keys.length);
    removePreviousGame();
    startGame(templateObj[keys[number]]);
});
