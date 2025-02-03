'use strict';

import './theme.js';


import {switcherLabel} from './theme.js';
import { resetBtn } from './resetBtn.js';


export const header = document.createElement('header');
header.classList.add('header');

const body = document.body;
const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'Nonogram';


header.append(logo);
header.append(resetBtn)
header.append(switcherLabel);

