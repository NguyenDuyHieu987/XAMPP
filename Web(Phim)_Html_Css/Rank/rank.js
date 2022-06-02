// active current tab
document.addEventListener('DOMContentLoaded', function() {
    const filter_day_tab = document.querySelectorAll('.filter_day li.tab');
    const rightside_movies_container = document.querySelectorAll(
        '.rightside_movies_container'
    );
    for (let i = 0; i < filter_day_tab.length; ++i) {
        filter_day_tab[i].onclick = function() {
            filter_day_tab.forEach(function(item) {
                item.classList.remove('active');
            });

            filter_day_tab[i].classList.add('active');

            rightside_movies_container.forEach(function(item) {
                item.classList.remove('active');
            });

            rightside_movies_container[i].classList.toggle(
                'active',
                filter_day_tab[i].classList.contains('active')
            );

            // toggle ranking on click
            if (filter_day_tab[i].classList.contains('active')) {
                const rightside_box_movie_top1 = document.querySelector(
                    '.rightside_movies_container.active .rightside_box_movie_top1'
                );
                const rightside_box_movie = document.querySelectorAll(
                    '.rightside_movies_container.active .rightside_box_movie'
                );
                rightside_box_movie_top1.querySelector('.txt_rank').innerHTML = '01';
                rightside_box_movie_top1.querySelector('.txt_rank').style.color = 'red';

                for (let i = 0; i < rightside_box_movie.length; i++) {
                    if (i <= 7) {
                        rightside_box_movie[i].querySelector('.txt_rank').innerHTML = `0${
              i + 2
            }`;
                    } else {
                        rightside_box_movie[i].querySelector('.txt_rank').innerHTML = `${
              i + 2
            }`;
                    }

                    if (
                        rightside_box_movie[i].querySelector('.txt_rank').innerHTML == '02'
                    ) {
                        rightside_box_movie[i].querySelector('.txt_rank').style.color =
                            'green';
                    }
                    if (
                        rightside_box_movie[i].querySelector('.txt_rank').innerHTML == '03'
                    ) {
                        rightside_box_movie[i].querySelector('.txt_rank').style.color =
                            'yellow';
                    }
                }
            }
        };
    }
});

// toggle ranking
document.addEventListener('DOMContentLoaded', function() {
    const rightside_box_movie_top1 = document.querySelector(
        '.rightside_movies_container.active .rightside_box_movie_top1'
    );
    const rightside_box_movie = document.querySelectorAll(
        '.rightside_movies_container.active .rightside_box_movie'
    );
    rightside_box_movie_top1.querySelector('.txt_rank').innerHTML = '01';
    rightside_box_movie_top1.querySelector('.txt_rank').style.color = 'red';

    for (let i = 0; i < rightside_box_movie.length; i++) {
        if (i <= 7) {
            rightside_box_movie[i].querySelector('.txt_rank').innerHTML = `0${i + 2}`;
        } else {
            rightside_box_movie[i].querySelector('.txt_rank').innerHTML = `${i + 2}`;
        }

        if (rightside_box_movie[i].querySelector('.txt_rank').innerHTML == '02') {
            rightside_box_movie[i].querySelector('.txt_rank').style.color = 'green';
        }
        if (rightside_box_movie[i].querySelector('.txt_rank').innerHTML == '03') {
            rightside_box_movie[i].querySelector('.txt_rank').style.color = 'yellow';
        }
    }
});