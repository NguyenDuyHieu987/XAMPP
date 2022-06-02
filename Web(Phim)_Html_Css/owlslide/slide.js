document.addEventListener('DOMContentLoaded', function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: false,
        margin: 0,
        dots: false,
        nav: false,
        rewind: true,
        autoplay: true,
        smartSpeed: 300,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            750: {
                items: 3
            },
            850: {
                items: 4
            },
            1000: {
                items: 5
            },
            1175: {
                items: 5
            }
        }
    })
    $('.next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.prev').click(function() {

        owl.trigger('prev.owl.carousel', [300]);
    })
})