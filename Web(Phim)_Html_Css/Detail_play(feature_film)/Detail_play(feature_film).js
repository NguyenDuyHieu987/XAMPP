// Active button light off and auto next episode
document.addEventListener('DOMContentLoaded', function() {
    const btn_toggle_light = document.querySelector('.btn_toggle_light');
    const btn_autoNetx_episode = document.querySelector('.btn_autoNetx_episode');
    const background_movie_light_off = document.querySelector(
        '.background_movie_light_off'
    );

    btn_autoNetx_episode.onclick = function() {
        btn_autoNetx_episode.classList.toggle('active');
    };

    btn_toggle_light.onclick = function() {
        btn_toggle_light.classList.toggle('active');
        if (btn_toggle_light.classList.contains('active')) {
            btn_toggle_light.previousElementSibling.innerHTML = 'Bật đèn';
            background_movie_light_off.classList.add('active');
        } else {
            background_movie_light_off.classList.remove('active');
            btn_toggle_light.previousElementSibling.innerHTML = 'Tắt đèn';
        }
    };
});

// active current server
document.addEventListener('DOMContentLoaded', function() {
    const server = document.querySelectorAll('.server');
    for (let i = 0; i < server.length; ++i) {
        server[i].onclick = function() {
            server.forEach(function(item) {
                item.classList.remove('active');
            });
            server[i].classList.toggle('active');
        };
    }
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