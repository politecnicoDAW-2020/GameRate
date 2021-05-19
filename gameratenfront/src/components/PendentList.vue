<template>
  <v-container fluid>
    <v-data-iterator
      :items="games"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
          <v-toolbar-title>Lista de juegos pendientes</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="game in props.games"
            :key="game.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <game-card :game="game" />
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar class="mt-2" color="indigo" dark flat>
          <v-toolbar-title class="subheading">
            This is a footer
          </v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import auth from "../logic/auth";
import GameCard from "./GameCard.vue";
export default {
  components: { GameCard },
  data: () => ({
    itemsPerPage: 4,
    games: [],
  }),

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/games/pendent" + auth.getUserLogged())
      .then((response) => response.data)
      .then((games) => (this.games = games));
  },
};
</script>

<style>
</style>