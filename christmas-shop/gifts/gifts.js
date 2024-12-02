'use strict';

const mediaQueryList = window.matchMedia("(max-width: 768px)");

function showAlert() {

}

mediaQueryList.addEventListener("change", showAlert);

//constants

const body = document.body;
const burgerBtn = document.querySelector('.menu_burger');
const burgerMenu = document.querySelector('nav');
const menuLinks = Array.from(document.getElementsByClassName('menu_link'));

// add burger-menu animation
function changeBurgerMenu() {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('hidden');
    body.classList.toggle('overflow')
}

burgerBtn.addEventListener('click', changeBurgerMenu);

menuLinks.forEach(link => {
    link.addEventListener("click", changeBurgerMenu)
});


