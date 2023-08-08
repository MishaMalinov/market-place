<?php
include('../db.php');

$sql = "SELECT * FROM `publications` WHERE `pid`={$_POST['pid']}";

$res = $mysqli->query($sql);

while($row = $res->fetch_assoc()){

    $imageFilePath = explode(";",$row['photos'])[0];
    if (file_exists($imageFilePath)) {
        $imageData = file_get_contents($imageFilePath);
        
        // Convert to Base64
        $base64Image = base64_encode($imageData);
        $row['photos'] = $base64Image;
      }
    echo json_encode($row);
}


?>