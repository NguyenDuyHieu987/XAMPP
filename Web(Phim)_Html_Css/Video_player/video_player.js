document.addEventListener('DOMContentLoaded', function() {
    // let's select all required tags or elements
    const video_player = document.querySelector('#video_player');
    const mainVideo = video_player.querySelector('#main-video');
    const progressAreaTime = video_player.querySelector('.progressAreaTime');
    const controls = video_player.querySelector('.controls');
    const controlsList = video_player.querySelector('.controls-list');
    const progressArea = video_player.querySelector('.progress-area');
    const progress_Bar = video_player.querySelector('.progress-bar');
    const fast_rewind = video_player.querySelector('.fast-rewind');
    const play_pause = video_player.querySelector('.controls-list .play_pause');
    const play_pause_large = video_player.querySelector(
        '.play_video .play_pause'
    );
    const fast_forward = video_player.querySelector('.fast-forward');
    const volume = video_player.querySelector('.volume');
    const volume_range = video_player.querySelector('.volume_range');
    const current = video_player.querySelector('.current');
    const totalDuration = video_player.querySelector('.duration');
    const auto_play = video_player.querySelector('.auto-play');
    const settingsBtn = video_player.querySelector('.settingsBtn');
    const picture_in_picutre = video_player.querySelector('.picture_in_picutre');
    const fullscreen = video_player.querySelector('.fullscreen');
    const settings = video_player.querySelector('#settings');
    const playback = video_player.querySelectorAll('.playback li');

    // Play video function
    function playVideo() {
        play_pause.innerHTML = 'pause';
        play_pause_large.innerHTML = 'pause';
        play_pause.title = 'pause';
        video_player.classList.remove('paused');
        mainVideo.play();
    }

    // Pause video function
    function pauseVideo() {
        play_pause.innerHTML = 'play_arrow';
        play_pause_large.innerHTML = 'play_arrow';
        play_pause.title = 'play';
        video_player.classList.add('paused');
        mainVideo.pause();
    }

    mainVideo.addEventListener('play', () => {
        playVideo();
    });

    mainVideo.addEventListener('pause', () => {
        pauseVideo();
    });

    window.addEventListener('keydown', (e) => {
        const isVideoPaused = video_player.classList.contains('paused');

        if (isVideoPaused) {
            if (e.keyCode === 32) {
                e.preventDefault();
                playVideo();
            }
        } else {
            if (e.keyCode === 32) {
                e.preventDefault();
                pauseVideo();
            }
        }

        if (isVideoPaused) {
            setTimeout(function() {
                play_pause_large.style.opacity = 1;
            }, 50);
            setTimeout(function() {
                play_pause_large.style.opacity = 0;
            }, 150);
        } else {
            play_pause_large.style.opacity = 1;
        }

        if (video_player.classList.contains('paused')) {
            controls.classList.add('active');
        } else {
            controls.classList.remove('active');
        }
    });

    play_pause.addEventListener('click', () => {
        const isVideoPaused = video_player.classList.contains('paused');
        isVideoPaused ? playVideo() : pauseVideo();

        if (isVideoPaused) {
            setTimeout(function() {
                play_pause_large.style.opacity = 1;
            }, 50);
            setTimeout(function() {
                play_pause_large.style.opacity = 0;
            }, 150);
        } else {
            play_pause_large.style.opacity = 1;
        }
    });

    play_pause_large.addEventListener('click', () => {
        const isVideoPaused = video_player.classList.contains('paused');
        isVideoPaused ? playVideo() : pauseVideo();
    });

    play_pause_large.addEventListener('mouseenter', () => {
        play_pause_large.style.opacity = 1;
    });

    play_pause_large.addEventListener('mouseleave', () => {
        const isVideoPaused = video_player.classList.contains('paused');
        isVideoPaused
            ?
            (play_pause_large.style.opacity = 1) :
            (play_pause_large.style.opacity = 0);
    });

    mainVideo.addEventListener('click', () => {
        const isVideoPaused = video_player.classList.contains('paused');
        isVideoPaused ? playVideo() : pauseVideo();

        if (isVideoPaused) {
            setTimeout(function() {
                play_pause_large.style.opacity = 1;
            }, 50);
            setTimeout(function() {
                play_pause_large.style.opacity = 0;
            }, 150);
        } else {
            play_pause_large.style.opacity = 1;
        }
    });

    // fast_rewind video function
    fast_rewind.addEventListener('click', () => {
        mainVideo.currentTime -= 10;
    });

    // fast_forward video function
    fast_forward.addEventListener('click', () => {
        mainVideo.currentTime += 10;
    });

    // rewind forward video keydown
    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 39) {
            e.preventDefault();
            mainVideo.currentTime += 10;
            play_pause_large.style.opacity = 0;
        } else if (e.keyCode === 37) {
            e.preventDefault();
            mainVideo.currentTime -= 10;
            play_pause_large.style.opacity = 0;
        }
    });

    // Load video duration
    function formatDuration(time, durationEl) {
        let hours = Math.floor(time / 3600);
        let mins = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);

        // if seconds are less then 10 then add 0 at the begning
        if (hours === 0) {
            seconds < 10 ? (seconds = '0' + seconds) : seconds;
            durationEl.innerHTML = `${mins}:${seconds}`;
        } else {
            mins < 10 ? (mins = '0' + mins) : mins;
            seconds < 10 ? (seconds = '0' + seconds) : seconds;
            durationEl.innerHTML = `${hours}:${mins}:${seconds}`;
        }
    }

    // total video duration
    mainVideo.addEventListener('loadeddata', (e) => {
        let videoDuration = e.target.duration;
        formatDuration(videoDuration, totalDuration);
    });

    // Current video duration
    mainVideo.addEventListener('timeupdate', (e) => {
        let currentVideoTime = e.target.currentTime;
        formatDuration(currentVideoTime, current);
    });

    // progressArea width video currentTime change
    mainVideo.addEventListener('timeupdate', (e) => {
        let progressWidth = e.target.currentTime / e.target.duration;
        progressArea.style.setProperty('--progress-position', progressWidth);
    });

    // let's update playing video current time on according to the progress bar width
    progressArea.addEventListener('mousemove', handleTimelineUpdate);
    progressArea.addEventListener('mousedown', toggleScrubbing);
    document.addEventListener('mouseup', (e) => {
        if (isScrubbing) toggleScrubbing(e);
    });
    document.addEventListener('mousemove', (e) => {
        if (isScrubbing) handleTimelineUpdate(e);
    });

    let isScrubbing = false;
    let wasPaused;

    function toggleScrubbing(e) {
        const rect = progressArea.getBoundingClientRect();
        const percent =
            Math.min(Math.max(0, e.x - rect.left), rect.width) / rect.width;
        isScrubbing = e.buttons === 1;
        if (isScrubbing) {
            wasPaused = mainVideo.paused;
            mainVideo.pause();
        } else {
            if (e.buttons != 2) {
                mainVideo.currentTime = percent * mainVideo.duration;
                if (!wasPaused) mainVideo.play();
            }
        }

        handleTimelineUpdate(e);
    }

    function handleTimelineUpdate(e) {
        const rect = progressArea.getBoundingClientRect();

        const percent =
            Math.min(Math.max(0, e.x - rect.left), rect.width) / rect.width;

        progressArea.style.setProperty('--preview-position', percent);

        if (isScrubbing) {
            e.preventDefault();
            progressArea.style.setProperty('--progress-position', percent);
        }
    }

    // Update progress area time and display block on mouse move
    progressArea.addEventListener('mousemove', (e) => {
        let progressWidthval = progressArea.clientWidth;
        let x = e.offsetX;
        let videoDuration = mainVideo.duration;
        let progressTime = Math.floor((x / progressWidthval) * videoDuration);
        formatDuration(progressTime, progressAreaTime);
        // progressAreaTime active
        if (x >= progressWidthval - 20) {
            x = progressWidthval - 20;
        } else if (x <= 15) {
            x = 15;
        } else {
            x = e.offsetX;
        }
        progressAreaTime.style.setProperty('--progress-AreaTime', `${x}px`);
        progressAreaTime.style.display = 'block';
    });

    progressArea.addEventListener('mouseenter', () => {
        progress_Bar.style.display = 'block';
    });

    progressArea.addEventListener('mouseleave', () => {
        progressAreaTime.style.display = 'none';
        progress_Bar.style.display = 'none';
    });

    progressArea.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // change volume
    mainVideo.addEventListener('volumechange', () => {
        volume_range.value = mainVideo.volume;
        if (volume_range.value == 0) {
            volume_range.value = 0;
            volume.innerHTML = 'volume_off';
        } else if (volume_range.value < 0.4) {
            volume.innerHTML = 'volume_down';
        } else {
            volume.innerHTML = 'volume_up';
        }
    });

    volume_range.addEventListener('input', (e) => {
        mainVideo.volume = e.target.value;
        mainVideo.muted = e.target.value === 0;
    });

    volume.addEventListener('click', () => {
        if (volume_range.value == 0) {
            volume_range.value = 70;
            mainVideo.volume = 0.7;
            volume.innerHTML = 'volume_up';
        } else {
            volume_range.value = 0;
            mainVideo.volume = 0;
            volume.innerHTML = 'volume_off';
        }
    });

    // Auto play
    auto_play.addEventListener('click', () => {
        auto_play.classList.toggle('active');
        if (auto_play.classList.contains('active')) {
            auto_play.title = 'Autoplay is on';
        } else {
            auto_play.title = 'Autoplay is off';
        }
    });

    mainVideo.addEventListener('ended', () => {
        if (auto_play.classList.contains('active')) {
            playVideo();
        } else {
            play_pause.innerHTML = 'replay';
            play_pause.title = 'Replay';
        }
    });

    // Picture in picture

    picture_in_picutre.addEventListener('click', () => {
        mainVideo.requestPictureInPicture();
    });

    // Full screen function

    fullscreen.addEventListener('click', () => {
        if (!video_player.classList.contains('openFullScreen')) {
            video_player.classList.add('openFullScreen');
            fullscreen.innerHTML = 'fullscreen_exit';
            video_player.requestFullscreen();
        } else {
            video_player.classList.remove('openFullScreen');
            fullscreen.innerHTML = 'fullscreen';
            document.exitFullscreen();
        }
    });

    // Open settings
    settingsBtn.addEventListener('click', () => {
        settings.classList.toggle('active');
        settingsBtn.classList.toggle('active');
    });

    // Playback Rate
    function removeActiveClasses(e) {
        e.forEach((event) => {
            event.classList.remove('active');
        });
    }

    playback.forEach((event) => {
        event.addEventListener('click', () => {
            removeActiveClasses(playback);
            event.classList.add('active');
            let speed = event.getAttribute('data-speed');
            mainVideo.playbackRate = speed;
        });
    });

    // Mouse controls
    isCollapsed = false;
    controls.addEventListener('mouseenter', () => {
        controls.classList.add('active');
        isCollapsed = true;
        clearInterval(timeOutClick);
        clearInterval(timeOutMouseenter);
    });

    settings.addEventListener('mouseenter', () => {
        controls.classList.add('active');
        isCollapsed = true;
        clearInterval(timeOutClick);
        clearInterval(timeOutMouseenter);
    });

    controls.addEventListener('mouseleave', () => {
        isCollapsed = false;
        if (video_player.classList.contains('paused')) {
            controls.classList.add('active');
        } else {
            controls.classList.add('active');

            clearInterval(timeOutClick);
            timeOutMouseenter = setTimeout(() => {
                controls.classList.remove('active');
            }, 5000);
        }
    });

    var timeOutMouseenter = 0;
    video_player.addEventListener('mouseenter', () => {
        if (video_player.classList.contains('paused')) {
            controls.classList.add('active');
        } else {
            controls.classList.add('active');

            clearInterval(timeOutClick);
            timeOutMouseenter = setTimeout(() => {
                controls.classList.remove('active');
            }, 5000);
        }
    });

    var timeOutClick = 0;
    video_player.addEventListener('click', () => {
        if (video_player.classList.contains('paused')) {
            controls.classList.add('active');
        } else {
            controls.classList.add('active');

            clearInterval(timeOutMouseenter);
            timeOutClick = setTimeout(() => {
                controls.classList.remove('active');
            }, 5000);
        }
    });

    video_player.addEventListener('mouseleave', () => {
        if (video_player.classList.contains('paused')) {
            controls.classList.add('active');
        }
    });

    // prevent user right click to check menu property
    mainVideo.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});