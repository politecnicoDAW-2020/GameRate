<template>
  <v-row>
    También podría interesarte
    <v-avatar class="mr-2" v-for="game in getRecommendations(this.genre)" :key="game.id">
    <a :href="$router.resolve({name: 'GameDetail', params: {gameId: game.id}}).href"> 
      <img :src="require(`../assets/images/${game.image}`)" :title="game.title" />
    </a>
    </v-avatar>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
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
  },
  computed: {
    ...mapState(["games"]),
    ...mapGetters(["getRecommendations"]),
  },
  mounted () {
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
