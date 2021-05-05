<template>
    <v-card
    class="mx-auto"
    max-width="344"
  >
  <router-link :to="{name: 'GameDetail', params: { gameId: game.id }}"> 
    <v-img
      :src="require(`../assets/images/${game.image}`)"
      height="200px"
    ></v-img>

    <v-card-title>
      {{game.title}}
    </v-card-title>

    <v-card-subtitle>
      {{game.genre}}
    </v-card-subtitle>
    <v-chip
      class="ma-2"
      color="green"
      text-color="white"
    >
    {{game.rating}}
    </v-chip>
    </router-link>
    <Rating />
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Rating from "./Rating";
import GameDetail from "../views/GameDetail"
export default {
  name: "GameCard",
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