<?php

use App\Http\Controllers\DairyController;
use Illuminate\Support\Facades\Route;



Route::get('events', [DairyController::class,'index']);
Route::post('events/add', [DairyController::class,'add']);
Route::get('events/edit/{id}', [DairyController::class,'edit']);
Route::post('events/update/{id}', [DairyController::class,'update']);
Route::delete('events/delete/{id}', [DairyController::class,'delete']);



