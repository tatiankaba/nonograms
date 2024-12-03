'use strict';

//constants

const body = document.body;
const burgerBtn = document.querySelector('.menu_burger');
const burgerMenu = document.querySelector('nav');
const menuLinks = Array.from(document.getElementsByClassName('menu_link'));
const sliderLine = document.querySelector('.slider_carousel');
const sliderItemsArray = document.getElementsByClassName('slider_item');
const sliderPrevBtn =  document.querySelector('.prev');
const sliderNextBtn =  document.querySelector('.next');


// add burger-menu animation

function changeBurgerMenu() {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('hidden');
    body.classList.toggle('overflow')
}

burgerBtn.addEventListener('click', changeBurgerMenu);

menuLinks.forEach(link => {
    link.addEventListener('click',changeBurgerMenu)
});

// add interactivity to slider

let offset = 0;
let numberOfClickCounts = 3;

const mediaQuery768 = window.matchMedia('(max-width: 768px)');

function changeNumberOfCounts() {
    if (mediaQuery768.matches) {
        numberOfClickCounts = 6;
    } else {
        numberOfClickCounts = 3; 
}}

changeNumberOfCounts();

mediaQuery768.addEventListener('change', changeNumberOfCounts);

function calcSliderItemsWidth() {
    let width = 0;
    let itemsWidth = Array.from(sliderItemsArray).forEach((item) => {
        width += item.offsetWidth;
    })
    return width + 140;
}

function calcSliderLineWidth() {
    let width = sliderLine.offsetWidth;
    return width;
}


function fixSliderWhileResizing() {
    sliderLine.style.right = '0px';
    offset = 0;
    sliderLine.style.right = '0px'
    sliderNextBtn.classList.remove('disable');
    sliderPrevBtn.classList.add('disable');
    calcSliderLineWidth();
    calcSliderItemsWidth();
} 
window.addEventListener('resize', fixSliderWhileResizing);

calcSliderLineWidth();
calcSliderItemsWidth();

function slideNext() {
    sliderPrevBtn.classList.remove('disable')
    offset += ((calcSliderItemsWidth() - calcSliderLineWidth())/numberOfClickCounts)
    sliderLine.style.right = offset + 'px';
    console.log(calcSliderLineWidth())
    console.log(calcSliderItemsWidth())
    if (offset >= (calcSliderItemsWidth() - calcSliderLineWidth()) - 10) {
        sliderNextBtn.classList.add('disable');
    }
}

function slidePrev() {
    sliderNextBtn.classList.remove('disable');
    offset -=  ((calcSliderItemsWidth() - calcSliderLineWidth())/numberOfClickCounts)
    sliderLine.style.right = offset + 'px';
    if (offset <= ((calcSliderItemsWidth() - calcSliderLineWidth())/numberOfClickCounts) - 40) {
        sliderPrevBtn.classList.add('disable');
    }
};


sliderPrevBtn.addEventListener('click', slidePrev);
sliderNextBtn.addEventListener('click', slideNext);

// timer

function formatNumber(num) {
    return num;
}

function updateCountdown() {


    const now = new Date(); 
    const currentTimeInUTC = new Date(now.getTime() - now.getTimezoneOffset() * 60000); 

    const targetDate = Date.UTC(now.getUTCFullYear() + 1, 0, 1, 0, 0, 0); 


    const remainingTime = targetDate - currentTimeInUTC;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = formatNumber(days);
    document.getElementById('hours').textContent = formatNumber(hours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('seconds').textContent = formatNumber(seconds);

    if (remainingTime <= 0) {
        document.getElementById('countdown').innerHTML = "Happy New Year!";
        document.getElementById('countdown').classList.add('time_arrived')
    }
}

setInterval(updateCountdown, 1000);

updateCountdown();

// choose random cards

function getRandomCards(gifts) {
    const randomIndexes = [];
    while (randomIndexes.length < 4) {
        const randIndex = Math.floor(Math.random() * gifts.length);
        if (!randomIndexes.includes(randIndex)) {
            randomIndexes.push(randIndex);
        }
    }
    return randomIndexes.map(index => gifts[index]);
}

function displayRandomCards(gifts) {
    const cardsContainer = document.querySelector('.cards_container');
    const randomCards = getRandomCards(gifts);
    randomCards.forEach(card => {
        const imageCard = `gift-${card.category.toLowerCase().replace(/\s+/g, '-')}.png`;
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        let cardTitleClass = '';
        if (card.category === 'For Health') {
            cardTitleClass = 'health';
        } else if(card.category === 'For Work') {
            cardTitleClass = 'work';
        } else if(card.category === 'For Harmony') {
            cardTitleClass = 'harmony';
        };
        cardElement.innerHTML = `
            <div class="img_container">
                <img src="images/${imageCard}" alt="pic">
            </div>
            <div class="card_text">
                <h4 class="for_what ${cardTitleClass}">${card.category}</h4>
                <h3 class="card_desc">${card.name}</h3>
            </div>
        `;
        
        cardsContainer.appendChild(cardElement);
    });
}
fetch('gifts.json')
    .then(response => response.json())
    .then(gifts => {
        displayRandomCards(gifts);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

