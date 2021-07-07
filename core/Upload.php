<?php
namespace app\core;
class Upload
{

    public function index(Request $request)
    {
        $file = (App::$rootPath.'/resources/img/hayate.jpg');

        if(file_exists($file)){
            header('Content-type: image/jpeg');
            $result =  file_get_contents( $file);
            return ;
        }
    }

    public function upload(Request $request)
    {
        
        $target_dir = App::$rootPath.'/resources/img/';
        $nameFile = rand(1000, 9999).'.jpg';
        $target_file = $target_dir .$nameFile ;
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

        // Check if image file is a actual image or fake image
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== false) {
            // $result =  "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            $result['msg'] =  "File is not an image.";
            $uploadOk = 0;
        }

        // Check if file already exists
        while (file_exists($target_file)) {
            $nameFile = rand(1000, 9999).'.jpg';
            $target_file = $target_dir .$nameFile ;
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        }

        // Check file size
        if ($_FILES["fileToUpload"]["size"] > 500000) {
            $result['msg'] =  "Sorry, your file is too large.";
            $uploadOk = 0;
        }

        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
            && $imageFileType != "gif" ) {
            $result['msg'] =  "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
        }

        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            $result['msg'] =  "Sorry, your file was not uploaded.";
            // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                $result['res'] = true;
                $result['url'] =  "/img/$nameFile";
            } else {
                $result['msg'] =  "Sorry, there was an error uploading your file.";
            }
        }
        
        echo json_encode($result);

    }
    
}