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

    <v-card-title class="game-title-card">
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
    <RatingSelect :game="game" :user="getUserId" />
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
      game: {
        type: Object,
        default: {} 
      },
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
        },
        getUserId() {
          return localStorage.getItem("userId")
          }
    },
 
    mounted () {
    },

}
</script>

<style>
.game-title-card {
  font-size: 20px;
  color: black;
}

a {
  text-decoration: none;
}

.card {
  margin-left: 30px;
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