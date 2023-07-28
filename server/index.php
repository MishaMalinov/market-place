<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>send Mail</title>
</head>
<body>
    <form action="send.php" method="post">
        Email <input type="email" name="email"/><br/><br/>
        Subject <input type="text" name="subject"/><br/><br/>   
        Message <input type="text" name="message"/><br/><br/>
        <button type="submit" name="send">Send</button>
    <?php


    if(isset($_GET['hello'])){
        echo $_GET['hello'];
    }
    ?>
    </form>
</body>
</html>