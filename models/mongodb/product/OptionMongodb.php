<?php

namespace app\models\mongodb\product;

use app\core\database\mongodb\DatabaseMongodb;
use app\core\database\mongodb\MongoDb;
use app\core\lib\Test;

class OptionMongodb extends Mongodb
{
    protected static function collection(): string
    {
        return "product_option";
    }

    public static array $matchs = [
        "type" => TypeMongodb::class,
        "category" => CategoryMongodb::class,
        "detail" => DetailMongodb::class
    ];

    public static function find(array $filter = [], array $options = [])
    {

        return parent::_find($filter, $options);
    }

    public static function findAll(array $filter = [], array $options = [])
    {

        return parent::_findAll($filter, $options);
    }

    public static function aggregate(array $filter = [])
    {
        return parent::_aggregate($filter);
    }

    public static function getOption()
    {
        return [
            ['$lookup' => ['from' => "product_detail", 'localField' => "matchs.detail", 'foreignField' => "_id", 'as' => "detail"]],
            [
                '$replaceRoot' => [
                    'newRoot' => [
                        '$mergeObjects' => [
                            '$$ROOT',
                            ['types' => ['$concatArrays' => ['$matchs.type', ['$arrayElemAt' => ['$detail.matchs.type', 0]]]]],
                            ['imgs' => ['$arrayElemAt' => ['$detail.img', 0]]],
                            ['detail_id' => ['$arrayElemAt' => ['$detail._id', 0]]],
                            ['$arrayElemAt' => ['$detail', 0]],
                            ['$arrayElemAt' => ['$detail.matchs', 0]],
                            ['_id' => '$_id'], ['img' => '$img']
                        ]
                    ]
                ]
            ],
            ['$lookup' => ['from' => 'product_type', 'localField' => 'types', 'foreignField' => '_id', 'as' => 'types']],
            ['$unwind' => '$types'],
            ['$sort' => ['types.name' => 1]],
            [
                '$group' => [
                    '_id' => '$_id',
                    'types' => ['$push' => '$types'],
                    'name' => ['$first' => '$name'],
                    'imgs' => ['$first' => '$imgs'],
                    'url' => ['$first' => '$url'],
                    'category' => ['$first' => '$category'],
                    'discount' => ['$first' => '$discount'],
                    'detail_id' => ['$first' => '$detail_id'],
                    'price' => ['$first' => '$price'],
                    'img' => ['$first' => '$img'],
                    'brand' => ['$first' => '$brand'],
                ]
            ],
            [
                '$group' => [
                    '_id' => '$detail_id',
                    'options' => ['$push' => ['_id' => '$_id', 'types' => '$types', 'img' => '$img', 'price' => '$price']],
                    'name' => ['$first' => '$name'],
                    'imgs' => ['$first' => '$imgs'],
                    'url' => ['$first' => '$url'],
                    'category' => ['$first' => '$category'],
                    'discount' => ['$first' => '$discount'],
                ]
            ],


        ];
    }

    public function filterProduct(array $filter = [])
    {
        $filters = self::getOption();

        if (count($filter['optionId']) > 0) {
            array_splice($filters, 3, 0, [['$match' => ['types._id' => ['$all' => $filter['optionId']]]]]);
        }
        array_push($filters, [
            '$match' => [
                'category' => [
                    '$all' => $filter['categoryId']
                ]
            ]
        ]);
        return parent::_aggregate($filters);
    }


    public static function detail()
    {
        return [
            ['$lookup' => ['from' => "product_detail", 'localField' => "matchs.detail", 'foreignField' => "_id", 'as' => "detail"]],
            ['$lookup' => ['from' => "product_type", 'localField' => "matchs.type", 'foreignField' => "_id", 'as' => "type"]],
            ['$replaceRoot' => ['newRoot' => ['$mergeObjects' => [
                ['$arrayElemAt' => ['$detail', 0]],
                ['option' => ['_id' => '$_id', 'price' => '$price', 'img' => '$img', 'type' => '$type']],
                ['type' =>  ['$arrayElemAt' => ['$detail.matchs.type', 0]]],
            ]]]],
            ['$lookup' => ['from' => "product_type", 'localField' => "type", 'foreignField' => "_id", 'as' => "type"]],
            ['$group' => [
                '_id' => '$_id',
                'name' => ['$first' => '$name'],
                'discount' => ['$first' => '$discount'],
                'content' => ['$first' => '$content'],
                'url' => ['$first' => '$matchs.url'],
                'category' => ['$first' => '$matchs.category'],
                'brand' => ['$first' => '$matchs.brand'],
                'category' => ['$first' => '$matchs.category'],
                'img' => ['$first' => '$img'],
                'options' => ['$push' => '$option'],
                'type' => ['$first' => '$type']
            ]],

            ['$project' => ["type.matchs" => 0, "options.type.matchs" => 0]]
        ];
    }

    public static function filterCart(string $id)
    {
        $filters = [
            ['$match' => ['_id' => DatabaseMongodb::_id($id)]],
            ['$lookup' => ['localField' => "matchs.detail", 'foreignField' => "_id", 'from' => "product_detail", 'as' => "detail"]],
            ['$lookup' => ['localField' => "matchs.type", 'foreignField' => "_id", 'from' => "product_type", 'as' => "matchs.type"]],
            ['$replaceRoot' => ['newRoot' => ['$mergeObjects' => [
                ['$arrayElemAt' => ['$detail', 0]],
                '$$ROOT',
                ['type' => '$matchs.type']
            ]]]],
            ['$project' => ['content' => 0, 'matchs' => 0, 'detail' => 0, 'type.matchs' => 0]]
        ];
        return parent::_aggregate($filters)[0] ?? false;
    }
}
