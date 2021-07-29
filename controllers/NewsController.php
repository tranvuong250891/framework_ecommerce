<?php

namespace app\controllers;

use app\core\controllers\ControllerApi;
use app\core\database\mongodb\DatabaseMongodb;
use app\core\lib\Test;
use app\core\request\Request;
use app\models\mongodb\News;
use app\models\mongodb\NewsDetail;


class NewsController extends ControllerApi
{
    private array $result = [];


    public function actionsMiddle(): array
    {
        return [];
    }

    public function setResult(): array
    {
        return $this->result;
    }

    public function __construct()
    {
    }

    public function index(Request $request)
    {
        $req = $request->getBody()['news'];
        $action = $req['action'];

        foreach ($req['filter'] ?? [] as $key => $value) {

            if (strpos($key ?? '', 'matchs') !== false) {
                $req['filter'][$key] = DatabaseMongodb::_id($value);
            }
        }

        switch ($action) {
            case 'category':
                $this->result[0] = News::find($req['filter'] ?? [], $req['options'] ?? []);
                break;
            case 'details':
                $this->result[0] = NewsDetail::find($req['filter'] ?? [], $req['options'] ?? []);
                break;
            case 'count':
                $this->result[0] = NewsDetail::count($req['filter'] ?? [], $req['options'] ?? []);
        }
    }

    public function detail(Request $request)
    {
        $req = $request->getBody()['news'];
        $this->result[0] = NewsDetail::find($req['filter'], $req['options'])[0];
    }

    public function show()
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
}
