//fa-eye-slash and show, hide password
document.addEventListener('DOMContentLoaded', function() {
    // var eye_isopen = document.querySelector('#eye');
    // var eye = document.querySelector('.fa-eye');
    // var input_password = document.querySelector('.group_input_password');

    // eye.onclick = function() {
    //     eye_isopen.classList.toggle('open');
    //     eye.classList.toggle("fa-eye-slash");
    //     if (eye_isopen.classList == 'open') {
    //         alert('open')
    //     } else {
    //     }
    // }

    $(document).ready(function() {
        $('#eye_signin_mobile').click(function() {
            $(this).toggleClass('open');
            $(this).children('i').toggleClass('fa-eye-slash fa-eye');
            if ($(this).hasClass('open')) {
                $('.group_input_password_signin_mobile').attr('type', 'text');
            } else {
                $(this).prev().attr('type', 'password');
            }
        })


        $('#eye_singup_mobile').click(function() {
            $(this).toggleClass('open');
            $(this).children('i').toggleClass('fa-eye-slash fa-eye');
            if ($(this).hasClass('open')) {
                $('.group_input_password_signup_mobile').attr('type', 'text');
            } else {
                $(this).prev().attr('type', 'password');
            }
        })
    })

})