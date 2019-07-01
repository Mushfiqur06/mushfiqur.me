jQuery(function ($) {

    "use strict";

    /* ======= Full Screen Background ======= */
    (function () {
        $(".slider-section").height($(window).height());

        $(window).on('resize', function(){
            $(".slider-section").height($(window).height());
        });

    }());


    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
    }

});