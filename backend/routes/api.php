<?php

use App\Http\Controllers\admin\AuthController;
use App\Http\Controllers\admin\brandcontroller;
use App\Http\Controllers\admin\categorycontroller;
use App\Http\Controllers\Admin\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::post('/register', [AuthController::class, 'register']);
Route::get("/categories",[categorycontroller::class,"index"]);
Route::get("/brands",[brandcontroller::class,"index"]);








Route::post('login', [AuthController::class, 'login']);
Route::group(['middleware' => 'auth:sanctum'], function () {
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
});
