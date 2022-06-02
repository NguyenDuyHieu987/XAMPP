//Trailer active
document.addEventListener('DOMContentLoaded', function() {
    const btn_trailer = document.querySelector('.btn_trailer');
    const trailer = document.querySelector('.trailer');
    const watch_movie_follow = document.querySelector(
        '.watch_movie a:last-child'
    );

    btn_trailer.onclick = function() {
        trailer.classList.add('active');
    };

    watch_movie_follow.onclick = function() {
        watch_movie_follow.classList.toggle('active');
    };
});

// Active follow movie
document.addEventListener('DOMContentLoaded', function() {
    const follow_movie = document.querySelector('.follow_movie');
    follow_movie.onclick = function() {
        follow_movie.classList.toggle('active');

        if (follow_movie.classList.contains('active')) {
            follow_movie.querySelector('.material-icons').innerHTML = 'done';
        } else {
            follow_movie.querySelector('.material-icons').innerHTML = 'bookmark';
        }
    };
});

//Toggle content
document.addEventListener('DOMContentLoaded', function() {
    const content_toggle = document.querySelector('.toggle_content');
    const content_text = document.querySelector('.describe_content_text');

    content_toggle.onclick = function() {
        content_toggle.classList.toggle('active');
        content_text.classList.toggle('short');
        if (content_toggle.classList.contains('active')) {
            content_toggle.innerHTML = '< Ẩn';
        } else {
            content_toggle.innerHTML = 'Xem thêm >';
        }
    };
});