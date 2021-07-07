<?php

namespace app\core;

class Test
{
    public static function show($var, $exit = true)
    {
        echo "<pre>";
        var_dump($var);
        echo "</pre>";
        if($exit){
            exit;
        };
    }

    public function pr($var, $exit = true)
    {
        echo "<pre>";
        var_dump($var);
        echo "</pre>";
        if($exit){
            exit;
        };
    }
}