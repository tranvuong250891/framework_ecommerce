<?php

namespace app\controllers;

use app\core\App;
use app\core\Controller;
use app\core\controllers\ControllerApi;
use app\core\database\mongodb\DatabaseMongodb;
use app\core\exceptions\NotFoundException;
use app\core\lib\Test;
use app\core\middlewares\AuthMiddleware;
use app\core\request\Request;
use app\models\mongodb\product\OptionMongodb;
use app\models\ProductModel;

class CartController
{
    public const CART = 'cart';
    protected string $id;
    protected int $qty;
    protected array $carts = [];
    protected array $result = [];

    public function __construct(Request $request)
    {
        $this->id = $request->getBody()['id'] ?? false;
        $this->qty = (is_numeric($request->getBody()['qty']) &&  !empty($request->getBody()['qty']))
            ? $request->getBody()['qty'] : false;

        $this->carts =  App::$app->session->get('cart') ? App::$app->session->get('cart') : [];
    }

    public function index(Request $request)
    {
    }
    public function count(Request $request)
    {
        echo \json_encode($this->carts['count'] ?? 0);
    }

    public function update(Request $request)
    {
        if (!$this->qty || !$this->id) {
            throw new NotFoundException('truyen tham so khong dung');
        }
        $this->carts[$this->id]['qty'] =  $this->qty;
        $this->result();
    }

    public function store(Request $request)
    {
        $this->qty = $this->qty ?? 1;
        $this->carts[$this->id]['qty'] +=  $this->qty;
        $this->result();
    }

    public function show()
    {
        $this->result();
    }

    public function delete(Request $request)
    {
        unset($this->carts[$this->id]);
        $this->result();
    }

    public function destroy()
    {
        App::$app->session->remove('cart');
    }

    public function result()
    {
        $this->carts['count'] = 0;
        foreach ($this->carts as $id => $cart) {
            if ($id !== 'count') {
                $getProduct = OptionMongodb::filterCart($id);
                $getProduct['qty'] = $this->carts[$id]['qty'];
                if ($getProduct) {
                    $this->carts[$id] = $getProduct;
                    $this->carts['count'] += $cart['qty'];
                } else {
                    $this->destroy();
                    throw new NotFoundException('truyen tham so khong dung');
                }
            }
        }
        App::$app->session->set('cart', $this->carts);
        echo json_encode($this->carts);
    }
}
