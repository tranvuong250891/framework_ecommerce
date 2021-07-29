<?php

namespace app\models\mongodb\product;

use app\core\database\mongodb\DatabaseMongodb;
use app\core\database\mongodb\MongoDb;
use app\core\lib\Test;

class ProductDetailModel extends MongoDb
{

    protected static function collection(): string
    {
        return 'product_detail';
    }

    public static function find(array $filter = [], array $options = [])
    {
        return parent::_find($filter, $options);
    }

    public static function count(array $filter = [], array $options = [])
    {
        return parent::_count();
    }
    public static function findAll(array $filter = [], array $options = [])
    {
        $result = [];
        $data =  parent::_find($filter, $options);

        foreach ($data as $product) {
            // Test::show($product);
            foreach ($product as $key => $value) {
                if ($key === 'matchs') {
                    foreach ($value as $table => $_id) {
                        $_id = json_decode(json_encode($_id), true)['$oid'];
                        $filterMatch = ["_id" => DatabaseMongodb::_id($_id)];
                        $product[$key][$table]  =  parent::_find($filterMatch, [], $table)[0];
                    }
                    break;
                }
            }
            $result[] = $product;
        }
        return $result;
    }
}
