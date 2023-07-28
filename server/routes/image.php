<?php
include('../db.php');
        
if (isset($_POST['path'])) {
  
  $imageFilePath = $_POST['path'];


  if (file_exists($imageFilePath)) {
    // Send appropriate headers
    // header('Content-Type: image/jpeg'); // Adjust the content type based on your image format (jpeg, png, gif, etc.)
    // header('Content-Length: ' . filesize($imageFilePath));

    // Read the image file and output it to the response
    // readfile($imageFilePath);
    $imageData = file_get_contents($imageFilePath);
    
    // Convert to Base64
    $base64Image = base64_encode($imageData);

    echo $base64Image;
    exit;
  } else {
    header("HTTP/1.0 404 Not Found");
    exit;
  }
}
?>

