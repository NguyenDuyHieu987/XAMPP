//Trailer active
document.addEventListener('DOMContentLoaded', function() {
    const btn_trailer = document.querySelector('.btn_trailer_televison_film');
    const trailer = document.querySelector('.trailer_televison_film');
    const watch_movie_follow = document.querySelector(
        '.btn_trailer_televison_film + a'
    );

    btn_trailer.onclick = function() {
        trailer.classList.add('active');
    };

    watch_movie_follow.onclick = function() {
        watch_movie_follow.classList.toggle('active');
    };
});

//Toggle content
document.addEventListener('DOMContentLoaded', function() {
    const content_toggle = document.querySelector(
        '.toggle_content_televison_film'
    );
    const content_text = document.querySelector(
        '.describe_content_text_televison_film'
    );

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

//lastest episodes
var isclicked = false;
document.addEventListener('DOMContentLoaded', function() {
    const lastest_episodes = document.querySelectorAll(
        '.lastest_episodes ul li a'
    );
    const episode = document.querySelectorAll('.episodes_list .episode');
    const episodes_wrapper = document.querySelector('.episodes_wrapper');

    for (let i = 0; i < lastest_episodes.length; i++) {
        lastest_episodes[i].onclick = function(e) {
            e.preventDefault();
            isclicked = true;
            window.location.href =
                '../Detail_play(televison_series)/Detail_play(televison_series).php';
        };
    }
});