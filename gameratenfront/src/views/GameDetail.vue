<template>
<v-container>
    <v-row>
        <v-col>
            <game-card :game="game" />
        </v-col>
    </v-row>
    <recommendations />
</v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import GameData from "../components/GameData.vue"
import GameCard from "../components/GameCard";
import axios from 'axios';
import Recommendations from '../components/Recommendations.vue';
export default {

    data() {
        return {
            game
        }
    },

    props: ["id"],

    components: {
        GameData,
        GameCard,
        Recommendations,
        Recommendations
    },
    created () {
        this.getGameById(this.$route.params.gameId);
    },

    methods: {
        getGameById(id) {
            axios.get("http://127.0.0.1:8000/api/games/" + id).
            then(response => response.data)
            .then(game => this.game = game)
        }
    },
}
</script>

<style>

</style>