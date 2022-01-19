$(document).ready(function () {
    $('.project-popup').magnificPopup({
        type: 'image',
        gallery: {
            // options for gallery
            enabled: true
        },
    });

    $('.counter').counterUp()


    $('.testimonials').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });
});

$(window).load(function(){
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 20) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    })
})