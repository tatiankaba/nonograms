'use strict'
import { stopTimer } from "./gameField.js";


export const timeBlock  = document.createElement('div');
timeBlock.classList.add('time-block');


export const timerWrapper = document.createElement('div');
timerWrapper.classList.add('time')
export let seconds = 0; 
export let minutes = 0; 
let secondsExp = `${seconds  < 10 ? '0' : ''}${seconds}`;
let minutesExp = `${minutes  < 10 ? '0' : ''}${minutes}`;
 timerWrapper. textContent = `${minutesExp}:${secondsExp}`;

 timeBlock.append(timerWrapper);

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

export function updateTimeFromLocalStorage() {
  minutes = JSON.parse(localStorage.getItem('savedGame')).minutes;
  seconds = JSON.parse(localStorage.getItem('savedGame')).seconds;
  secondsExp = `${seconds  < 10 ? '0' : ''}${seconds}`;
  minutesExp = `${minutes  < 10 ? '0' : ''}${minutes}`;
  timerWrapper. textContent= `${minutesExp}:${secondsExp}`
}

export function resetTimer() {
  minutes = 0;
  seconds = 0;
  stopTimer();
  secondsExp = `${seconds  < 10 ? '0' : ''}${seconds}`;
  minutesExp = `${minutes  < 10 ? '0' : ''}${minutes}`;
  timerWrapper. textContent= `${minutesExp}:${secondsExp}`

}




