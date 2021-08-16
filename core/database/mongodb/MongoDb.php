<?php

namespace app\core\database\mongodb;

use app\core\App;
use app\core\exceptions\NotFoundException;
use app\core\lib\Test;


abstract class MongoDb extends DatabaseMongodb
{
    abstract static protected function collection(): string;

    private static function matchs()
    {
        if (!isset(static::$matchs)) {

            throw new NotFoundException("khong the goi phuong thuc nay");
        }
        return static::$matchs;
    }

    private static function query()
    {
        return parent::connectDb()->{static::collection()};
    }

    public function _find(array $filter = [], array $options = [])
    {
        if (isset($filter['_id'])) {
            $filter['_id'] = parent::_id($filter['_id']);
        }

        $result = self::query()->find($filter, $options);
        return iterator_to_array($result);
    }

    public function _findOne(array $filter = [], array $options = [])
    {


        $result = self::query()->findOne($filter, $options);
        return iterator_to_array($result);
    }

    public function _findAll(array $filter = [], array $options = [])
    {
        $matchs = self::matchs();
        $option = ["projection" => ["_id" => 0]];
        $results = self::_find($filter, $options);
        foreach ($results as $result) {
            foreach ($result['matchs'] as $table => $_ids) {
                $_id = \json_decode(json_encode($_ids), true) ?? \json_decode(json_encode($_ids), true);
                $_id = isset($_id['$oid']) ? [$_id] : $_id;
                foreach ($_id as $id) {
                    $filter = ["_id" => DatabaseMongodb::_id($id['$oid'])];
                    $result[$table][] = $matchs[$table]::find($filter, [])[0];
                }
            }
            unset($result['matchs']);
        }
        return $results;
    }

    public function _count(array $filter = [], array $options = [])
    {
        return self::query()->count($filter, $options);
    }

    public function _aggregate(array $options = [])
    {
        $result =  self::query()->aggregate($options);
        return $objects = json_decode(json_encode($result->toArray(), true), true);
    }
}
