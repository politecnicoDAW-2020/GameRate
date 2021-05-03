<template>
<div class="games-container">
<div v-for="game in games" :key="game.id">
  <game-card :game="game" />
</div>
{{gameList}}
</div>
</template>

<script>
import GameCard from '../components/GameCard.vue'
import {mapActions, mapState} from "vuex"
import axios from "axios";

  export default {
    name: 'Home',
    data() {
      return {
        games
      }
    },

    methods: {
      ...mapActions(["setGameList"]),

    },
    computed: {
      ...mapState(["games"])
    },

    mounted () {
      this.$store.dispatch('loadGames')
    },

    components: {
        GameCard
    },

  }
</script>

<style>
  .games-container {
    display:flex;
    justify-content: space-around;
  }
</style>
