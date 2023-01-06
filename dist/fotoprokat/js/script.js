$(document).ready(function(){
    $('.products__wrapper').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        variableWidth: true,
        adaptiveHeight: true,

        prevArrow:'<button type="button" class="slick-prev"><img src="icons/bottom.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/top.png"></button>',

        responsive: [
            
        {
            breakpoint: 768,
            settings: {
            centerMode: true,
            slidesToShow: 1,
            arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
            centerMode: true,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            arrows: false
            }
        }
        ]
    });


}); 

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu_item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
});