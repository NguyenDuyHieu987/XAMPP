// fixed navbar, active search_bar, active btn move top
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.main_nav');
    const searchbar = document.querySelector('.nav_search_bar');
    const searchbar_wrapper = document.querySelector('.nav_search_bar_wrapper');
    const btn_search_nav = document.querySelector('.btn_search_nav');

    const current_nav_pos = navbar.offsetTop;
    window.onscroll = function() {
        const window_pos = document.documentElement.scrollTop;
        // if (window_pos >= current_pos) {
        //     navbar.classList.add('sticky');
        //     searchbar.classList.add('active');
        // } else {
        //     navbar.classList.remove('sticky');
        //     searchbar.classList.remove('active');
        // }
        if (window.innerWidth > 830) {
            // fixed navbar
            navbar.classList.toggle('sticky', window_pos >= 75);

            // add button search in navbar
            if (navbar.classList.contains('sticky')) {
                btn_search_nav.classList.add('active');
            } else {
                btn_search_nav.classList.remove('active');
                searchbar_wrapper.classList.remove('active');
            }
        } else {
            navbar.classList.remove('sticky');
        }

        // active search_bar
        // searchbar.classList.toggle('active', window_pos >= current_pos);

        // active btn move top
        const btn_move_top = document.querySelector('.btn_move_top');
        btn_move_top.classList.toggle('active', window.pageYOffset >= 300);

        // btn search nav

        // if (window.pageYOffset >= current_pos) {
        //     navbar.classList.add('sticky');
        //     searchbar.classList.add('active');
        // } else {
        //     navbar.classList.remove('sticky');
        //     searchbar.classList.remove('active');
        // }

        // navbar.classList.toggle('sticky', window.scrollY >= current_pos);
        // searchbar.classList.toggle('active', window.pageYOffset >= current_pos);
    };

    if (window.innerWidth <= 830) {
        navbar.classList.remove('sticky');
    }
    // active icon search in navbar
    btn_search_nav.onclick = function() {
        if (navbar.classList.contains('sticky')) {
            searchbar_wrapper.classList.toggle('active');
        }
    };
});

// Toggle function with tag a (url)
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.menu li.funct>a');
    const menuLi = document.querySelectorAll('.menu li.funct');

    for (let i = 0; i < menuItem.length; i++) {
        menuLi[i].classList.toggle('active', menuItem[i].href === currentLocation);
    }

    // active function collapse
    const funct_type = document.querySelector('.menu li.funct.type');
    const funct_type_href = document.querySelectorAll(
        '.menu li.funct.type ul li>a'
    );

    for (let i = 0; i < funct_type_href.length; i++) {
        if (funct_type_href[i].href === currentLocation) {
            funct_type.classList.add('active');
        }
    }

    const funct_country = document.querySelector('.menu li.funct.country');
    const funct_country_href = document.querySelectorAll(
        '.menu li.funct.country ul li>a'
    );

    for (let i = 0; i < funct_country_href.length; i++) {
        if (funct_country_href[i].href === currentLocation) {
            funct_country.classList.add('active');
        }
    }

    const funct_year = document.querySelector('.menu li.funct.year');
    const funct_year_href = document.querySelectorAll(
        '.menu li.funct.year ul li>a'
    );

    for (let i = 0; i < funct_year_href.length; i++) {
        if (funct_year_href[i].href === currentLocation) {
            funct_year.classList.add('active');
        }
    }
});

//Toggle navbar
document.addEventListener('DOMContentLoaded', function() {
    const nav_btn = document.querySelector('#nav_btn');
    const main_nav_collapse = document.querySelector('.main_nav_collapse');
    const close_nav_collapse = document.querySelector('.close_main_nav_wrapper');
    const background_main_nav_collapse = document.querySelector(
        '.background_main_nav_collapse'
    );

    nav_btn.onclick = function() {
        main_nav_collapse.classList.toggle('active', nav_btn.checked == true);
        if (main_nav_collapse.classList.contains('active')) {
            background_main_nav_collapse.classList.add('active');
        } else {
            background_main_nav_collapse.classList.remove('active');
        }
    };

    // close nav collapse on inner click
    close_nav_collapse.onclick = function() {
        main_nav_collapse.classList.remove('active');
        nav_btn.checked = false;
        if (main_nav_collapse.classList.contains('active')) {
            background_main_nav_collapse.classList.add('active');
        } else {
            background_main_nav_collapse.classList.remove('active');
        }
    };

    // close nav collapse on outer click
    background_main_nav_collapse.onclick = function() {
        main_nav_collapse.classList.remove('active');
        background_main_nav_collapse.classList.remove('active');
        nav_btn.checked = false;
    };
});

// hiden placeholder textbox search
document.addEventListener('DOMContentLoaded', function() {
    const textbox_SearchFilm = document.querySelector('.textbox_SearchFilm');
    const search_label = document.querySelector('.search_label');
    const textbox_SearchFilm_nav = document.querySelector(
        '.textbox_SearchFilm_nav'
    );
    const search_label_nav = document.querySelector('.search_label_nav');
    const xmark = document.querySelector('.search_bar .x-mark');

    textbox_SearchFilm.oninput = function() {
        search_label.style.display = 'none';
        xmark.style.display = 'block';
        if (textbox_SearchFilm.value === '') {
            search_label.style.display = 'block';
            xmark.style.display = 'none';
        }
    };

    xmark.onmousedown = function() {
        textbox_SearchFilm.value = '';
        xmark.style.display = 'none';
        search_label.style.display = 'block';
    };

    textbox_SearchFilm_nav.oninput = function() {
        search_label_nav.style.display = 'none';
        if (textbox_SearchFilm_nav.value === '') {
            search_label_nav.style.display = 'block';
        }
    };
});

// dropdown function in navigation collapse
document.addEventListener('DOMContentLoaded', function() {
    // active dropdown function
    const funct_type = document.querySelector(
        '.main_nav_collapse .menu li.funct.type'
    );
    const funct_country = document.querySelector(
        '.main_nav_collapse .menu li.funct.country'
    );
    const funct_year = document.querySelector(
        '.main_nav_collapse .menu li.funct.year'
    );

    funct_type.onclick = function() {
        funct_type.classList.toggle('dropdown');
    };

    funct_country.onclick = function() {
        funct_country.classList.toggle('dropdown');
    };

    funct_year.onclick = function() {
        funct_year.classList.toggle('dropdown');
    };

    const currentLocation = location.href;
    // active function collapse
    const funct_type_href = document.querySelectorAll(
        '.main_nav_collapse  .menu li.funct.type ul li>a'
    );

    for (let i = 0; i < funct_type_href.length; i++) {
        if (funct_type_href[i].href === currentLocation) {
            funct_type.classList.add('active');
        }
    }

    const funct_country_href = document.querySelectorAll(
        '.main_nav_collapse  .menu li.funct.country ul li>a'
    );

    for (let i = 0; i < funct_country_href.length; i++) {
        if (funct_country_href[i].href === currentLocation) {
            funct_country.classList.add('active');
        }
    }

    const funct_year_href = document.querySelectorAll(
        '.main_nav_collapse  .menu li.funct.year ul li>a'
    );

    for (let i = 0; i < funct_year_href.length; i++) {
        if (funct_year_href[i].href === currentLocation) {
            funct_year.classList.add('active');
        }
    }
});