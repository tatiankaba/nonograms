'use strict';


document.addEventListener('DOMContentLoaded', ()=> {
//constants

const body = document.body;
const burgerBtn = document.querySelector('.menu_burger');
const burgerMenu = document.querySelector('nav');
const menuLinks = Array.from(document.getElementsByClassName('menu_link'));
const sliderLine = document.querySelector('.slider_carousel');
const sliderItemsArray = document.getElementsByClassName('slider_item');
const sliderPrevBtn =  document.querySelector('.prev');
const sliderNextBtn =  document.querySelector('.next');
const mediaQuery768 = window.matchMedia('(max-width: 768px)');
const mediaQueryMin768 = window.matchMedia('(min-width: 768px)');


//modal constants
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal_close');
const modalName = document.getElementById('modal_name');
const modalDescription = document.getElementById('modal_description');
const modalSuperpowers = document.getElementById('modal_superpowers');
const snowFlakes = document.querySelectorAll('.star svg');



// add burger-menu animation

function changeBurgerMenu() {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('hidden');
    body.classList.toggle('overflow');
    const header = document.querySelector('header');
    header.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'     
      });
}


burgerBtn.addEventListener('click', changeBurgerMenu);

menuLinks.forEach(link => {
    link.addEventListener('click',changeBurgerMenu)
});

mediaQueryMin768.addEventListener('change', ()=> {
    burgerBtn.classList.remove('active');
    burgerMenu.classList.add('hidden');
    body.classList.remove('overflow');
});

// add interactivity to slider

let offset = 0;
let numberOfClickCounts = 3;




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
    const currentTimeInUTC = now - (now.getTimezoneOffset() / 60);

    const targetDate = new Date(Date.UTC(2025, 0, 1, 0, 0, 0));


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
        cardElement.addEventListener('click', () => openModal(card));
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



  function createModalCard(card) {

    const modalCardContainer = document.querySelector('.modal_card_container')
    const modalCardDesc = document.querySelector('[data-modalDesc="modal_card_desc"]');
    const modalPowers = document.getElementsByClassName('power_item');
    const modalPoints = document.getElementsByClassName('point');
    const modalPointsArray = Object.values(card.superpowers);
    const modalPowersArray = Object.keys(card.superpowers);
    const modalImg = document.querySelector('[data-modalImg="modal_img"]'); 
    const modalCardName = document.querySelector('[data-modalName="modal_card_name"]');
    const modalForCategory = document.querySelector('[data-modalName="modal_card_category"]');

    for(let i = 0; i < modalPointsArray.length; i++) {

      for(let c = 0; c < (parseInt(modalPointsArray[i])/100); c++) {
        const modalSnowflakesContainer = document.getElementsByClassName('star');
        const snowflakes = modalSnowflakesContainer[i].getElementsByTagName('svg');
        snowflakes[c].style.opacity = '1';
      };

    };

    modalForCategory.textContent = card.category.toUpperCase();
    let modalForCategoryClass = card.category.split(' ').splice(1).join('').toLowerCase();
    modalForCategory.className = `for_what ${modalForCategoryClass}`;
    modal.style.display = 'block';
    modal.style.cursorPointer = 'none';
    modalCardContainer.style.cursor = 'auto';

    modalImg.src = 'images/gift-' + card.category.toLowerCase().replace(/\s+/g, '-') + '.png';

    for(let i = 0; i < modalPowersArray.length; i++) {
      modalPowers[i].textContent = modalPowersArray[i]
    };

    for(let i = 0; i < modalPointsArray.length; i++) {
      modalPoints[i].textContent = modalPointsArray[i]
    };

    

    modalCardDesc.textContent = card.description;
    modalCardName.textContent = card.name;
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
      if(event.target == modal) {
        closeModal();
        for (let snowFlake of snowFlakes) {
          snowFlake.style.opacity = '0.1'
        };
      }
    });

  };

  function openModal(card) {
    createModalCard(card);
    body.style.overflow = 'hidden';
  };

  function closeModal(card) {
    modal.style.display = 'none';
    body.style.overflow = 'auto'; 
    for (let snowFlake of snowFlakes) {
      snowFlake.style.opacity = '0.1';
  }
  };



});