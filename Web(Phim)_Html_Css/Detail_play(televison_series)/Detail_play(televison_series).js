// active episode
document.addEventListener('DOMContentLoaded', function() {
    const episode = document.querySelectorAll('.episodes_list .episode');
    const mainVideo = document.querySelector('#main-video');
    const video_player = document.querySelector('#video_player');
    const play_pause = video_player.querySelector('.controls-left .play_pause');
    const play_pause_large = video_player.querySelector(
        '.play_video .play_pause'
    );

    for (let i = 0; i < episode.length; ++i) {
        episode[i].onclick = function() {
            episode.forEach(function(item) {
                item.classList.remove('active');
            });
            episode[i].classList.add('active');
            selectVideo_reloadVideo(episode[i], i);
        };
    }

    function selectVideo_reloadVideo(episode, i) {
        if (episode.classList.contains('active')) {
            if (i === 0) {
                mainVideo
                    .querySelector('source')
                    .setAttribute(
                        'src',
                        '../images/film/televisons_film/The_Witcher_S1_Ep1.mov'
                    );
            } else {
                mainVideo
                    .querySelector('source')
                    .setAttribute(
                        'src',
                        `../images/film/televisons_film/The_Witcher_S1_Ep${i + 1}.mp4`
                    );
            }

            mainVideo.load();
            pauseVideo();
        }
    }

    function pauseVideo() {
        play_pause.innerHTML = 'play_arrow';
        play_pause_large.innerHTML = 'play_arrow';
        play_pause.title = 'play';
        video_player.classList.add('paused');
        mainVideo.pause();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const mainVideo = video_player.querySelector('#main-video');
    const btn_autoNetx_episode = document.querySelector('.btn_autoNetx_episode');
    const episode = document.querySelectorAll('.episodes_list .episode');

    var videoDuration = 0;
    mainVideo.addEventListener('loadeddata', (e) => {
        videoDuration = e.target.duration;
    });

    mainVideo.addEventListener('timeupdate', (e) => {
        let currentVideoTime = e.target.currentTime;

        if (
            btn_autoNetx_episode.classList.contains('active') &&
            currentVideoTime === videoDuration
        ) {
            for (let i = 0; i < episode.length; ++i) {
                if (
                    episode[i].classList.contains('active') &&
                    i != episode.length - 1
                ) {
                    episode[i].classList.remove('active');
                    episode[i + 1].classList.add('active');
                    selectVideo_reloadVideo(episode[i + 1], i + 1);
                    break;
                }
            }
        }

        function selectVideo_reloadVideo(episode, i) {
            if (episode.classList.contains('active')) {
                if (i === 0) {
                    mainVideo
                        .querySelector('source')
                        .setAttribute(
                            'src',
                            '../images/film/televisons_film/The_Witcher_S1_Ep1.mov'
                        );
                } else {
                    mainVideo
                        .querySelector('source')
                        .setAttribute(
                            'src',
                            `../images/film/televisons_film/The_Witcher_S1_Ep${i + 1}.mp4`
                        );
                }

                mainVideo.load();
                pauseVideo();
            }
        }

        function pauseVideo() {
            play_pause.innerHTML = 'play_arrow';
            play_pause_large.innerHTML = 'play_arrow';
            play_pause.title = 'play';
            video_player.classList.add('paused');
            mainVideo.pause();
        }
    });
});