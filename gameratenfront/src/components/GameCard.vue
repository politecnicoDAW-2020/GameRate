<template>
<div class="game-card">
    <v-card
    class="mb-auto card"
    max-width="260"
  >
  <router-link :to="{name: 'GameDetail', params: { gameId: game.id }}"> 
    <v-img
      height = "330px"
      :src="require(`../assets/images/${game.image}`)"
    ></v-img>

    <v-card-title class="game-title">
      {{game.title}}
    </v-card-title>
    </router-link>
    <v-card-subtitle>
      Género: {{game.genre}}
    </v-card-subtitle>
    <span class="score">
    <v-chip
      class="chip ml-2"
      color="yellow"
      text-color="black"
    >
    {{this.getAvgScore}}
    </v-chip>
    </span>
    <RatingSelect :game="game" :user="user" />
  </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RatingSelect from "./RatingSelect"
import GameDetail from "../views/GameDetail"
export default {
  name: "GameCard",
  components: {
    GameDetail,
    RatingSelect
  },

    data() {
        return {
          user: "",
          cover: require(`../assets/images/${game.image}`)
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
        getAvgScore() {
          const gameScores = this.scores.filter(({game_id}) => game_id === this.game.id)
          const sum = gameScores.reduce(
            (total, {score}) => total += score, 0
          )
          const average = sum/gameScores.length
          return average
        }
    },
 
    mounted () {
        this.user = localStorage.getItem("userId")
    },

}
</script>

<style>
.game-title {
  height: 20px;
  font-size: 16px;
  color: black;
}

.card {
  margin-right: 30px;
  margin-top: 30px;
  border: 2px solid black;
}

.score {
  position: absolute;
  bottom: 30px;
  top: 10px;
  right: 15px;
  font-weight: bold;
}


</style>