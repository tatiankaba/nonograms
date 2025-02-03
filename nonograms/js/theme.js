'use strict'

const body = document.body
body.classList.add('dark-theme');

export const switcherLabel = document.createElement('label')
switcherLabel.classList.add('switch');


const switcherInput = document.createElement('input')
switcherInput.type = 'checkbox';

const switcherSpan = document.createElement('label')
switcherSpan.classList.add('slider', 'round');

switcherLabel.append(switcherInput, switcherSpan);

switcherLabel.addEventListener('click', () => {
    if (switcherInput.checked) {
        switcherInput.removeAttribute('checked', '')
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        switcherLabel.classList.remove('light');
    } else {
        switcherInput.setAttribute('checked', '')
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        switcherLabel.classList.add('light');
    }
});


