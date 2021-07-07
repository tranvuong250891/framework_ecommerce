<?php
namespace app\models;

use app\core\database\DbModel;
use app\core\Test;

class SeoModel extends DbModel
{
    
    public $path = '';
    public $class ;
    public $create_at;
    public $category_id ;
    

    public function __construct($class = null)
    {
       $this->class = $class;
       $this->create_at = date('Y/m/d H:i:s');
    }

    public function labels(): array
    {
        return [
            'path' => 'duong dan '
        ];
    }

    public function rules(): array
    {
        return [
            'path' => [self::RULE_RIQUIRED],
            'class' =>  [self::RULE_RIQUIRED],
        ];
    }

    public function primaryKey(): string
    {
        return "id";
    }

    public function tableName( ): string
    {
        return 'url_seo';
    }

    public function attributes(): array
    {
        return [
             'class', 'create_at', 'path', 'category_id'
        ];
    }

    public function _save($category_id)
    {
        $this->category_id = $category_id;
        return parent::save();
    }

    public function _update($where)
    {
        $attr = [ 'path'];
        parent::update($where, $attr);
    }

}