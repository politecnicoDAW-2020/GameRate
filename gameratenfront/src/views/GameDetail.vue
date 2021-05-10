<template>
<v-container>
    <v-row>
        <v-col>
        </v-col>
        <v-col>
            <GameData :game="game" />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import GameCard from "../components/GameCard.vue"
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
import GameData from "../components/GameData.vue"
export default {

    data() {
        return {
            game: {}
        }
    },

    components: {
        GameCard,
        GameData
    },

    computed: {
        ...mapState(["games"])
    },
    methods: {
        ...mapActions(["findGameById"]),
    
    getGameById(id) {
      axios.get("http://127.0.0.1:8000/api/games/"+id)
      .then(response => this.game = response.data)       
       }
    },

    mounted () {
        this.getGameById(this.$route.params.id);
    },
}
</script>

<style>

</style>