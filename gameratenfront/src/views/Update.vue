<template>
  <v-form class="create-form" v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="game.title"
            :counter="50"
            label="Título"
            required
          ></v-text-field>
        <v-row>
          <v-select
            v-model="game.genre"
            :items="genres"
            label="Género"
          ></v-select>
        </v-row>
        <v-row>
          <v-select
            v-model="game.players"
            :items="players"
            label="Jugadores"
          ></v-select>
        </v-row>
        <v-row>
          <v-checkbox
            v-model="game.online"
            label="Tiene modo online"
            color="indigo"
            hide-details
          ></v-checkbox>
        </v-row>
        <v-row>
          <v-textarea
            v-model="game.synopsis"
            label="Sinopsis"
            required
          ></v-textarea>
        </v-row>
        <v-btn class="mr-4 mt-4" @click="submit"> submit </v-btn>
        <v-btn class="mt-4" @click="clear"> clear </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import API_URL from "../constants/endpoints";

export default {
  data: () => ({
    game: {},
    valid: false,
    genres: [
      "Acción",
      "Aventura",
      "Lucha",
      "Terror",
      "Plataformas",
      "Puzzles",
      "Shooter",
      "RPG",
      "Deportes"

    ],
    players: [1, 2, 3, 4],
  }),

  computed: {},

  methods: {
    submit() {
      axios
        .put(`http://127.0.0.1:8000/api/games/update/${this.game.id}`, {
          ...this.game,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.$router.push(`game/${this.game.id}`);
          location.reload();
        });
    },
    clear() {
      this.$v.$reset();
      this.form.title = "";
      this.form.genre = "";
      this.form.synopsis = "";
      this.form.online = false;
    },
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/games/${this.$route.params.gameId}`)
      .then((response) => response.data)
      .then((game) => (this.game = game));
  },
};
</script>

<style></style>