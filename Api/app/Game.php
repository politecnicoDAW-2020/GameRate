<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    public function scores(){
        return $this->hasMany(Score::class);
    }

    public function reviews() {
        return $this->hasMany(Review::class);
    }
    //
}
