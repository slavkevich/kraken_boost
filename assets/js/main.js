'use strict'

/*--------------- Slick script ---------------*/

$(document).ready(function() {
    $('.main-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        appendDots: $('.container-dots'),
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 4000,
        easing: 'ease'
    });
});

$(document).ready(function() {
    $('.reviews-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        appendArrows: $('.container-reviews'),
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 2,
              }
            } , {
                breakpoint: 991,
                settings: {
                  slidesToShow: 1,
                  infinite: true,
                  swipeToSlide: true,
                }
              }
          ]
    });
});

$('.header-bottom-subnav__cards').slick({
    settings: 'unslick',
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1401,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            touchThreshold: 300,
        }
    } , {
        breakpoint: 1130,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    } , {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 300,
        }
    } , {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 700,
            variableWidth: true
        }
    }
]
});

/*--------------- Search script ---------------*/

const searchBlock = document.querySelector('.header-bottom__search');
const search = document.querySelector('.header-bottom__search-icon');
const headerMenu = document.querySelector('.header-bottom__menu');
const headerInput = document.querySelector('.header-bottom__search-form');
const mainBlock = document.querySelector('.main');
const htmlBlock = document.querySelector('html');

search.addEventListener('click', function() {
    this.classList.toggle('active');
    headerMenu.classList.toggle('hide');
    headerInput.classList.toggle('active');
    mainBlock.classList.toggle('active');
    htmlBlock.classList.toggle('fixed');
    searchBlock.classList.toggle('active');
});

/*--------------- Dropdown script ---------------*/

const dropDownHiddenMenu = document.querySelector('.header-top__menu');
const dropDownSelect = document.querySelector('.header-top__select');

const toggleMenu = function toggleMenu() {
    dropDownHiddenMenu.classList.toggle('active');
};

dropDownSelect.addEventListener('click', function(e) {
    e.stopPropagation();
  
    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let itsMenu = target == dropDownHiddenMenu || dropDownHiddenMenu.contains(target);
    let itsSelect = target == dropDownSelect;
    let menuIsActive = dropDownHiddenMenu.classList.contains('active');
    
    if (!itsMenu && !itsSelect && menuIsActive) {
        toggleMenu();
    }
});

/*--------------- Lang script ---------------*/

const langHidden = document.querySelector('.header-top__lang-hidden');
const langCurrent = document.querySelector('.header-top__lang-current');
const langBlock = document.querySelector('.header-top__lang');

const toggleMenuLang = function toggleMenuLang() {
    langHidden.classList.toggle('active');
    langBlock.classList.toggle('active');
};

langCurrent.addEventListener('click', function(e) {
    e.stopPropagation();
  
    toggleMenuLang();
});

document.addEventListener('click', e => {
    let target = e.target;
    let itsMenu = target == langHidden || langHidden.contains(target);
    let itsSelect = target == langCurrent;
    let menuIsActive = langHidden.classList.contains('active');
    
    if (!itsMenu && !itsSelect && menuIsActive) {
        toggleMenuLang();
    }
});

/*--------------- Popup script ---------------*/

const modal = document.querySelector(".popup");
const btnCloseModal = document.querySelector(".popup__close");
const btnsOpenModal = document.querySelectorAll(".js-open-popup");
const htmlFixed = document.querySelector("html");

const openModal = function () {
    modal.classList.remove("hidden");
    htmlFixed.classList.add("fixed");
};

const closeModal = function () {
    modal.classList.add("hidden");
    htmlFixed.classList.remove("fixed");
    bottomSubNav.classList.remove('to-left');
    bottomMenu.classList.remove('to-left');
    bottomMenu.classList.remove("active");
    burgerBtn.classList.remove("active");
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

/*--------------- Burger script ---------------*/

const burgerBtn = document.querySelector(".header-top__burger");
const bottomMenu = document.querySelector(".header-bottom__menu");

burgerBtn.addEventListener('click', function () {
    this.classList.toggle("active");
    bottomMenu.classList.toggle("active");
    htmlFixed.classList.toggle("fixed");
    bottomSubNav.classList.remove('to-left');
    bottomMenu.classList.remove('to-left');
});


/*--------------- Menu mobile response script ---------------*/

const menuItem = document.querySelectorAll(".header-bottom__menu-link");
const bottomSubNav = document.querySelector(".header-bottom-subnav");
const subNavHidden = document.querySelectorAll(".header-bottom-subnav__title--hidden");

document.querySelectorAll(".header-bottom__menu-link").forEach((item) => 
    item.addEventListener('click', function (e) {
        e.preventDefault();
        bottomMenu.classList.toggle('to-left');
        bottomSubNav.classList.toggle('to-left');
    })
);

subNavHidden.forEach((hiddenItem) => 
    hiddenItem.addEventListener('click', function () {
        bottomSubNav.classList.toggle('to-left');
        bottomMenu.classList.toggle('to-left');
    })
)
