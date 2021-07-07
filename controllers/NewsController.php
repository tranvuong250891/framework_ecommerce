<?php
namespace app\controllers;

use app\core\Controller;
use app\core\middlewares\AuthMiddleware;
use app\core\Request;
use app\core\Response;
use app\core\Test;
use app\models\NewsModel;
use app\models\SeoModel;      

class NewsController extends Controller
{

    public string $title = '';
    
    public function __construct(Request $request)
    {
        $middle = new AuthMiddleware();
        $middle->checkSubmit(['']);
        $middle->login(['']);
        $middle->execute();
        $this->news = new NewsModel(self::class);
    }

   

    public function index(Request $request)
    {
        $id = $request->getBody()['id'];
        $result = $this->news->findOne(['id' => $id]);
        echo json_encode($result);
    }

    public function detail(Request $request, Response $response)
    {
        $this->title = $result['title'] ?? '';
        Controller::render('/contents/newsdetail.html');
    }

    public function show(Request $request)
    {
        $type = $request->getBody()['news_id'];
        $type = !empty($type) ? $type  : 1;
      
        $result = $this->news->getWhere('news_detail', ['news_id', $type], 5);
        
        echo json_encode($result);
    }

    
}
