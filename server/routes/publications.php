<?php
include('../db.php');
$json = array();
if(isset($_POST['publications'])){
    
    $sql = "SELECT * FROM `publications` WHERE `in_stock`=1 ";
    
    if(isset($_POST["filter"])){
        if($_GET['low']==''){
            $_GET['low'] = 0;
        }
        $sql .= " AND `price`>={$_GET['low']} AND `price`<={$_GET['high']} ";
    
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