//fa-eye-slash and show, hide password
document.addEventListener('DOMContentLoaded', function() {
    const eye1 = document.querySelector('#eye_signin .fa-eye');
    const input_password_signin = document.querySelector(
        '.group_input_password_signin'
    );

    // eye password sign in
    eye1.onclick = function() {
        eye1.classList.toggle('fa-eye-slash');
        if (eye1.classList.contains('fa-eye-slash')) {
            input_password_signin.setAttribute('type', 'text');
        } else {
            input_password_signin.setAttribute('type', 'password');
        }
    };

    const eye2 = document.querySelector('#eye_singup .fa-eye');
    const input_password_signup = document.querySelector(
        '.group_input_password_signup'
    );

    // eye password sign up
    eye2.onclick = function() {
        eye2.classList.toggle('fa-eye-slash');
        if (eye2.classList.contains('fa-eye-slash')) {
            input_password_signup.setAttribute('type', 'text');
        } else {
            input_password_signup.setAttribute('type', 'password');
        }
    };

    // eye retype password sign up
    const eye3 = document.querySelector('#eye_singup_retype .fa-eye');
    const retype_input_password_signup = document.querySelector(
        '.group_retype_input_password_signup'
    );

    eye3.onclick = function() {
        eye3.classList.toggle('fa-eye-slash');
        if (eye3.classList.contains('fa-eye-slash')) {
            retype_input_password_signup.setAttribute('type', 'text');
        } else {
            retype_input_password_signup.setAttribute('type', 'password');
        }
    };

    // $(document).ready(function() {
    //     $('#eye_signin').click(function() {
    //         $(this).toggleClass('open');
    //         $(this).children('i').toggleClass('fa-eye-slash fa-eye');
    //         if ($(this).hasClass('open')) {
    //             $('.group_input_password_signin').attr('type', 'text');
    //         } else {
    //             $('.group_input_password_signin').attr('type', 'password');
    //         }
    //     })

    //     $('#eye_singup').click(function() {
    //         $(this).toggleClass('open');
    //         $(this).children('i').toggleClass('fa-eye-slash fa-eye');
    //         if ($(this).hasClass('open')) {
    //             $(this).prev().attr('type', 'text');
    //         } else {
    //             $(this).prev().attr('type', 'password');
    //         }
    //     })
    // })
});

// active SignIn content, active SignUp content
document.addEventListener('DOMContentLoaded', function() {
    // SignIn
    var btn_signIn = document.querySelector('.btn_signIn');
    var signIn_content = document.querySelector('.signIn_content');
    var form_sign = document.querySelector('.form_sign');
    var model_sign = document.querySelector('.model_sign');

    btn_signIn.onclick = function() {
        signIn_content.classList.toggle('active');
        form_sign.classList.toggle('active');
        model_sign.classList.toggle('active');
    };

    // SignUp
    var btn_signUp = document.querySelector('.btn_signUp');
    var signUp_content = document.querySelector('.signUp_content');
    var form_sign = document.querySelector('.form_sign');

    btn_signUp.onclick = function() {
        signUp_content.classList.toggle('active');
        form_sign.classList.toggle('active');
        model_sign.classList.toggle('active');
    };

    //txt_signIn active
    var txt_signIn = document.querySelector('.txt_signIn');
    txt_signIn.onclick = function() {
        form_sign.classList.remove('active');
        signUp_content.classList.remove('active');
        form_sign.classList.toggle('active');
        signIn_content.classList.toggle('active');
    };

    //txt_signUp active
    var txt_signUp = document.querySelector('.txt_signUp');
    txt_signUp.onclick = function() {
        form_sign.classList.remove('active');
        signIn_content.classList.remove('active');
        form_sign.classList.toggle('active');
        signUp_content.classList.toggle('active');
    };

    //x-mark active: disable form, clear text
    var xmark = document.querySelector('.model_sign .fa-xmark');
    var input = document.querySelectorAll('input[type ="text"]');
    var input_Email = document.querySelectorAll('input[type ="email"]');
    var input_Password = document.querySelectorAll('input[type ="password"]');
    var sign_wrapper = document.querySelectorAll('.sign_wrapper');

    xmark.onclick = function() {
        model_sign.classList.remove('active');
        form_sign.classList.remove('active');
        signIn_content.classList.remove('active');
        signUp_content.classList.remove('active');

        sign_wrapper.forEach(function(sign_wrapper) {
            sign_wrapper.classList.remove('error');
        });

        input.forEach(function(input) {
            input.value = null;
        });
        input_Email.forEach(function(input_Email) {
            input_Email.value = null;
        });
        input_Password.forEach(function(input_Password) {
            input_Password.value = null;
        });
    };
});

