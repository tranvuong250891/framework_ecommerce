<?php

declare(strict_types=1);

namespace app\models\mongodb\product;

use app\core\database\mongodb\DatabaseMongodb;
use app\core\database\mongodb\MongoDb;
use app\core\lib\Test;
use app\models\mongodb\e_commerce\UrlMongodb;

class DetailMongodb extends MongoDb
{
    protected static function collection(): string
    {
        return "product_detail";
    }

    public static array $matchs = [

        "url" => UrlMongodb::class,
        "brand" => BrandMongodb::class,
        "category" => CategoryMongodb::class,
        "option" => OptionMongodb::class,
        "type" => TypeMongodb::class
    ];



    public static function count(array $filter = [], array $options = [])
    {
        return parent::_count($filter, $options);
    }

    public static function find(array $filter = [], array $options = [])
    {
        return parent::_find($filter, $options);
    }

    public static function findOne(array $filter = [], array $options = [])
    {
        return parent::_findOne($filter, $options);
    }

    public static function findAll(array $filter = [], array $options = [])
    {
        return parent::_findAll($filter, $options);
    }
}
