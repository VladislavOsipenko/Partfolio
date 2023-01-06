$(document).ready(function(){
    $('.promo__carousel').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        variableWidth: true,
        adaptiveHeight: true,

        prevArrow:'<button type="button" class="slick-prev"><img src="icons/Vector_arrow_left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/Vector_arrow_right.svg"></button>',

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

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu_li'),
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
    })
});

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart; 
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY <(animItemOffset + animItemHeight)) {
               animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
                
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(), 
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 400);
    

}
