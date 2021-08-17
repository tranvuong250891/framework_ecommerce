<?php

namespace app\core\database\mongodb;

use app\core\App;
use app\core\lib\Test;

class DatabaseMongodb
{
    protected static $client;
    protected static $name = "test";
    private static $dbName;
    protected static $rootPathModel;

    public function __construct($mongo)
    {
        self::$rootPathModel = App::$rootPath . "/models/mongodb";
        self::$client =  new \MongoDB\Client($mongo['connect']);
        self::$dbName = $mongo['dbName'];
    }

    protected static function connectDb()
    {
        $dbName = static::$dbName ?? self::$dbName;
        return self::$client->$dbName;
    }

    public static function _id($_id)
    {
        return new \MongoDB\BSON\ObjectID($_id);
    }

    public static function get_id(object $object)
    {
        return json_decode(json_encode($object), true)['$oid'];
    }
}
