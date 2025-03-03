'use strict';

import { openWinnerTable } from './modal.js';

export const winnersTable = document.createElement('div');
winnersTable.classList.add('winner-table');

export function stringToSeconds(time) {
    let timeString = time;
    let [minutes, seconds] = timeString
        .split(':')
        .map((value) => parseInt(value, 10));
    let totalSeconds = minutes * 60 + seconds;
    return totalSeconds;
}

export function addWinnerToLocalStorage(obj) {
    let winnerList = JSON.parse(localStorage.getItem('winnerList')) || [];

    if (winnerList.length === 5) {
        if (obj.time >= winnerList[4].time) return;
        winnerList[4] = obj;
        winnerList.sort((a, b) => a.time - b.time);
    } else {
        winnerList.push(obj);
        winnerList.sort((a, b) => a.time - b.time);
    }

    localStorage.setItem('winnerList', JSON.stringify(winnerList));
}

winnersTable.addEventListener('click', () => {
    let winners = JSON.parse(localStorage.getItem('winnerList'));
    openWinnerTable(winners);
});
