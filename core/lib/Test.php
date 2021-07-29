<?php

namespace app\core\lib;

class Test
{
    public static function show($var, $exit = true)
    {
        echo "<pre>";
        var_dump($var);
        echo "</pre>";
        if ($exit) {
            exit;
        };
    }

    public static function json($var, $exit = true)
    {

        echo json_encode(var_dump($var));

        if ($exit) {
            exit;
        };
    }

    public function pr($var, $exit = true)
    {
        echo "<pre>";
        var_dump($var);
        echo "</pre>";
        if ($exit) {
            exit;
        };
    }
}
