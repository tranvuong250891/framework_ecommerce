<?php

namespace app\core\database\mongodb;

use app\core\lib\Test;

class DatabaseMongodb
{
    protected static $client;
    protected static $db;
    public function __construct($mongo)
    {
        self::$client =  new \MongoDB\Client($mongo['connect']);
        self::$db = self::$client->{$mongo['dbName']};
    }

    public static function _id($_id)
    {
        return new \MongoDB\BSON\ObjectID($_id);
    }
}
