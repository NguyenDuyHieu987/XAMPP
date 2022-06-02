<section class="rank_side_content">
    <div class="rightside_movies">
        <h3 class="main_movies_title">
            <i class='bx bxs-star'></i>
            <strong>
                XEM NHIỀU NHẤT
            </strong>
        </h3>


        <ul class="filter_day">
            <li class="tab active">
                <a href="#day" class="day">Ngày</a>
            </li>

            <li class="tab">
                <a href="#week" class="week">Tuần</a>
            </li>

            <li class="tab">
                <a href="#month" class="month">Tháng</a>
            </li>

            <li class="tab">
                <a href="#all" class="all">Tất Cả</a>
            </li>
        </ul>

        <div class="tab_content">
            <!-- day  -->
            <?php include '../Rank/rank_day.php' ?>

            <!-- week  -->
            <?php include '../Rank/rank_week.php' ?>

            <!-- month  -->
            <?php include '../Rank/rank_month.php' ?>

            <!-- all  -->
            <?php include '../Rank/rank_all.php' ?>
        </div>

    </div>

</section>
<script src="../Rank/rank.js" type="text/javascript"></script>