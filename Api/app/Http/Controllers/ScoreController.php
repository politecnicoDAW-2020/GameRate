<?php

namespace App\Http\Controllers;

use App\Game;
use App\Score;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ScoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getScoresById($gameID)
    {
        $avg = DB::select("SELECT score FROM scores WHERE game_id =".$gameID);
        return $avg;
    }

    public function getScoreByUser($gameId, $userId) {
        try {
            $score = Score::where(['game_id' => $gameId, 'user_id' => $userId])->first();
        }catch (\Exception $e) {
            return $e;
        }
        return $score->score;
    }

    public function addScore(Request $request) {
        $user = User::where(['email' => $request->email])->first();

        $exists = Score::where(['game_id' => $request->game, 'user_id' => $user->id])->get();

        if (count($exists) > 0) {
            $exists[0]->score = $request->score;
            $exists[0]->save();
            return $exists;
        } else {
            $score = new Score();
            $score->game_id = $request->game;
            $score->user_id = $user->id;
            $score->score = $request->score;
            $score->save();
            return $score;
        }
    }

    public function getScores() {
        $scores = Score::all();
        return $scores;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $title = $request->input("title");
        $genre = $request->input("genre");

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function show(Score $score)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function edit(Score $score)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Score $score)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function destroy(Score $score)
    {
        //
    }
}
