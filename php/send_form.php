<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"];

    $to = "yevheniy.bar@gmail.com";
    $subject = "Нова форма з сайту";

    mail($to, $subject, $message);
    echo "Повідомлення надіслано успішно.";
} else {
    echo "Помилка: форма не була відправлена.";
}
?>


