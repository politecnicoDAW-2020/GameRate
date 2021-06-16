<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->seedsUser();
        $this->seedsGame();
    }

    private function seedsUser() {
        $user = new \App\User([
            "type" => "admin",
            "email" => "useradmin@gmail.com",
            'password' => "admin99"]);
        $user->save();
    }
    private function seedsGame() {
        $game = new \App\Game([
            "title" => "Uncharted",
            "genre" => "Acción",
            "synopsis" => "Nathan Drake es un cazarrecompensas que acaba de encontrar algo que llevaba años buscando: el ataúd de su antepasado Sir Francis Drake. ... Pero, todo cambia cuando dentro del ataúd únicamente hay un diario y en él se encuentra la ruta hacia El Dorado.",
            "image" => "uncharted.png",
            "players" => 2,
            "online" => false
        ]);
        $game->save();
    }
}
