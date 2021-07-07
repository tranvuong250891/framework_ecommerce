<?php

namespace app\controllers;

use app\core\Controller;
use app\core\Request;
use app\core\Response;
use app\core\Test;
use app\models\ProductModel;
use app\models\ProductsModel;
use app\core\middlewares\AuthMiddleware;
use app\models\SeoModel;
use GrahamCampbell\ResultType\Result;
use main\models\ProductModel as ModelsProductModel;

class ProductController extends Controller
{

    public function __construct(Request $request)
    {
        $middle = new AuthMiddleware();
        $middle->checkSubmit(['index']);
        $middle->login();
        $middle->execute();
        $this->productModel = new ProductModel();
    }

    public function index(Request $request)
    {
        
        $result = $request->getBody();
        $result = $this->productModel->findOne(['id' => $result['id']]);
        echo json_encode($result);
    }

    public function show(Request $request, Response $response)
    {
        $result = $this->productModel->find(['id' => 1]);
        echo json_encode($result);
    }

    public function detail(Request $request)
    {
        $this->title = $result['title'] ?? '';
        Controller::render('/contents/productdetail.html');
    }

    

    public function test()
    {
        
    }

    

}
