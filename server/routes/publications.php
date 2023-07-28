<?php
include('../db.php');
$json = array();
if(isset($_POST['publications'])){
    $sql = "SELECT * FROM `publications` LIMIT 25";
    $res = $mysqli->query($sql);

    while($row = $res->fetch_assoc()){
        array_push($json,$row);
        
    }

    echo json_encode($json);
}



?>