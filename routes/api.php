<?php

use app\core\Router;
use app\controllers\apis\ProductApi;
use app\controllers\apis\NewsApi;
use app\controllers\apis\CartApi;
use app\controllers\apis\OrderApi;
use app\controllers\apis\UserApi;
use app\controllers\TestController;

//DASHBOARD
Router::get('/api/dashboard', [DashboardController::class, 'index']);
Router::get('/test', [TestController::class, 'index']);
Router::post('/test', [TestController::class, 'index']);


//PRODUCT
Router::post('/api/product/show', [ProductApi::class, 'index']);
Router::post('/api/product/detail', [ProductApi::class, 'detail']);
Router::get('/api/product/detail', [ProductApi::class, 'detail']);
Router::post('/api/product/insert', [ProductApi::class, 'insert']);
Router::post('/api/product/update', [ProductApi::class, 'update']);
Router::post('/api/product/delete', [ProductApi::class, 'delete']);


//NEWS
Router::post('/api/news/show', [NewsApi::class, 'index']);
Router::post('/api/news/detail', [NewsApi::class, 'detail']);
Router::get('/api/news/detail', [NewsApi::class, 'detail']);
Router::post('/api/news/insert', [NewsApi::class, 'insert']);
Router::post('/api/news/update', [NewsApi::class, 'update']);
Router::post('/api/news/delete', [NewsApi::class, 'delete']);

//CART 
Router::get('/api/cart/store', [CartApi::class, 'store']);
Router::post('/api/cart/store', [CartApi::class, 'store']);
Router::get('/api/cart/show', [CartApi::class, 'show']);
Router::post('/api/cart/show', [CartApi::class, 'show']);
Router::post('/api/cart/detail', [CartApi::class, 'detail']);
Router::post('/api/cart/insert', [CartApi::class, 'insert']);
Router::post('/api/cart/update', [CartApi::class, 'update']);
Router::get('/api/cart/delete', [CartApi::class, 'delete']);
//ORDER
Router::post('/api/order/index', [OrderApi::class, 'index']);
Router::post('/api/order/detail', [OrderApi::class, 'detail']);
Router::post('/api/order/show', [OrderApi::class, 'show']);
Router::post('/api/order/delete', [OrderApi::class, 'delete']);





//USER
Router::post('/api/user/show', [UserApi::class, 'show']);
Router::post('/api/user/delete', [UserApi::class, 'delete']);
