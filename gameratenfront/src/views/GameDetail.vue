<template>
  <div class="contain">
    <h1>{{game}}</h1>
    <game-title :game="game" />
    <v-container>
      <v-row>
        <v-col>
          <game-card :game="game" />
        </v-col>
        <v-col>
          <synopsis :game="game" />
        </v-col>
      </v-row>
      <recommendations :genre="game.genre" />
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import GameData from "../components/GameData.vue";
import GameCard from "../components/GameCard.vue";
import Recommendations from "../components/Recommendations.vue";
import Synopsis from "../components/Synopsis.vue";
import GameTitle from "../components/GameTitle.vue";

export default {
  
  props: ["id"],
  data() {
    return {
      game: {}
    }
  },

  components: {
    GameData,
    GameCard,
    Recommendations,
    Synopsis,
    Recommendations,
    GameTitle,
  },
  mounted() {
      axios
        .get(`http://127.0.0.1:8000/api/games/${this.$route.params.gameId}`)
        .then((response) => response.data)
        .then((game) => this.game = game);
  },
  methods: {}
};
</script>

<style></style>
