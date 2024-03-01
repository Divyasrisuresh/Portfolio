<?php

 $fullname = $_POST["fullname"];
 $email = $_POST["email"];
 $mobilenum = $_POST["mobilenum"];
 $subject = $_POST["subject"];
 $message = $_POST["message"];

 require "vendor/autoload.php";

 use PHPMailer\PHPMailer\PHPMailer ;
 use PHPMailer\PHPMailer\SMTP ;

 $mail = new PHPMailer(true);

 $mail->isSMTP();
 $mail->SMTPAuth = true;

 $mail->Host ="smtp.example.com";
 $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
 $mail->Port= 587;

 $mail->Username ="you@example.com";
 $mail->Password="password";

 $mail->setFrom($email,$fullname);
 $mail->addAddress("2003divyasuresh@gmail.com","Divya");

 $mail->Subject = $subject;
 $mail->Body = $message;

 $mail->send();

 echo "mail sent";




?>