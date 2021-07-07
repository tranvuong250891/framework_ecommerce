<?php

namespace app\controllers;

use app\core\Controller;
use app\core\app;
use app\core\middlewares\AuthMiddleware;
use app\core\Request;
use app\core\Response;
use app\core\Test;
use app\models\OrderModel;

class TestController extends Controller
{
    public function __construct()
    {
        // $auth = new AuthMiddleware(['index']);
        // $auth->checkSubmit();
        // $auth->execute();

    }

    public function index(Request $request)
    {
        echo json_encode($request->getBody());
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
