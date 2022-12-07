$(document).ready(function() {
    $("#slider").bxSlider({
        adaptiveHeight: true,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 600,
        slideMargin: 0,
        randomStart: true,
        moveSlides: 1,
        captions: true,
        speed: 1000,
        pager: false,
        wrapperClass: 'bx-wrapper'
    });
});