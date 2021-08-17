<?php

namespace app\models\mongodb\product;

use app\core\database\mongodb\MongoDb;

class BrandMongodb extends MongoDb
{

    protected static function collection(): string
    {
        return "product_brand";
    }

    public static function find(array $where = [], array $options = [])
    {

        return parent::_find($where, $options);
    }

    public static function count(array $where = [], array $options = [])
    {

        return parent::_count($where, $options);
    }
}
