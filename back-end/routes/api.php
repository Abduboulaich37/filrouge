<?php

use Illuminate\Http\Request;
use App\models\products_models;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware'=>'api'],function(){ 
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']); 
});




Route::get('/products' ,[ProductsController::class , 'Index']);
Route::delete('/deleteproducts/{id}' ,[ProductsController::class , 'Delete']);
Route::post('/updateproducts/{id}' ,[ProductsController::class , 'Update']);
Route::post('/add' ,[ProductsController::class , 'Add']);
Route::post('/addcate' ,[ProductsController::class , 'AddCate']);
Route::get('/Categories',[ProductsController::class , 'Categories']);
Route::delete('/deleteCategories/{id}',[ProductsController::class , 'DeleteCate']);

