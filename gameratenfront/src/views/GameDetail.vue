<template>
  <div class="contain">
    <game-title :game="game" />
    <v-container>
      <v-row>
        <v-col>
          <game-data :game="game" />
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
import Recommendations from "../components/Recommendations.vue";
import Synopsis from "../components/Synopsis.vue";
import GameTitle from "../components/GameTitle.vue";
import GameCard from '../components/GameCard.vue';
import GameData from '../components/GameData.vue';

export default {
  
  props: ["id"],
  data() {
    return {
      game: {}
    }
  },

  components: {
    Recommendations,
    Synopsis,
    Recommendations,
    GameTitle,
    GameCard,
    GameData,
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
