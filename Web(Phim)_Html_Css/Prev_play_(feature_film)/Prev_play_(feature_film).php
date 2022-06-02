<?php include '../Header_Navbar_Footer/header_navbar.php'; ?>

<div class="movie_detail">
    <div class="movie_detail_container">

        <div class="movie_introduce">
            <div class="movie_detail_img">
                <img src="../images/play-page/prev_play.png" alt="" class="box_img">
                <a href="../Detail_play(feature_film)/Detail_play(feature_film).php">
                    <div class="icon_play_wrapper">
                        <i class="fa-solid fa-play fa-lg" style="font-size: 27px"></i>
                    </div>
                </a>

            </div>
            <div class="movie_detail_title">
                <h2>
                    Robot Đại Chiến 5: Chiến Binh Cuối Cùng
                </h2>
                <strong>
                    Transformer 5: The Last Knight (2017)
                </strong>
                <div class="watch_movie">
                    <a href="../Detail_play(feature_film)/Detail_play(feature_film).php"><i
                            class="fa-solid fa-play"></i> Xem ngay</a>
                    <a href="#trailer" class="btn_trailer"><i class="fa-brands fa-youtube"></i> Trailer</a>
                    <a href="#watch_movie"><i class="fa-solid fa-bookmark"></i> Theo dõi</a>
                </div>


                <p>
                    <label>
                        Đang phát:
                    </label>
                    <span style="color: red">
                        HD VietSub
                    </span>
                </p>
                <p>
                    <label>
                        Năm Phát Hành:
                    </label>
                    2017
                </p>
                <p>
                    <label>
                        Quốc gia:
                    </label>
                    Âu Mỹ
                </p>
                <p>
                    <label>
                        Thể loại:
                    </label>
                    Phim Chiếu Rạp, Action, Science Fiction
                </p>
                <p>
                    <label>
                        Đạo diễn:
                    </label>
                    Michael Bay
                </p>
                <p>
                    <label>
                        Thời lượng:
                    </label>
                    120 phút
                </p>
                <p>
                    <label>
                        Diễn viên:
                    </label>
                    Mark Wahlberg, Isabela Moner, Peter Cullen...
                </p>

                <?php include '../Interaction/interaction.php' ?>

            </div>
        </div>

        <div class="describe_film">
            <h3 class="describe_film_title">
                Nội dung phim
            </h3>
            <div class="describe_film_content">
                <p class="describe_content_text short">
                    Robot Đại Chiến 5: Chiến Binh Cuối Cùng Transformers 5: The Last Knight 2017 Full HD Vietsub
                    Robot đại chiến 5, Transformers 5: The Last Knight (2017) Phim Transformers 5 (2017):
                    Phần tiếp theo của robot biến hình bán chạy nhất. "The Last Soldier" phá vỡ những huyền thoại
                    cốt
                    lõi của loạt phim Transformers và xác định lại ý nghĩa của việc trở thành một anh hùng. Con
                    người và
                    Transformers chiến tranh, Optimus Prime ra đi. Chìa khóa để cứu tương lai của chúng ta bị chôn
                    vùi
                    trong những bí mật của quá khứ, trong lịch sử ẩn giấu của Transformers trên Trái đất. Trách
                    nhiệm
                    giải cứu thế giới đặt lên vai một đồng minh đặc biệt: Cade Yeager, người máy Bumblebee, một quý
                    tộc
                    người Anh, và một Giáo sư Đại học Oxford Có một khoảnh khắc trong cuộc đời mỗi người khi chúng
                    ta
                    được chọn để tạo ra sự khác biệt. tách rời. Trong Transformers: The Last Warrior, kẻ phản diện
                    trở
                    thành anh hùng. Anh hùng trở thành nhân vật phản diện. Chỉ có một thế giới có thể tồn tại: của
                    họ,
                    hoặc của chúng ta.
                </p>

                <b class="toggle_content" id="toggle_content"> Xem thêm ></b>
            </div>

        </div>

        <div class="trailer" id="trailer">
            <h3 class="trailer_title">
                Trailer
            </h3>
            <iframe height="650px" width="100%" src="https://www.youtube.com/embed/sgnO5fO46pE"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>

        <div class="cast">
            <h3 class="cast_title">
                Diễn viên
            </h3>
            <div class="cast_container_img">
                <div class="box_cast">
                    <img src="../images/play-page/cast1.jpg" alt="">
                    <span>Dwayne Johnson</span>
                </div>

                <div class="box_cast">
                    <img src="../images/play-page/cast2.jpg" alt="">
                    <span>Dwayne Johnson</span>
                </div>


                <div class="box_cast">
                    <img src="../images/play-page/cast3.jpg" alt="">
                    <span>Dwayne Johnson</span>
                </div>

                <div class="box_cast">
                    <img src="../images/play-page/cast4.jpg" alt="">
                    <span>Dwayne Johnson</span>
                </div>

                <div class="box_cast">
                    <img src="../images/play-page/cast5.jpg" alt="">
                    <span>Dwayne Johnson</span>
                </div>

                <div class="box_cast">
                    <img src="../images/play-page/cast6.jpg" alt="">
                    <span>Dwayne Johnson</span>
                </div>
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
<script src="../Prev_play_(feature_film)/Prev_play_(feature_film).js" type="text/javascript"></script>


<?php include '../Header_Navbar_Footer/footer.php'; ?>