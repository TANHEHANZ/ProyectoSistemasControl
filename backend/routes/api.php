<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\ControllerGas;
use App\Http\Controllers\ControllerServo;
use App\Http\Controllers\ControllerTempHum;
use App\Http\Controllers\ControllerTurbidez;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/sensor/tubidez', [ControllerTurbidez::class, 'index']);
Route::put('/sensor/tubidez/{id}', [ControllerTurbidez::class, 'update']);
Route::delete('/sensor/tubidez/{id}', [ControllerTurbidez::class, 'destroy']);

Route::get('/sensor/gas', [ControllerGas::class, 'index']);
Route::put('/sensor/gas/{id}', [ControllerGas::class, 'update']);
Route::delete('/sensor/gas/{id}', [ControllerGas::class, 'destroy']);

Route::get('/sensor/tempHum', [ControllerTempHum::class, 'index']);
Route::put('/sensor/tempHum/{id}', [ControllerTempHum::class, 'update']);
Route::delete('/sensor/tempHum/{id}', [ControllerTempHum::class, 'destroy']);



Route::get('/sensor/Configservo', [ControllerServo::class, 'index']);
Route::post('/sensor/Configservo', [ControllerServo::class, 'store']);
Route::put('/sensor/Configservo/{id}', [ControllerServo::class, 'update']);
Route::delete('/sensor/Configservo/{id}', [ControllerServo::class, 'destroy']);