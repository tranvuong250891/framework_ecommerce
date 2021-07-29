<?php

namespace app\models\mongodb\product;

use app\core\database\mongodb\DatabaseMongodb;
use app\core\database\mongodb\MongoDb;
use app\core\pdodb\database\DatabaseModel;

class ProductModel extends MongoDb
{

    protected static function collection(): string
    {
        return 'product';
    }

    public static function find(array $filter = [], array $options = [])
    {
        return parent::_find($filter, $options);
    }

    public static function count(array $filter = [], array $options = [])
    {
        return parent::_count();
    }
}
