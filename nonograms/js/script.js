'use strict'
import './header.js'
import './gameField.js'
import './modal.js'
import './resetBtn.js'

const body = document.body;

import { header } from './header.js';
import {puzzle} from './gameField.js'

body.append(header);
body.append(puzzle);




