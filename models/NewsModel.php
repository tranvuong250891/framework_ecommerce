<?php
namespace app\models;

use app\core\Controller;
use app\core\database\DatabaseModel;
use app\core\database\DbsModel;
use app\core\Main;
use app\core\model\Model;
use app\core\Test;

class NewsModel extends DatabaseModel
{
    private array $rules = []; 
    private array $setAttributes = [];
    private array $matchTable = [];

    public function __construct()
    {
        $this->class = 'app\controllers\NewsController';
        $this->rules = [
            'title' => [
                self::RULE_RIQUIRED => ['lable' => 'tieu de '],
                self::RULE_MIN => ['min'=> 8, 'label' => 'tieu de',],
                self::RULE_MAX => ['max' => 100 ],
                self::RULE_UNIQUE => ['table' => 'news_detail', 'key' => 'id' , 'keyAttr' => 'id']
            ],
            'path' => [
                self::RULE_RIQUIRED =>['label' => 'duong dan'],
                self::RULE_UNIQUE =>[ 
                    'table' => 'url_seo',
                    'keyAttr' => 'url_id',
                    'key' => 'id',
                    'label' => 'duong dan'
                ],
            ],
            'news_id' => [
                self::RULE_RIQUIRED => ['lable' => 'tieu de '],
                self::RULE_INT => [],
            ],
            'top_news' => [
                self::RULE_RIQUIRED => [],
                self::RULE_INT => [],
            ],
            'content' => [self::RULE_RIQUIRED => []],
            'description' => [self::RULE_RIQUIRED => ['label' => 'mo ta' ]],
        ];
        $this->matchTable = [
            [ 'table' => 'url_seo', 'key' => 'id', 'value' => 'url_id', 'get' =>'path', ],
            [ 'table' => 'news', 'key' => 'id', 'value' => 'news_id', 'get' => 'name', ]
        ];
    }

    public function tableName(): string
    {
        return 'news_detail';
    }

    public function matchTable(): array
    {
        return $this->matchTable;
    }

    public function attributes(): array
    {
        return $this->setAttributes;
    }

    public function rules(): array
    {
        return $this->rules;
    }

    public function _save()
    {
        $this->setAttributes = 
        ['title', 'description', 'img','top_news', 'content', 'create_at', 'url_id', 'news_id'];
        $this->create_at = date('Y/m/d H:i:s');
        $this->matchTable[0]['attr'] = 
        ['path' => $this->path, 'create_at' => $this->create_at, 'class' => $this->class];
        $this->content = html_entity_decode($this->content);
        parent::save();
    }

    public function _update($where)
    {
        $this->content = html_entity_decode($this->content);
        $this->setAttributes =  ['title', 'description','url_id', 'img','top_news', 'content', 'news_id'];
        $this->matchTable[0]['attr'] =  ['path' => $this->path, 'class' => $this->class];
        parent::update($where, $this->attributes());
        foreach($this->matchTable() as $match){
            if($match['attr']){
                parent::update([$match['key'] =>$this->{$match['value']} ], array_keys($match['attr']), $match['table']);
            }
        }
    }

    public function _delete($where)
    {
        $data =  parent::findOne($where);
        parent::delete($where);
        $this->matchTable[0]['attr']  = ['id' => $data['url_id']];
        foreach($this->matchTable() as $match){
            if($match['attr']){
                parent::delete($match['attr'], $match['table']);
            }
        }  
    }
}