<template>
<v-container>
    <v-row>
        <v-col>
            <game-card :game="game" />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import GameData from "../components/GameData.vue"
import GameCard from "../components/GameCard";
import axios from 'axios';
export default {

    data() {
        return {
            game
        }
    },

    props: ["id"],

    components: {
        GameData,
        GameCard
    },

    computed: {
        gameById: (this.$route.params.gameId)
    },
    methods: {
           loadGames ({commit}) {
      axios.get("http://127.0.0.1:8000/api/games")
      .then(response => response.data)
      .then(games => {
        commit('SET_GAMES', games)
      })
    },
        getGameById(id) {
            axios.get("http://127.0.0.1:8000/api/games/" + id).
            then(response => resonse.data)
            .then(game => this.game = game)
        }
    },
}
</script>

<style>

</style>