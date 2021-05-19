<template>
  <most-valued-games :games="games" />
</template>

<script>
import GameCard from '../components/GameCard.vue'
import {mapActions, mapState} from "vuex"
import MostValuedGames from '../components/MostValuedGames.vue'

  export default {
    name: 'Home',

    components: {
        GameCard, MostValuedGames
    },

    methods: {
      ...mapActions(["setGameList"]),

    },
    computed: {
      ...mapState(["games"]),      
    },
  }
</script>

<style>

</style>
