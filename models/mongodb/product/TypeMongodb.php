<?php

namespace app\models\mongodb\product;

use app\core\database\mongodb\DatabaseMongodb;
use app\core\database\mongodb\MongoDb;
use app\core\lib\Test;

class TypeMongodb extends MongoDb
{
    protected static function collection(): string
    {
        return 'product_type';
    }

    public static array $matchs = [
        "category" => CategoryMongodb::class,
    ];

    public static function find(array $filter = [], array $options = [])
    {
        return parent::_find($filter, $options);
    }

    public static function findAll(array $filter = [], array $options = [])
    {
        return parent::_findAll($filter, $options);
    }

    public static function count(array $filter = [], array $options = [])
    {
        return parent::_count();
    }


    public static function aggregate(array $filter = [])
    {

        return parent::_aggregate($filter);
    }
}
