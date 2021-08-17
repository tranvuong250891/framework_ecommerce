<?php

use app\controllers\api\CommentApi;
use app\controllers\api\imgApi;
use app\controllers\ApiUserController;
use app\core\router\Router;
use app\controllers\ProductController;
use app\controllers\CartController;
use app\controllers\DashboardController;
use app\controllers\HomeController;
use app\controllers\NewsController;
use app\controllers\TestController;
use app\controllers\UserController;
use app\core\Modal;
use app\core\Test;
use app\core\Upload;

//USER
Router::post('/apiuser/login', [ApiUserController::class, 'login']);
Router::post('/login', [UserController::class, 'login']);
Router::post('/signup', [UserController::class, 'signin']);
Router::get('/user', [UserController::class, 'user']);
Router::get('/destroy', [UserController::class, 'destroy']);
Router::get('/logingoogle', [UserController::class, 'google']);

//HOME
Router::get('/home', [HomeController::class, 'index']);
Router::get('/', [HomeController::class, 'index']);
Router::get('/index.html', [HomeController::class, 'index']);
Router::get('', [HomeController::class, 'index']);
Router::get('/index.php', [HomeController::class, 'index']);
Router::post('/home', [HomeController::class, 'index']);
Router::post('/', [HomeController::class, 'index']);
Router::post('/index.html', [HomeController::class, 'index']);
Router::post('', [HomeController::class, 'index']);
Router::post('/index.php', [HomeController::class, 'index']);
Router::post('/detail', [HomeController::class, 'detail']);



//CART 
Router::post('/cart/store', [CartController::class, 'store']);
Router::post('/cart/update', [CartController::class, 'update']);
Router::post('/cart/show', [CartController::class, 'show']);
Router::post('/cart/destroy', [CartController::class, 'destroy']);
Router::post('/cart/count', [CartController::class, 'count']);
Router::post('/cart/delete', [CartController::class, 'delete']);


//NEWS
Router::post('/news', [NewsController::class, 'index']);
Router::post('/newsdetail', [NewsController::class, 'detail']);

//PRODUCT
Router::post('/product', [ProductController::class, 'index']);
Router::post('/product/show', [ProductController::class, 'show']);
Router::post('/product/detail', [ProductController::class, 'detail']);
Router::post('/product/search', [ProductController::class, 'search']);


//MODAL
Router::get('/modal/img', [Modal::class, 'img']);

//UPLOAD
Router::post('/upload', [Upload::class, 'upload']);
Router::get('/upload', [Upload::class, 'upload']);
Router::post('/upload/show', [Upload::class, 'show']);


//attack
Router::get('/attack', [TestController::class, 'index']);
Router::post('/attack', [TestController::class, 'index']);


//DASHBOARD
Router::get('/dashboard', [DashboardController::class, 'index']);
