<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ReceiverController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\ProductDetailController;
use App\Http\Controllers\ProductWeightController;
use App\Models\Category;
use Illuminate\Support\Facades\Route;

//Trong trang chu
Route::apiResource('users',UserController::class)->only('index','show','update','destroy','store');
Route::apiResource('categories',CategoryController::class)->only('index','show','store','update','destroy');
Route::apiResource('products',ProductController::class)->only('index','show','store','update','destroy');

Route::apiResource('news',NewsController::class)->only('index','show');
Route::get('news',[NewsController::class,'index']);
// Route::get('products',[ProductController::class, 'index']);
Route::apiResource('productdetail', ProductDetailController::class)->only('index','show');
Route::get('productdetail/products/{product}', [ProductDetailController::class, 'ShowProductDetailByIdProduct']);
Route::get('categories/{category}/products', [CategoryController::class, 'ShowProducts']);
// Route::get('categories', [CategoryController::class, 'index']); 
// Route::apiResource('categories',CategoryController::class)->only('index','show');
Route::get('/product-weights', [ProductWeightController::class, 'index']);
Route::get('/product-weights/{productID}', [ProductWeightController::class, 'show']);
Route::get('/product-weights/{productId}/products', [ProductWeightController::class, 'showWeightByProduct']);
Route::put('carts/updatequantity', [CartController::class, 'updateQuantity']);
Route::apiResource('receiver',ReceiverController::class);
Route::apiResource('news',NewsController::class);
Route::post('order/place',[OrderController::class,'store']);
Route::delete('cart/remove/{id}', [CartController::class, 'removeFromCart']);
Route::put('/orders/{id}/status', [OrderController::class, 'updateStatus']);
Route::apiResource('orders',OrderController::class)->only('index','show','destroy');
// Route::patch('/products/{product}', [ProductController::class, 'update']);
// Route::apiResource('products',ProductController::class)->only('store','update','delete');
// Route::apiResource('users',UserController::class)->only('store');
// Route::apiResource('users',UserController::class);

//User

 //  --1.lấy profile saau khi đăng nhập


 //  --2. show ra các thông tin mà customer có thể thấy
     Route::middleware('auth:sanctum')->group(function(){
// Route::apiResource('users',UserController::class)->only('store');
Route::get('users/{user_id}', [AuthController::class,'ShowProfile']);
Route::get('users/{user}/carts', [UserController::class,'HandleCart']);
Route::get('users/{user}/receiver',[UserController::class,'ShowReceivers']);
Route::get('users/{id}/receiver',[UserController::class,'getByUser']);
Route::get('users/{user}/receiver/type',[UserController::class,'showByType']);
Route::get('users/{user}/orders',[UserController::class,'GetOrderByUser']);
Route::post('change-password', [UserController::class, 'changePassword']);
Route::post('/user/{userId}/setdefaultaddress/{addressId}', [ReceiverController::class, 'setDefaultAddress']);
Route::get('/user/{userId}/defaultaddress', [ReceiverController::class, 'getDefaultAddress']);
Route::get('users/{user}/receiver/{receiver_id}/status',[ReceiverController::class,'HandleStatus']);  

Route::post('carts/add', [CartController::class, 'addCart']);
Route::get('carts/{user_id}', [CartController::class, 'getCart']);
// Route::delete('carts/remove/{id}', [CartController::class, 'removeFromCart']);



Route::get('orders/{order}/receiver',[OrderController::class,'ShowReceiverByOrder']);
Route::get('orders/{order}/orderDetails',[OrderController::class,'GetOrderDetailByOrder']);
Route::get('orders/{order}/status',[OrderController::class,'SetStatusOrder']);  

Route::apiResource('orderDetails',OrderDetailController::class)->only('index','show','store'); 

    //  --nd đăng nhập xog thì ms đăng xuất đc
Route::get('user/logout',[AuthController::class,'logout']);
Route::get('orderItem/{id}',[OrderDetailController::class,'OrderItemByIdOrder']);


//////////////////////////////////////////////////////////////////////////////////////////////
//Admin
   Route::middleware('admin')->group(function(){

    Route::get('statistics', [OrderController::class, 'getAll']);
Route::post('statistics/filter', [OrderController::class, 'filter']);
Route::apiResource('orderDetails',OrderDetailController::class)->only('update','destroy');                                            
Route::apiResource('orders',OrderController::class)->only('update');
Route::post('productdetail', [ProductDetailController::class, 'store']);
Route::put('productdetail/{id}', [ProductDetailController::class, 'update']);


Route::get('product/statistical',[ProductController::class,'HandleStatistical_Product']);
Route::post('product/statisticalByDate',[ProductController::class,'HandleStatistical_ProductByDate']);

Route::get('order/statistical',[OrderController::class,'GetTotalOrder']);
Route::post('order/statisticalByLinechart',[OrderController::class,'GetTotalOrderByTime']);
Route::post('order/statisticalByDate',[OrderController::class,'GetTotalOrderByDate']);
Route::get('user/statistical',[UserController::class,'GetUserStatistical']);
Route::post('/product-weights', [ProductWeightController::class, 'store']);
Route::put('/product-weights/{id}', [ProductWeightController::class, 'update']);
Route::delete('/product-weights/{id}', [ProductWeightController::class, 'destroy']);

   });

 });



Route::post('user/login',[AuthController::class,'User_Login']);
Route::post('user/regester',[AuthController::class,'register']);
//