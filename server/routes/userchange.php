
<?php
include('../db.php');

$sql = "UPDATE `users` SET `{$_POST['what']}` = '{$_POST['text']}' WHERE `uid` = {$_POST['uid']};";
echo $sql;
$res = $mysqli->query($sql);

?>