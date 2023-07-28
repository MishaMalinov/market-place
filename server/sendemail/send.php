<?php
include('../db.php');
header('Access-Control-Allow-Origin: *');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/Exception.php';
require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';

function check($mysqli){
    //check is am email in db
    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    $sql = "SELECT COUNT(`uid`) AS 'count' FROM `users` WHERE `email` LIKE '{$_POST['email']}'";
    $res = $mysqli->query($sql);
    $count = $res->fetch_assoc()['count'];
    return $count==0;
}
function send(){
    //send a code to email
    $json = array();
    $randomNumber = rand(0,9).rand(0,9).rand(0,9).rand(0,9).rand(0,9).rand(0,9);
    $json['code'] = $randomNumber;
    echo json_encode($json);
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = "uasongsforpeople@gmail.com";
    $mail->Password = "kcfudblhznivyqvc";
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('uasongsforpeople@gmail.com');
    $mail->addAddress($_POST['email']);
    $mail->isHTML(true);
    $mail->Subject = "Verification Code";
    $mail->Body = "Verification code is: ".$randomNumber;
    $mail->send();
}

function app($mysqli){
    //function of all functions
    if(check($mysqli)){
        send();
    }else{

        $json = array();

        $json['code'] = 'error';

        echo json_encode($json);

    }
}


app($mysqli);


?>