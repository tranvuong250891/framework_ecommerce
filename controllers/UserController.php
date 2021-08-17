<?php
namespace app\controllers;

use app\core\Controller;
use app\core\App;
use app\core\middlewares\AuthMiddleware;
use app\core\Request;
use app\core\Response;
use app\models\UserModel;
use app\models\LoginModel;
use app\core\Test;
use Google_Client;
use Google_Service_Oauth2;


class UserController extends Controller
{

    public function __construct()
    {
        $auth = new AuthMiddleware();
        $auth->checkSubmit(['login', 'user', '']);
        $auth->login([ 'user']);
        $auth->execute();
        $this->login = new LoginModel();
        $this->signin = new UserModel();
    }

    public function login(Request $request)
    {
        $this->login->loadData($request->getBody());
        $this->login->validate();
        $this->login->login();
        $result = empty($this->login->errors) ?  "success" : $this->login->errors;
        echo json_encode($result);
    }
   
    public function signin(Request $request)
    {   
        $result = $request->getBody();
        $this->signin->loadData($result);
        $result = $this->signin->validate();
        $result = $this->signin->errors;
        if(empty($result)){
            $this->signin->save();
            $result =   'success';
        }
        echo json_encode($result);
    }

    public function user(Request $request)
    {
        echo json_encode(App::$app->userName());
    }

    public function google(Request $request, Response $response)
    {
        $code = $request->getBody()['code'] ?? false;
        $client = new Google_Client();
        $client->setClientId('480825831403-v73bp2bbv8b4ke5mtkdhkiqgf6dablu9.apps.googleusercontent.com');
        $client->setClientSecret('I3AczrOzENIdWysaImVJO-vr');
        $client->setRedirectUri('https://'.App::$hostName.'/logingoogle');
        $client->addScope("email");
        $client->addScope("profile");
        if($code){
            $token = $client->fetchAccessTokenWithAuthCode($code);
            $client->setAccessToken($token);
            $gauth = new Google_Service_Oauth2($client);
            $googleInfo = $gauth->userinfo->get();
            $googleInfo->img = $googleInfo->picture;
           
            $this->login->loadData($googleInfo);
           
            $this->login->loginGG();
            
            $response->redirect('/');
        } else {
            echo ($client->createAuthUrl());
        }
    }


    public function destroy(Request $request, Response $response)
    {
        App::$app->session->remove('user');
        $response->redirect('/');
    }
} 