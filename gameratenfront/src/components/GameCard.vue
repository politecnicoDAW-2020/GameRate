<template>
    <v-card
    class="mx-auto"
    max-width="344"
  >
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
    {{getAvgScore(game.scores)}}
    </v-chip>
  </v-card>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {

    data() {
        return {
            score: 0
        }
    },
    props: {
        game: {},
    },

    methods: {
        ...mapActions(["findScoreById"]),
        getAvgScore(scores) {
            let total = 0;
            for (const score of scores) {
                console.log(score.score)
                total += score.score
            }
            return total/scores.length;
        }
    },

    computed: {
        ...mapState(["scores"]),
        computedImageCover() {
            return `../assets/images/${this.game.image}` 
        },
    },

    mounted () {
        this.$store.dispatch('loadScores')
    },

}
</script>

<style>

</style>