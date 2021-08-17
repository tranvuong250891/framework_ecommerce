<?php

namespace app\controllers;


use app\core\controllers\Controller;
use app\core\lib\Test;
use app\core\request\Request;
use app\core\response\Response;
use app\models\mongodb\e_commerce\UrlMongodb;

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
    }

    public function detail(Request $request)
    {
        $nameUrl = $request->getBody()['filter'];
        $data =  UrlMongodb::findOne($nameUrl);
        $data['class']::detail($data["_id"]);
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
    }
}
