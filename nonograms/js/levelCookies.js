'use strict';

import { mediumLevelTemplates, easyLevelTemplates, templatesWrapper, hardLevelTemplates } from "./templates.js";


export const levelWrapperBlock = document.createElement('div');
levelWrapperBlock.classList.add('level-wrapper-block')
const labelsBlock = document.createElement('div');
labelsBlock.classList.add('labels-block')


const levelInscription = document.createElement('div');
levelInscription.textContent = 'Choose your level cookie:'

const easyLevelInput = document.createElement('input');
easyLevelInput.name = 'levelCookies';
easyLevelInput.id = 'easy';
easyLevelInput.value = 'simple';
easyLevelInput.type = 'radio';
easyLevelInput.checked = true;
easyLevelInput.classList.add('level-input');

const easyLevelLabel = document.createElement('label');
easyLevelLabel.for = 'easy';
easyLevelLabel.classList.add('level-label', 'easy');
easyLevelLabel.append(easyLevelInput);
easyLevelLabel.setAttribute('title', '5*5')


const mediumLevelInput = document.createElement('input');
mediumLevelInput.name = 'levelCookies';
mediumLevelInput.id = 'medium';
mediumLevelInput.value = 'medium';
mediumLevelInput.type = 'radio'
mediumLevelInput.classList.add('level-input');

const mediumLevelLabel = document.createElement('label');
mediumLevelLabel.for = 'medium';
mediumLevelLabel.classList.add('level-label', 'medium');
mediumLevelLabel.append(mediumLevelInput);
mediumLevelLabel.setAttribute('title', '10*10');


const HardLevelInput = document.createElement('input');
HardLevelInput.name = 'levelCookies';
HardLevelInput.id = 'hard';
HardLevelInput.value = 'hard';
HardLevelInput.type = 'radio'
HardLevelInput.classList.add('level-input');

const hardLevelLabel = document.createElement('label');
hardLevelLabel.for = 'hard';
hardLevelLabel.classList.add('level-label', 'hard');
hardLevelLabel.append(HardLevelInput);
hardLevelLabel.setAttribute('title', '15*15');

levelWrapperBlock.append(levelInscription, labelsBlock);
labelsBlock.append(easyLevelLabel, mediumLevelLabel, hardLevelLabel);


mediumLevelLabel.addEventListener('click', ()=> {
        while (templatesWrapper.firstChild) {
            templatesWrapper.firstChild.remove(); 
        }
        templatesWrapper.append(mediumLevelTemplates)
});

easyLevelLabel.addEventListener('click', ()=> {
    while (templatesWrapper.firstChild) {
        templatesWrapper.firstChild.remove(); 
    }
    templatesWrapper.append(easyLevelTemplates)
})


hardLevelLabel.addEventListener('click', ()=> {
    while (templatesWrapper.firstChild) {
        templatesWrapper.firstChild.remove(); 
    }
    templatesWrapper.append(hardLevelTemplates)
})




