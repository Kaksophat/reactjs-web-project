<?php

use App\Http\Controllers\admin\AuthController;
use App\Http\Controllers\admin\brandcontroller;
use App\Http\Controllers\admin\categorycontroller;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\front\Authcontroller as FrontAuthcontroller;
use App\Http\Controllers\front\Ordercontroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::post('/register', [AuthController::class, 'register']);
Route::post('/customer/register', [FrontAuthcontroller::class, 'register']);
Route::post('/customer/login', [FrontAuthcontroller::class, 'login']);
Route::get("/categories",[categorycontroller::class,"index"]);
Route::get("/brands",[brandcontroller::class,"index"]);
Route::post("order",[Ordercontroller::class,"order"]);
Route::get("order",[Ordercontroller::class,"index"]);
Route::get("order/{id}",[Ordercontroller::class,"show"]);
Route::get('order/customer/{customer_id}',[Ordercontroller::class,"showByCustomerId"]);
Route::get("/products",[ProductController::class,"index"]);
Route::get("/customer/products",[ProductController::class,"getproduct"]);
Route::get("/brands/{id}",[brandcontroller::class,"show"]);
Route::get("/brands",[brandcontroller::class,"getbrand"]);
Route::get("/products/{id}",[ProductController::class,"getsingleproduct"]);








<<<<<<< HEAD
Route::post('login', [AuthController::class, 'login']);
Route::group(['middleware' => 'auth:sanctum'], function () {
=======

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
>>>>>>> main
    Route::post("/category",[categorycontroller::class,"stor"]);
    Route::get("/category",[categorycontroller::class,"index"]);
    Route::post("/brand",[brandcontroller::class,"stor"]);
    Route::get("/brand",[brandcontroller::class,"index"]);
    Route::put("/brand/{id}",[brandcontroller::class,"update"]);
    Route::get("/brand/{id}",[brandcontroller::class,"show"]);
    Route::delete("/brand/{id}",[brandcontroller::class,"delete"]);
    Route::put("/category/{id}",[categorycontroller::class,"update"]);
    Route::delete("/category/{id}",[categorycontroller::class,"delete"]);
    Route::get("/product",[ProductController::class,"index"]);
    Route::post("/product",[ProductController::class,"store"]);
    Route::get("/product/{id}",[ProductController::class,"getsingleproduct"]);
    Route::put("/product/{id}",[ProductController::class,"update"]);
    Route::delete("/product/{id}",[ProductController::class,"delete"]);
    Route::get("/category/{id}",[categorycontroller::class,"show"]);
});

Route::post('/login', [AuthController::class, 'login']);
// Route::group(['middleware' => 'auth:sanctum'], function () {
//     Route::post("/category",[categorycontroller::class,"stor"]);
//     Route::get("/category",[categorycontroller::class,"index"]);
//     Route::post("/brand",[brandcontroller::class,"stor"]);
//     Route::get("/brand",[brandcontroller::class,"index"]);
//     Route::put("/brand/{id}",[brandcontroller::class,"update"]);
//     Route::get("/brand/{id}",[brandcontroller::class,"show"]);
//     Route::delete("/brand/{id}",[brandcontroller::class,"delete"]);
//     Route::put("/category/{id}",[categorycontroller::class,"update"]);
//     Route::delete("/category/{id}",[categorycontroller::class,"delete"]);
//     Route::get("/product",[ProductController::class,"index"]);
//     Route::post("/product",[ProductController::class,"store"]);
//     Route::get("/product/{id}",[ProductController::class,"getsingleproduct"]);
//     Route::put("/product/{id}",[ProductController::class,"update"]);
//     Route::delete("/product/{id}",[ProductController::class,"delete"]);
// });
