<template>
  <most-valued-games />
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
    mounted () {
      this.$store.dispatch('loadGames')
    },

  }
</script>

<style>

</style>
