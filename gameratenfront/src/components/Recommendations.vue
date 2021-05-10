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
  data() {
    return {
      games: [
        {
          id: 1,
          title: "Uncharted",
          genre: "aventura",
          synopsis: "aaaaaa",
          online: 0,
          image: "uncharted.png",
          rating: 9,
        },
        {
          id: 2,
          title: "Mortal Kombat",
          genre: "lucha",
          synopsis: "aaaaaa",
          online: 0,
          image: "MortalKombat.png",
        },
        {
          id: 3,
          title: "Uncharted",
          genre: "aventura",
          synopsis: "aaaaaa",
          online: 0,
          image: "uncharted.png",
          rating: 9,
        },
        {
          id: 4,
          title: "Uncharted",
          genre: "aventura",
          synopsis: "aaaaaa",
          online: 0,
          image: "uncharted.png",
          rating: 9,
        },
      ],
    };
  },
  props: {},

  created() {
    // this.getRecommendations(this.game.genre);
  },

  methods: {
    getRecommendations(genre) {
      axios
        .get("http://127.0.0.1:8000/api/games/" + genre)
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
