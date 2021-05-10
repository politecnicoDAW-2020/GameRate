<template>
    <v-card
    class="mx-auto"
    max-width="344"
  >
  <router-link :to="{name: 'GameDetail'}">DETALLE     </router-link>

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
    </v-chip>
    <Rating />
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Rating from "./Rating.vue";
import GameDetail from "../views/GameDetail.vue"
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
/*         ...mapActions(["findScoreById"]),
        getAvgScore(scores) {
            let total = 0;
            for (const score of scores) {
                console.log(score.score)
                total += score.score
            }
            return total/scores.length;
        } */
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