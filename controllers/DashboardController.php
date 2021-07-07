<?php

namespace app\controllers;

use app\core\Controller;
use app\core\Request;
use app\core\Test;
use app\core\middlewares\AuthMiddleware;

class DashboardController extends Controller
{
    public function __construct()
    {
        $middle = new AuthMiddleware();
        // $middle->checkSubmit(['index']);
        $middle->login(['index']);
        $middle->adminDashboard(['index']);
        $middle->execute();
        

    }

    public function index(Request $request)
    {
        $content = $request->getBody()['action'];
        $this->layout = 'dashboard.html';
        $render =  (empty($content)) ? 
            Controller::render("contents/dashboard/news.html") :
            ( Controller::render("contents/dashboard/$content.html"));
        echo $render;
        return;
        
        
    }


    public function product()
    {
    }

    public function news()
    {
    }
}