// Validations forn sign
document.addEventListener('DOMContentLoaded', function() {
    window.onload = function() {
        Validator({
            form_SignIn: '#form_signIn',
            form_SignUp: '#form_signUp',
            rules: [
                Validator.isRequired('#group_input_username'),
                Validator.isRequired(
                    '#group_input_username',
                    '* Vui lòng nhập tên đầy đủ của bạn'
                ),
                Validator.isRequired('#group_input_email_signin'),
                Validator.isRequired('#group_input_password_signin'),
                Validator.isRequired('#group_input_email_signup'),
                Validator.isRequired('#group_input_password_signup'),
                Validator.isRequired('#group_retype_input_password_signup'),

                Validator.isEmail('#group_input_email_signin'),
                Validator.minLength('#group_input_password_signin', 6),
                Validator.isEmail('#group_input_email_signup'),
                Validator.minLength('#group_input_password_signup', 6),
                Validator.isConfirmed(
                    '#group_retype_input_password_signup',
                    function() {
                        return document.querySelector('#group_input_password_signup').value;
                    },
                    '* Mật khẩu nhập lại không chính xác'
                ),
            ],
        });
    };

    function Validator(options) {
        // Object lưu các rule
        var selectorRules = {};

        function validate(inputElement, rule) {
            // var errorMessage = rule.test(inputElement.value);
            var errorElement = inputElement.parentElement;
            var rules = selectorRules[rule.selector];
            // Lặp các rule và kiểm trailer
            // Nếu có lỗi dừng kiểm tra

            var errorMessage;
            for (var i = 0; i < rules.length; i++) {
                errorMessage = rules[i](inputElement.value);

                if (errorMessage) break;
            }

            if (errorMessage) {
                errorElement.nextElementSibling.innerHTML = errorMessage;
                errorElement.classList.add('error');
            } else {
                errorElement.nextElementSibling.innerHTML = '';
                errorElement.classList.remove('error');
            }
        }

        var form_SignIn_Elememt = document.querySelector(options.form_SignIn);
        var form_SignUp_Elememt = document.querySelector(options.form_SignUp);

        if (form_SignIn_Elememt && form_SignUp_Elememt) {
            // Lắng nghe khi submit form_SignIn_Elememt
            form_SignIn_Elememt.onsubmit = function(e) {
                e.preventDefault();
                options.rules.forEach(function(rule) {
                    var inputElement_signIn = form_SignIn_Elememt.querySelector(
                        rule.selector
                    );
                    if (inputElement_signIn) {
                        validate(inputElement_signIn, rule);
                    }
                });
            };

            // Lắng nghe khi submit form_SignUp_Elememt
            form_SignUp_Elememt.onsubmit = function(e) {
                e.preventDefault();
                options.rules.forEach(function(rule) {
                    var inputElement_signUp = form_SignUp_Elememt.querySelector(
                        rule.selector
                    );
                    if (inputElement_signUp) {
                        validate(inputElement_signUp, rule);
                    }
                });
            };

            options.rules.forEach(function(rule) {
                // Lưu lại các rules cho mỗi input
                if (Array.isArray(selectorRules[rule.selector])) {
                    selectorRules[rule.selector].push(rule.test);
                } else {
                    selectorRules[rule.selector] = [rule.test];
                }

                var inputElement_signIn = form_SignIn_Elememt.querySelector(
                    rule.selector
                );

                if (inputElement_signIn) {
                    inputElement_signIn.onblur = function() {
                        validate(inputElement_signIn, rule);
                    };

                    inputElement_signIn.oninput = function() {
                        var errorElement = inputElement_signIn.parentElement;

                        errorElement.nextElementSibling.innerHTML = '';
                        errorElement.classList.remove('error');
                    };
                }

                var inputElement_signUp = form_SignUp_Elememt.querySelector(
                    rule.selector
                );
                if (inputElement_signUp) {
                    inputElement_signUp.onblur = function() {
                        validate(inputElement_signUp, rule);
                    };

                    inputElement_signUp.oninput = function() {
                        var errorElement = inputElement_signUp.parentElement;

                        errorElement.nextElementSibling.innerHTML = '';
                        errorElement.classList.remove('error');
                    };
                }
            });
        }
    }

    Validator.isRequired = function(selector, message) {
        return {
            selector: selector,
            test: function(value) {
                return value.trim() ?
                    undefined :
                    message || '* Vui lòng nhập trường này';
            },
        };
    };

    Validator.isEmail = function(selector, message) {
        return {
            selector: selector,
            test: function(value) {
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value) ? undefined : '* Vui lòng nhập Email';
            },
        };
    };

    Validator.minLength = function(selector, min, message) {
        return {
            selector: selector,
            test: function(value) {
                return value.length >= min ?
                    undefined :
                    message || `* Vui nhập tối thiểu ${min} kí tự`;
            },
        };
    };

    Validator.isConfirmed = function(selector, getConfirmValue, message) {
        return {
            selector: selector,
            test: function(value) {
                return value === getConfirmValue() ?
                    undefined :
                    message || '* Giá trị nhập vào không chính xác';
            },
        };
    };
});