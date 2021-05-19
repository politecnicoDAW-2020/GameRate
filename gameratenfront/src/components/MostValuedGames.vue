<template>
  <div class="gallery">
      <div class="gallery-panel"
          v-for="game in games"
          :key="game.id">
          <game-card :game="game" />
      </div>
  </div>
</template>

<script>
import GameCard from './GameCard.vue'
export default {
    name: "MostValuedGames",
    props: {
        games: {}
    },
    components: {
        GameCard
    },
}
</script>

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }  
</style>