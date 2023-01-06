$(document).ready(function(){
    $('.promo_carousel').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        variableWidth: true,
        adaptiveHeight: true,

        responsive: [
        {
            breakpoint: 768,
            settings: {
            centerMode: true,
            slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            centerMode: true,
            slidesToShow: 1
            }
        }
        ]
    });
    $('.solution_carousel').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 10000,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                centerMode: true,
                slidesToShow: 1,
                arrows: false,
                }
            },
            ]   
    });

    $('.link1').click(function(event) {
        $('.solution_carousel').slick('slickGoTo', 0);
        return false;
    });
    $('.link2').click(function(event) {
        $('.solution_carousel').slick('slickGoTo', 1);
        return false;
    });
    $('.link3').click(function(event) {
        $('.solution_carousel').slick('slickGoTo', 2);
        return false;
    });
    $('.link4').click(function(event) {
        $('.solution_carousel').slick('slickGoTo', 3);
        return false;
    });
    $('.link5').click(function(event) {
        $('.solution_carousel').slick('slickGoTo', 4);
        return false;
    });
    $('.link6').click(function(event) {
        $('.solution_carousel').slick('slickGoTo', 5);
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

