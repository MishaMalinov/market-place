<?php
include('../db.php');

if(isset($_POST['uid'])){
    $ressponce = array();
    $sql = "SELECT * FROM `publications` WHERE `owner`={$_POST['uid']}";

    $res = $mysqli->query($sql);
    while($row = $res->fetch_assoc()){
        array_push($ressponce,$row);
    }
    
    echo json_encode($ressponce);
}



?>