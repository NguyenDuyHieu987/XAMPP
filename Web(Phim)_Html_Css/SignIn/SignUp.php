<?php include '../Header_Navbar_Footer/header_navbar.php'; ?>



<div class="signUp_content_container">
    <div action="" method="GET" class="form_signUp_mobile">
        <div class="form_signUp_body_mobile">
            <form class="signUp_content_mobile">
                <h2>Sign Up</h2>

                <label for="group_input_username_signup_mobile">Tên đầy đủ</label>
                <div class="signUp_wrapper_mobile">
                    <i class="fa-regular fa-user"></i>
                    <input type="text" class="group_input_username_signup_mobile"
                        id="group_input_username_signup_mobile" placeholder="Nhập tên đầy đủ">
                </div>

                <label for="group_input_email_signup_mobile">Email</label>
                <div class="signUp_wrapper_mobile">
                    <i class="fa-regular fa-at"></i>
                    <input type="email" class="group_input_email_signup_mobile" id="group_input_email_signup_mobile"
                        placeholder="Nhập Email">
                </div>

                <label for="group_input_password_signup_mobile">Mật khẩu</label>
                <div class="signUp_wrapper_mobile">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" class="group_input_password_signup_mobile"
                        id="group_input_password_signup_mobile" placeholder="Nhập mật khẩu">
                    <div id="eye_singup_mobile">
                        <i class="fa-regular fa-eye"></i>
                    </div>
                </div>

                <input class="submit_signUp_mobile" type="submit" value="Đăng ký">

                <div class="notity_signUp_mobile">
                    <p>Bạn đã có tài khoản?<a href="../SignIn/SignIn.php" class="txt_signIn_mobile"> Đăng nhập</a></p>
                </div>

                <div class="signUp_facebook_mobile">
                    <a href="">
                        <i class="fa-brands fa-facebook-f"></i>
                        Đăng ký bằng Facebook
                    </a>
                </div>
                <div class="signUp_google_mobile">
                    <a href="">
                        <i class="fa-brands fa-google"></i>
                        Đăng ký bằng Google</a>
                </div>
            </form>
        </div>
    </div>
</div>


<?php include '../Header_Navbar_Footer/footer.php'; ?>