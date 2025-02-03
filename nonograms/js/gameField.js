'use strict';

const body = document.body;

const puzzle = document.createElement('div');
puzzle.classList.add('puzzle');

const upperHints = document.createElement('div');
upperHints.classList.add('hints');
upperHints.classList.add('upper-hints');

const sideHints = document.createElement('div');
sideHints.classList.add('hints');
sideHints.classList.add('side-hints');

const gameField = document.createElement('div');
gameField.classList.add('game-field');


const fieldMap = [0,0,2,0,0,
                  0,2,2,2,0,
                  2,2,2,2,2,
                  2,0,2,2,2,
                  0,2,2,2,0,]

puzzle.append(upperHints, sideHints, gameField);
body.append(puzzle)
                  
fieldMap.forEach((index)=> {
    const gameCell = document.createElement('div');
    gameCell.classList.add('grid-cell');
    gameCell.classList.add('empty');

    gameField.append(gameCell);
    gameCell.setAttribute('data-index', index)
})        

const upperHintsMap = [null,2,null,null,null,
                     2,1,5,4,2];

const sideHintsMap = [null,1,null,3,null,
                     5,1,3,null,3];

upperHintsMap.forEach((digit)=> {
    const gameCell = document.createElement('div');
    upperHints.append(gameCell);
    gameCell.classList.add('hint')
    gameCell.textContent = digit;

})

sideHintsMap.forEach((digit)=> {
    const gameCell = document.createElement('div');
    sideHints.append(gameCell);
    gameCell.classList.add('hint')
    gameCell.textContent = digit;

})
        

function isWon() {
    const puzzleArray = Array.from(document.getElementsByClassName('grid-cell'));
    const indexArray = [];
    puzzleArray.forEach((cell)=> {
        indexArray.push(cell.getAttribute('data-index'))
    })
    if(indexArray.includes('2') || indexArray.includes('3') ) {
        return false
    } else {
        console.log('победа')
        return true
    }
}

const leftClickHandler = (event) => {

    switch (event.target.getAttribute('data-index')) {
        case '2':
            event.target.setAttribute('data-index', '5');
            break;
        case '0':
            event.target.setAttribute('data-index', '3');
            break;
        case '3':
            event.target.setAttribute('data-index', '0');
            break;
        case '5':
            event.target.setAttribute('data-index', '0');
            break;
    }

    if (event.target.classList.contains('empty')) {
        event.target.classList.add('filled');
        event.target.classList.remove('empty');
    } else if (event.target.classList.contains('filled')) {
        event.target.classList.remove('filled');
        event.target.classList.add('empty');
    } else if (event.target.classList.contains('crossed')) {
        event.target.classList.remove('crossed');
        event.target.classList.add('empty');
    }
    isWon()
}

gameField.addEventListener('click', leftClickHandler);


const rightClickHandler = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('empty')) {
        event.target.classList.add('crossed');
        event.target.classList.remove('empty');
    } else if (event.target.classList.contains('filled')) {
        event.target.classList.remove('filled');
        event.target.classList.add('empty');
    }  else if (event.target.classList.contains('crossed'))  {
        event.target.classList.remove('crossed');
        event.target.classList.add('empty');
    }
}

gameField.addEventListener('contextmenu', rightClickHandler);