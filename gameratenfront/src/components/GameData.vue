<template>  
</template>

<script>
import GameCard from './GameCard.vue'
export default {
  components: { GameCard },
    data() {
        return {
            game: {
            id:1,
            title: "Prueba",
            genre: "aventura",
            synopsis: "aaaaaa",
            online: 0,
            rating: 9,
            image: "uncharted.png"
    }
        }
    }
}
</script>

<style>

</style>