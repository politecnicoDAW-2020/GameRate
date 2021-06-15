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

Route::group(['middleware' => 'admin'], function () {
    Route::post('/api/games/save', 'GameController@store');
    Route::put('/api/games/update/{id}', 'GameController@update');
    Route::delete('/api/games/{gameID}', 'GameController@destroy');
});

Route::get('/api/games',  'GameController@index');

Route::get('/api/games/{gameID}', 'GameController@gameById');

Route::get('/api/games/genre/{genre}', 'GameController@gamesByGenre');

Route::post('api/review/save', 'ReviewController@publish')->middleware(\App\Http\Middleware\Cors::class);

Route::get('/api/scores/{id}', 'ScoreController@getScoresById');

Route::get('/api/scoreuser/{gameId}/{userId}', 'ScoreController@getScoreByUser');

Route::get('/api/scores', 'ScoreController@getScores');

Route::post('/api/scores', 'ScoreController@addScore');

Route::get('/api/games/reviews/{id}', 'GameController@reviewsById');

Route::post('register', 'UserController@register');

Route::post('/api/auth/login', 'UserController@authenticate');

Route::post('/api/games/list', 'GameController@addToList');

Route::get('/api/games/list/{id}', 'GameController@getPendentList');

Route::delete('/api/games/list/{gameId}', 'GameController@deleteFromList');
