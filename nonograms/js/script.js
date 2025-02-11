'use strict'
import './header.js'
import './gameField.js'
import './modal.js'
import './resetBtn.js'
import { header } from './header.js';
import {startGame, gameContainer} from './gameField.js';
import { templatesWrapper, gameNameTitleBlock} from './templates.js';
import { logo } from './logo.js';
import { timeBlock } from './timeCount.js';
import { templateObj } from './templateObj.js';
import { levelWrapperBlock} from './levelCookies.js'

const body = document.body;


body.append(logo);
body.append(timeBlock);
body.append(header);
body.append(levelWrapperBlock)
body.append(templatesWrapper);
body.append(gameNameTitleBlock)
body.append(gameContainer);
startGame(templateObj.simple.figure)




