<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CandidatController;
use App\Http\Controllers\PosteController;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\VoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::apiResource("utilisateurs", UtilisateurController::class);
Route::apiResource("admins", AdminController::class);
Route::apiResource("candidats", CandidatController::class);

Route::apiResource("votes", VoteController::class);
Route::apiResource("postes", PosteController::class);




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
