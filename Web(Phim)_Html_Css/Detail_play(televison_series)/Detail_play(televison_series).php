<?php include '../Header_Navbar_Footer/header_navbar.php'; ?>

<div class="background_movie_light_off">

</div>
<div class="player_movie_television_film">
    <div class="player_movie_container">

        <!-- video player -->
        <section class="video_body">
            <div class="video_body_container">
                <div id="video_player" class="paused">
                    <video preload="metadata" id="main-video">
                        <source src="../images/film/televisons_film/The_Witcher_S1_Ep1.mov" type="video/mp4">
                    </video>
                    <?php include '../Video_player/video_player.php'; ?>
                    <!-- --------------- -->

                    <div class="player_movie_widget">

                        <div class="player_movie_widget_wrapper">


                            <ul class="tools">
                                <li class="toggle_light">
                                    <span>Tắt đèn</span>
                                    <div class="btn_toggle_light">
                                        <i class="fa-solid fa-power-off fa-lg"></i>
                                    </div>
                                </li>

                                <li class="autoNext_episode">
                                    <span>Tự chuyển tập</span>
                                    <div class="btn_autoNetx_episode">
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="swap_server">
                            <span>Server: </span>
                            <ul class="server_list">
                                <li class="server active">
                                    <a href="#server">Server #1</a>
                                </li>

                                <li class="server">
                                    <a href="#server">Server #2</a>
                                </li>

                                <li class="server">
                                    <a href="#server">Server #3</a>
                                </li>
                            </ul>
                        </div>

                        <div class="episodes">
                            <h3>
                                Danh sách tập
                            </h3>

                            <div class="episodes_wrapper">

                                <ul class="episodes_list">
                                    <li class="episode active">
                                        <a href="#episode">Tập 1</a>
                                    </li>

                                    <li class="episode">
                                        <a href="#episode">Tập 2</a>
                                    </li>


                                    <li class="episode">
                                        <a href="#episode">Tập 3</a>
                                    </li>

                                    <li class="episode">
                                        <a href="#episode">Tập 4</a>
                                    </li>


                                    <li class="episode">
                                        <a href="#episode">Tập 5</a>
                                    </li>

                                    <li class="episode">
                                        <a href="#episode">Tập 6</a>
                                    </li>

                                    <li class="episode">
                                        <a href="#episode">Tập 7</a>
                                    </li>

                                    <li class="episode">
                                        <a href="#episode">Tập 8-End</a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>

                    <div class="movie_summary">


                        <div class="download_movie">

                            <i class="material-icons-outlined">file_download</i>
                            <h3> Download Movie: </h3>
                            <ul class="download_list">
                                <li class="download">
                                    <a href="../images/The_Witcher.mov" download>480p</a>
                                </li>

                                <li class="download">
                                    <a href="../images/The_Witcher.mov" download>720p</a>
                                </li>

                                <li class="download">
                                    <a href="../images/The_Witcher.mov" download>1080p</a>
                                </li>
                            </ul>
                        </div>

                        <div class="rate_movie">
                            <h3>Đánh giá phim </h3>
                            <span>(?<i class="fa-solid fa-star" style="color: rgb(255, 221, 0);"></i> / 50 lượt)</span>
                        </div>

                        <?php include '../Interaction/interaction.php' ?>
                        <div>
                            <a href="#follow_movie" class="follow_movie">
                                <i class="material-icons">bookmark</i>
                                Lưu phim
                            </a>
                        </div>
                        <div class="movie_summary_content">
                            <h2>
                                The Witcher Season 1 (2019)
                            </h2>
                            <span>
                                Thợ Săn Quái Vật (Phần 1) The Witcher (Season 1) 2019 Full HD Vietsub Thuyết Minh. Phim
                                được chuyển
                                thể từ bộ tiểu thuyết nổi tiếng của nhà văn Ba Lan Andrzej Sapkowski, cũng như loạt game
                                ăn khách
                                cùng tên. Bối cảnh của The Witcher đặt tại một vùng đất hư cấu có tên Đại Lục (The
                                Continent), tràn
                                ngập những loài quái vật nguy hiểm. Một nhóm những chiến binh sở hữu siêu năng lực được
                                tạo ra, được
                                gọi là Witcher để săn lùng và tiêu diệt chúng...
                                <span>
                                    [
                                    <a href="../Prev_play_(televison_series)/Prev_play_(televison_series).php">Chi
                                        tiết</a>
                                    ]
                                </span>
                            </span>
                        </div>

                    </div>

                    <?php include '../Comment/comment.php' ?>


                    <section class="recommend_movies">

                        <h3 class="slide_show_title">
                            <strong>
                                CÓ THỂ BẠN QUAN TÂM
                            </strong>

                        </h3>
                        <?php include '../slide_show/slide_show.php'; ?>
                    </section>
                </div>
            </div>
            <script src="../Detail_play(feature_film)/Detail_play(feature_film).js" type="text/javascript"></script>
            <script src="../Detail_play(televison_series)/Detail_play(televison_series).js" type="text/javascript">
            </script>


            <?php include '../Header_Navbar_Footer/footer.php'; ?>