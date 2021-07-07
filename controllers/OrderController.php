<?php
namespace app\controllers;

use app\core\Controller;
use app\core\app;
use app\core\Request;
use app\core\Response;
use app\models\OrderDetailModel;
use app\models\OrderModel;

class OrderController extends Controller
{
    public function __construct()
    {
        
    }

    public function index(Request $request, Response $response)
    {
        if(app::$app->session->get(CartController::CART)['count'] > 0){
            $this->render([], 'order.php');
        } else {
            $response->redirect('/');
        };
        
    }

    public function insert(Request $request)
    {
        
        $orderModel = new OrderModel();
        $orderModel->loadData($request->getBody());
        
        if($orderModel->validate()){
            $orderModel->save();
            $code = $orderModel->code;
            $oderDetailModel = new OrderDetailModel($code);
            $oderDetailModel->save();
            (app::$app->session->remove(CartController::CART));
            $status = "success";
        } else {
            $status = $orderModel->errors;
        }

        
        echo json_encode($status);


    }


}