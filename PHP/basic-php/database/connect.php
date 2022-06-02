<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "php-basic-login";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Kết nối không thành công: " . $conn->connect_error);
} else {
    echo "Kết nối thành công";
}