'use strict'
import { stopTimer } from "./gameField.js";


export const timerWrapper = document.createElement('div');
timerWrapper.classList.add('time')
export let seconds = 0; 
export let minutes = 0; 
let secondsExp = `${seconds  < 10 ? '0' : ''}${seconds}`;
let minutesExp = `${minutes  < 10 ? '0' : ''}${minutes}`;
timerWrapper. textContent = `${minutesExp} : ${secondsExp}`;

export function updateTimer() {
  seconds++; 
  if (seconds === 60) {
    seconds = 0; 
    minutes++; 
  }

  secondsExp = `${seconds  < 10 ? '0' : ''}${seconds}`;
  minutesExp = `${minutes  < 10 ? '0' : ''}${minutes}`;
  timerWrapper. textContent= `${minutesExp}:${secondsExp}`
}

export function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  secondsExp = '00';
  minutesExp = '00';
  timerWrapper. textContent= `${minutesExp} : ${secondsExp}`

}




