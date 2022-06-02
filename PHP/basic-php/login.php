<?php
require './database/connect.php';
if (isset($_POST['btn_login'])) {
    echo "<br/>Đã submit";

    $email = $_POST['userEmail'];
    $password = $_POST['userPassword'];
    if (!empty($email) && !empty($password)) {
        echo "<pre>";
        print_r($_POST);

        $sql = "INSERT INTO `users` (`Email`, `Password`) VALUES('$email', md5('$password'))";

        if ($conn->query($sql) === true) {
            echo "Thêm mới thành công";
        } else {
            echo "Error: {$sql}" . $conn->error;
        }
    } else {
        echo "<br/>Vui lòng nhập đầy đủ thông tin";
    }
}