document.addEventListener('DOMContentLoaded', function() {
    const filter_film_title = document.querySelector('.filter_film_title');
    const down = document.querySelector('.fa-angle-down');
    const filter_film_body = document.querySelector('.filter_film_body');

    filter_film_title.onclick = function() {
        filter_film_body.classList.toggle('active');

        down.classList.toggle(
            'fa-angle-up',
            filter_film_body.classList.contains('active')
        );
    };
});