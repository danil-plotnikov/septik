<?php 

$phone = $_POST['phone'];
$form_name = $_POST['form-name'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.2-d.kz';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'septik@2-d.kz';                 // Наш логин
$mail->Password = 'new_222000';                           // Наш пароль от ящика
$mail->SMTPAutoTLS = false;
$mail->SMTPSecure = false;
//$mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25;                                    // TCP port to connect to
 
$mail->setFrom('septik@2-d.kz', 'Новая заявка');   // От кого письмо 
$mail->addAddress('danil.plotnikov111@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новая завяка';

$msg = '
Пользователь оставил свои данные <br> 
Форма: ' . $form_name . ' <br>
Телефон: ' . $phone . '';

if ($_POST['select']){
 $msg .= '<br>
 Способ связи : ' . $_POST['select'];
}

$mail->Body = $msg ;
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    header('Location: ../thanks.html');

}

?>