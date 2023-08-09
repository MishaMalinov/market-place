<?php
include('../db.php');

$minmax = array();
if(isset($_POST['minmax'])){
    //finding MINIMAL price of all products
    $sql = "SELECT MIN(`price`) AS min FROM `publications`";

    $res = $mysqli->query($sql);

    $min = $res->fetch_assoc();
    $minmax['min'] = $min['min'];
    //finding MAXIMAL price of all products
    $sql = "SELECT MAX(`price`) AS max FROM `publications`";

    $res = $mysqli->query($sql);

    $max = $res->fetch_assoc();
    $minmax['max'] = $max['max'];

    echo json_encode($minmax);
}
    
?>