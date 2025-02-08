'use strict';

import './theme.js';


import {switcherLabel} from './theme.js';
import { resetBtn } from './resetBtn.js';
import { solutionBtn } from './solutionBtn.js';
import { soundBtn } from './sound.js';
import { saveBtn } from './saveGameBtn.js';
import { continueBtn } from './continueBtn.js';


export const header = document.createElement('header');
header.classList.add('header');




header.append(soundBtn);
header.append(resetBtn);
header.append(solutionBtn);
header.append(saveBtn);
header.append(continueBtn);
header.append(switcherLabel);

