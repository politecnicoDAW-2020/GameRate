<?php

namespace App\Http\Controllers;

use App\Game;
use App\GameList;
use App\Review;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $games = Game::all();
        $data = Game::with('scores')->get();
        return $data;
    }

    public function gameById($gameID)
    {
       //  $game = DB::select("SELECT FIRST *  FROM games WHERE id =".$gameID);
        // $game = DB::table('games')->select('*')->where('id', '=', $gameID)->get();
        $game = Game::find($gameID);
        return $game;
    }

    /**
     * Show the form for creating a new resource.
     *
     */

    public function gamesByGenre($genre) {
        $games = DB::table('games')->select('*')->where('genre', '=', "$genre")->get();
        return $games;
    }

    public function reviewsById($id) {
        // $reviews = Review::select('*')->where('game_id', $id)->get();
        $reviews = DB::table('reviews')
            ->join('users', 'reviews.user_id', '=', 'users.id' )
            ->select('reviews.*', 'users.email')
            ->where('game_id', $id)
            ->get();
        return $reviews;
    }

    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $game = new Game();

        $game->title = $request->title;
        $game->genre = $request->genre;
        $game->synopsis = $request->synopsis;
        $game->players = $request->players;
        $game->image = $request->image;
        $game->online = $request->online;

        $game->save();

        return $game;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function show(Game $game)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function edit(Game $game)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $game = Game::find($id);
        $game->title = $request->title;
        $game->genre = $request->genre;
        $game->players = $request->players;
        $game->synopsis = $request->synopsis;
        $game->online = $request->online;
        $game->save();
        return $game;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $game = Game::find($id);
        Game::destroy($id);
        return $game;
    }

    public function addToList(Request $request) {
        $user = User::where(['email' => $request->email])->first();

        $exists = GameList::where(['game_id' => $request->game, 'user_id' => $user->id])->get();

        if (count($exists) > 0) {
            return \Exception::class;
        } else {
            $gameToList = new GameList();
            $gameToList->game_id = $request->game;
            $gameToList->user_id = $user->id;
            $gameToList->save();
            return $gameToList;
        }

    }

    public function getPendentList($userId) {
        $gameList = DB::table('game_lists')
            ->join('users', 'game_lists.user_id', '=', 'users.id')
            ->join('games', 'game_lists.game_id', '=', 'games.id')
            ->select('games.*')
            ->where('game_lists.user_id', '=',  $userId)
            ->get();
        return $gameList;
    }

    public function deleteFromList($gameId){
        $gameFromList = GameList::where('game_id', $gameId)->first();
        GameList::destroy($gameFromList->id);
        return $gameFromList;
    }


}
