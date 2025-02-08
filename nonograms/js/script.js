'use strict'
import './header.js'
import './gameField.js'
import './modal.js'
import './resetBtn.js'
import { header } from './header.js';
import {startGame, gameContainer} from './gameField.js';
import { templatesWrapper, gameNameTitleBlock, figure } from './templates.js';
import { logo } from './logo.js'

const body = document.body;


body.append(logo)
body.append(header);
body.append(templatesWrapper);
body.append(gameNameTitleBlock)
body.append(gameContainer);
startGame(figure)




