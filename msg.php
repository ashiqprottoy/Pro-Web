<?php
    $name = $_POST['name'];
    $vistor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'ashiqurprottoy@gmail.com';

    $email_subject = "pro web";

    $email_body = "User Name: $name.\n".
                    "User_email: $vistor_email.\n"
                        "User Message: $message.\n";
    
    $to = "ashiqprottoy55@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers = "Reply-to: $vistor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: mainpage.html");

     


?>




