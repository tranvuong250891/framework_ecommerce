<?php

namespace app\core\database\mongodb;

use app\core\lib\Test;


abstract class MongoDb extends DatabaseMongodb
{

    abstract static protected function collection(): string;

    public function _find(array $filter = [], array $options = [], string $table = null)
    {

        $result = self::$db->{$table ?? static::collection()}->find($filter, $options);


        return iterator_to_array($result);
    }

    public function _count(array $filter = [], array $options = [])
    {
        return self::$db->{static::collection()}->count($filter, $options);
    }
}
