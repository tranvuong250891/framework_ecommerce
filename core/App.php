<?php
namespace app\core;

use app\core\middlewares\AuthMiddleware;
use app\models\LoginModel;

class App
{
    public static string $rootPath;
    public static $app;
    public Response $response;
    public Request $request;
    public Router $router;
    public Database $database;
    public View $view;
    public Session $session;
    public Email $email;
    public $client;
    public static string $hostName;

    public function __construct($config)
    {
        // Test::show();
        self::$rootPath = $config['rootPath'];
        self::$hostName = $config['host_name'];
        self::$app = $this;
        $this->request = new Request();
        $this->session = new Session();
        $this->client = $config['loginGoogle'] ?? "";
        $this->database = new Database($config['db']);
        $this->response = new Response();
        $this->router = new Router($this->request, $this->response);
        $this->router->resolve();
        
    }

    public function login($user)
    {
        $this->session->user( $user) ?? false;
        
        return true;
    }

    public function checkUser()
    {
        return   $this->session->get('user') ? true : false;
    }

    public function userName()
    {
        return $this->session->get('user') ?? false;
    }

    public function run()
    {

    }



}