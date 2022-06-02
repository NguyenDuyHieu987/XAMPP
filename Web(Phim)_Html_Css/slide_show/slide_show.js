document.addEventListener('DOMContentLoaded', function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: false,
        margin: 0,
        dots: false,
        nav: false,
        rewind: true,
        autoplay: true,
        smartSpeed: 550,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        items: 1,
        responsive: {
            0: {
                items: 2,
            },
            590: {
                items: 2,
            },
            750: {
                items: 3,
            },
            830: {
                items: 3,
            },
            1000: {
                items: 5,
            },
            1175: {
                items: 5,
            },
        },
    });
    $('.next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.next').on('mouseover', function() {
        owl.trigger('stop.owl.autoplay');
    });

    $('.next').on('mouseleave', function() {
        owl.trigger('play.owl.autoplay');
    });

    $('.prev').mouseover(function() {
        owl.trigger('stop.owl.autoplay');
    });

    $('.prev').mouseleave(function() {
        owl.trigger('play.owl.autoplay');
    });
});