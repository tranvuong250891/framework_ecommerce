<?php

namespace app\controllers;
use app\core\Controller;
use app\core\app;
use app\core\exceptions\NotFoundException;
use app\core\middlewares\AuthMiddleware;
use app\core\Request;
use app\core\Test;
use app\models\ProductModel;

class CartController extends Controller
{
    public const CART = 'cart';
    protected int $id;
    protected int $qty;
    protected array $carts = [];



    public function __construct(Request $request)
    {  
        $middle = new AuthMiddleware();
        $middle->checkSubmit(['store', 'index', 'delete']);
        $middle->login(['store', 'delete']);
        $middle->execute();
        $this->productModel = new ProductModel();
        $this->session = App::$app->session;
        $this->id = $request->getBody()['id'] ?? false;

        if( is_array($this->session->get(self::CART))){
            $this->carts = $this->session->get(self::CART);
        }

    }

    public function index()
    {
        
       
    }

    public function update(Request $request)
    {
       
            $data =  json_decode(file_get_contents('php://input')) ?? [];
            foreach($data as $key => $value){
                
                if($value <= 0){
                    unset($this->carts[$key]);
                    continue;
                }
                $this->carts[$key]['qty'] = $value;
                
            }
           
    }

    public function store(Request $request)
    {
        if(!$this->id){
            throw new NotFoundException('truyen tham so khong dung');
        }
        $this->qty = is_numeric($request->getBody()['qty']) ? $request->getBody()['qty'] : 1;

        $this->carts[$this->id]['qty'] =  $this->qty ? 
        ($this->qty+ $this->carts[$this->id]['qty']) : 
        (1+ $this->carts[$this->id]['qty']);
        
    }

    public function show()
    {
        
    }

    public function delete(Request $request)
    {
        unset($this->carts[$this->id]);
    }

    public function destroy()
    {
    
       unset($this->carts);
    }

    public function __destruct()
    {
        $this->carts['count'] = 0;
     
        
            foreach($this->carts as $id => $cart){
                
                if( is_numeric( $id) && $id){
                    
                    $getModel = $this->productModel->findOne(['id' => $id]);
                    if($getModel){
                        $this->carts[$id]['name'] = $getModel['name'];
                        $this->carts[$id]['price'] = $getModel['price'];
                        $this->carts[$id]['id'] = $getModel['id'];
                        $this->carts[$id]['img_id'] =  $getModel['img_id'];
                        $this->carts['count'] += $cart['qty']; 
                    } else{
                        throw new NotFoundException('truyen tham so khong dung');
                    }
                    
                } 
            }
           
            $this->session->set('cart', $this->carts);

            echo json_encode($this->session->get('cart'));
    }



}