'use strict'
import './header.js'
import './gameField.js'
import './modal.js'
import './resetBtn.js'

const body = document.body;

import { header } from './header.js';
import {startGame, gameContainer} from './gameField.js';
import { templatesWrapper, gameNameTitleBlock, figure } from './templates.js'

body.append(header);
body.append(templatesWrapper);
body.append(gameNameTitleBlock)
body.append(gameContainer);
startGame(figure)




