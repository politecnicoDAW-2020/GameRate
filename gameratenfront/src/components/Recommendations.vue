<template>
  <v-row>
    <v-avatar class="mr-2" v-for="game in games" :key="game.id">
      <img :src="require(`../assets/images/${game.image}`)" :title="game.title" />
    </v-avatar>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "Recommendations",

  props: {
    genre: ""
  },
  data() {
    return {
      games: []
    };
  },
  props: {},

  mounted() {
    axios
        .get("http://127.0.0.1:8000/api/games/", {
          params: {
            genre: genre
          }
        })
        .then((response) => response.data)
        .then((games) => (this.games = games));
},

  methods: {
    getRecommendations(genre) {
      axios
        .get("http://127.0.0.1:8000/api/games/", {
          params: {
            genre: genre
          }
        })
        .then((response) => response.data)
        .then((games) => (this.games = games));
    },
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
