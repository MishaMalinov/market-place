<?php
include('../db.php');
$json = array();
if(isset($_POST['in_stock'])){
    $sql = "UPDATE `publications` SET `in_stock` = '{$_POST['in_stock']}' WHERE `publications`.`pid` = {$_GET['id']}";
    
    $mysqli->query($sql);
    // $json['id'] = $sql;
    // $json['get'] =$_GET;

    echo json_encode($json);
}


?>