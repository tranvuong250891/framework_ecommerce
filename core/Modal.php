<?php

namespace app\core;

use app\core\middlewares\AuthMiddleware;

class Modal 
{
    public function __construct()
    {
        $middle = new AuthMiddleware();
        $middle->login(['img']);
        $middle->checkSubmit(['img']);
        $middle->execute();
    }

    public function img()
    {
        $result = [];
        $pathImg =  App::$rootPath .'/resources/img/';
        $imgs = scandir($pathImg);
        foreach($imgs as $img) {
            $file =  $pathImg.$img;
             if(pathinfo($file)['extension'] == 'jpg'){
                $result[] =$img;
            }
        }
        echo json_encode($result);
    }
}
