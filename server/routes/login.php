<?php
include('../db.php');

if(isset($_POST['pass'])){
    $pass = md5($_POST['pass']);
}
$sql = "SELECT * 
FROM `users`
WHERE `username` LIKE '{$_POST['userName']}'";

$res = $mysqli->query($sql);
$count = mysqli_num_rows($res);
if($count !=0 ){
    $row = $res->fetch_assoc();
    if($row['password']==$pass){
        $row['password'] = $_POST['pass'];
        echo json_encode($row);
    }
}


?>