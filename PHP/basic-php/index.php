<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic PHP</title>
</head>

<body>
    <h1>Nguyễn Duy Hiếu</h1>
    <?php
    $name = "Hiếu";
    echo "Xin chào {$name}";

    $students = array('Hiếu', "Tân");
    $students[] = "Nam";
    // print_r($students);
    echo "</br>Array: ";
    foreach ($students as $item) {
        echo $item . " ";
    }
    ?>

    <form action="login.php" method="POST">
        Email: <br> <input type="text" name="userEmail">
        <br>
        Mật khẩu: <br> <input type="text" name="userPassword">
        <br>
        <br>
        <input type="submit" value="Đăng nhập" name="btn_login">
    </form>
</body>

</html>