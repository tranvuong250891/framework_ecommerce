<?php

namespace app\controllers;

use app\core\controllers\ControllerApi;
use app\core\database\mongodb\DatabaseMongodb;
use app\core\lib\Test;
use app\core\request\Request;
use app\models\mongodb\e_commerce\UrlMongodb;
use app\models\mongodb\product\CategoryMongodb;
use app\models\mongodb\product\DetailMongodb;
use app\models\mongodb\product\OptionMongodb;
use app\models\mongodb\product\TypeMongodb;

class ProductController extends ControllerApi
{
    private array $result = [];
    public function __construct(Request $request)
    {
        $req = $request->getBody();
        $this->action = $req['action'] ?? '';
        $this->filter = $req['filter'] ?? [];
        $this->options = $req['options'] ?? [];
        $this->method = $req['method'] ?? 'find';

        foreach ($this->filter as $indexs => $pipeline) {
            if (!is_array($pipeline)) {
                $this->filter[$indexs] = DatabaseMongodb::_id($pipeline);

                break;
            }
            foreach ($pipeline as $stages => $field) {
                if (is_array($field)) {
                    if ($stages === '$match') {
                        foreach ($field as $fieldName => $values) {
                            foreach ($values as $all => $ids) {
                                if ($all === '$all') {
                                    foreach ($ids as $index => $id) {
                                        $this->filter[$indexs]['$match'][$fieldName]['$all'][$index] = DatabaseMongodb::_id($id);
                                    }
                                }
                            }
                        }
                    }
                } else {
                    $this->filter[$indexs][$stages] = DatabaseMongodb::_id($field);
                }
            }
        }
        // Test::show($this->filter);
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
        switch ($this->action) {
            case 'count':
                $this->result[0] =   DetailMongodb::count($this->filter, $this->options);
                break;
            case 'category':
                $this->result[0] =  CategoryMongodb::find($this->filter, $this->options);
                break;
            case 'detail':
                $this->result[0] =   DetailMongodb::find($this->filter, $this->options);
            case 'type':
                return $this->result[0] = TypeMongodb::{$this->method}($this->filter, $this->options);
                break;
            case 'option':
                return $this->result[0] = OptionMongodb::{$this->method}($this->filter, $this->options);
            case 'url':
                return $this->result[0] = UrlMongodb::find($this->filter);
                break;
            default:
                $this->result[0] =   DetailMongodb::find($this->filter, $this->options);
                break;
        }
    }

    public static function detail($idUrl)
    {
        $filters = OptionMongodb::detail();
        $filter = ['$match' => ["url" => $idUrl]];
        array_push($filters, $filter);
        $data = OptionMongodb::aggregate($filters)[0];
        $data['view'] = 'product';
        echo json_encode($data);
    }

    public function show(Request $request)
    {
        $this->result[0] = OptionMongodb::aggregate($this->options);
    }

    public function search()
    {
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

    public static function test()
    {

        OptionMongodb::aggregate();
    }
}
