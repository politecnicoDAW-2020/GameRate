<template>
<div class="mvp-container">
  <span class="top-title">Últimos juegos añadidos</span>
  <most-valued-games :games="sortGamesByCreated" />
</div>
</template>

<script>
import GameCard from '../components/GameCard.vue'
import {mapActions, mapGetters, mapState} from "vuex"
import MostValuedGames from '../components/MostValuedGames.vue'
import axios from 'axios'

  export default {
    name: 'Home',

    components: {
        GameCard, MostValuedGames
    },

    methods: {
      ...mapActions(["setGameList"]),

    },
    computed: {
      ...mapGetters(['sortGamesByCreated']),
      ...mapState(["games"]),      
    },
  }
</script>

<style>
  .mvp-container {
    margin: 5px;
    border: 6px solid rgb(160, 160, 160);
    border-radius: 5px;
    background-image: url("../assets/images/login-background.png");
    background-size: cover;
 }
  .top-title {
    margin-left: 31%;
    font-size: 40px;
    color: white;
    background-color: teal;
    padding: 10px;
    text-align: center;
  }
</style>
