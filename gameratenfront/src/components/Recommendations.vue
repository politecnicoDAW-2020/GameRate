<template>
  <v-row>
    {{games[0].scores}}
    <v-avatar class="mr-2" v-for="game in games" :key="game.id">
      <img :src="require(`../assets/images/${game.image}`)" :title="game.title" />
    </v-avatar>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from 'axios'
import { shuffle } from "../utils/knuth"

export default {
  name: "Recommendations",

  props: {
    genre: ""
  },
  data() {
    return {
      recommendations: []
    };
  },
  methods: {
    ...mapActions(["getRecommendations"])
  },
  computed: {
    ...mapState(["games"]),
    getGames: (genre) => {
      const games = shuffle(genre)
      return games
    }
  },

};
</script>

<style>
.tooltiptext {
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 105%;
}

img:hover .tooltiptext {
  visibility: visible;
}
</style>
