<?php include '../Header_Navbar_Footer/header_navbar.php'; ?>

<div class="signIn_content_container">

    <div class="form_signIn_mobile">
        <div class="form_signIn_body_mobile">
            <form action="" method="GET" class="signIn_content_mobile">
                <h2>Sign In</h2>

                <label for="group_input_email_signin_mobile">Email</label>
                <div class="signIn_wrapper_mobile">
                    <i class="fa-regular fa-at"></i>
                    <input type="email" class="group_input_email_signin_mobile" id="group_input_email_signin_mobile"
                        placeholder="Nhập Email">
                </div>

                <label for="group_input_password_signin_mobile">Mật khẩu</label>
                <div class="signIn_wrapper_mobile">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" class="group_input_password_signin_mobile"
                        id="group_input_password_signin_mobile" placeholder="Nhập mật khẩu">
                    <div id="eye_signin_mobile">
                        <i class="fa-regular fa-eye"></i>
                    </div>

                </div>
                <input class="submit_signIn_mobile" type="submit" value="Đăng nhập">
                <div class="notity_signIn_mobile">
                    <p>Bạn chưa có tài khoản?<a href="../SignIn/SignUp.php"> Đăng ký</a>
                    </p>
                </div>
                <div class="signIn_facebook_mobile">
                    <a href="">
                        <i class="fa-brands fa-facebook-f"></i>
                        Đăng nhập bằng Facebook
                    </a>
                </div>
                <div class="signIn_google_mobile">
                    <a href="">
                        <i class="fa-brands fa-google"></i>
                        Đăng nhập bằng Google
                    </a>
                </div>
            </form>
        </div>
    </div>

</div>


<?php include '../Header_Navbar_Footer/footer.php'; ?>