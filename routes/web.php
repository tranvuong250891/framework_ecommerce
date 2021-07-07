<?php

use app\controllers\api\CommentApi;
use app\controllers\api\imgApi;
use app\controllers\ApiUserController;
use app\core\Router;
use app\controllers\ProductController;
use app\controllers\CartController;
use app\controllers\DashboardController;
use app\controllers\HomeController;
use app\controllers\TestController;
use app\controllers\UserController;
use app\core\Modal;
use app\core\Test;
use app\core\Upload;

//USER
Router::post('/apiuser/login', [ApiUserController::class, 'login']);
Router::post('/login', [UserController::class, 'login']);
Router::post('/signin', [UserController::class, 'signin']);
Router::get('/user', [UserController::class, 'user']);
Router::get('/destroy', [UserController::class, 'destroy']);
Router::get('/logingoogle', [UserController::class, 'google']);



//HOME
Router::get('/home', [HomeController::class, 'index' ]);
Router::get('/', [HomeController::class, 'index' ]);
Router::get('/index.html', [HomeController::class, 'index' ]);
Router::get('', [HomeController::class, 'index' ]);
Router::get('/index.php', [HomeController::class, 'index' ]);
Router::post('/home', [HomeController::class, 'index' ]);
Router::post('/', [HomeController::class, 'index' ]);
Router::post('/index.html', [HomeController::class, 'index' ]);
Router::post('', [HomeController::class, 'index' ]);
Router::post('/index.php', [HomeController::class, 'index' ]);

//CART 
Router::get('/cart/store', [CartController::class, 'store']);
Router::get('/cart/update', [CartController::class, 'update']);
Router::get('/cart/destroy', [CartController::class, 'destroy']);
Router::get('/cart', [CartController::class, 'index']);
Router::get('/cart/delete', [CartController::class, 'delete']);


//COMMENT
Router::post('/comment', [CommentApi::class, 'index']);
Router::get('/comment/show', [CommentApi::class, 'show']);

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




