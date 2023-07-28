<?php
include('../db.php');
$index = 0;
$allPhotos ='';
if (isset($_FILES['image0'])) {
    //making folder for publication


    $targetDirectory = "../photos/{$_POST['uid']}/{$_POST['article']}/"; 
    if(!file_exists("../photos/{$_POST['uid']}")){
      mkdir("../photos/{$_POST['uid']}");
    }
    if(!file_exists($targetDirectory)){
      mkdir($targetDirectory);
     
    }
    
    
    while(isset($_FILES['image'.$index])){
        if($_FILES['image'.$index]['size']<=1000000){
          
            // Set the directory where you want to save the images
            
            $targetFile = $targetDirectory . basename($_FILES['image'.$index]['name']);
            //making string of all paths of photos
            $allPhotos.=$targetFile.';';

            // Check if the file is an image (you can add additional checks if needed)
            $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
            $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
            if (!in_array($imageFileType, $allowedExtensions)) {
              echo json_encode(['error' => 'Invalid file format. Only JPG, JPEG, PNG, and GIF files are allowed.']);
              exit;
            }
            // Move the uploaded file to the target directory
            if (move_uploaded_file($_FILES['image'.$index]['tmp_name'], $targetFile)) {
              echo json_encode(['message' => 'Image uploaded successfully.']);
            } else {
              echo json_encode(['error' => 'Error uploading the image.']);
            }


        }
        $index++;
    }

    
    //adding publication to db
    $sql = "INSERT INTO `publications` (`pid`, `article`, `price`, `owner`, `photos`, `in_stock`, `description`) VALUES (NULL, '{$_POST['article']}', '{$_POST['price']}', '{$_POST['uid']}', '$allPhotos', '1', '{$_POST['description']}');";
    
    $res = $mysqli->query($sql);
    
    
  } else {
    echo json_encode(['error' => 'No image file found in the request.']);
  }
  
  
?>