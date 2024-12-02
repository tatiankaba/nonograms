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
let offset = 0;
let numberOfCounts = 3;

const mediaQuery768 = window.matchMedia("(max-width: 768px)");

function changeNumberOfCounts() {
    if (mediaQuery768.matches) {
        numberOfCounts = 6;
    } else {
        numberOfCounts = 3; 
}}


changeNumberOfCounts();


mediaQuery768.addEventListener("change", changeNumberOfCounts);

// add burger-menu animation

function changeBurgerMenu() {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('hidden');
    body.classList.toggle('overflow')
}

burgerBtn.addEventListener('click', changeBurgerMenu);

menuLinks.forEach(link => {
    link.addEventListener("click",changeBurgerMenu)
});

// add interactivity to slider

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
    offset += ((calcSliderItemsWidth() - calcSliderLineWidth())/numberOfCounts)
    sliderLine.style.right = offset + 'px';
    console.log(calcSliderLineWidth())
    console.log(calcSliderItemsWidth())
    if (offset >= (calcSliderItemsWidth() - calcSliderLineWidth()) - 10) {
        sliderNextBtn.classList.add('disable');
    }
    console.log(offset)
}

function slidePrev() {
    sliderNextBtn.classList.remove('disable');
    offset -=  ((calcSliderItemsWidth() - calcSliderLineWidth())/numberOfCounts)
    sliderLine.style.right = offset + 'px';
    if (offset <= ((calcSliderItemsWidth() - calcSliderLineWidth())/numberOfCounts) - 40) {
        sliderPrevBtn.classList.add('disable');
    }
};


sliderPrevBtn.addEventListener('click', slidePrev);
sliderNextBtn.addEventListener('click', slideNext);

