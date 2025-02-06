'use strict'
import './header.js'
import './gameField.js'
import './modal.js'
import './resetBtn.js'

const body = document.body;

import { header } from './header.js';
import {startGame, gameContainer, upperHintsMap, sideHintsMap,fieldMap} from './gameField.js';
import { templatesWrapper } from './templates.js'

body.append(header);
body.append(templatesWrapper)
body.append(gameContainer);
startGame(fieldMap, sideHintsMap,upperHintsMap)




