<?php
include('../db.php');
$json = array();

if(isset($_POST['publications'])){
    
    $sql = "SELECT * FROM `publications`";
    if(isset($_POST["filter"])){
        $sql .= " WHERE `price`>={$_GET['low']} ";
        
        
    
    
    }
    $sql.=" LIMIT 25";
    // array_push($json,$sql);


    $res = $mysqli->query($sql);

    while($row = $res->fetch_assoc()){
        array_push($json,$row);
        
    }

    echo json_encode($json);
}



?>