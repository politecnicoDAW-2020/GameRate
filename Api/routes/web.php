<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/games',  'GameController@index');

Route::post('/api/games/save', 'GameController@store');

Route::put('/api/games/update/{id}', 'GameController@update');

Route::get('/api/games/{id}/avg', 'ScoreController@getAverageScore');

Route::get('/api/scores', 'ScoreController@getScores');
