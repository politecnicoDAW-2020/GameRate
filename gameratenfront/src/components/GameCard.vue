<template>
    <v-card
    class="mb-auto"
    max-width="244"
  >
  <router-link :to="{name: 'GameDetail', params: { gameId: game.id }}"> 
    <v-img
      :src="require(`../assets/images/${game.image}`)"
    ></v-img>

    <v-card-title>
      {{game.title}}
    </v-card-title>

    <v-card-subtitle>
      {{game.genre}}
    </v-card-subtitle>
    <v-chip
      class="chip ml-2"
      color="green"
      text-color="white"
    >
    {{game.rating}}
    </v-chip>
    </router-link>
    <Rating :game="game" />
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import Rating from "./Rating.vue";
import GameDetail from "../views/GameDetail"
export default {
  components: {
    Rating,
    GameDetail
  },

    data() {
        return {
        }
    },
    props: {
        game: {},
    },

    methods: {
    },

    computed: {
        ...mapState(["scores"]),
        computedImageCover() {
            return `../assets/images/${this.game.image}` 
        },
    },
/* 
    mounted () {
        this.$store.dispatch('loadScores')
    }, */

}
</script>

<style>

</style>