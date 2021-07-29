<?php

namespace app\models\mongodb;

use app\core\database\mongodb\MongoDb;
use DateTime;

class NewsDetail extends Mongodb
{

    protected static function collection(): string
    {
        return "news_detail";
    }

    public static function find(array $filter = [], array $options = [])
    {

        return parent::_find($filter, $options);
    }

    public static function count(array $filter = [], array $options = [])
    {
        return parent::_count($filter, $options);
    }

    public static function findAll()
    {
    }
}
