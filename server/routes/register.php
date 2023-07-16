
<?php
include('../db.php');

if(isset($_POST['pass'])){
    $pass = md5($_POST['pass']);
}

$sql = "SELECT COUNT('uid') AS 'count' FROM users WHERE username LIKE '{$_POST['userName']}'";
$res = $mysqli->query($sql);
$count = $res->fetch_assoc()['count'];
if($count){
    echo 'ERROR';
}else{
    $sql ="INSERT INTO `users` (`uid`, `username`, `password`, `name`, `surname`, `admin`) VALUES (NULL, '{$_POST['userName']}', '$pass', '', '', '0')";
    $res = $mysqli->query($sql);
    echo 'All is good!!';
    echo json_encode($res->fetch_assoc());

}
?>