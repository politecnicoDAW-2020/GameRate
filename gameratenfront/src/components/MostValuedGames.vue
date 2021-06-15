<template>
  <div class="gallery">
      <div class="gallery-panel"
          v-for="game in sortGamesByCreated"
          :key="game.id">
          <game-card :game="game" />
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GameCard from './GameCard.vue'
export default {
    name: "MostValuedGames",
        components: {
        GameCard
    },
    props: {
        games: {}
    },
    computed: {
      ...mapGetters(["sortGamesByCreated"])
    },
}
</script>

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 1rem auto;
    padding: 0 5rem;
  }  
</style>