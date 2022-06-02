//Toggle trailer
document.addEventListener('DOMContentLoaded', function() {
    const btn_play_trailer = document.querySelectorAll('.img_play img');
    const model_trailer = document.querySelector('.model_trailer');
    const btn_exit_trailer = document.querySelector('.btn_exit_trailer');
    const trailer_video = document.querySelector('.trailer_video');
    const model_trailer_describe = document.querySelector(
        '.model_trailer_describe'
    );

    // btn_play_trailer.onclick = function() {
    //     model_trailer.classList.add('active');
    // };

    btn_exit_trailer.onclick = function() {
        model_trailer.classList.remove('active');

        var leg = trailer_video.getAttribute('src');
        trailer_video.setAttribute('src', leg);

        // var leg = $('.trailer_video').attr('src');
        // $('.trailer_video').attr('src', leg);
    };

    for (let i = 0; i < btn_play_trailer.length; i++) {
        btn_play_trailer[i].onmousedown = function() {
            if (i % 2 == 0) {
                model_trailer.querySelector('iframe').src =
                    'https://www.youtube.com/embed/sgnO5fO46pE';

                model_trailer.querySelector('.watch_movie_trailer > a').href =
                    '../Detail_play(feature_film)/Detail_play(feature_film).php';

                model_trailer_describe.firstElementChild.innerHTML =
                    'Transformer 5 | The Last Knight (2017)';

                model_trailer_describe.lastElementChild.innerHTML =
                    ' Robot Đại Chiến 5: Chiến Binh Cuối Cùng Transformers 5: The Last Knight 2017 Full HD Vietsub Robot đại chiến 5, Transformers 5: The Last Knight(2017) Phim Transformers 5(2017): Phần tiếp theo của robot biến hình bán chạy nhất."The Last Soldier" phá vỡ những huyền thoại cốt lõi của loạt phim Transformers và xác định lại ý nghĩa của việc trở thành một anh hùng.Con người và Transformers chiến tranh, Optimus Prime ra đi.Chìa khóa để cứu tương lai của chúng ta bị chôn vùi trong những bí mật của quá khứ, trong lịch sử ẩn giấu của Transformers trên Trái đất.Trách nhiệm giải cứu thế giới đặt lên vai một đồng minh đặc biệt: Cade Yeager, người máy Bumblebee, một quý tộc người Anh, và một Giáo sư Đại học Oxford Có một khoảnh khắc trong cuộc đời mỗi người khi chúng ta  được chọn để tạo ra sự khác biệt.tách rời.Trong Transformers: The Last Warrior, kẻ phản diện trở thành anh hùng.Anh hùng trở thành nhân vật phản diện.Chỉ có một thế giới có thể tồn tại: của họ, hoặc của chúng ta.';
            } else {
                model_trailer.querySelector('iframe').src =
                    'https://www.youtube.com/embed/ndl1W4ltcmg';

                model_trailer.querySelector('.watch_movie_trailer > a').href =
                    '../Detail_play(televison_series)/Detail_play(televison_series).php';

                model_trailer_describe.firstElementChild.innerHTML =
                    'The Witcher Season 1 (2019)';

                model_trailer_describe.lastElementChild.innerHTML =
                    'Thợ Săn Quái Vật (Phần 1) The Witcher (Season 1) 2019 Full HD Vietsub Thuyết Minh. Phim được chuyển thể từ bộ tiểu thuyết nổi tiếng của nhà văn Ba Lan Andrzej Sapkowski, cũng như loạt game ăn khách cùng tên. Bối cảnh của The Witcher đặt tại một vùng đất hư cấu có tên Đại Lục (The Continent), tràn ngập những loài quái vật nguy hiểm. Một nhóm những chiến binh sở hữu siêu năng lực được tạo ra, được gọi là Witcher để săn lùng và tiêu diệt chúng. Mặc dù thế giới của The Witcher đôi khi chỉ mới hình thành một nửa, Henry Cavill mang đến sức hút mãnh liệt cho một loạt phim đầy ắp các yếu tố giả tưởng lật đổ và hài hước đen tối. Những người dân thị trấn thù địch và một pháp sư xảo quyệt chào đón Geralt ở thị trấn Blaviken; Ciri nhận thấy thế giới hoàng gia của mình bị đóng băng khi Nilfgaard để mắt đến Cintra. Yennefer, bị bắt nạt và bị bỏ rơi, tình cờ tìm thấy một phương tiện trốn thoát; Cuộc săn lùng của Geralt cho một cái gọi là ác quỷ đi đến địa ngục; Ciri tìm kiếm sự an toàn trong những con số.';
            }
            model_trailer.classList.add('active');
        };
    }
});

// control banner slide
document.addEventListener('DOMContentLoaded', function() {
    const banner_item = document.querySelectorAll('.banner_item');
    const banner_item_info = document.querySelectorAll('.banner_item_info');
    const next_banner_item = document.querySelector('.next_banner_item');
    const prev_banner_item = document.querySelector('.prev_banner_item');
    var i = 0; // current Banner_item

    // control banner slide
    next_banner_item.onclick = function() {
        banner_item.forEach(function(slide) {
            slide.classList.remove('active');
        });
        banner_item_info.forEach(function(slide_info) {
            slide_info.classList.remove('active');
        });

        i++;
        if (i > banner_item.length - 1) {
            i = 0;
        }
        banner_item[i].classList.add('active');
        banner_item_info[i].classList.add('active');
    };

    prev_banner_item.onclick = function() {
        banner_item.forEach(function(slide) {
            slide.classList.remove('active');
        });
        banner_item_info.forEach(function(slide_info) {
            slide_info.classList.remove('active');
        });

        i--;
        if (i < 0) {
            i = banner_item.length - 1;
        }

        banner_item[i].classList.add('active');
        banner_item_info[i].classList.add('active');
    };

    //Auto play slide
    var autoplaysilde;

    function repeater() {
        autoplaysilde = setInterval(function() {
            banner_item.forEach(function(slide) {
                slide.classList.remove('active');
            });
            banner_item_info.forEach(function(slide_info) {
                slide_info.classList.remove('active');
            });

            i++;
            if (i > banner_item.length - 1) {
                i = 0;
            }
            banner_item[i].classList.add('active');
            banner_item_info[i].classList.add('active');
        }, 5000);
    }
    repeater();

    const banner_slide = document.querySelector('.banner_slide');
    //Stop slide when hover
    banner_slide.addEventListener('mouseover', function() {
        clearInterval(autoplaysilde);
    });

    banner_slide.addEventListener('mouseout', function() {
        repeater();
    });
});