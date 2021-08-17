<?php

namespace app\controllers;

use app\core\controllers\Controller;
use app\core\request\Request;


class TestController extends Controller
{
    public function __construct()
    {
    }

    public function index(Request $request)
    {
    }

    public function update()
    {
    }

    public function store()
    {
        echo "hello";
    }

    public function insert()
    {
    }

    public function destroy()
    {

        session_destroy();
    }

    public function test()
    {
    }
}
