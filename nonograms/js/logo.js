'use strict'

const body = document.body;
export const logo = document.createElement('div');
logo.classList.add('logo');
const gameTitle = document.createElement('div');
gameTitle.textContent = 'Nonogram';
logo.append(gameTitle);
const girlDollWrapper = document.createElement('div');
logo.append(girlDollWrapper);
girlDollWrapper.classList.add('girl-doll-wrapper')


