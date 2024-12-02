'use strict';

// изменение медиа

const mediaQueryList = window.matchMedia("(max-width: 768px)");

function showAlert() {

}

mediaQueryList.addEventListener("change", showAlert);

// add burger-menu animation
const body = document.body;
const burgerBtn = document.querySelector('.menu_burger');
const burgerMenu = document.querySelector('nav');

function showMenu() {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('hidden');
    body.classList.toggle('overflow')
}

burgerBtn.addEventListener('click', showMenu);

