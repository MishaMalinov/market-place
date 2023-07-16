
<?php
    header('Access-Control-Allow-Origin: *');
    $mysqli = new mysqli('localhost','root','','wa1');
    if(isset($_POST['action'])){
        //cheking is this a password
        if(isset($_POST['pass'])){
             $pass = md5($_POST['pass']);
        }
       
        if($_POST['action']=='login'){
            
            $sql = "SELECT * 
            FROM `users`
            WHERE `username` LIKE '{$_POST['userName']}'";

            $res = $mysqli->query($sql);
            $count = mysqli_num_rows($res);
            if($count !=0 ){
                $row = $res->fetch_assoc();
                if($row['password']==$pass){
                    $row['password'] = $_POST['pass'];
                    echo json_encode($row);
                }
            }

        }else if($_POST['action'] == 'register'){
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
            
        }else if($_POST['action'] =='userChange'){

            $sql = "UPDATE `users` SET `{$_POST['what']}` = '{$_POST['text']}' WHERE `uid` = {$_POST['uid']};";
            echo $sql;
            $res = $mysqli->query($sql);
        }
        

    }
    
    
    ?>
