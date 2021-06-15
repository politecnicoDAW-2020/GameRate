<template>
<div class="mvp-container">
  <div class="title-container">
  <span class="top-title">ÚLTIMOS JUEGOS AÑADIDOS</span></div>
  <most-valued-games />
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
    },
    computed: {
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
    background-size:cover
 }
  .top-title {
    color: teal;
    border-bottom: 6px solid rgb(160, 160, 160);
    background-color: white;
    padding: 10px;
    text-align: center;
    font-weight: bolder;
    font-size: 40px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }

  .title-container {
    display: flex;
    justify-content: center;
  }
</style>
