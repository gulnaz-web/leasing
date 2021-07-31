<?php

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$phone = filter_input(INPUT_POST, 'tel', FILTER_SANITIZE_SPECIAL_CHARS);

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication - входим на почту
$mail->Username = 'mywebsite21@mail.ru';  // логин почты отправителя
$mail->Password = 'Pj8pfQPL1fr8lBB7cbj3';                 // пароль почты отправителя
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('mywebsite21@mail.ru');   // От кого письмо 
$mail->addAddress('wleasingmanager@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '' .$name . ' оставил(а) заявку, его(её) номер телефона ' .$phone;
	
$mail->AltBody = '';
	
	if(!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Ваша заявка отправлена';
	}
	$response = ['message' => $message];
	header('Content-type: application/json');
	echo json_encode($response);
?>