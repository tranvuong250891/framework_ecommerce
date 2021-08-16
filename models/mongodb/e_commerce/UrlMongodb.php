<?php

namespace app\models\mongodb\e_commerce;

use app\core\database\mongodb\MongoDb;
use DateTime;

class UrlMongodb extends Mongodb
{

    protected static function collection(): string
    {
        return "url";
    }

    public static function find(array $where = [], array $options = [])
    {

        return parent::_find($where, $options);
    }
    public static function findOne(array $where = [], array $options = [])
    {
        return parent::_findOne($where, $options);
    }
}
