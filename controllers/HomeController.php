<?php

namespace app\controllers;

use app\core\app;
use app\core\middlewares\AuthMiddleware;
use app\core\Test;
use app\controllers\apis\NewsApi;
use app\controllers\apis\ProductApi;
use app\core\controllers\Controller;
use app\core\request\Request;
use app\core\response\Response;

class HomeController extends Controller
{


    public function __construct()
    {
    }

    public function view(): array
    {
        return [
            'title' => 'san pham pro',
            'layout' => null,
        ];
    }

    public function index(Request $request, Response $response)
    {
        echo Controller::render();
        exit;

        // switch ($request->getBody()['action']) {
        //     case 'news':
        //         $news =  new NewsApi($request, $response);
        //         $news->show($request, $response);
        //         break;
        //         return;
        //     case 'product':
        //         $product =  new ProductApi($request, $response);
        //         $product->show($request, $response);
        //         return;
        //     default:
        //         echo  Controller::render('contents/home.html');
        //         break;
        // }
    }

    public function update()
    {
    }

    public function store()
    {
    }

    public function insert()
    {
    }

    public function deytroy()
    {
    }

    public function test()
    {

        $this->render([
            'name' => 'Vuong',
            'title' => 'tilte',
        ], '/dashboard/content.html');
    }
}
