//Active stars rating
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.rating .fa-star');
    const rating = document.querySelector('.rating');
    const hint_rate = document.querySelector('.hint_rate');
    const interaction = document.querySelector('.interaction');

    let temp = 0;

    for (let i = 0; i < stars.length; ++i) {
        stars[i].onmouseenter = function() {
            for (let j = 0; j <= i; j++) {
                stars[j].classList.add('active');
                // stars[j].style.color = 'yellow';
            }
            for (let k = i + 1; k < stars.length; k++) {
                stars[k].classList.remove('active');
                // stars[k].style.color = 'white';
            }
            switch (i) {
                case 0:
                    hint_rate.innerHTML = 'Dở tệ';
                    break;
                case 1:
                    hint_rate.innerHTML = 'Không hay';
                    break;
                case 2:
                    hint_rate.innerHTML = 'Bình thường';
                    break;
                case 3:
                    hint_rate.innerHTML = 'Hay';
                    break;
                case 4:
                    hint_rate.innerHTML = 'Rất hay';
                    break;
            }
        };

        stars[i].onclick = function() {
            temp = i;

            for (let j = 0; j <= temp; j++) {
                stars[j].classList.add('active');
            }

            for (let k = temp + 1; k < stars.length; k++) {
                stars[k].classList.remove('active');
            }

            //active rate success
            if (!document.querySelector('.rate_success')) {
                const rate_success = document.createElement('div');
                rate_success.className = 'rate_success';
                const span = document.createElement('span');
                span.innerHTML = 'Cảm ơn bạn đã đánh giá';
                const icon = document.createElement('i');
                icon.className = 'fa-solid fa-check fa-2xl';

                rate_success.appendChild(icon);
                rate_success.appendChild(span);
                interaction.appendChild(rate_success);

                setTimeout(function() {
                    rate_success.classList.add('active');
                }, 500);
                setTimeout(function() {
                    rate_success.classList.remove('active');
                }, 3000);
                setTimeout(function() {
                    rate_success.remove();
                }, 3500);
            }
        };
    }

    rating.onmouseleave = function() {
        for (let j = temp + 1; j < stars.length; j++) {
            stars[j].classList.remove('active');
        }
        for (let k = 0; k <= temp; k++) {
            stars[k].classList.add('active');
        }
        hint_rate.innerHTML = '';
    };
});

// Active like
document.addEventListener('DOMContentLoaded', function() {
    const like = document.querySelector('.like_share .like');
    const icon_like = document.querySelector('.like_share .like .fa-thumbs-up');

    like.onclick = function() {
        icon_like.classList.toggle('active');
    };
});