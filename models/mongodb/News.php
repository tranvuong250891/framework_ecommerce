<?php

namespace app\models\mongodb;

use app\core\database\mongodb\MongoDb;
use DateTime;

class News extends Mongodb
{

    protected static function collection(): string
    {
        return "news";
    }

    public static function find(array $where = [], array $options = [])
    {

        return parent::_find();
    }
}
