'use strict';


document.addEventListener('DOMContentLoaded', () => {

//constants

const body = document.body;
const burgerBtn = document.querySelector('.menu_burger');
const burgerMenu = document.querySelector('nav');
const menuLinks = Array.from(document.getElementsByClassName('menu_link'));
const tabs = document.querySelectorAll('.tabs .tab');
const cardsContainer = document.querySelector('.cards_container');

//modal constants
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal_close');
const modalName = document.getElementById('modal_name');
const modalDescription = document.getElementById('modal_description');
const modalSuperpowers = document.getElementById('modal_superpowers');

//media constants
const mediaQueryMin768 = window.matchMedia('(min-width: 768px)');
const mediaQueryList = window.matchMedia("(max-width: 768px)");




// add burger-menu animation
function changeBurgerMenu() {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('hidden');
    body.classList.toggle('overflow');
    menuLinks[0].classList.remove('gifts-disabled-menu-item')
}

burgerBtn.addEventListener('click', changeBurgerMenu);

menuLinks.forEach(link => {
    link.addEventListener("click", changeBurgerMenu)
});

mediaQueryMin768.addEventListener('change', ()=> {
  burgerBtn.classList.remove('active');
  burgerMenu.classList.add('hidden');
  body.classList.remove('overflow');
});

// interactivity to tabs

    fetch('../gifts.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Не удалось загрузить данные');
        }
        return response.json(); 
      })
      .then(gifts => {

        function createCard(gift) {
          const card = document.createElement('div');
          card.classList.add('card');
          const imgContainer = document.createElement('div');
          imgContainer.classList.add('img_container');
          const imageName = `gift-${gift.category.toLowerCase().replace(/\s+/g, '-')}.png`;
          const img = document.createElement('img');
          img.src = `../images/${imageName}`; 
          img.alt = 'gift image';
          imgContainer.appendChild(img);
  
          const cardText = document.createElement('div');
          cardText.classList.add('card_text');
          
          const categoryElement = document.createElement('h4');
  
          let categoryClass = '';
          if (gift.category == 'For Work') categoryClass = 'work';
          if (gift.category == 'For Health') categoryClass = 'health';
          if (gift.category == 'For Harmony') categoryClass = 'harmony';
          categoryElement.classList.add('for_what', `${categoryClass}`);
          categoryElement.textContent = `${gift.category}`;
  
          const descElement = document.createElement('h3');
          descElement.classList.add('card_desc');
          descElement.textContent = gift.name;
  
          cardText.appendChild(categoryElement);
          cardText.appendChild(descElement);
  
          card.appendChild(imgContainer);
          card.appendChild(cardText);

          card.addEventListener('click', () => openModal(gift));
  
          return card;
        }

        function displayCards(filteredGifts) {
          cardsContainer.innerHTML = ''; 
          filteredGifts.forEach(gift => {
            const card = createCard(gift);
            cardsContainer.appendChild(card);
          });
        }
  
        tabs.forEach(tab => {
          tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('disable'));
            this.classList.add('disable');
            const selectedCategory = this.textContent.trim().toLowerCase();
  
            let filteredGifts;
            if (selectedCategory === 'all') {
              filteredGifts = gifts; 
            } else {
              filteredGifts = gifts.filter(gift => gift.category.toLowerCase() === selectedCategory); 
            }
 
            displayCards(filteredGifts);
          });
        });
  

        document.querySelector('.tab.disable').classList.add('disable');
        
     
        displayCards(gifts);
  
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error); 
      });

  
  // add scroll button

    const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = 1;
      } else {
        scrollToTopBtn.style.opacity = 0;
      }
    });
  
    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });

  

  // modal window

  function openModal(card) {
    createModalCard(card);
    body.style.overflow = 'hidden'
  };

  function closeModal(card) {
    modal.style.display = 'none';
    body.style.overflow = 'auto'; 
  };

  function createModalCard(card) {

    const modalCardContainer = document.querySelector('.modal_card_container')
    const modalCardName = document.querySelector('[data-modalName="modal_card_name"]');
    const modalCardDesc = document.querySelector('[data-modalDesc="modal_card_desc"]');
    const modalPowers = document.getElementsByClassName('power_item');
    const modalPoints = document.getElementsByClassName('point');
    const modalPointsArray = Object.values(card.superpowers);
    const modalPowersArray = Object.keys(card.superpowers);
    const modalImg = document.querySelector('[data-modalImg="modal_img"]');

    modal.style.display = 'block';
    modal.style.cursorPointer = 'none';
    modalCardContainer.style.cursor = 'auto';

    modalImg.src = '../images/gift-' + card.category.toLowerCase().replace(/\s+/g, '-') + '.png';

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
        closeModal()
      }
    });

  }


    
  


  });
  