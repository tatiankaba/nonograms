'use strict';

import './theme.js'

import {switcherLabel} from './theme.js'

const header = document.createElement('header');
header.classList.add('header');

const body = document.body;
const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'Nonogram';

body.append(header);
header.append(logo);
header.append(switcherLabel);

