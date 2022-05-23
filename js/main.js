$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('#main_menu').meanmenu({
        meanMenuContainer: '#mobile_menu',
        meanScreenWidth: 991,
    });
});
