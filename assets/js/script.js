jQuery(function ($) {

    "use strict";

    /* ======= Full Screen Background ======= */
    (function () {
        $(".slider-section").height($(window).height());

        $(window).on('resize', function(){
            $(".slider-section").height($(window).height());
        });

    }());

});