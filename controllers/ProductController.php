<?php

namespace app\controllers;

use app\core\controllers\ControllerApi;
use app\core\database\mongodb\DatabaseMongodb;
use app\core\lib\Test;
use app\core\request\Request;
use app\models\mongodb\product\ProductDetailModel;
use app\models\mongodb\product\ProductModel;

class ProductController extends ControllerApi
{
    private array $result = [];
    public array $req;

    public function __construct(Request $request)
    {

        $this->req = $request->getBody()['product'] ?? [];
        $this->action = $this->req['action'] ?? '';
        $this->filter = $this->req['filter'] ?? [];
        $this->options = $this->req['options'] ?? [];
        foreach ($this->filter ?? [] as $key => $value) {
            if (strpos($key ?? '', 'matchs') !== false) {
                $this->filter[$key] = DatabaseMongodb::_id($value);
            }
        }
    }

    public function actionsMiddle(): array
    {
        return [];
    }

    public function setResult(): array
    {
        return $this->result;
    }

    public function index(Request $request)
    {
        // Test::show($this->filter);
        switch ($this->action) {
            case 'count':
                $this->result[0] =  ProductDetailModel::count($this->filter, $this->options);
                break;
            case 'category':
                $this->result[0] =  ProductModel::find($this->filter, $this->options);
                break;
            case 'detail':
                $this->result[0] =  ProductDetailModel::find($this->filter, $this->options);
            default:
                $this->result[0] =  ProductDetailModel::find($this->filter, $this->options);
                break;
        }
    }

    public function detail(Request $request)
    {
    }

    public function show()
    {
        $this->result[0] = ProductDetailModel::findAll($this->filter, $this->options);
    }

    public function insert()
    {
    }

    public function update()
    {
    }

    public function delete()
    {
    }
}
