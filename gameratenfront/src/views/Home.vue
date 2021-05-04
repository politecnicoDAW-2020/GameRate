<template>
<v-container class="games-container">
  <v-row>
    <v-col v-for="game in games" :key="game.id" sm="4">
  <game-card :game="game" />
  A
</v-col>
</v-row>
</v-container>
</template>

<script>
import GameCard from '../components/GameCard.vue'
import {mapActions, mapState} from "vuex"
import axios from "axios";
import auth from '../logic/auth';

  export default {
    name: 'Home',
    data() {
      return {
      }
    },

    methods: {
      ...mapActions(["setGameList"]),

    },
    computed: {
      ...mapState(["games"])
    },
/* 
    mounted () {
      this.$store.dispatch('loadGames')
    }, */

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
