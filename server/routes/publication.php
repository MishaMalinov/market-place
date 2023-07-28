<?php
include('../db.php');

$sql = "SELECT * FROM `publications` WHERE `pid`={$_POST['pid']}";

$res = $mysqli->query($sql);

while($row = $res->fetch_assoc()){
    echo json_encode($row);
}


?>