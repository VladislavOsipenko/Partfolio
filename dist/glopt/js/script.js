$(document).ready(function(){
    $('.reviews_carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,

        prevArrow:'<button type="button" class="slick-prev"><img src="icons/_arrow_left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/_arrow_right.png"></button>',

        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });

    function togglSlide(item) {
        $(item).each(function(i) {
            $(this) .on('click',function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }
    
    togglSlide('.catalog-item__link');
    togglSlide('.catalog-item__back');
    
    //modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });
    
    
    $('form').submit(function(e) {
        e.preventDefault();
    
       
    
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
    
            $('form').trigger('reset');
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $(document).ready(function() {
        $("a").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 450, function(){
              window.location.hash = hash;
            });
            } 
        });
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.promo_menu'),
        menuItem = document.querySelectorAll('.promo_menu__item'),
        hamburger = document.querySelector('.promo_hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('promo_hamburger_active');
            menu.classList.toggle('promo_menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('promo_hamburger_active');
                menu.classList.toggle('promo_menu_active');
            })
        })
    })
}); 

