<?php

namespace app\models\mongodb\product;

use app\core\database\mongodb\MongoDb;

class CategoryMongodb extends Mongodb
{
    protected static function collection(): string
    {
        return "product_category";
    }

    public static function find(array $filter = [], array $options = [])
    {
        return parent::_find($filter, $options);
    }
    public function test()
    {
        return "test";
    }
}
